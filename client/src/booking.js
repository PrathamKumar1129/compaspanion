    /* ===== MULTI-STEP FORM ===== */
    let currentStep = 0;
    const totalSteps = 3;

    function getApiBaseUrl() {
  const config = window.SUPABASE_CONFIG || {};

  if (config.apiBaseUrl) {
    return config.apiBaseUrl;
  }

  if (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1') {
    return `${window.location.protocol}//${window.location.host}`;
  }

  // Production: use the same Vercel domain
  return window.location.origin;
}

    async function submitToBackend(tableName, payload) {
      const config = window.SUPABASE_CONFIG || {};
      const isLocalFile = window.location.protocol === 'file:';
      const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
      const preferLocal = isLocalFile || isLocalHost || !!config.apiBaseUrl;
      const hasSupabaseConfig = config.url && config.anonKey && !config.url.includes('YOUR_PROJECT_REF') && !config.anonKey.includes('YOUR_SUPABASE_ANON_KEY');

      async function postLocal() {
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/${tableName}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`Local API insert failed: ${response.status}`);
        }

        return { provider: 'local' };
      }

      if (!preferLocal && hasSupabaseConfig) {
        try {
          const response = await fetch(`${config.url}/rest/v1/${tableName}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': config.anonKey,
              'Authorization': `Bearer ${config.anonKey}`
            },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Supabase insert failed: ${response.status} ${errorText}`);
          }

          return { provider: 'supabase' };
        } catch (error) {
          console.warn('Supabase failed, falling back to local API:', error.message);
          return await postLocal();
        }
      }

      return await postLocal();
    }

    function goStep(n) {
      document.getElementById('step-' + currentStep).classList.remove('active');
      document.getElementById('dot-' + currentStep).classList.remove('active');
      document.getElementById('dot-' + currentStep).classList.add('done');

      if (n < currentStep) {
        document.getElementById('dot-' + currentStep).classList.remove('done');
      }

      currentStep = n;
      document.getElementById('step-' + currentStep).classList.add('active');
      document.getElementById('dot-' + currentStep).classList.add('active');
      document.getElementById('dot-' + currentStep).classList.remove('done');

      document.getElementById('bookingFormWrap').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    async function submitBooking() {
      const name  = document.getElementById('fullName').value.trim();
      const email = document.getElementById('emailAddr').value.trim();
      const phone = document.getElementById('phoneNum').value.trim();

      if (!name || !email || !phone) {
        alert('Please fill in your name, email, and phone number.');
        return;
      }
      if (!/^[^\s@]+@gmail\.com$/i.test(email)) {
        alert('Please enter a valid Gmail address ending in @gmail.com.');
        return;
      }
      if (!/^\d+$/.test(phone)) {
        alert('Phone number must contain digits only.');
        return;
      }

      const chips = [...document.querySelectorAll('.dest-chip.selected')].map(c => c.textContent).join(', ');
      const customDest  = document.getElementById('customDest').value;
      const startDate   = document.getElementById('startDate').value;
      const endDate     = document.getElementById('endDate').value;
      const numAdults   = document.getElementById('numAdults').value;
      const numChildren = document.getElementById('numChildren').value;
      const budget      = document.getElementById('budget').value;
      const tripType    = document.getElementById('tripType').value;
      const specialReq  = document.getElementById('specialReq').value;
      const contactTime = document.getElementById('contactTime').value;

      const booking = {
        timestamp: new Date().toISOString(),
        destinations: chips || customDest,
        startDate, endDate,
        adults: numAdults, children: numChildren,
        budget, tripType, specialReq,
        name, email, phone, contactTime
      };

      try {
        await submitToBackend('bookings', {
          id: `booking-${Date.now()}`,
          timestamp: booking.timestamp,
          destinations: booking.destinations,
          startDate: booking.startDate,
          endDate: booking.endDate,
          adults: booking.adults,
          children: booking.children,
          budget: booking.budget,
          tripType: booking.tripType,
          specialReq: booking.specialReq,
          name: booking.name,
          email: booking.email,
          phone: booking.phone,
          contactTime: booking.contactTime
        });
      } catch (error) {
        console.error(error);
        alert('We could not save your enquiry. Please try again.');
        return;
      }

      document.getElementById('step-' + currentStep).style.display = 'none';
      document.getElementById('stepIndicators').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    }

    /* ===== NEWSLETTER ===== */
    async function subscribeNewsletter(e) {
      e.preventDefault();
      const form = e.target;
      const emailInput = form.querySelector('input');
      const email = emailInput.value.trim();
      const btn = form.querySelector('button');

      if (!email) return;
      if (!/^[^\s@]+@gmail\.com$/i.test(email)) {
        alert('Please enter a valid Gmail address ending in @gmail.com.');
        return;
      }

      try {
        await submitToBackend('newsletter', {
          id: `subscriber-${Date.now()}`,
          email,
          created_at: new Date().toISOString()
        });
      } catch (error) {
        console.error(error);
      }

      btn.textContent = '✓ Subscribed!';
      btn.style.background = '#2a7a3b';
      emailInput.value = '';
      setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
    }





