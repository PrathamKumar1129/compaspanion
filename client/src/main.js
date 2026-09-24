    /* ===== PRELOADER ===== */
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
      }, 1800);
    });

    /* ===== NAV SCROLL ===== */
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    /* ===== MOBILE MENU ===== */
    function toggleMenu() {
      document.getElementById('hamburger').classList.toggle('open');
      document.getElementById('mobileMenu').classList.toggle('open');
    }

    /* ===== HERO SLIDER ===== */
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('heroDots');
    let current = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.onclick = () => goSlide(i);
      dotsContainer.appendChild(dot);
    });

    function goSlide(n) {
      slides[current].classList.remove('active');
      dotsContainer.children[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotsContainer.children[current].classList.add('active');
    }

    setInterval(() => goSlide(current + 1), 5000);

    /* ===== SCROLL REVEAL ===== */
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));

    /* ===== DESTINATION CHIPS ===== */
    function toggleChip(el) {
      el.classList.toggle('selected');
    }

    /* ================================================================
       SCROLL PROGRESS BAR
       ================================================================ */
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      if (scrollProgress) scrollProgress.style.width = scrolled + '%';
    });

    /* ================================================================
       CURSOR GLOW (desktop pointer only)
       ================================================================ */
    const cursorGlow = document.getElementById('cursorGlow');
    if (window.matchMedia('(pointer: fine)').matches && cursorGlow) {
      window.addEventListener('mousemove', (e) => {
        cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorGlow.style.opacity = '1';
      });
      window.addEventListener('mouseleave', () => cursorGlow.style.opacity = '0');
    }

    /* ================================================================
       ANIMATED STAT COUNTERS
       ================================================================ */
    const statEls = document.querySelectorAll('.stat-num');
    function animateCount(el) {
      const raw = el.textContent.trim();
      const match = raw.match(/[\d,]+/);
      if (!match) return;
      const target = parseInt(match[0].replace(/,/g, ''), 10);
      const suffix = raw.replace(match[0], '');
      const duration = 1600;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = value.toLocaleString('en-IN') + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('en-IN') + suffix;
      }
      requestAnimationFrame(tick);
    }
    const statIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCount(e.target); statIo.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    statEls.forEach(el => statIo.observe(el));

    /* ================================================================
       3D TILT EFFECT ON DESTINATION CARDS
       ================================================================ */
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
      });
    });

    /* ================================================================
       BUTTON RIPPLE EFFECT
       ================================================================ */
    document.querySelectorAll('.btn-primary, .btn-outline, .btn-step').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        circle.className = 'ripple';
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = size + 'px';
        circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
        circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 650);
      });
    });

    /* ===== MAGNETIC ACTIONS (desktop pointer only) ===== */
    if (window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
      document.querySelectorAll('.btn-primary, .nav-cta').forEach((button) => {
        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.16;
          button.style.transform = `translate(${x}px, ${y}px)`;
        });
        button.addEventListener('mouseleave', () => { button.style.transform = ''; });
      });
    }

    /* ===== FEEDBACK ===== */
    const feedbackStorageKey = 'compasspanion-feedback';

    function escapeFeedbackText(value) {
      return String(value).replace(/[&<>'"]/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
      }[character]));
    }

    function feedbackInitials(name) {
      return name.split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase();
    }

    function renderFeedback() {
      const container = document.getElementById('testimonialsGrid');
      if (!container) return;

      let feedback = [];
      try { feedback = JSON.parse(localStorage.getItem(feedbackStorageKey) || '[]'); } catch (error) { return; }

      container.querySelectorAll('.user-feedback-card').forEach(card => card.remove());
      const feedbackMarkup = feedback.map(item => {
        const rating = Math.max(1, Math.min(5, Number(item.rating)));
        const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
        return `<article class="testi-card user-feedback-card"><div class="quote-mark">"</div><div class="testi-stars">${stars}</div><p class="testi-text">${escapeFeedbackText(item.text)}</p><div class="testi-author"><div class="testi-avatar">${escapeFeedbackText(feedbackInitials(item.name))}</div><div><div class="testi-name">${escapeFeedbackText(item.name)}</div><div class="testi-trip">${escapeFeedbackText(item.trip || 'Compasspanion traveller')}</div></div></div></article>`;
      }).join('');
      container.insertAdjacentHTML('afterbegin', feedbackMarkup);
    }

    function submitFeedback(event) {
      event.preventDefault();
      const form = event.target;
      const name = document.getElementById('feedbackName').value.trim();
      const trip = document.getElementById('feedbackTrip').value.trim();
      const text = document.getElementById('feedbackText').value.trim();
      const rating = form.querySelector('input[name="feedbackRating"]:checked')?.value;
      const status = document.getElementById('feedbackStatus');
      if (!name || !text || !rating) return;

      let feedback = [];
      try { feedback = JSON.parse(localStorage.getItem(feedbackStorageKey) || '[]'); } catch (error) { feedback = []; }
      feedback.unshift({ name, trip, text, rating, createdAt: new Date().toISOString() });
      localStorage.setItem(feedbackStorageKey, JSON.stringify(feedback.slice(0, 12)));
      renderFeedback();
      form.reset();
      status.textContent = 'Thanks for sharing your journey.';
      setTimeout(() => { status.textContent = ''; }, 4000);
    }

    renderFeedback();



