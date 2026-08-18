    /* ================================================================
       ITINERARY DATA
       ================================================================ */
    const itineraryData = {
         nubra: {
        tag: ' Delhi -> Zanskar -> Leh',
        title: 'Leh Expedition ',
        subtitle: 'Cold-desert dunes, monasteries & double-hump camels above the clouds',
        hero: 'images/zanskar-peak.jpg',
        meta: [
          { label: 'Duration', value: '8 Days/ 7 Nights' },
          { label: 'Solo', value: '₹34,999/person' },
          { label: 'Couple', value: '₹67,999, ₹33,999/person' },
          { label: 'Group of 10 +', value: '₹36,999/person' },
          { label: 'Difficulty', value: 'Moderate' },
        ],
        gallery: ['images/1 (2).jpg', 'images/1 (3).jpg', 'images/zanskar-peak.jpg', 'images/1 (4).jpg'],
        days: [
          {
        label: 'Route',
        title: 'THE ZANSKAR EXPEDITION',
        stops: [
          { time: '01', name: 'Delhi  →  Manali  →  Darcha', blurb: 'Into the Himalayas' },
          { time: '02', name: 'Padum  →  Purne  →  Phugtal Monastery', blurb: 'Deep into the hidden Zanskar Valley' },
          { time: '03', name: 'Padum  →  Pensi La  →  Rangdum', blurb: 'Across high passes and wild landscapes' },
          { time: '04', name: 'Rangdum  →  Kargil', blurb: 'Through remote Himalayan valleys' },
          { time: '05', name: 'Kargil  →  Tso Moriri  →  Leh', blurb: 'From the wilderness to the final destination' }
        ]
      },
          { label: 'Day 0', title: 'Departure from Delhi', stops: [
            
          ]},
          { label: 'Day 1', title: 'Manali -> Jispa -> Darcha', stops: [
            { time: 'Morning', name: 'Arrive in Manali', blurb: 'Start the expedition with a scenic drive through the mountains.' },
            { time: 'Afternoon', name: 'Atal Tunnel', blurb: 'Cross the Atal Tunnel, the world\'s longest highway tunnel, and enjoy breathtaking views of the Himalayas.' },
            { time: 'Evening', name: 'Sissu', blurb: 'Stop at the picturesque village of Sissu for a short break and refreshments.' },
            { time: 'Evening', name: 'Sunset in Darcha', blurb: 'Arrive in Darcha for an overnight stay and enjoy a memorable Himalayan sunset.' },

          ]},
          { label: 'Day 2', title: 'Darcha → Shinku La -> Kurgaikh', stops: [
            { time: 'Morning', name: 'Darcha', blurb: 'Begin the day with a hearty breakfast and prepare for the journey ahead.' },
            { time: 'Afternoon', name: 'Deepaktal and Surajtaal', blurb: 'Take in the stark beauty of these pristine high-altitude lakes.' },
            { time: 'Evening', name: 'Shinku La Pass', blurb: 'bridges the Lahaul district of Himachal Pradesh with the remote Zanskar valley of Ladakh' },
            { time: 'Night', name: 'Kurgaikh', blurb: 'Stop for dramatic views of Gonbo Rangjon before an overnight stay in Kurgiakh.' },
          ]},
                    { label: 'Day 3', title: 'Kurgiakh → Hidden Zanskar → Padum', stops: [
            { time: 'Morning', name: 'Kurgiakh → Hidden Zanskar', blurb: 'Drive through the remote and dramatic landscapes of the hidden Zanskar Valley.' },
            { time: 'Afternoon', name: 'Phugtal Monastery', blurb: 'Trek to the spectacular cliffside Phugtal Monastery, one of the most remote monasteries in Zanskar.' },
            { time: 'Evening', name: 'Karsha & Stongde Monasteries', blurb: 'Explore the ancient Karsha and Stongde monasteries before reaching Padum.' },
            { time: 'Night', name: 'Local Village Lunch & Stargazing', blurb: 'Enjoy authentic local food followed by a cosy bonfire and unforgettable Zanskar stargazing.' },
          ]},

          { label: 'Day 4', title: 'Padum → Zangla → Lamayuru', stops: [
            { time: 'Morning', name: 'Zangla Palace', blurb: 'Explore the historic Zangla Palace overlooking the spectacular Zanskar landscapes.' },
            { time: 'Afternoon', name: 'Sani Monastery', blurb: 'Visit the ancient Sani Monastery, one of the oldest Buddhist sites in the Zanskar region.' },
            { time: 'Evening', name: 'Wild Zanskar Landscapes', blurb: 'Drive through remote valleys and dramatic mountain landscapes on the way towards Lamayuru.' },
            { time: 'Night', name: 'Lamayuru Moonland', blurb: 'Arrive at the surreal Moonland of Lamayuru, famous for its unique lunar-like terrain.' },
          ]},

          { label: 'Day 5', title: 'Lamayuru → Alchi → Leh', stops: [
            { time: 'Morning', name: 'Alchi Monastery', blurb: 'Explore the magnificent ancient monastery complex known for its exceptional Buddhist murals and artwork.' },
            { time: 'Afternoon', name: 'Sangam', blurb: 'Witness the spectacular confluence of the Indus and Zanskar rivers.' },
            { time: 'Afternoon', name: 'Magnetic Hill', blurb: 'Stop at Ladakh’s famous Magnetic Hill, known for its mysterious optical illusion.' },
            { time: 'Evening', name: 'Gurudwara Pathar Sahib', blurb: 'Visit the peaceful Gurudwara Pathar Sahib nestled in the mountains.' },
            { time: 'Night', name: 'Leh Market', blurb: 'Explore the vibrant streets, cafés and local shops of Leh before settling in for the night.' },
          ]},

          { label: 'Day 6', title: 'Leh Local Exploration', stops: [
            { time: 'Morning', name: 'Shanti Stupa', blurb: 'Start the day with panoramic views of Leh and the surrounding Himalayan mountains from Shanti Stupa.' },
            { time: 'Afternoon', name: 'Leh Palace', blurb: 'Explore the historic nine-storey Leh Palace and discover its royal Ladakhi heritage.' },
            { time: 'Evening', name: 'Hall of Fame', blurb: 'Visit the Hall of Fame museum dedicated to the Indian Armed Forces and the history of Ladakh.' },
            { time: 'Evening', name: 'Local Cafés', blurb: 'Relax at Leh’s popular cafés and experience the laid-back atmosphere of the mountain town.' },
            { time: 'Sunset', name: 'Sunset Photography', blurb: 'Capture golden-hour views of Leh and the surrounding mountains.' },
          ]},

          { label: 'Day 7', title: 'Leh → Khardung La → Nubra Valley', stops: [
            { time: 'Morning', name: 'Khardung La', blurb: 'Cross one of the world’s most iconic high-altitude mountain passes on the way to Nubra Valley.' },
            { time: 'Afternoon', name: 'Diskit Monastery', blurb: 'Visit the magnificent Diskit Monastery and its giant Maitreya Buddha overlooking Nubra Valley.' },
            { time: 'Evening', name: 'Hunder Sand Dunes', blurb: 'Explore the surreal desert-like sand dunes of Hunder surrounded by towering Himalayan peaks.' },
            { time: 'Evening', name: 'Double-Humped Camels', blurb: 'Experience a ride or encounter with the rare Bactrian double-humped camels of Nubra.' },
            { time: 'Night', name: 'Nubra Camp Stay', blurb: 'Spend the night at a peaceful camp under the clear Himalayan sky.' },
          ]},

          { label: 'Day 8', title: 'Nubra → Leh → Fly Back', stops: [
            { time: 'Morning', name: 'Nubra Valley → Leh', blurb: 'Drive back through the dramatic Himalayan landscapes towards Leh.' },
            { time: 'Afternoon', name: 'Leh', blurb: 'Spend your final hours in Leh shopping for souvenirs or enjoying a final local meal.' },
            { time: 'Evening', name: 'Departure', blurb: 'Fly back from Leh or continue onward with your journey.' },
          ]},
        ]
      },
      manali: {
        tag: 'Himachal Pradesh',
        title: 'Sangla/Chitkul',
        subtitle: 'Pine forests, snow-capped peaks & cosy mountain cafes',
        hero: 'images/2 (4).jpg',
        meta: [
          { label: 'Duration', value: '4 Days/ 3 Nights' },
          { label: 'From', value: '₹11,999/person' },
          { label: 'Couple', value: '₹22,999, ₹11,499/person' },
          { label: 'Group of 10 +', value: '₹11,999/person' },
          { label: 'Difficulty', value: 'Easy' },
        ],
        gallery: ['images/2 (1).jpg', 'images/2 (2).jpg', 'images/snowvalley.jpg', 'images/2 (3).jpg'],
        days: [
         { label: 'Day 0', title: 'Delhi → Shimla', stops: [
          { time: 'Night', name: 'Overnight Volvo from Delhi', blurb: 'Take an overnight Volvo from Delhi around 9–11 PM and begin your journey towards the mountains.' },
          { time: 'Morning', name: 'Reach Shimla', blurb: 'Arrive in Shimla early the next morning and prepare for the onward journey to Sangla.' },
        ]},
        { label: 'Day 1', title: 'Shimla → Sangla', stops: [
          { time: 'Morning', name: 'Departure from Shimla', blurb: 'Pick up a self-drive car or taxi, or board an HRTC bus for the scenic journey towards Sangla.' },
          { time: 'Afternoon', name: 'Narkanda → Rampur → Karcham', blurb: 'Drive through winding Himalayan roads, beautiful valleys and dramatic mountain landscapes.' },
          { time: 'Evening', name: 'Arrive in Sangla', blurb: 'Check in to your hotel or campsite and unwind in the beautiful Baspa Valley.' },
          { time: 'Evening', name: 'Baspa River & Sangla Village', blurb: 'Take a peaceful walk beside the Baspa River and explore the charming village of Sangla.' },
        ]},
        { label: 'Day 2', title: 'Chitkul Exploration', stops: [
          { time: 'Morning', name: 'Breakfast & Drive to Chitkul', blurb: 'Enjoy breakfast before heading towards Chitkul, the last inhabited village near the Indo-Tibet border.' },
          { time: 'Afternoon', name: 'Hindustan Ka Aakhri Dhaba', blurb: 'Visit the iconic roadside dhaba and enjoy the spectacular mountain scenery around Chitkul.' },
          { time: 'Afternoon', name: 'Baspa River', blurb: 'Spend some peaceful time beside the crystal-clear Baspa River flowing through the valley.' },
          { time: 'Evening', name: 'Apple Orchards & Village Walk', blurb: 'Explore traditional village lanes and seasonal apple orchards before returning to Sangla.' },
        ]},
        { label: 'Day 3', title: 'Sangla → Kalpa → Shimla', stops: [
          { time: 'Morning', name: 'Early Morning Departure', blurb: 'Leave Sangla early and begin the scenic journey back through the spectacular Kinnaur landscape.' },
          { time: 'Morning', name: 'Kalpa — Optional', blurb: 'If time permits, visit Kalpa for breathtaking views of the majestic Kinner Kailash range.' },
          { time: 'Afternoon', name: 'Continue to Shimla', blurb: 'Continue your journey towards Shimla through winding mountain roads and picturesque Himalayan valleys.' },
          { time: 'Night', name: 'Overnight Volvo to Delhi', blurb: 'Board the overnight Volvo from Shimla and begin your comfortable journey back to Delhi.' },
        ]},
        { label: 'Day 4', title: 'Reach Delhi', stops: [
          { time: 'Morning', name: 'Arrive in Delhi', blurb: 'Reach Delhi in the morning, bringing your Sangla and Chitkul mountain escape to an end.' },
        ]},
   
        ]
      },
      spiti: {
        tag: '🌸 Spiti Valley',
        title: 'Spiti Valley — Land of Lamas',
        subtitle: 'Moonscapes, ancient monasteries & the highest villages on Earth',
        hero: 'images/spiti.jpg',
        meta: [
          { label: 'Duration', value: '6 Days 5 Nights' },
          { label: 'Solo', value: '₹20,999/person' },
          { label: 'Couple', value: '₹39,999/person , ₹19,999/person' },
          { label: 'Group of 10+', value: '₹18,999/person' },
          { label: 'Difficulty', value: 'Moderate' },
        ],
        gallery: ['images/spiti.jpg', 'images/wildflower-peak.jpg', 'images/zanskar-peak.jpg', 'images/leh.jpg'],
        days: [
                    { label: 'Day 0', title: 'Delhi → Shimla', stops: [
              { time: 'Evening', name: 'Departure from Delhi', blurb: 'Depart from Delhi in a comfortable Tempo Traveller and begin the Spiti adventure.' },
              { time: 'Evening', name: 'Ice-Breaker Games', blurb: 'Get to know your fellow travellers with fun ice-breaker games and a curated travel playlist.' },
              { time: 'Night', name: 'Overnight Journey', blurb: 'Settle in for an overnight mountain journey towards Shimla.' },
            ]},
            { label: 'Day 1', title: 'Shimla → Kalpa', stops: [
              { time: 'Morning', name: 'Narkanda Forests', blurb: 'Drive through the beautiful pine forests of Narkanda as the landscape begins to transform.' },
              { time: 'Afternoon', name: 'Kinnaur Gate', blurb: 'Enter the dramatic Kinnaur Valley and witness the changing Himalayan landscapes.' },
              { time: 'Afternoon', name: 'Sutlej River Drive', blurb: 'Follow the winding mountain roads alongside the mighty Sutlej River towards Kalpa.' },
              { time: 'Evening', name: 'Hidden Sunset Point', blurb: 'Discover a peaceful viewpoint in Kalpa and watch the mountains glow during sunset.' },
              { time: 'Night', name: 'Bonfire & Introductions', blurb: 'Unwind around a cosy bonfire and get to know your fellow travellers.' },
            ]},
            { label: 'Day 2', title: 'Kalpa → Nako → Tabo', stops: [
              { time: 'Morning', name: 'Khab Sangam', blurb: 'Witness the dramatic confluence of the Sutlej and Spiti rivers at Khab.' },
              { time: 'Afternoon', name: 'Gue Village', blurb: 'Visit the remote village known for its naturally preserved 500-year-old mummy.' },
              { time: 'Afternoon', name: 'Nako Lake', blurb: 'Explore the serene high-altitude Nako Lake surrounded by rugged Himalayan terrain.' },
              { time: 'Evening', name: 'Tabo Monastery', blurb: 'Step into the ancient world of Tabo Monastery, one of the most significant Buddhist sites in Spiti.' },
            ]},
            { label: 'Day 3', title: 'Tabo → Dhankar → Pin Valley → Mud', stops: [
              { time: 'Morning', name: 'Dhankar Monastery', blurb: 'Explore the spectacular cliffside monastery overlooking the confluence of the Spiti and Pin rivers.' },
              { time: 'Morning', name: 'Dhankar Lake', blurb: 'Take an optional short hike to the peaceful high-altitude Dhankar Lake.' },
              { time: 'Afternoon', name: 'Pin Valley National Park', blurb: 'Enter the remote Pin Valley and experience its dramatic landscapes and unique Himalayan wilderness.' },
              { time: 'Evening', name: 'Mud Village', blurb: 'Explore the peaceful Himalayan village of Mud, the gateway to Pin Valley.' },
              { time: 'Night', name: 'Stargazing', blurb: 'Escape the city lights and experience a spectacular night sky in the heart of Spiti.' },
            ]},
            { label: 'Day 4', title: 'Mud → Kaza', stops: [
              { time: 'Morning', name: 'Kungri Monastery', blurb: 'Visit the ancient Kungri Monastery, one of the most important Buddhist monasteries in Pin Valley.' },
              { time: 'Afternoon', name: 'Kaza Market', blurb: 'Explore the lively local market and discover traditional Spitian crafts and flavours.' },
              { time: 'Evening', name: 'Local Cafés', blurb: 'Relax at Kaza’s cosy cafés and experience the laid-back atmosphere of the mountain town.' },
              { time: 'Sunset', name: 'Sunset Viewpoint', blurb: 'Watch the last light sweep across the rugged Spiti mountains from a scenic viewpoint.' },
              { time: 'Optional', name: 'Astronomy Session', blurb: 'Enjoy café hopping, local shopping or an optional astronomy session beneath the clear Spiti sky.' },
            ]},
            { label: 'Day 5', title: 'Langza → Hikkim → Komic Circuit', stops: [
              { time: 'Morning', name: 'Langza Village', blurb: 'Visit the iconic Langza Buddha and explore the remote high-altitude village surrounded by barren mountains.' },
              { time: 'Morning', name: 'Fossil Hunting', blurb: 'Search the surrounding terrain for ancient marine fossils that make Spiti famous among geology enthusiasts.' },
              { time: 'Afternoon', name: 'Hikkim Post Office', blurb: 'Visit the famous high-altitude Hikkim Post Office and send a postcard from the mountains.' },
              { time: 'Afternoon', name: 'Komic Village', blurb: 'Explore one of the world’s highest motorable villages and experience life at extreme altitude.' },
              { time: 'Evening', name: 'Chicham Bridge & Kibber', blurb: 'Cross the spectacular Chicham Bridge and explore the legendary village of Kibber.' },
            ]},
            { label: 'Day 6', title: 'Kaza → Chandratal → Manali', stops: [
              { time: 'Morning', name: 'Kunzum Pass', blurb: 'Cross the dramatic Kunzum Pass surrounded by towering peaks and high-altitude landscapes.' },
              { time: 'Afternoon', name: 'Chandratal Lake', blurb: 'Visit the breathtaking crescent-shaped Chandratal Lake, weather and road conditions permitting.' },
              { time: 'Evening', name: 'Atal Tunnel', blurb: 'Cross the Atal Tunnel and descend towards the greener landscapes of Manali.' },
              { time: 'Evening', name: 'Reach Manali', blurb: 'Arrive in Manali by evening before beginning the overnight journey towards Delhi.' },
              { time: 'Night', name: 'Overnight Departure', blurb: 'Board the vehicle for the overnight journey back to Delhi.' },
            ]},
            { label: 'Day 7', title: 'Delhi Arrival', stops: [
              { time: 'Morning', name: 'Arrive in Delhi', blurb: 'Reach Delhi in the morning with unforgettable memories, photographs and new friendships from the Spiti adventure.' },
            ]},
            { label: 'Package', title: 'Package Includes', stops: [
              { time: 'Included', name: 'Delhi–Spiti–Delhi Travel', blurb: 'Comfortable round-trip travel by Tempo Traveller.' },
              { time: 'Included', name: '6 Nights Accommodation', blurb: 'Stay at selected hotels, camps or homestays throughout the journey.' },
              { time: 'Included', name: 'Daily Breakfast & Dinner', blurb: 'Enjoy daily breakfast and dinner during the trip.' },
              { time: 'Included', name: 'Trip Leader', blurb: 'Dedicated trip leader from Compaspanion throughout the journey.' },
              { time: 'Included', name: 'Bonfire & First Aid', blurb: 'Bonfire sessions where permitted along with a basic first-aid kit.' },
              { time: 'Included', name: 'Photography Assistance', blurb: 'Get help capturing memorable moments throughout the expedition.' },
            ]},
            { label: 'Exclusions', title: 'Not Included', stops: [
              { time: 'Excluded', name: 'Lunches', blurb: 'Lunches are not included in the package.' },
              { time: 'Excluded', name: 'Personal Expenses', blurb: 'Personal shopping, snacks and other individual expenses are excluded.' },
              { time: 'Excluded', name: 'Entry Fees', blurb: 'Entry fees to attractions, where applicable, are not included.' },
              { time: 'Excluded', name: 'Adventure Activities', blurb: 'ATV rides and other optional adventure activities are not included.' },
              { time: 'Excluded', name: 'Travel Insurance', blurb: 'Travel insurance is not included and can be arranged separately.' },
              { time: 'Excluded', name: 'Anything Else', blurb: 'Any service or expense not specifically mentioned under package inclusions is excluded.' },
            ]},
        ]
      },
      leh: {
        tag: 'Pabbar Valley',
        title: 'Rohru',
        subtitle: 'Apple orchards, riverside walks & Himalayan village life',
        hero: 'images/Pabbar-Valley.webp',
        meta: [
          { label: 'Duration', value: '3 Days' },
          { label: 'From', value: '₹7,999/person' },
          { label: 'Difficulty', value: 'Easy–Moderate' },
        ],
        gallery: ['images/leh.jpg', 'images/nubra.jpg', 'images/zanskar-peak.jpg', 'images/wildflower-peak.jpg'],
        days: [
                  { label: 'Day 0', title: 'Delhi → Rohru', stops: [
            { time: '7:00–8:00 PM', name: 'Meet & Boarding', blurb: 'Meet the group in Delhi, board the vehicle and get ready for an offbeat Himalayan escape.' },
            { time: 'Evening', name: 'Introductions & Travel Games', blurb: 'Break the ice with fun introductions, travel games and good conversations on the road.' },
            { time: 'Night', name: 'Overnight Drive', blurb: 'Enjoy dinner at your own expense en route before continuing the overnight journey towards Rohru.' },
          ]},
          { label: 'Day 1', title: 'Rohru → Into Pabbar Valley', stops: [
            { time: '6:30–8:00 AM', name: 'Reach Rohru', blurb: 'Arrive in Rohru, enjoy breakfast at a local dhaba and freshen up before entering the valley.' },
            { time: '9:00 AM', name: 'The Valley Drive', blurb: 'Follow the scenic Pabbar Valley road through apple orchards, pine and deodar forests, traditional villages and hidden viewpoints.' },
            { time: '1:00 PM', name: 'Village Homestay', blurb: 'Reach your village homestay, enjoy a warm welcome chai, check in, have lunch and settle into the peaceful surroundings.' },
            { time: '3:30 PM', name: 'Village Walk', blurb: 'Take a slow, unhurried walk through forests, orchards, village lanes and the riverside.' },
            { time: '5:30 PM', name: 'Secret Sunset Point', blurb: 'Head to a nearby hidden viewpoint and watch the sun disappear behind the Himalayan valley.' },
            { time: '7:30 PM', name: 'Compaspanion Night', blurb: 'End the day with a bonfire, music, group games, travel stories, dinner and stargazing.' },
          ]},
          { label: 'Day 2', title: 'Live Like a Local', stops: [
            { time: '6:30 AM', name: 'Sunrise Walk', blurb: 'Wake up early and take a peaceful morning walk through the surrounding village.' },
            { time: '8:00 AM', name: 'Local Breakfast', blurb: 'Start the day with a fresh local breakfast and a warm cup of chai.' },
            { time: '9:00 AM', name: 'Hidden Nature Trail', blurb: 'Take an easy 2–3 hour trail through forests, apple orchards, villages and mountain viewpoints, with the exact route chosen locally according to conditions.' },
            { time: '12:30 PM', name: 'Local Lunch', blurb: 'Return to the homestay and enjoy a relaxed local lunch.' },
            { time: '2:00 PM', name: 'Orchard & Village Experience', blurb: 'Depending on the season, visit a local apple orchard, learn about apple farming, meet locals and enjoy a traditional chai break.' },
            { time: '4:00 PM', name: 'Pabbar River Time', blurb: 'Find a safe riverside spot to relax, take photographs and simply enjoy the sound of the Pabbar River.' },
            { time: '5:30 PM', name: 'Final Sunset', blurb: 'Catch one final sunset from a beautiful valley viewpoint before beginning the journey home.' },
            { time: '6:30–7:00 PM', name: 'Return Journey', blurb: 'Begin the overnight drive towards Delhi with a dinner stop en route.' },
          ]},
          { label: 'Day 3', title: 'Delhi Arrival', stops: [
            { time: 'Morning', name: 'Reach Delhi', blurb: 'Arrive in Delhi between approximately 6:00–9:00 AM with memories, photographs and new friendships from the Pabbar Valley.' },
          ]},
          { label: 'Package', title: 'Compaspanion Selling Price', stops: [
            { time: 'Price', name: '₹7,999 / Person', blurb: 'A complete 2-night Pabbar Valley escape designed for travellers looking for an offbeat Himalayan experience.' },
          ]},
          { label: 'Includes', title: 'Package Includes', stops: [
            { time: 'Included', name: 'Delhi–Pabbar Valley–Delhi Transportation', blurb: 'Round-trip transportation between Delhi and Pabbar Valley.' },
            { time: 'Included', name: '2 Nights Village Homestay', blurb: 'Stay in a peaceful local village homestay surrounded by the Himalayan landscape.' },
            { time: 'Included', name: 'Breakfasts & Dinners', blurb: '2 breakfasts and 2 dinners during the trip.' },
            { time: 'Included', name: 'Local Experiences', blurb: 'Local sightseeing, village exploration and a nature trail.' },
            { time: 'Included', name: 'Bonfire & Stargazing', blurb: 'Enjoy a memorable evening around the bonfire beneath the Himalayan night sky.' },
            { time: 'Included', name: 'Trip Coordination', blurb: 'Complete trip coordination by the Compaspanion team.' },
          ]},
          { label: 'Excludes', title: 'Not Included', stops: [
            { time: 'Excluded', name: 'Lunches', blurb: 'Lunches are not included in the package.' },
            { time: 'Excluded', name: 'Personal Expenses', blurb: 'Personal shopping and other individual expenses are excluded.' },
            { time: 'Excluded', name: 'Café Bills', blurb: 'Food and beverages purchased at cafés are not included.' },
            { time: 'Excluded', name: 'Adventure Activities', blurb: 'Optional adventure activities are not included.' },
            { time: 'Excluded', name: 'Optional Local Activities', blurb: 'Any optional local activities outside the planned itinerary are excluded.' },
            { time: 'Excluded', name: 'Anything Else', blurb: 'Any service or expense not specifically mentioned under inclusions is excluded.' },
          ]},
       
          { label: 'Route', title: 'Delhi → Pabbar Valley', stops: [
            { time: '01', name: '🍎 Apple Orchards', blurb: 'Walk through the orchards and experience the local rhythm of Pabbar Valley.' },
            { time: '02', name: '🌲 Forest Trails', blurb: 'Explore peaceful pine and deodar forests away from the usual tourist routes.' },
            { time: '03', name: '🌊 Pabbar River', blurb: 'Slow down beside the river and enjoy the untouched Himalayan surroundings.' },
            { time: '04', name: '🔥 Bonfire', blurb: 'Gather around the fire for music, stories and new friendships.' },
            { time: '05', name: '✨ Stargazing', blurb: 'End your Himalayan escape beneath the clear night sky.' },
          ]},
        ]
      },
      rishikesh: {
        tag: '🏔️ Himachal Pradesh',
        title: 'Kalpa — Kinnaur Escape',
        subtitle: 'Kinnaur Kailash views, apple orchards & peaceful mountain villages',
        hero: 'images/kalpa (1).jpg',
        meta: [
          { label: 'Duration', value: '4 Days / 3 Nights' },
          { label: 'From', value: '₹8,499/person' },
          { label: 'Difficulty', value: 'Easy' },
        ],
        gallery: ['images/kalpa (5).jpg', 'images/kalpa (2).jpg', 'images/kalpa (3).jpg', 'images/kalpa (4).jpg'],
        days: [
          { label: 'Day 0', title: 'Delhi → Kalpa', stops: [
  { time: '6:00–7:00 PM', name: 'Meet & Boarding', blurb: 'Meet the group in Delhi, board the Tempo Traveller and get ready for an unforgettable Kinnaur road trip.' },
  { time: 'Evening', name: 'Introductions & Travel Playlist', blurb: 'Break the ice with introductions, music and conversations as the journey begins.' },
  { time: 'Night', name: 'Overnight Drive', blurb: 'Enjoy a dinner stop at your own expense before continuing the overnight journey towards Kinnaur.' },
]},
{ label: 'Day 1', title: 'Delhi → Kalpa | The Kinnaur Road Trip', stops: [
  { time: 'Morning', name: 'Scenic Sutlej Valley Drive', blurb: 'Enjoy breakfast en route and continue towards Kinnaur through the spectacular landscapes of the Sutlej Valley.' },
  { time: 'Morning', name: 'En-route Experiences', blurb: 'Make short scenic stops at mountain viewpoints, the Sutlej River, Kinnaur entry points and local dhabas for chai and photography.' },
  { time: 'Afternoon', name: 'Lunch & Continue to Kalpa', blurb: 'Take a lunch break en route before continuing through Reckong Peo towards the beautiful village of Kalpa.' },
  { time: '5:00–6:00 PM', name: 'Arrive in Kalpa', blurb: 'Check into the homestay, enjoy a welcome chai, rest and explore the village around your stay.' },
  { time: '6:00 PM', name: 'Kinnaur Kailash Sunset', blurb: 'Head to a scenic viewpoint and watch the Kinnaur mountains glow during golden hour.' },
  { time: '8:00 PM', name: 'Compaspanion Night', blurb: 'End the long road-trip day with a bonfire, stargazing, dinner, travel stories and group games.' },
]},
{ label: 'Day 2', title: 'Kalpa → Roghi → Chakka → Kalpa', stops: [
  { time: '6:30 AM', name: 'Kinnaur Kailash Sunrise', blurb: 'Wake up early and take in breathtaking morning views of the Kinnaur Kailash range.' },
  { time: '8:00 AM', name: 'Local Breakfast', blurb: 'Enjoy a fresh local breakfast with a warm cup of chai.' },
  { time: '9:00 AM', name: 'Kalpa Village Walk', blurb: 'Explore traditional Kinnauri architecture, Kalpa village, the Narayan-Nagini Temple and the local monastery area.' },
  { time: '11:00 AM', name: 'Roghi Village', blurb: 'Drive to the scenic village of Roghi and experience its apple orchards, traditional houses, quiet lanes and Himalayan views.' },
  { time: '1:00 PM', name: 'Short Local Walk', blurb: 'Take a relaxed village walk and soak in the mountain atmosphere without the intensity of a strenuous trek.' },
  { time: '2:00 PM', name: 'Local Lunch', blurb: 'Enjoy lunch at a local café or homestay at your own expense.' },
  { time: '3:00 PM', name: 'Chakka Viewpoint', blurb: 'If road and weather conditions permit, head towards Chakka for dramatic high-altitude landscapes; otherwise, enjoy a nearby Kalpa viewpoint.' },
  { time: '5:00 PM', name: 'Final Golden Hour', blurb: 'Return to Kalpa and catch the final golden light over the spectacular Kinnaur mountains.' },
  { time: '7:00 PM', name: 'Final Night', blurb: 'Celebrate the final evening with bonfire, stargazing, music, group games and dinner.' },
]},
{ label: 'Day 3', title: 'Kalpa → Delhi', stops: [
  { time: '5:30–6:00 PM', name: 'Check-out & Departure', blurb: 'Have an early dinner or packed meal, check out and begin the return journey towards Delhi.' },
  { time: 'Night', name: 'Overnight Drive', blurb: 'Enjoy dinner and tea breaks, music and a trip recap while travelling through the Himalayan roads towards Delhi.' },
]},
{ label: 'Day 4', title: 'Delhi Arrival', stops: [
  { time: 'Morning', name: 'Reach Delhi', blurb: 'Expected arrival in Delhi around 6:00–9:00 AM, depending heavily on traffic, weather and road conditions.' },
  { time: 'Morning', name: 'Trip Ends', blurb: 'End the Kinnaur escape with unforgettable mountain views, photographs and memories.' },
]},
{ label: 'Price', title: 'Kinnaur Road Trip', stops: [
  { time: 'Per Person', name: '₹8,499 / Person', blurb: 'A complete Kalpa escape combining scenic road journeys, village experiences, mountain views and slow Himalayan evenings.' },
]},
{ label: 'Includes', title: 'Package Includes', stops: [
  { time: 'Included', name: 'Delhi → Kalpa → Delhi Transportation', blurb: 'Round-trip transportation between Delhi and Kalpa.' },
  { time: 'Included', name: '2 Nights Kalpa Homestay', blurb: 'Comfortable homestay accommodation in Kalpa for two nights.' },
  { time: 'Included', name: '2 Breakfasts & 2 Dinners', blurb: 'Daily breakfast and dinner during the stay.' },
  { time: 'Included', name: 'Kalpa & Roghi Sightseeing', blurb: 'Explore Kalpa, Roghi and the surrounding Kinnaur landscapes.' },
  { time: 'Included', name: 'Local Sightseeing Buffer', blurb: 'Local sightseeing and transport buffer for planned experiences.' },
  { time: 'Included', name: 'Bonfire & Stargazing', blurb: 'Enjoy Himalayan evenings with bonfire and stargazing.' },
  { time: 'Included', name: 'Trip Coordination', blurb: 'Complete trip coordination by the Compaspanion team.' },
]},
{ label: 'Excludes', title: 'Not Included', stops: [
  { time: 'Excluded', name: 'Lunches', blurb: 'Lunches are not included in the package.' },
  { time: 'Excluded', name: 'Personal Expenses', blurb: 'Personal shopping and other individual expenses are excluded.' },
  { time: 'Excluded', name: 'Café Bills', blurb: 'Food and beverages purchased at cafés are not included.' },
  { time: 'Excluded', name: 'Optional Activities', blurb: 'Optional activities outside the planned itinerary are not included.' },
  { time: 'Excluded', name: 'Chakka / Local Vehicle Charges', blurb: 'Additional Chakka or local vehicle charges beyond the planned transport buffer are excluded.' },
  { time: 'Excluded', name: 'Anything Else', blurb: 'Any service or expense not specifically mentioned under inclusions is excluded.' },
]},
        ]
      },
       mussoorie: {
        tag: '🏔️ Uttarakhand',
title: 'Mussoorie — Weekend Escape',
subtitle: 'Scenic drives, waterfalls, Himalayan views & cozy mountain evenings',
hero: 'images/mussoorie-town.jpg',
meta: [
  { label: 'Duration', value: '3 Days / 2 Nights' },
  { label: 'From', value: '₹6,999/person' },
  { label: 'Difficulty', value: 'Easy' },
        ],
        gallery: ['images/mussoorie-town.jpg', 'images/mussoorie-church.jpg', 'images/mussoorie-peak.jpg', 'images/dalhousie-hills.jpg'],
        days: [
         { label: 'Day 0', title: 'Delhi → Haridwar', stops: [
  { time: 'Evening', name: 'Departure from Delhi', blurb: 'Start your weekend escape from Delhi and begin the overnight journey towards Haridwar.' },
  { time: 'Night', name: 'Overnight Journey', blurb: 'Travel through the night towards Haridwar with short halts for refreshments along the way.' },
]},

{ label: 'Day 1', title: 'Haridwar → Mussoorie', stops: [
  { time: 'Morning', name: 'Har Ki Pauri', blurb: 'Visit the iconic Har Ki Pauri and soak in the spiritual vibes of Haridwar.' },
  { time: 'Afternoon', name: 'Drive to Mussoorie', blurb: 'Continue the scenic mountain drive towards the Queen of the Hills, Mussoorie.' },
  { time: 'Evening', name: 'Mall Road', blurb: 'Explore the lively Mall Road, browse local shops and enjoy the mountain-town atmosphere.' },
  { time: 'Night', name: 'Dinner & Overnight Stay', blurb: 'Enjoy dinner and settle into your cosy stay in Mussoorie for the night.' },
]},

{ label: 'Day 2', title: 'Mussoorie Sightseeing', stops: [
  { time: 'Morning', name: 'George Everest Peak', blurb: 'Visit George Everest Peak for panoramic Himalayan views and a refreshing mountain experience.' },
  { time: 'Afternoon', name: 'Kempty Falls', blurb: 'Explore the famous Kempty Falls and enjoy the refreshing natural surroundings.' },
  { time: 'Afternoon', name: 'Landour & Char Dukan', blurb: 'Wander through the charming lanes of Landour and experience the iconic Char Dukan area.' },
  { time: 'Evening', name: 'Lal Tibba Sunset', blurb: 'Head to Lal Tibba and watch the mountains glow during a beautiful Himalayan sunset.' },
  { time: 'Night', name: 'Dinner & Bonfire', blurb: 'End the day with dinner, a cosy bonfire and a relaxed evening with the group.' },
]},

{ label: 'Day 3', title: 'Mussoorie → Delhi', stops: [
  { time: 'Morning', name: 'Breakfast & Check-out', blurb: 'Enjoy breakfast, check out from the stay and prepare for the return journey.' },
  { time: 'Morning', name: 'Return Journey', blurb: 'Start the scenic drive back towards Delhi with memories from your weekend in the hills.' },
  { time: 'Morning', name: 'Reach Delhi', blurb: 'Expected arrival in Delhi by Monday morning, approximately between 8:00–10:00 AM.' },
]},

{ label: 'Includes', title: 'Package Includes', stops: [
  { time: 'Included', name: 'Delhi to Delhi Travel', blurb: 'Round-trip travel from Delhi to Mussoorie and back.' },
  { time: 'Included', name: 'Stay', blurb: 'Comfortable accommodation during the trip.' },
  { time: 'Included', name: 'Breakfast & Dinner', blurb: 'Breakfast and dinner are included during the stay.' },
  { time: 'Included', name: 'Bonfire & Music', blurb: 'Enjoy a cosy bonfire and music, weather permitting.' },
  { time: 'Included', name: 'Toll & Driver Charges', blurb: 'Toll and driver charges are included in the package.' },
  { time: 'Included', name: 'Community Experience', blurb: 'Meet amazing people and create unforgettable memories together.' },
]},

{ label: 'Excludes', title: 'Not Included', stops: [
  { time: 'Excluded', name: 'Lunch', blurb: 'Lunches are not included in the package.' },
  { time: 'Excluded', name: 'Entry Tickets', blurb: 'Entry tickets to attractions, if applicable, are not included.' },
  { time: 'Excluded', name: 'Personal Expenses', blurb: 'Personal expenses during the trip are not included.' },
  { time: 'Excluded', name: 'Shopping & Café Expenses', blurb: 'Shopping, café visits and other personal food expenses are excluded.' },
]},
        ]
      },
      zanskar: {
        tag: '⛰ Himachal Expedition',
        title: 'Delhi to Churah Valley',
        hero: 'images/churah.jpg',
        meta: [
          { label: 'Duration', value: '3 Days / 2 Nights' },
          { label: 'From', value: '₹8,499/person' },
          { label: 'Difficulty', value: 'Adventurous' },
        ],
        gallery: ['images/zanskar-peak.jpg', 'images/wildflower-peak.jpg', 'images/snowvalley.jpg', 'images/nubra.jpg'],
        days: [
         { label: 'Day 0', title: 'Delhi → Churah', stops: [
  { time: '7:00–8:00 PM', name: 'Meet & Boarding', blurb: 'Meet the group in Delhi, board the Traveller and get ready for an offbeat Himalayan escape.' },
  { time: 'Evening', name: 'Ice-Breakers & Travel Playlist', blurb: 'Get to know your fellow travellers with fun ice-breakers, music and conversations on the road.' },
  { time: 'Night', name: 'Overnight Journey', blurb: 'Enjoy a dinner stop at your own expense before continuing the overnight journey towards Churah Valley.' },
]},
{ label: 'Day 1', title: 'Chamba → Tissa → Churah Valley', stops: [
  { time: 'Morning', name: 'Reach Chamba / Churah Region', blurb: 'Arrive in the Chamba–Churah region, enjoy breakfast at a local dhaba and freshen up before continuing towards Tissa.' },
  { time: '10:00 AM', name: 'Into Churah Valley', blurb: 'Begin the scenic valley drive through pine and deodar forests, mountain villages, streams, terraced fields and remote Himalayan roads.' },
  { time: 'Afternoon', name: 'Local Homestay', blurb: 'Reach your accommodation, check in, enjoy lunch and settle into the peaceful surroundings of Churah Valley.' },
  { time: '3:30 PM', name: 'Village Walk', blurb: 'Explore traditional homes, quiet village lanes, forest trails and beautiful valley viewpoints on foot.' },
  { time: '5:30 PM', name: 'Sunset Point', blurb: 'Head to a safe nearby viewpoint and watch the Himalayan valley transform during sunset.' },
  { time: '7:30 PM', name: 'Compaspanion Night', blurb: 'End the day with a bonfire, stargazing, music, group games, travel stories and dinner.' },
]},
{ label: 'Day 2', title: 'The Churah Valley Experience', stops: [
  { time: '6:30 AM', name: 'Sunrise Walk', blurb: 'Start the morning with a short peaceful walk around the homestay as the valley wakes up.' },
  { time: '8:00 AM', name: 'Local Breakfast', blurb: 'Enjoy a fresh local breakfast with a warm cup of chai.' },
  { time: '9:00 AM', name: 'Hidden Village Trail', blurb: 'Take an easy 2–3 hour nature walk through deodar forests, remote villages, terraced fields, mountain viewpoints and small streams.' },
  { time: '12:30 PM', name: 'Lunch at Homestay', blurb: 'Return to the homestay for a relaxed lunch and some downtime.' },
  { time: '2:00 PM', name: 'Local Life Experience', blurb: 'Spend the afternoon away from the usual tourist checklist with local interactions, traditional architecture, chai and mountain photography.' },
  { time: '4:00 PM', name: 'Valley & Stream Stop', blurb: 'Relax at a safe accessible spot near the valley or stream with photographs, chai and uninterrupted mountain views.' },
  { time: '5:30 PM', name: 'Final Sunset', blurb: 'Catch one final sunset from a beautiful valley viewpoint before beginning the journey home.' },
  { time: '6:30–7:00 PM', name: 'Start Return Journey', blurb: 'Begin the overnight journey towards Delhi with a dinner stop en route.' },
]},
{ label: 'Day 3', title: 'Delhi Arrival', stops: [
  { time: 'Morning', name: 'Reach Delhi', blurb: 'Arrive in Delhi at approximately 6:00–9:00 AM, depending on weather, road conditions and traffic.' },
  { time: 'Morning', name: 'Trip Ends', blurb: 'Wrap up the Churah Valley escape with unforgettable mountain memories, photographs and new friendships.' },
]},
{ label: 'Price', title: 'Churah Valley Escape', stops: [
  { time: 'Package Price', name: '₹8,499 / Person', blurb: 'A 2-night offbeat Himalayan experience through the remote landscapes of Churah Valley.' },
]},
{ label: 'Includes', title: 'Package Includes', stops: [
  { time: 'Included', name: 'Delhi–Churah–Delhi Transportation', blurb: 'Round-trip transportation between Delhi and Churah Valley.' },
  { time: 'Included', name: '2 Nights Homestay', blurb: 'Village or homestay accommodation for two nights.' },
  { time: 'Included', name: '2 Breakfasts', blurb: 'Daily breakfast during the stay.' },
  { time: 'Included', name: '2 Dinners', blurb: 'Dinner included on both nights.' },
  { time: 'Included', name: 'Local Sightseeing', blurb: 'Explore the scenic villages, forests, streams and viewpoints of Churah Valley.' },
  { time: 'Included', name: 'Village & Nature Trail', blurb: 'Experience a locally selected village and nature trail.' },
  { time: 'Included', name: 'Bonfire & Stargazing', blurb: 'Enjoy a memorable Himalayan evening with bonfire and stargazing.' },
  { time: 'Included', name: 'Trip Coordination', blurb: 'Complete trip coordination by the Compaspanion team.' },
]},
{ label: 'Excludes', title: 'Not Included', stops: [
  { time: 'Excluded', name: 'Lunches', blurb: 'Lunches are not included in the package.' },
  { time: 'Excluded', name: 'Personal Expenses', blurb: 'Personal shopping and other individual expenses are excluded.' },
  { time: 'Excluded', name: 'Café Bills', blurb: 'Food and beverages purchased at cafés are not included.' },
  { time: 'Excluded', name: 'Adventure Activities', blurb: 'Optional adventure activities are not included.' },
  { time: 'Excluded', name: 'Optional Local Activities', blurb: 'Any optional local activities outside the planned itinerary are excluded.' },
  { time: 'Excluded', name: 'Porter Charges', blurb: 'Porter or luggage-handling charges, if required, are not included.' },
  { time: 'Excluded', name: 'Anything Else', blurb: 'Any service or expense not specifically mentioned under inclusions is excluded.' },
]},
        ]
      },
      squad: {
        tag: '🥾 Trekking Expedition',
        title: 'Rajgundha Escape',
        subtitle: 'Hidden trails, village life & slow days in the Himalayan wilderness',
        hero: 'images/rajgundha.webp',
        meta: [
          { label: 'Duration', value: '3 Days / 2 Nights' },
          { label: 'From', value: '₹7,999/person' },
          { label: 'Difficulty', value: 'Easy–Moderate' },
        ],
        
        gallery: ['images/rajgundha1.jpg', 'images/rajgundha2.jpg', 'images/rajgundha3.jpg', 'images/spiti.jpg'],
        days: [
          { label: 'Day 0', title: 'Delhi → Bir / Billing', stops: [
  { time: '7:00–8:00 PM', name: 'Meet & Boarding', blurb: 'Meet the group in Delhi, board the Traveller and get ready for an offbeat Himalayan adventure.' },
  { time: 'Evening', name: 'Introductions & Travel Games', blurb: 'Break the ice with introductions, travel games and a curated journey playlist.' },
  { time: 'Night', name: 'Overnight Drive', blurb: 'Enjoy a dinner stop at your own expense before continuing the overnight journey towards Bir.' },
]},
{ label: 'Day 1', title: 'Bir → Billing → Rajgundha', stops: [
  { time: '6:30–8:00 AM', name: 'Reach Bir / Billing', blurb: 'Arrive in Bir/Billing, enjoy breakfast and freshen up before beginning the day.' },
  { time: '8:30 AM', name: 'Transfer to Trek Point', blurb: 'Take a local transfer towards the Rajgundha trek starting point, with the final roadhead depending on current road and local access conditions.' },
  { time: '10:00 AM', name: 'The Trek Begins', blurb: 'Begin the 3–5 hour trek towards Rajgundha Valley, with timing depending on the starting point, weather, trail conditions and group pace.' },
  { time: 'Morning', name: 'Through the Himalayan Trail', blurb: 'Walk through pine and deodar forests, mountain ridges, open meadows, remote villages and incredible valley viewpoints.' },
  { time: '2:00–3:00 PM', name: 'Arrive in Rajgundha', blurb: 'Reach the campsite or homestay, enjoy a welcome chai, check in, have lunch and rest.' },
  { time: '5:00 PM', name: 'Golden Hour', blurb: 'Take a short walk around the village and find a quiet viewpoint to watch the sunset.' },
  { time: '7:30 PM', name: 'Compaspanion Night', blurb: 'Gather around a bonfire where permitted, enjoy music, group games, stargazing, stories and dinner.' },
]},
{ label: 'Day 2', title: 'Rajgundha — No Tourist Checklist', stops: [
  { time: '6:30 AM', name: 'Sunrise Walk', blurb: 'Wake up to panoramic mountain views and take a peaceful short walk around the valley.' },
  { time: '8:00 AM', name: 'Local Breakfast', blurb: 'Enjoy a fresh local breakfast with a warm cup of chai.' },
  { time: '9:00 AM', name: 'Valley Exploration', blurb: 'Explore Rajgundha on an easy 2–3 hour local route through the village, forests, meadows, ridge viewpoints and safely accessible stream sections.' },
  { time: '12:30 PM', name: 'Lunch', blurb: 'Return to the camp or homestay for a relaxed lunch.' },
  { time: '1:30–3:30 PM', name: 'Digital Detox', blurb: 'Slow down with hammock time, journaling, photography, cards, board games, conversations or simply doing nothing.' },
  { time: '4:00 PM', name: 'Final Valley Sunset', blurb: 'Take a short walk to a nearby viewpoint and enjoy one final golden-hour view of Rajgundha Valley.' },
  { time: '5:00 PM', name: 'Return to Roadhead', blurb: 'Begin the trek back towards the roadhead before darkness sets in.' },
  { time: '6:30–7:30 PM', name: 'Journey to Delhi', blurb: 'Transfer back to Bir/Billing, board the Traveller, stop for dinner en route and begin the overnight journey towards Delhi.' },
]},
{ label: 'Day 3', title: 'Delhi Arrival', stops: [
  { time: 'Morning', name: 'Reach Delhi', blurb: 'Arrive in Delhi at approximately 6:00–9:00 AM, depending on traffic and road conditions.' },
  { time: 'Morning', name: 'Trip Ends', blurb: 'Wrap up the Rajgundha escape with mountain memories, photographs and new friendships.' },
]},
{ label: 'Price', title: 'Rajgundha Escape', stops: [
  { time: 'Per Person', name: '₹7,999 / Person', blurb: 'A complete offbeat Himalayan experience combining trekking, village life, nature and digital detox.' },
]},
{ label: 'Includes', title: 'Package Includes', stops: [
  { time: 'Included', name: 'Delhi–Bir–Delhi Transportation', blurb: 'Round-trip transportation between Delhi and Bir/Billing.' },
  { time: 'Included', name: 'Local Trek Transfer', blurb: 'Local transfer to and from the Rajgundha trek starting point.' },
  { time: 'Included', name: '2 Nights Rajgundha Stay', blurb: 'Two nights at a Rajgundha campsite or homestay.' },
  { time: 'Included', name: '2 Breakfasts & 2 Dinners', blurb: 'Daily breakfast and dinner during the stay.' },
  { time: 'Included', name: 'Rajgundha Trek', blurb: 'Guided experience along the scenic Rajgundha Valley trail.' },
  { time: 'Included', name: 'Local Valley Exploration', blurb: 'Easy local exploration through villages, forests, meadows and viewpoints.' },
  { time: 'Included', name: 'Bonfire & Stargazing', blurb: 'Enjoy a Himalayan evening with bonfire where permitted and stargazing.' },
  { time: 'Included', name: 'Trip Coordination', blurb: 'Complete trip coordination by the Compaspanion team.' },
]},
{ label: 'Excludes', title: 'Not Included', stops: [
  { time: 'Excluded', name: 'Lunches', blurb: 'Lunches are not included in the package.' },
  { time: 'Excluded', name: 'Personal Expenses', blurb: 'Personal shopping and other individual expenses are excluded.' },
  { time: 'Excluded', name: 'Porter Charges', blurb: 'Porter charges for personal luggage are not included.' },
  { time: 'Excluded', name: 'Adventure Activities', blurb: 'Optional adventure activities are not included.' },
  { time: 'Excluded', name: 'Café & Restaurant Expenses', blurb: 'Personal café and restaurant expenses outside the included meals are excluded.' },
  { time: 'Excluded', name: 'Anything Else', blurb: 'Any service or expense not specifically mentioned under inclusions is excluded.' },
]},
        ]
      },
      meghalaya: {
  tag: '🌿 Meghalaya',
  title: 'Meghalaya — Chase Water, Not Checklists',
  subtitle: 'Waterfalls, living root bridges, crystal rivers & slow mountain travel',
  hero: 'images/meghalaya (1).jpg',
  meta: [
    { label: 'Duration', value: '6 Days 5 Nights' },
    { label: 'Solo', value: '₹20,999/person' },
    { label: 'Couple', value: '₹40,999/person' },
    { label: 'Group of 12', value: '₹15,499/person' },
  ],
  gallery: [
    'images/meghalaya (5).jpg',
    'images/meghalaya (2).jpg',
    'images/meghalaya (3).jpg',
    'images/meghalaya (4).jpg'
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Guwahati → Shillong',
      stops: [
        { time: 'Morning/Afternoon', name: 'Delhi → Guwahati', blurb: 'Begin the journey from Delhi towards Guwahati.' },
        { time: 'Afternoon', name: 'Meet Local Vehicle', blurb: 'Meet your local vehicle at Guwahati and begin the drive towards Shillong.' },
        { time: 'Evening', name: 'Shillong Check-in', blurb: 'Check into your Shillong stay and settle in.' },
        { time: 'Evening', name: 'Café & Market Walk', blurb: 'Explore Shillong cafés and the local market at an easy pace.' },
        { time: 'Night', name: 'Dinner', blurb: 'Enjoy dinner and rest for the adventure ahead.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Shillong → Sohra',
      stops: [
        { time: 'Morning', name: 'Laitlum Canyon', blurb: 'Begin the day with a dramatic valley viewpoint before entering the waterfall circuit.' },
        { time: 'Afternoon', name: 'Wei Sawdong Falls', blurb: 'Visit the beautiful Wei Sawdong waterfall.' },
        { time: 'Afternoon', name: 'Nohkalikai Falls', blurb: 'Witness one of Meghalaya’s iconic waterfalls.' },
        { time: 'Afternoon', name: 'Seven Sisters Viewpoint', blurb: 'Stop for panoramic views across the famous Seven Sisters landscape.' },
        { time: 'Evening', name: 'Sohra Sunset', blurb: 'Reach your stay around Sohra and settle in.' },
        { time: 'Night', name: 'Bonfire & Stargazing', blurb: 'Enjoy a local dinner, bonfire and stargazing.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Nongriat Day',
      stops: [
        { time: '6:00 AM', name: 'Breakfast & Drive', blurb: 'Have breakfast and drive towards Tyrna.' },
        { time: '7:30 AM', name: 'Nongriat Trek', blurb: 'Trek through the rainforest towards the famous Double-Decker Living Root Bridge.' },
        { time: 'Morning', name: 'Double-Decker Living Root Bridge', blurb: 'Spend time at one of Meghalaya’s most iconic natural structures.' },
        { time: 'Optional', name: 'Rainbow Falls', blurb: 'Continue towards Rainbow Falls if trail and weather conditions permit.' },
        { time: 'Afternoon', name: 'Local Homestay Lunch', blurb: 'Enjoy lunch at a local homestay.' },
        { time: 'Afternoon', name: 'Return Trek', blurb: 'Begin the trek back before late afternoon.' },
        { time: 'Evening', name: 'Sohra', blurb: 'Return to Sohra for dinner and rest.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Sohra → Mawlynnong → Dawki',
      stops: [
        { time: 'Morning', name: 'Mawlynnong Village', blurb: 'Explore the village, local lanes and viewpoints.' },
        { time: 'Morning', name: 'Riwai Living Root Bridge', blurb: 'Visit the Living Root Bridge at Riwai.' },
        { time: 'Afternoon', name: 'Dawki', blurb: 'Drive towards Dawki and the crystal-clear river region.' },
        { time: 'Afternoon', name: 'Shnongpdeng', blurb: 'Spend the evening around Shnongpdeng rather than making only a quick Dawki stop.' },
        { time: 'Optional', name: 'River Activities', blurb: 'Kayaking, boating or riverside relaxation depending on weather and water conditions.' },
        { time: 'Evening', name: 'Riverside Sunset', blurb: 'Watch the sunset beside the river.' },
        { time: 'Night', name: 'Camp & Bonfire', blurb: 'Stay at a camp or homestay with a bonfire.' }
      ]
    },
    {
      label: 'Day 4',
      title: 'Shnongpdeng → Shillong',
      stops: [
        { time: 'Morning', name: 'River Morning', blurb: 'Enjoy a slow breakfast beside the river.' },
        { time: 'Morning', name: 'Kayaking / Boat Ride', blurb: 'Optional kayaking, short boat ride or riverside photography.' },
        { time: '11:00 AM', name: 'Drive to Shillong', blurb: 'Begin the journey towards Shillong.' },
        { time: 'Afternoon', name: 'Shillong Check-in', blurb: 'Check into the accommodation and relax.' },
        { time: 'Evening', name: 'Police Bazaar', blurb: 'Explore Police Bazaar and local cafés.' },
        { time: 'Night', name: 'Shillong Nightlife', blurb: 'Experience Shillong food and nightlife before the final day.' }
      ]
    },
    {
      label: 'Day 5',
      title: 'Shillong → Guwahati → Delhi',
      stops: [
        { time: 'Morning', name: 'Shillong Peak', blurb: 'Optional stop at Shillong Peak if time permits.' },
        { time: 'Morning', name: 'Elephant Falls', blurb: 'Optional visit to Elephant Falls depending on available time.' },
        { time: 'Afternoon', name: 'Drive to Guwahati', blurb: 'Drive towards Guwahati Airport.' },
        { time: 'Evening', name: 'Guwahati → Delhi', blurb: 'Fly back from Guwahati to Delhi.' },
        { time: 'Night', name: 'Trip Ends', blurb: 'Return to Delhi with memories of Meghalaya.' }
      ]
    },
    {
      label: 'Package',
      title: 'Package Includes',
      stops: [
        { time: 'Included', name: 'Guwahati–Meghalaya–Guwahati Transport', blurb: 'Transportation throughout the Meghalaya itinerary.' },
        { time: 'Included', name: '5 Nights Accommodation', blurb: 'Accommodation for five nights.' },
        { time: 'Included', name: 'Meals', blurb: '5 breakfasts and 5 dinners.' },
        { time: 'Included', name: 'Sohra Sightseeing', blurb: 'Sightseeing around Sohra and its waterfalls.' },
        { time: 'Included', name: 'Nongriat Trek Logistics', blurb: 'Logistics for the Nongriat trek.' },
        { time: 'Included', name: 'Mawlynnong & Riwai', blurb: 'Mawlynnong and Riwai experiences.' },
        { time: 'Included', name: 'Dawki & Shnongpdeng', blurb: 'Dawki and Shnongpdeng experience.' },
        { time: 'Included', name: 'Bonfire & Coordinator', blurb: 'Bonfire and CompasPanion trip coordination.' }
      ]
    },
    {
      label: 'Exclusions',
      title: 'Not Included',
      stops: [
        { time: 'Excluded', name: 'Delhi–Guwahati Flights', blurb: 'Flights are excluded unless specifically added.' },
        { time: 'Excluded', name: 'Lunches', blurb: 'Lunches are not included.' },
        { time: 'Excluded', name: 'Personal Expenses', blurb: 'Personal expenses are excluded.' },
        { time: 'Excluded', name: 'Optional Activities', blurb: 'Adventure activities beyond the included allowance are excluded.' },
        { time: 'Excluded', name: 'Rainbow Falls Extension', blurb: 'The optional Rainbow Falls extension is not included.' },
        { time: 'Excluded', name: 'Travel Insurance', blurb: 'Travel insurance is excluded.' }
      ]
    }
  ]
},

nepal: {
  tag: '🇳🇵 Nepal',
  title: 'Nepal — From Himalayas to Jungle',
  subtitle: 'Mountains, lakes, jungle, culture & unforgettable road journeys',
  hero: 'images/nepal (1).jpg',
  meta: [
    { label: 'Duration', value: '7 Days 6 Nights' },
    { label: 'Solo Shared', value: '₹27,999' },
    { label: 'Solo Private', value: '₹31,999' },
    { label: 'Couple', value: '₹49,999/couple' },
    { label: 'Group of 12', value: '₹24,999/person' }
  ],
  gallery: [
    'images/nepal (5).jpg',
   'images/nepal (2).jpg',
   'images/nepal (3).jpg',
   'images/nepal (4).jpg',
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Sunauli Border',
      stops: [
        { time: '6:00–7:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Overnight Journey', blurb: 'Begin the overnight journey towards the Nepal border.' },
        { time: 'Night', name: 'Dinner Stop', blurb: 'Stop for dinner en route.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Sunauli → Lumbini → Pokhara',
      stops: [
        { time: 'Morning', name: 'Enter Nepal', blurb: 'Cross into Nepal and have breakfast.' },
        { time: 'Morning', name: 'Lumbini', blurb: 'Visit the birthplace of Buddha.' },
        { time: 'Morning', name: 'Maya Devi Temple', blurb: 'Explore the Maya Devi Temple area.' },
        { time: 'Morning', name: 'Peace Park & Monasteries', blurb: 'Explore the peaceful monastic surroundings.' },
        { time: 'Afternoon', name: 'Drive to Pokhara', blurb: 'Continue the scenic road journey towards Pokhara.' },
        { time: 'Evening', name: 'Phewa Lake Sunset', blurb: 'Walk around Lakeside and enjoy the sunset at Phewa Lake.' },
        { time: 'Night', name: 'Pokhara', blurb: 'Café hopping and overnight stay in Pokhara.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Pokhara — Mountains + Adventure',
      stops: [
        { time: '5:00 AM', name: 'Sarangkot Sunrise', blurb: 'Drive to Sarangkot for sunrise and Himalayan views.' },
        { time: 'Morning', name: 'Breakfast', blurb: 'Return for breakfast.' },
        { time: 'Late Morning', name: 'World Peace Pagoda', blurb: 'Visit the World Peace Pagoda and Phewa Lake.' },
        { time: 'Afternoon', name: 'Adventure Time', blurb: 'Optional paragliding, zipline, ATV or boating.' },
        { time: 'Evening', name: 'Phewa Lake Sunset', blurb: 'Enjoy sunset and lakeside dinner.' },
        { time: 'Night', name: 'Bonfire', blurb: 'Optional group bonfire.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Pokhara → Bandipur → Chitwan',
      stops: [
        { time: 'Morning', name: 'Bandipur', blurb: 'Stop at the beautiful hilltop Newari town.' },
        { time: 'Morning', name: 'Old Bazaar', blurb: 'Explore traditional architecture and the old bazaar.' },
        { time: 'Morning', name: 'Mountain Viewpoints', blurb: 'Enjoy mountain views from Bandipur.' },
        { time: 'Afternoon', name: 'Drive to Chitwan', blurb: 'Continue towards the jungle region.' },
        { time: 'Evening', name: 'Village Walk', blurb: 'Explore the village around Chitwan.' },
        { time: 'Evening', name: 'Tharu Cultural Experience', blurb: 'Experience local Tharu culture.' }
      ]
    },
    {
      label: 'Day 4',
      title: 'Chitwan Jungle Day',
      stops: [
        { time: 'Morning', name: 'Jungle Experience', blurb: 'Choose according to current park rules and availability.' },
        { time: 'Morning', name: 'Jeep Safari', blurb: 'Optional jungle safari experience.' },
        { time: 'Morning', name: 'Canoe / Jungle Walk', blurb: 'Explore the jungle through canoeing or walking.' },
        { time: 'Afternoon', name: 'Rest', blurb: 'Lunch and relaxed afternoon at the resort.' },
        { time: 'Evening', name: 'Tharu Cultural Program', blurb: 'Enjoy traditional dance and dinner.' },
        { time: 'Night', name: 'Bonfire', blurb: 'Bonfire at the resort.' }
      ]
    },
    {
      label: 'Day 5',
      title: 'Chitwan → Kathmandu',
      stops: [
        { time: 'Morning', name: 'Breakfast & Check-out', blurb: 'Begin the journey towards Kathmandu.' },
        { time: 'Afternoon', name: 'Kathmandu Check-in', blurb: 'Check into the Kathmandu accommodation.' },
        { time: 'Evening', name: 'Thamel', blurb: 'Explore cafés, shopping, street food and souvenirs.' },
        { time: 'Night', name: 'Group Dinner', blurb: 'Enjoy a group dinner in Kathmandu.' }
      ]
    },
    {
      label: 'Day 6',
      title: 'Kathmandu — Culture + Hidden Corners',
      stops: [
        { time: 'Morning', name: 'Pashupatinath Temple', blurb: 'Visit one of Kathmandu’s most important temples.' },
        { time: 'Morning', name: 'Boudhanath Stupa', blurb: 'Explore the iconic Buddhist stupa.' },
        { time: 'Morning', name: 'Swayambhunath', blurb: 'Visit Swayambhunath and its surrounding heritage.' },
        { time: 'Afternoon', name: 'Newari Lunch', blurb: 'Enjoy traditional Newari cuisine.' },
        { time: 'Evening', name: 'Kirtipur / Patan', blurb: 'Explore courtyards, temples, local food and traditional architecture.' },
        { time: 'Night', name: 'Farewell Dinner', blurb: 'Final dinner with a rooftop Kathmandu view.' }
      ]
    },
    {
      label: 'Day 7',
      title: 'Kathmandu → Delhi',
      stops: [
        { time: 'Morning', name: 'Breakfast & Check-out', blurb: 'Prepare for the return journey.' },
        { time: 'Day', name: 'Nepal → India Border', blurb: 'Drive towards the Nepal–India border.' },
        { time: 'Evening/Night', name: 'Delhi Journey', blurb: 'Cross into India and continue towards Delhi.' },
        { time: 'Night', name: 'Delhi Arrival', blurb: 'Expected late-night or early Saturday arrival.' }
      ]
    },
    {
      label: 'Package',
      title: 'Package Includes',
      stops: [
        { time: 'Included', name: 'Delhi–Nepal–Delhi Transportation', blurb: 'Round-trip transportation from Delhi.' },
        { time: 'Included', name: '6 Nights Accommodation', blurb: 'Accommodation throughout the journey.' },
        { time: 'Included', name: 'Daily Breakfast', blurb: 'Daily breakfast.' },
        { time: 'Included', name: '6 Dinners', blurb: 'Six dinners included.' },
        { time: 'Included', name: 'Kathmandu & Pokhara Sightseeing', blurb: 'Sightseeing in both major destinations.' },
        { time: 'Included', name: 'Sarangkot Sunrise', blurb: 'Sarangkot sunrise experience.' },
        { time: 'Included', name: 'Bandipur & Chitwan', blurb: 'Bandipur visit and Chitwan jungle experience.' },
        { time: 'Included', name: 'Tharu Cultural Experience', blurb: 'Traditional cultural experience.' }
      ]
    },
    {
      label: 'Exclusions',
      title: 'Not Included',
      stops: [
        { time: 'Excluded', name: 'Lunches', blurb: 'Lunches are not included.' },
        { time: 'Excluded', name: 'Flights', blurb: 'Flights are not included.' },
        { time: 'Excluded', name: 'Personal Shopping', blurb: 'Shopping and personal expenses are excluded.' },
        { time: 'Excluded', name: 'Adventure Activities', blurb: 'Paragliding, zipline and similar optional activities are excluded.' },
        { time: 'Excluded', name: 'Travel Insurance', blurb: 'Travel insurance is excluded.' },
        { time: 'Excluded', name: 'Visa / Passport Costs', blurb: 'Visa or passport-related costs, if applicable, are excluded.' }
      ]
    }
  ]
},

uppermustang: {
  tag: '🏜️ Upper Mustang',
  title: 'Upper Mustang — The Forbidden Kingdom',
  subtitle: 'High-altitude desert, ancient monasteries, cave settlements & the Lost Kingdom',
  hero: 'images/mustang.jpg',
  meta: [
    { label: 'Duration', value: '13 Days 12 Nights' },
    { label: 'Solo', value: '₹1,34,999' },
    { label: 'Couple', value: '₹2,49,999/couple' },
    { label: 'Group of 12', value: '₹1,24,999/person' }
  ],
  gallery: [
    'images/mustang.jpg',
    'images/mustang (3).jpg',
    'images/mustang (2).jpg',
    'images/mustang (4).jpg'
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Kathmandu',
      stops: [
        { time: 'Morning/Afternoon', name: 'Delhi → Kathmandu', blurb: 'Fly from Delhi to Kathmandu.' },
        { time: 'Afternoon', name: 'Airport Pickup', blurb: 'Transfer to the hotel and check in.' },
        { time: 'Evening', name: 'Thamel', blurb: 'Explore Thamel and enjoy the welcome dinner.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Kathmandu',
      stops: [
        { time: 'Morning', name: 'Pashupatinath', blurb: 'Visit Pashupatinath Temple.' },
        { time: 'Morning', name: 'Boudhanath', blurb: 'Explore Boudhanath Stupa.' },
        { time: 'Afternoon', name: 'Patan Durbar Square', blurb: 'Explore the historic square and traditional architecture.' },
        { time: 'Evening', name: 'Trek Briefing', blurb: 'Complete briefing, permit/document check and gear check.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Kathmandu → Pokhara',
      stops: [
        { time: 'Morning', name: 'Kathmandu → Pokhara', blurb: 'Drive or fly to Pokhara depending on the group plan.' },
        { time: 'Afternoon', name: 'Pokhara Check-in', blurb: 'Check into the accommodation.' },
        { time: 'Afternoon', name: 'Phewa Lake', blurb: 'Relax around Phewa Lake and Lakeside.' },
        { time: 'Evening', name: 'Sunset Boat Ride', blurb: 'Enjoy a sunset boat ride followed by dinner.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Pokhara → Jomsom → Kagbeni',
      stops: [
        { time: 'Early Morning', name: 'Pokhara → Jomsom', blurb: 'Take the mountain flight from Pokhara to Jomsom.' },
        { time: 'Morning', name: 'Jomsom → Kagbeni', blurb: 'Drive or trek towards Kagbeni.' },
        { time: 'Afternoon', name: 'Kagbeni', blurb: 'Explore ancient lanes and Tibetan-influenced architecture.' },
        { time: 'Evening', name: 'Kali Gandaki Valley', blurb: 'Enjoy the landscape and sunset around the valley.' }
      ]
    },
    {
      label: 'Day 4',
      title: 'Kagbeni → Chele',
      stops: [
        { time: 'Morning', name: 'Upper Mustang Entry', blurb: 'Enter the Upper Mustang restricted region after the permit checkpoint.' },
        { time: 'Morning', name: 'Tangbe', blurb: 'Continue through traditional Mustang landscapes.' },
        { time: 'Afternoon', name: 'Chhusang', blurb: 'Travel through dry cliffs, canyons and Tibetan-style villages.' },
        { time: 'Evening', name: 'Chele', blurb: 'Explore the village and enjoy the sunset.' }
      ]
    },
    {
      label: 'Day 5',
      title: 'Chele → Syangbochen → Ghami',
      stops: [
        { time: 'Morning', name: 'High Mountain Passes', blurb: 'Continue through high passes, red cliffs and canyons.' },
        { time: 'Afternoon', name: 'Ghami', blurb: 'Reach the remote village of Ghami.' },
        { time: 'Evening', name: 'Ghami Monastery', blurb: 'Explore the ancient monastery and traditional houses.' }
      ]
    },
    {
      label: 'Day 6',
      title: 'Ghami → Tsarang',
      stops: [
        { time: 'Morning', name: 'Mani Walls', blurb: 'Continue towards Tsarang through traditional Mustang landscapes.' },
        { time: 'Afternoon', name: 'Tsarang', blurb: 'Explore monasteries and traditional Mustang architecture.' },
        { time: 'Evening', name: 'Tsarang Palace Area', blurb: 'Visit the palace and monastery area.' },
        { time: 'Sunset', name: 'High-Desert Sunset', blurb: 'Experience the dramatic Mustang sunset.' }
      ]
    },
    {
      label: 'Day 7',
      title: 'Tsarang → Lo Manthang',
      stops: [
        { time: 'Morning', name: 'Drive to Lo Manthang', blurb: 'Travel towards the historic walled capital of the former Kingdom of Lo.' },
        { time: 'Afternoon', name: 'Lo Manthang', blurb: 'Enter the ancient walled city and explore its narrow alleys.' },
        { time: 'Evening', name: 'Lo Manthang Sunset', blurb: 'Watch the sunset around the ancient city.' },
        { time: 'Night', name: 'Group Dinner', blurb: 'Enjoy a group dinner in Lo Manthang.' }
      ]
    },
    {
      label: 'Day 8',
      title: 'Lo Manthang Exploration',
      stops: [
        { time: 'Morning', name: 'Jampa Gompa', blurb: 'Explore the historic monastery.' },
        { time: 'Morning', name: 'Thubchen Gompa', blurb: 'Visit another important monastery of Lo Manthang.' },
        { time: 'Morning', name: 'Chodey Gompa', blurb: 'Explore the cultural and religious heritage of the city.' },
        { time: 'Afternoon', name: 'Chhoser Excursion', blurb: 'Visit cave settlements and remote villages around Chhoser.' },
        { time: 'Evening', name: 'Return to Lo Manthang', blurb: 'Return to the walled city for the night.' }
      ]
    },
    {
      label: 'Day 9',
      title: 'Lo Manthang → Dhakmar',
      stops: [
        { time: 'Morning', name: 'Return Route', blurb: 'Take a different route back if road conditions permit.' },
        { time: 'Day', name: 'High Passes & Red Cliffs', blurb: 'Travel through dramatic high passes and red cliffs.' },
        { time: 'Evening', name: 'Dhakmar', blurb: 'Reach Dhakmar and experience its famous red cliffs.' }
      ]
    },
    {
      label: 'Day 10',
      title: 'Dhakmar → Kagbeni / Jomsom',
      stops: [
        { time: 'Morning', name: 'Lower Mustang', blurb: 'Begin descending through Lower Mustang.' },
        { time: 'Day', name: 'Ghami → Tsarang → Chhusang', blurb: 'Pass through major Mustang settlements.' },
        { time: 'Evening', name: 'Kagbeni / Jomsom', blurb: 'Overnight depending on road conditions and group pace.' }
      ]
    },
    {
      label: 'Day 11',
      title: 'Jomsom → Pokhara',
      stops: [
        { time: 'Morning', name: 'Jomsom → Pokhara', blurb: 'Take the early flight subject to weather.' },
        { time: 'Afternoon', name: 'Rest', blurb: 'Check in and relax at the hotel.' },
        { time: 'Afternoon', name: 'Spa / Pool', blurb: 'Enjoy some recovery time after the expedition.' },
        { time: 'Evening', name: 'Lakeside', blurb: 'Relax at a Lakeside café.' },
        { time: 'Night', name: 'Farewell Dinner', blurb: 'Enjoy the final Pokhara evening.' }
      ]
    },
    {
      label: 'Day 12',
      title: 'Pokhara → Kathmandu → Delhi',
      stops: [
        { time: 'Morning', name: 'Pokhara → Kathmandu', blurb: 'Fly or drive back to Kathmandu.' },
        { time: 'Afternoon', name: 'Last-minute Shopping', blurb: 'Use the remaining time for shopping and lunch.' },
        { time: 'Afternoon', name: 'Kathmandu Airport', blurb: 'Transfer to the airport.' },
        { time: 'Evening', name: 'Kathmandu → Delhi', blurb: 'Fly back to Delhi.' }
      ]
    }
  ]
},

uppermustangborder: {
  tag: '🇳🇵 Upper Mustang',
  title: 'Upper Mustang — Beyond the Himalayas',
  subtitle: 'A flagship 4×4 expedition into Nepal’s ancient Himalayan desert kingdom',
  hero: 'images/mustang.jpg',
  meta: [
    { label: 'Duration', value: '10 Days 9 Nights' },
    { label: 'Solo', value: '₹1,19,999' },
    { label: 'Couple', value: '₹2,19,999/couple' },
    { label: 'Group of 12', value: '₹1,09,999/person' }
  ],
  gallery: [
   'images/mustang.jpg',
    'images/mustang (3).jpg',
    'images/mustang (2).jpg',
    'images/mustang (4).jpg'
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Sunauli → Pokhara',
      stops: [
        { time: 'Morning', name: 'Enter Nepal', blurb: 'Begin the Upper Mustang expedition from the Nepal border.' },
        { time: 'Day', name: 'Drive to Pokhara', blurb: 'Continue towards Pokhara.' },
        { time: 'Evening', name: 'Pokhara', blurb: 'Check in and relax.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Pokhara',
      stops: [
        { time: 'Morning', name: 'Pokhara', blurb: 'Enjoy a relaxed morning around Pokhara.' },
        { time: 'Afternoon', name: 'Phewa Lake', blurb: 'Explore Lakeside and Phewa Lake.' },
        { time: 'Evening', name: 'Preparation', blurb: 'Prepare for the Upper Mustang expedition.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Pokhara → Jomsom → Kagbeni',
      stops: [
        { time: 'Morning', name: 'Pokhara → Jomsom', blurb: 'Fly from Pokhara to Jomsom.' },
        { time: 'Day', name: 'Kagbeni', blurb: 'Travel towards Kagbeni and explore the ancient village.' },
        { time: 'Evening', name: 'Kagbeni', blurb: 'Experience the traditional Mustang landscape.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Kagbeni → Chele',
      stops: [
        { time: 'Morning', name: 'Restricted Region', blurb: 'Enter Upper Mustang after the required permit checkpoint.' },
        { time: 'Day', name: 'Tangbe → Chhusang', blurb: 'Travel through dry cliffs, canyons and traditional villages.' },
        { time: 'Evening', name: 'Chele', blurb: 'Explore Chele and its surrounding landscapes.' }
      ]
    },
    {
      label: 'Day 4',
      title: 'Chele → Ghami',
      stops: [
        { time: 'Morning', name: 'High Passes', blurb: 'Cross high mountain passes and dramatic red cliffs.' },
        { time: 'Afternoon', name: 'Ghami', blurb: 'Reach Ghami and explore its traditional settlement.' },
        { time: 'Evening', name: 'Ghami Monastery', blurb: 'Visit the ancient monastery and village.' }
      ]
    },
    {
      label: 'Day 5',
      title: 'Ghami → Tsarang',
      stops: [
        { time: 'Morning', name: 'Mani Walls', blurb: 'Continue through traditional Mustang landscapes.' },
        { time: 'Afternoon', name: 'Tsarang', blurb: 'Explore Tsarang and its ancient monasteries.' },
        { time: 'Sunset', name: 'High Desert Sunset', blurb: 'Experience the dramatic Mustang sunset.' }
      ]
    },
    {
      label: 'Day 6',
      title: 'Tsarang → Lo Manthang',
      stops: [
        { time: 'Morning', name: 'Lo Manthang', blurb: 'Drive towards the historic walled capital of the former Kingdom of Lo.' },
        { time: 'Afternoon', name: 'Walled City', blurb: 'Explore narrow alleys and traditional Tibetan architecture.' },
        { time: 'Evening', name: 'Lo Manthang', blurb: 'Enjoy sunset and a relaxed evening.' }
      ]
    },
    {
      label: 'Day 7',
      title: 'Lo Manthang → Chhoser → Dhakmar',
      stops: [
        { time: 'Morning', name: 'Lo Manthang', blurb: 'Explore the cultural heart of Upper Mustang.' },
        { time: 'Afternoon', name: 'Chhoser', blurb: 'Visit ancient cave settlements and monasteries.' },
        { time: 'Evening', name: 'Dhakmar', blurb: 'Continue towards Dhakmar and its red cliffs.' }
      ]
    },
    {
      label: 'Day 8',
      title: 'Dhakmar → Kagbeni → Jomsom',
      stops: [
        { time: 'Morning', name: 'Lower Mustang', blurb: 'Descend through the dramatic Lower Mustang landscape.' },
        { time: 'Day', name: 'Kagbeni', blurb: 'Pass through Kagbeni on the return route.' },
        { time: 'Evening', name: 'Jomsom', blurb: 'Reach Jomsom for the night.' }
      ]
    },
    {
      label: 'Day 9',
      title: 'Jomsom → Pokhara → Sunauli',
      stops: [
        { time: 'Morning', name: 'Jomsom → Pokhara', blurb: 'Fly back to Pokhara subject to weather.' },
        { time: 'Day', name: 'Pokhara → Sunauli', blurb: 'Begin the return road journey towards the Nepal border.' },
        { time: 'Night', name: 'Sunauli', blurb: 'Complete the Upper Mustang expedition.' }
      ]
    },
    {
      label: 'Package',
      title: 'Package Includes',
      stops: [
        { time: 'Included', name: 'Sunauli–Pokhara–Sunauli Transport', blurb: 'Transportation from the Nepal border.' },
        { time: 'Included', name: 'Accommodation', blurb: 'Pokhara and Upper Mustang accommodation.' },
        { time: 'Included', name: 'Pokhara–Jomsom Flights', blurb: 'Round-trip flights between Pokhara and Jomsom.' },
        { time: 'Included', name: '4WD Mustang Transportation', blurb: '4WD transportation throughout Upper Mustang.' },
        { time: 'Included', name: 'Restricted-Area Permit', blurb: 'Upper Mustang restricted-area permit.' },
        { time: 'Included', name: 'Licensed Local Guide', blurb: 'Local guide and support staff.' },
        { time: 'Included', name: 'Breakfast & Dinner', blurb: 'Daily breakfast and dinner.' }
      ]
    }
  ]
},

tungnath: {
  tag: '🏔️ Tungnath',
  title: 'Tungnath & Chandrashila',
  subtitle: 'Mountain trek, sunrise, meadows, forests, bonfire & Himalayan views',
  hero: 'images/tungnath.jpg',
  meta: [
    { label: 'Duration', value: '4 Days 3 Nights' },
    { label: 'Solo Shared', value: '₹7,999/person' },
    { label: 'Solo Private', value: '₹9,499/person' },
    { label: 'Couple', value: '₹15,999/couple' },
    { label: 'Group of 12', value: '₹7,999/person' }
  ],
  gallery: [
    'images/tungnath (4).jpg',
    'images/tungnath (2).jpg',
    'images/tungnath (3).jpg',
   'images/tungnath (5).jpg',

  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Chopta',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Traveller.' },
        { time: 'Evening', name: 'Group Games', blurb: 'Get to know the group through introductions and travel games.' },
        { time: 'Night', name: 'Overnight Journey', blurb: 'Travel overnight towards Chopta.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Delhi → Chopta',
      stops: [
        { time: 'Morning', name: 'Breakfast Stop', blurb: 'Stop for breakfast while continuing towards Garhwal.' },
        { time: 'Day', name: 'Devprayag', blurb: 'Stop at the confluence of the Alaknanda and Bhagirathi rivers.' },
        { time: 'Day', name: 'Rudraprayag', blurb: 'Continue through the Himalayan landscape.' },
        { time: 'Afternoon', name: 'Chopta Check-in', blurb: 'Reach Chopta/Sari-Ukhimath region and check in.' },
        { time: 'Evening', name: 'Forest Walk', blurb: 'Enjoy a short relaxed walk around the forests and meadows.' },
        { time: 'Night', name: 'Bonfire & Stargazing', blurb: 'Enjoy dinner, music, group games, bonfire and stargazing.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Tungnath + Chandrashila',
      stops: [
        { time: '4:30 AM', name: 'Wake Up', blurb: 'Wake up and have a quick breakfast with packed snacks.' },
        { time: '5:30 AM', name: 'Trek to Tungnath', blurb: 'Begin the approximately 3.5–4 km uphill trek.' },
        { time: '8:00–9:00 AM', name: 'Tungnath Temple', blurb: 'Visit the temple, rest and take photographs.' },
        { time: 'Optional', name: 'Chandrashila', blurb: 'Continue approximately 1.5 km uphill for experienced and fit members.' },
        { time: 'Morning', name: 'Himalayan Views', blurb: 'On clear days, views include Kedarnath range, Chaukhamba, Nanda Devi and Trishul.' },
        { time: 'Afternoon', name: 'Return to Chopta', blurb: 'Descend towards Chopta for lunch and rest.' },
        { time: 'Evening', name: 'Meadow Walk', blurb: 'Enjoy a golden-hour meadow walk.' },
        { time: 'Night', name: 'Bonfire', blurb: 'Enjoy the second bonfire night.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Chopta → Sari → Deoria Tal → Delhi',
      stops: [
        { time: 'Morning', name: 'Breakfast & Check-out', blurb: 'Start the final day after breakfast.' },
        { time: '8:00 AM', name: 'Sari Village', blurb: 'Drive towards Sari Village.' },
        { time: '9:00 AM', name: 'Deoria Tal Trek', blurb: 'Take the short forest hike towards Deoria Tal.' },
        { time: 'Morning', name: 'Deoria Tal', blurb: 'Relax beside the beautiful Himalayan lake.' },
        { time: 'Afternoon', name: 'Return to Sari', blurb: 'Return to Sari for lunch.' },
        { time: 'Afternoon', name: 'Delhi Journey', blurb: 'Start the drive towards Delhi with stops at Rudraprayag and Devprayag.' },
        { time: 'Night', name: 'Overnight Drive', blurb: 'Continue towards Delhi.' }
      ]
    },
    {
      label: 'Package',
      title: 'Package Includes',
      stops: [
        { time: 'Included', name: 'Delhi–Chopta–Delhi Traveller', blurb: 'Round-trip group transportation.' },
        { time: 'Included', name: '2 Nights Accommodation', blurb: 'Two nights accommodation.' },
        { time: 'Included', name: 'Meals', blurb: 'Two breakfasts and two dinners.' },
        { time: 'Included', name: 'Tungnath Trek', blurb: 'Tungnath trek included.' },
        { time: 'Included', name: 'Chandrashila Trek', blurb: 'Chandrashila trek included.' },
        { time: 'Included', name: 'Bonfire & Stargazing', blurb: 'Bonfire and stargazing experiences.' }
      ]
    }
  ]
},

tungnathbudget: {
  tag: '🥾 Tungnath',
  title: 'Tungnath — Weekend Expedition',
  subtitle: 'A budget-friendly Himalayan trek with sunrise, bonfire & Chandrashila',
  hero: 'images/tungnath.jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo', value: '₹6,999/person' },
    { label: 'Couple', value: '₹13,499/couple' },
    { label: 'Group', value: '₹6,250/person' }
  ],
  gallery: [
    'images/tungnath (1).jpg',
     'images/tungnath (2).jpg',
      'images/tungnath (3).jpg',
       'images/tungnath (4).jpg',
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Chopta',
      stops: [
        { time: '7:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Introductions & Games', blurb: 'Group introductions and travel games.' },
        { time: 'Night', name: 'Overnight Journey', blurb: 'Begin the overnight journey towards Chopta.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Delhi → Chopta',
      stops: [
        { time: 'Morning', name: 'Breakfast Stop', blurb: 'Stop for breakfast while travelling towards Uttarakhand.' },
        { time: 'Day', name: 'Devprayag', blurb: 'Quick Himalayan sightseeing stop.' },
        { time: 'Day', name: 'Rudraprayag', blurb: 'Continue through mountain roads and viewpoints.' },
        { time: 'Afternoon', name: 'Chopta', blurb: 'Reach Chopta and check into the budget homestay.' },
        { time: 'Evening', name: 'Forest & Meadow Walk', blurb: 'Enjoy a relaxed walk around Chopta.' },
        { time: 'Night', name: 'Bonfire', blurb: 'Music, games, stargazing and dinner.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Tungnath + Chandrashila',
      stops: [
        { time: '4:30 AM', name: 'Wake Up', blurb: 'Quick breakfast or tea with packed snacks.' },
        { time: '5:30 AM', name: 'Tungnath Trek', blurb: 'Begin the approximately 3.5–4 km trek.' },
        { time: '8:00–9:00 AM', name: 'Tungnath Temple', blurb: 'Visit the temple and rest.' },
        { time: '9:15 AM', name: 'Chandrashila', blurb: 'Optional additional climb of approximately 1.5 km.' },
        { time: 'Morning', name: 'Mountain Views', blurb: 'Enjoy panoramic Himalayan views and group photographs.' },
        { time: 'Afternoon', name: 'Chopta', blurb: 'Descend, have lunch and rest.' },
        { time: 'Evening', name: 'Final Bonfire', blurb: 'Enjoy the final bonfire and dinner.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Chopta → Delhi',
      stops: [
        { time: '5:30 AM', name: 'Wake Up', blurb: 'Start the return day early.' },
        { time: '6:00 AM', name: 'Breakfast', blurb: 'Have breakfast before departure.' },
        { time: '6:30 AM', name: 'Return Journey', blurb: 'Start the drive towards Delhi.' },
        { time: 'Day', name: 'Rudraprayag & Devprayag', blurb: 'Make quick scenic stops en route.' },
        { time: 'Evening/Night', name: 'Delhi', blurb: 'Expected Delhi arrival around 8–11 PM.' }
      ]
    }
  ]
},

shimla: {
  tag: '🌲 Shimla',
  title: 'Shimla Off the Map',
  subtitle: 'Deodar forests, apple villages, slow cafés & the quieter side of Shimla',
  hero: 'images/shimla.jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo Shared', value: '₹6,999/person' },
    { label: 'Solo Private', value: '₹8,499/person' },
    { label: 'Couple', value: '₹13,499/couple' },
    { label: 'Group of 12', value: '₹6,999/person' }
  ],
  gallery: [
    'images/shimla.jpg',
    'images/shimla (1).jpg',
     'images/shimla (2).jpg',
      'images/shimla (3).jpg',
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Mashobra',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Travel Games', blurb: 'Group introductions and travel games.' },
        { time: 'Night', name: 'Overnight Drive', blurb: 'Travel towards Shimla and Mashobra.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Mashobra — Forest → Village → Sunset',
      stops: [
        { time: '7:00 AM', name: 'Reach Mashobra', blurb: 'Arrive, have breakfast and leave luggage at the property.' },
        { time: '9:00 AM', name: 'Craignano Forest Walk', blurb: 'Walk through cedar and pine forests around Craignano.' },
        { time: '11:30 AM', name: 'Local Chai Stop', blurb: 'Enjoy tea and Himachali snacks.' },
        { time: '12:30 PM', name: 'Check-in', blurb: 'Check into a homestay or boutique property around Mashobra.' },
        { time: '3:00 PM', name: 'Hidden Mashobra', blurb: 'Explore village lanes, forest paths, temples and seasonal apple orchards.' },
        { time: '5:30 PM', name: 'Sunset', blurb: 'Head to a quiet viewpoint around Mashobra or Chharabra.' },
        { time: '7:30 PM', name: 'CompasPanion Night', blurb: 'Bonfire, music, group games, stargazing and dinner.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Fagu → Naldehra → Old Shimla',
      stops: [
        { time: '6:30 AM', name: 'Sunrise Walk', blurb: 'Enjoy tea and a short morning walk.' },
        { time: '9:00 AM', name: 'Fagu', blurb: 'Drive towards the quieter high-altitude hamlet.' },
        { time: 'Morning', name: 'Fagu Village', blurb: 'Explore village lanes, apple orchards when seasonal, farming landscapes and viewpoints.' },
        { time: '12:00 PM', name: 'Naldehra', blurb: 'Walk through the cedar surroundings.' },
        { time: '2:30 PM', name: 'Forest & Meadow Time', blurb: 'Slow down with walking, photographs and mountain views.' },
        { time: '4:30 PM', name: 'Old Shimla', blurb: 'Explore the Ridge, Christ Church exterior, Mall Road and Lakkar Bazaar.' },
        { time: '7:00 PM', name: 'Return to Delhi', blurb: 'Start the overnight journey back towards Delhi.' }
      ]
    }
  ]
},

manali: {
  tag: '🏔️ Manali',
  title: 'The Other Side of Manali',
  subtitle: 'Hidden villages, waterfalls, old Himalayan architecture & slow mountain mornings',
  hero: 'images/manali.jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo Shared', value: '₹6,999/person' },
    { label: 'Solo Private', value: '₹8,499/person' },
    { label: 'Couple', value: '₹13,499/couple' },
    { label: 'Group of 12', value: '₹6,999/person' }
  ],
  gallery: [
    'images/manali (1).jpg',
    'images/manali (2).jpg',
    'images/manali (2).jpg',
    'images/manali (4).jpg',
   
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Manali',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Traveller.' },
        { time: 'Evening', name: 'Travel Disco', blurb: 'Enjoy introductions and a fun travel atmosphere.' },
        { time: 'Night', name: 'Overnight Journey', blurb: 'Travel overnight towards Manali.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Manali → Sethan → Hamta',
      stops: [
        { time: 'Morning', name: 'Reach Manali', blurb: 'Have breakfast, freshen up and leave luggage at the property.' },
        { time: '9:30 AM', name: 'Sethan Village', blurb: 'Explore the quieter mountain village above Manali.' },
        { time: 'Morning', name: 'Village & Viewpoints', blurb: 'Walk through the village, explore viewpoints and local cafés.' },
        { time: 'Afternoon', name: 'Hamta Side', blurb: 'Take a short guided nature walk around the Hamta area.' },
        { time: '5:00 PM', name: 'Mountain Café', blurb: 'Relax at a mountain café during sunset.' },
        { time: '7:30 PM', name: 'CompasPanion Night', blurb: 'Bonfire, music, games, stargazing and dinner.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Sajla → Naggar → Jana',
      stops: [
        { time: '7:30 AM', name: 'Breakfast', blurb: 'Start the day with breakfast.' },
        { time: '9:00 AM', name: 'Sajla Waterfall', blurb: 'Walk to the waterfall and explore the surrounding forest.' },
        { time: '11:30 AM', name: 'Himachali Lunch', blurb: 'Enjoy local food at a café.' },
        { time: '1:00 PM', name: 'Naggar', blurb: 'Explore Naggar Castle, old village lanes, mountain views and local art.' },
        { time: '3:00 PM', name: 'Jana Village', blurb: 'Continue towards Jana Village.' },
        { time: 'Afternoon', name: 'Jana Waterfall', blurb: 'Take a short forest walk to the waterfall.' },
        { time: '8:30 PM', name: 'Return Journey', blurb: 'Begin the overnight drive towards Delhi.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Delhi Arrival',
      stops: [
        { time: 'Morning', name: 'Delhi Arrival', blurb: 'Expected arrival around 6–9 AM depending on traffic and road conditions.' }
      ]
    }
  ]
},

jibhi: {
  tag: '🌲 Jibhi',
  title: 'Nomad by Chance',
  subtitle: 'Jibhi, Shoja, Jalori Pass & Serolsar Lake — slow down and get lost',
  hero: 'images/jibhi (5).jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo Shared', value: '₹6,999/person' },
    { label: 'Solo Private', value: '₹8,499/person' },
    { label: 'Couple', value: '₹13,499/couple' },
    { label: 'Group of 12', value: '₹6,999/person' }
  ],
  gallery: [
    'images/jibhi (1).jpg',
    'images/jibhi (2).jpg',
    'images/jibhi (3).jpg',
    'images/jibhi (4).jpg',
   
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Jibhi',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Travel Games', blurb: 'Introductions and group travel games.' },
        { time: 'Night', name: 'Mountain Drive', blurb: 'Begin the overnight journey towards Jibhi.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Jibhi — Slow Down & Get Lost',
      stops: [
        { time: '7:30 AM', name: 'Arrive in Jibhi', blurb: 'Freshen up, have breakfast and drop luggage.' },
        { time: '9:30 AM', name: 'Jibhi Waterfall', blurb: 'Walk through the village to Jibhi Waterfall.' },
        { time: '11:00 AM', name: 'Local Café', blurb: 'Relax with coffee and snacks overlooking the valley.' },
        { time: '12:00 PM', name: 'Hidden Village Walk', blurb: 'Explore wooden homes, apple orchards, forest paths and local village life.' },
        { time: '1:30 PM', name: 'Himachali Lunch', blurb: 'Enjoy local food at a homestay or café.' },
        { time: '3:00 PM', name: 'Shoja', blurb: 'Drive uphill into dense cedar forests and quieter landscapes.' },
        { time: '4:30 PM', name: 'Sunset Walk', blurb: 'Enjoy a short forest walk around Shoja.' },
        { time: '7:30 PM', name: 'Nomad Night', blurb: 'Bonfire, music, stargazing, games and dinner.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Jalori Pass + Serolsar Lake',
      stops: [
        { time: '6:30 AM', name: 'Wake Up', blurb: 'Start with tea and breakfast.' },
        { time: '8:00 AM', name: 'Jalori Pass', blurb: 'Drive towards Jalori Pass through winding mountain roads.' },
        { time: '9:00 AM', name: 'Serolsar Lake Trek', blurb: 'Begin the forest trail towards Serolsar Lake.' },
        { time: 'Morning', name: 'Serolsar Lake', blurb: 'Relax beside the lake, photograph the landscape and enjoy packed snacks.' },
        { time: '12:00 PM', name: 'Descend', blurb: 'Start the return trek.' },
        { time: '2:30 PM', name: 'Jalori Exploration', blurb: 'Explore viewpoints, forest trails and small mountain settlements.' },
        { time: '5:30 PM', name: 'Free Time', blurb: 'Enjoy cafés and riverside or stream-side relaxation.' },
        { time: '7:30 PM', name: 'Final Bonfire', blurb: 'Enjoy the final evening together.' },
        { time: '9:30 PM', name: 'Delhi Journey', blurb: 'Begin the overnight return journey.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Back to Delhi',
      stops: [
        { time: 'Morning', name: 'Delhi Arrival', blurb: 'Expected arrival around 6–9 AM depending on traffic and road conditions.' }
      ]
    }
  ]
},

kashmir: {
  tag: '🏔️ Kashmir',
  title: 'Kashmir — Beyond the Postcard',
  subtitle: 'Gurez, Tulail, Lolab & Bangus — the valleys nobody told you about',
  hero: 'images/gurez (1).jpg',
  meta: [
    { label: 'Duration', value: '7 Days 6 Nights' },
    { label: 'Solo Shared', value: '₹39,999' },
    { label: 'Solo Private', value: '₹44,999' },
    { label: 'Couple', value: '₹79,999/couple' },
    { label: 'Group of 12', value: '₹39,999/person' }
  ],
  gallery: [
    'images/gurez (1).jpg',
     'images/gurez (2).jpg',
      'images/gurez (3).jpg',
    
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Srinagar',
      stops: [
        { time: 'Day', name: 'Delhi → Srinagar', blurb: 'Fly from Delhi to Srinagar.' },
        { time: 'Afternoon', name: 'Nigeen / Srinagar', blurb: 'Transfer and check into the accommodation.' },
        { time: 'Evening', name: 'Nigeen Shikara Ride', blurb: 'Enjoy an evening Shikara ride on Nigeen Lake.' },
        { time: 'Night', name: 'Kashmiri Dinner', blurb: 'Enjoy a traditional Kashmiri dinner and trip briefing.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Old Srinagar → Doodhpathri',
      stops: [
        { time: 'Morning', name: 'Shehr-e-Khaas', blurb: 'Explore Old Srinagar and its traditional wooden lanes.' },
        { time: 'Morning', name: 'Local Bakery', blurb: 'Try girda and noon chai at a traditional bakery.' },
        { time: 'Afternoon', name: 'Doodhpathri', blurb: 'Drive towards the quieter meadow.' },
        { time: 'Evening', name: 'Meadow Walk', blurb: 'Enjoy streams, photography and sunset.' },
        { time: 'Night', name: 'Srinagar', blurb: 'Return to Srinagar for the night.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Srinagar → Gurez Valley',
      stops: [
        { time: '6:00 AM', name: 'Early Departure', blurb: 'Begin the journey towards Gurez.' },
        { time: 'Morning', name: 'Razdan Pass', blurb: 'Cross Razdan Pass and stop for mountain views and chai.' },
        { time: 'Afternoon', name: 'Dawar', blurb: 'Reach Gurez and check into a local homestay or camp.' },
        { time: 'Evening', name: 'Kishanganga River', blurb: 'Walk along the river.' },
        { time: 'Night', name: 'Local Family Meal', blurb: 'Enjoy a local meal, kahwa and stories from Gurez.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Gurez → Tulail',
      stops: [
        { time: 'Morning', name: '4×4 Valley Drive', blurb: 'Drive deeper into Gurez towards Tulail.' },
        { time: 'Day', name: 'Tulail', blurb: 'Explore traditional wooden homes, villages and river viewpoints.' },
        { time: 'Day', name: 'Mountain Trails', blurb: 'Walk through local trails and experience Dard-Shin culture.' },
        { time: 'Evening', name: 'Return to Dawar', blurb: 'Return to Dawar.' },
        { time: 'Night', name: 'Bonfire & Stargazing', blurb: 'Enjoy local dinner, bonfire and stargazing.' }
      ]
    },
    {
      label: 'Day 4',
      title: 'Gurez → Lolab Valley',
      stops: [
        { time: 'Morning', name: 'Depart Gurez', blurb: 'Drive back towards Srinagar and onward to Lolab.' },
        { time: 'Afternoon', name: 'Lolab Valley', blurb: 'Explore orchards, forests and traditional villages.' },
        { time: 'Afternoon', name: 'Orchard Walk', blurb: 'Visit apple orchards, walnut groves and local villages depending on season.' },
        { time: 'Evening', name: 'Kalaroos', blurb: 'Visit the Kalaroos area or caves if local access permits.' },
        { time: 'Night', name: 'Lolab Homestay', blurb: 'Stay in a simple local homestay.' }
      ]
    },
    {
      label: 'Day 5',
      title: 'Lolab → Bangus Valley',
      stops: [
        { time: 'Morning', name: '4×4 Transfer', blurb: 'Head towards Bangus Valley.' },
        { time: 'Day', name: 'Bangus Meadow', blurb: 'Walk through the high-altitude meadow and enjoy mountain views.' },
        { time: 'Day', name: 'Shepherd Settlements', blurb: 'Experience shepherd settlements and wildflowers when in season.' },
        { time: 'Optional', name: 'Gujjar Family Visit', blurb: 'If available, arrange a respectful visit with a Gujjar shepherd family.' },
        { time: 'Evening', name: 'Return to Lolab / Kupwara', blurb: 'Return towards the Lolab or Kupwara side.' }
      ]
    },
    {
      label: 'Day 6',
      title: 'Lolab → Srinagar',
      stops: [
        { time: 'Morning', name: 'Slow Breakfast', blurb: 'Enjoy a relaxed morning before returning.' },
        { time: 'Day', name: 'Village / Stream Stop', blurb: 'Stop for tea at a quiet village or stream-side location.' },
        { time: 'Evening', name: 'Nigeen / Dal Lake', blurb: 'Enjoy the final evening around Srinagar’s lakes.' },
        { time: 'Evening', name: 'Kahwa & Shopping', blurb: 'Shop for local handicrafts and enjoy kahwa.' },
        { time: 'Night', name: 'Farewell Dinner', blurb: 'Enjoy a Wazwan-inspired farewell dinner and closing circle.' }
      ]
    },
    {
      label: 'Day 7',
      title: 'Srinagar → Delhi',
      stops: [
        { time: 'Morning', name: 'Breakfast & Check-out', blurb: 'Prepare for the return journey.' },
        { time: 'Day', name: 'Srinagar → Delhi', blurb: 'Fly back to Delhi and end the expedition.' }
      ]
    }
  ]
},

hampta: {
  tag: '🏔️ Hampta Pass',
  title: 'Hampta — Where the Mountain Changes Colour',
  subtitle: 'One trail, four landscapes — forest, meadows, snow and Lahaul desert',
  hero: 'images/hampta (1).jpg',
  meta: [
    { label: 'Duration', value: '6 Days 5 Nights' },
    { label: 'Solo Shared Tent', value: '₹12,499/person' },
    { label: 'Solo Private Tent', value: '₹14,499/person' },
    { label: 'Couple', value: '₹24,999/couple' },
    { label: 'Group of 12', value: '₹12,499/person' }
  ],
  gallery: [
    'images/hampta (2).jpg',
    'images/hampta (3).jpg',
    'images/hampta (4).jpg',
    'images/hampta (5).jpg',

  
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Manali',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Group Introduction', blurb: 'Get introduced to the trek group.' },
        { time: 'Night', name: 'Overnight Drive', blurb: 'Drive overnight towards Manali.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Manali → Jobra → Chika',
      stops: [
        { time: '7:00 AM', name: 'Reach Manali', blurb: 'Breakfast and freshen up.' },
        { time: '9:00 AM', name: 'Trek Briefing', blurb: 'Meet the trek team and complete briefing and equipment checks.' },
        { time: '10:00 AM', name: 'Manali → Jobra', blurb: 'Drive towards the trek starting point.' },
        { time: '11:30 AM', name: 'Jobra → Chika', blurb: 'Begin the opening trek through pine forests, meadows and mountain streams.' },
        { time: '2:00 PM', name: 'Chika Campsite', blurb: 'Reach camp, have lunch and set up camp.' },
        { time: 'Evening', name: 'Acclimatisation Walk', blurb: 'Take a short relaxed walk around the campsite.' },
        { time: 'Night', name: 'Camp Night', blurb: 'Dinner, stargazing and trek briefing.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Chika → Balu Ka Ghera',
      stops: [
        { time: '6:30 AM', name: 'Wake Up', blurb: 'Tea and breakfast before trekking.' },
        { time: '8:00 AM', name: 'Trek Begins', blurb: 'Enter the higher mountain terrain.' },
        { time: 'Day', name: 'Forest & Meadows', blurb: 'Experience forests, open meadows, river crossings and mountain walls.' },
        { time: 'Day', name: 'Seasonal Snow', blurb: 'Encounter snow patches depending on season.' },
        { time: '3:00–4:00 PM', name: 'Balu Ka Ghera', blurb: 'Reach the crucial acclimatisation campsite before Pass Day.' },
        { time: 'Night', name: 'Pass Briefing', blurb: 'Dinner and briefing for the Hampta Pass crossing.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Hampta Pass Crossing',
      stops: [
        { time: '5:00 AM', name: 'Wake Up', blurb: 'Tea and light breakfast before the big day.' },
        { time: '6:00 AM', name: 'Pass Climb', blurb: 'Begin the climb towards Hampta Pass.' },
        { time: '9:30–11:00 AM', name: 'Hampta Pass', blurb: 'Reach the pass area and enjoy panoramic views and the group achievement moment.' },
        { time: 'Day', name: 'Landscape Transformation', blurb: 'Descend into dramatically different terrain with brown mountains, snow and rocky landscapes.' },
        { time: '3:00–5:00 PM', name: 'Chatru', blurb: 'Reach the Chatru side and settle into camp.' },
        { time: 'Night', name: 'Lahaul Stargazing', blurb: 'Enjoy the open Lahaul night sky, weather permitting.' }
      ]
    },
    {
      label: 'Day 4',
      title: 'Chatru → Manali → Delhi',
      stops: [
        { time: 'Morning', name: 'Chatru', blurb: 'Continue the journey from the Lahaul side.' },
        { time: 'Day', name: 'Optional Chandratal', blurb: 'Visit Chandratal if the road is open and weather permits.' },
        { time: 'Afternoon', name: 'Manali', blurb: 'Return towards Manali.' },
        { time: 'Evening', name: 'Delhi Journey', blurb: 'Begin the return journey towards Delhi.' }
      ]
    },
    {
      label: 'Day 5',
      title: 'Delhi Arrival',
      stops: [
        { time: 'Morning', name: 'Delhi', blurb: 'Complete the journey back to Delhi.' }
      ]
    },
    {
      label: 'Package',
      title: 'Package Includes',
      stops: [
        { time: 'Included', name: 'Delhi–Manali–Delhi Transport', blurb: 'Round-trip group transportation.' },
        { time: 'Included', name: 'Manali–Jobra Transfer', blurb: 'Transfer to the trek starting point.' },
        { time: 'Included', name: 'Chatru–Manali Transfer', blurb: 'Return transfer from the Lahaul side.' },
        { time: 'Included', name: '3 Nights Trek Camping', blurb: 'Camping during the trek.' },
        { time: 'Included', name: 'Camping Equipment', blurb: 'Sleeping bags, mats and tents.' },
        { time: 'Included', name: 'Trekking Meals', blurb: 'Meals during the trek.' },
        { time: 'Included', name: 'Trek Leader', blurb: 'Professional trek leader and support staff.' },
        { time: 'Included', name: 'Hampta Pass Trek', blurb: 'Complete Hampta Pass trekking experience.' }
      ]
    }
  ]
},

prashar: {
  tag: '🏔️ Prashar Lake',
  title: 'Prashar Lake Expedition',
  subtitle: 'The lake above the clouds — forest trails, Himalayan ridges & mountain camping',
  hero: 'images/lake (1).jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo Shared', value: '₹6,999/person' },
    { label: 'Solo Private', value: '₹8,499/person' },
    { label: 'Couple', value: '₹13,499/couple' },
    { label: 'Group', value: '₹6,999/person' }
  ],
  gallery: [
    'images/lake (1).jpg',
    'images/lake (2).jpg','images/lake (3).jpg',
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Baggi / Mandi',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Travel Games', blurb: 'Group introductions and travel games.' },
        { time: 'Night', name: 'Overnight Drive', blurb: 'Drive towards Mandi.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Baggi → Prashar Lake',
      stops: [
        { time: 'Morning', name: 'Reach Baggi', blurb: 'Arrive near the trek starting point.' },
        { time: 'Morning', name: 'Prashar Lake Trek', blurb: 'Begin the forest trail towards Prashar Lake.' },
        { time: 'Day', name: 'Himalayan Ridges', blurb: 'Trek through forests and Himalayan ridge landscapes.' },
        { time: 'Afternoon', name: 'Prashar Lake', blurb: 'Reach the beautiful high-altitude lake.' },
        { time: 'Evening', name: 'Camp', blurb: 'Settle into the campsite and enjoy the mountain atmosphere.' },
        { time: 'Night', name: 'CompasPanion Camp Night', blurb: 'Bonfire, games, dinner and stargazing.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Sunrise → Local Village → Mandi Valley',
      stops: [
        { time: 'Morning', name: 'Prashar Sunrise', blurb: 'Wake up for the Himalayan sunrise.' },
        { time: 'Morning', name: 'Breakfast', blurb: 'Enjoy breakfast at camp.' },
        { time: 'Day', name: 'Local Village', blurb: 'Explore the surrounding village and mountain landscapes.' },
        { time: 'Afternoon', name: 'Mandi Valley', blurb: 'Descend towards the Mandi Valley.' },
        { time: 'Evening', name: 'Delhi Journey', blurb: 'Begin the return journey towards Delhi.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Delhi Arrival',
      stops: [
        { time: 'Morning', name: 'Delhi', blurb: 'Complete the overnight journey and return to Delhi.' }
      ]
    }
  ]
},

triund: {
  tag: '🥾 Triund',
  title: 'Triund — Above the Clouds',
  subtitle: 'Forest trails, Himalayan camping, sunrise, waterfalls & Dharamkot cafés',
  hero: 'images/truind (1).jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo Shared', value: '₹6,999/person' },
    { label: 'Solo Private', value: '₹8,499/person' },
    { label: 'Couple', value: '₹13,499/couple' },
    { label: 'Group of 12', value: '₹6,999/person' }
  ],
  gallery: [
    'images/truind (1).jpg',
    'images/truind (2).jpg',
    'images/truind (3).jpg',
    'images/truind (4).jpg',
   
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Dharamkot',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Travel Games', blurb: 'Introductions and group games.' },
        { time: 'Night', name: 'Overnight Drive', blurb: 'Drive towards Dharamshala and McLeod Ganj.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Dharamkot → Triund',
      stops: [
        { time: 'Morning', name: 'Dharamkot', blurb: 'Reach Dharamkot and prepare for the trek.' },
        { time: 'Morning', name: 'Gallu → Triund', blurb: 'Begin the Himalayan forest trail towards Triund.' },
        { time: 'Day', name: 'Dhauladhar Views', blurb: 'Enjoy panoramic Dhauladhar mountain views during the climb.' },
        { time: 'Afternoon', name: 'Triund', blurb: 'Reach the mountain ridge campsite.' },
        { time: '3:00 PM', name: 'Triund Exploration', blurb: 'Explore the ridge and surrounding landscapes.' },
        { time: '5:30 PM', name: 'Triund Sunset', blurb: 'Watch the sunset from the ridge.' },
        { time: 'Night', name: 'Camp Night', blurb: 'Dinner, bonfire where permitted and stargazing.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Triund Sunrise → Dharamkot → Bhagsu',
      stops: [
        { time: 'Morning', name: 'Triund Sunrise', blurb: 'Wake up above the clouds for sunrise.' },
        { time: 'Morning', name: 'Descend', blurb: 'Trek back towards Dharamkot.' },
        { time: '11:30 AM', name: 'Dharamkot', blurb: 'Explore the village and its relaxed cafés.' },
        { time: 'Afternoon', name: 'Bhagsu Waterfall', blurb: 'Visit Bhagsu Waterfall.' },
        { time: 'Evening', name: 'Local Cafés', blurb: 'Enjoy a slow café experience before the return journey.' },
        { time: 'Evening', name: 'Delhi Journey', blurb: 'Begin the journey back towards Delhi.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Delhi Arrival',
      stops: [
        { time: 'Morning', name: 'Delhi', blurb: 'Expected Delhi arrival in the morning.' }
      ]
    }
  ]
},

bijlimahadev: {
  tag: '⚡ Bijli Mahadev',
  title: 'Bijli Mahadev — Beyond Kasol',
  subtitle: 'Ancient temple, cedar forests, waterfalls, villages & Parvati Valley',
  hero: 'images/bijli (1).jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo Shared', value: '₹6,999/person' },
    { label: 'Solo Private', value: '₹8,499/person' },
    { label: 'Couple', value: '₹13,499/couple' },
    { label: 'Group of 12', value: '₹6,999/person' }
  ],
  gallery: [
    'images/bijli (1).jpg',
     'images/bijli (2).jpg',
      'images/bijli (3).jpg',
       'images/bijli (4).jpg',
  
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Kullu / Kasol',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Traveller.' },
        { time: 'Evening', name: 'Travel Games', blurb: 'Group introductions and games.' },
        { time: 'Night', name: 'Mountain Drive', blurb: 'Begin the overnight journey.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Bijli Mahadev → Kullu Valley',
      stops: [
        { time: '7:00 AM', name: 'Arrive in Kullu', blurb: 'Have breakfast and freshen up.' },
        { time: '8:00 AM', name: 'Chansari', blurb: 'Drive towards the starting point of the Bijli Mahadev trek.' },
        { time: '9:00 AM', name: 'Bijli Mahadev Trek', blurb: 'Begin the trek through the mountain landscape.' },
        { time: '11:00 AM', name: 'Bijli Mahadev Temple', blurb: 'Visit the ancient mountain temple.' },
        { time: 'Afternoon', name: 'Valley Views', blurb: 'Enjoy views towards Kullu Valley, Parvati Valley, Manikaran side and Himalayan ranges.' },
        { time: 'Evening', name: 'Return', blurb: 'Return towards the accommodation.' },
        { time: 'Night', name: 'CompasPanion Night', blurb: 'Dinner, music, games, bonfire and stargazing.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Choj → Parvati River → Manikaran',
      stops: [
        { time: 'Morning', name: 'Choj Village', blurb: 'Explore traditional houses, forest paths, viewpoints and local cafés.' },
        { time: 'Morning', name: 'Forest Trail', blurb: 'Take a relaxed village and forest walk.' },
        { time: '12:00 PM', name: 'Parvati River', blurb: 'Find a safe riverside viewpoint and relax beside the river.' },
        { time: 'Afternoon', name: 'Manikaran Sahib', blurb: 'Visit Manikaran Sahib and the hot springs area.' },
        { time: 'Afternoon', name: 'Old Village Streets', blurb: 'Explore the traditional streets around Manikaran.' },
        { time: 'Evening', name: 'Local Café', blurb: 'Enjoy chai or kahwa with snacks.' },
        { time: 'Night', name: 'Delhi Journey', blurb: 'Start the overnight return journey.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Back to Delhi',
      stops: [
        { time: 'Morning', name: 'Delhi Arrival', blurb: 'Expected arrival around 7–10 AM depending on traffic and road conditions.' }
      ]
    }
  ]
},

nagtibba: {
  tag: '🏔️ Nag Tibba',
  title: 'Nag Tibba — The Weekend Wild',
  subtitle: 'Forest trails, camping, sunrise & Himalayan mountain views',
  hero: 'images/nag tibba (1).jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo Shared', value: '₹6,999/person' },
    { label: 'Solo Private', value: '₹8,499/person' },
    { label: 'Couple', value: '₹13,499/couple' },
    { label: 'Group of 12', value: '₹6,999/person' }
  ],
  gallery: [
    'images/nag tibba (1).jpg',
   'images/nag tibba (2).jpg',
   'images/nag tibba (3).jpg',
   'images/nag tibba (4).jpg',
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Pantwari',
      stops: [
        { time: '8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Group Introductions', blurb: 'Get introduced to the group.' },
        { time: 'Night', name: 'Uttarakhand Drive', blurb: 'Begin the overnight journey towards Pantwari.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Pantwari → Nag Tibba Base Camp',
      stops: [
        { time: 'Morning', name: 'Pantwari', blurb: 'Arrive at Pantwari and prepare for the trek.' },
        { time: 'Morning', name: 'Nag Tibba Base Trek', blurb: 'Begin the forest trail towards the base camp.' },
        { time: 'Day', name: 'Forest Trail', blurb: 'Walk through Himalayan forests and mountain landscapes.' },
        { time: 'Afternoon', name: 'Base Camp', blurb: 'Reach the campsite and settle in.' },
        { time: 'Evening', name: 'Mountain Ridges', blurb: 'Enjoy the surrounding ridge views.' },
        { time: 'Night', name: 'Camp Night', blurb: 'Bonfire, group activities, dinner and stargazing.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Nag Tibba Summit Sunrise',
      stops: [
        { time: 'Early Morning', name: 'Summit Trek', blurb: 'Begin the climb towards the Nag Tibba summit.' },
        { time: '6:30–7:00 AM', name: 'Sunrise', blurb: 'Watch the Himalayas light up from the summit.' },
        { time: 'Morning', name: 'Himalayan Ranges', blurb: 'On clear days, views include Bandarpoonch, Swargarohini, Gangotri and Kedarnath ranges.' },
        { time: 'Morning', name: 'Breakfast & Group Photos', blurb: 'Enjoy breakfast or snacks and capture group photographs.' },
        { time: 'Day', name: 'Descend', blurb: 'Return from the summit towards the base and onward towards the road.' },
        { time: 'Evening', name: 'Delhi Journey', blurb: 'Begin the return journey.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Back to Delhi',
      stops: [
        { time: 'Morning', name: 'Delhi Arrival', blurb: 'Return to Delhi after the weekend expedition.' }
      ]
    }
  ]
},



darcha: {
  tag: '🏔️ Darcha',
  title: 'Darcha Slow Escape',
  subtitle: 'No rush. Just Lahaul — remote villages, rivers, mountains & slow mornings',
  hero: 'images/darcha (1).jpg',
  meta: [
    { label: 'Duration', value: '3 Days 2 Nights' },
    { label: 'Solo Shared', value: '₹8,499' },
    { label: 'Solo Private', value: '₹10,499' },
    { label: 'Couple', value: '₹18,499/couple' },
    { label: 'Group of 12', value: '₹8,499/person' }
  ],
  gallery: [
    'images/darcha (1).jpg',
     'images/darcha (2).jpg',
      'images/darcha (3).jpg',
       'images/darcha (4).jpg',
   
  ],
  days: [
    {
      label: 'Day 0',
      title: 'Delhi → Manali',
      stops: [
        { time: '7:00–8:00 PM', name: 'Meet in Delhi', blurb: 'Meet the group and board the Tempo Traveller.' },
        { time: 'Evening', name: 'Group Introductions', blurb: 'Get introduced to the group.' },
        { time: 'Night', name: 'Overnight Drive', blurb: 'Begin the journey towards Manali.' }
      ]
    },
    {
      label: 'Day 1',
      title: 'Manali → Sissu → Keylong → Jispa → Darcha',
      stops: [
        { time: '6:00–7:00 AM', name: 'Manali', blurb: 'Have breakfast and freshen up.' },
        { time: '8:00 AM', name: 'Manali → Sissu', blurb: 'Drive through the Atal Tunnel into Lahaul.' },
        { time: '9:30 AM', name: 'Sissu', blurb: 'Explore Sissu village, waterfall viewpoint, Chandra River and mountain viewpoints.' },
        { time: '12:00 PM', name: 'Sissu → Keylong', blurb: 'Continue towards Keylong through scenic mountain roads.' },
        { time: '1:30 PM', name: 'Keylong', blurb: 'Have lunch and explore the local market and monastery surroundings.' },
        { time: '4:00 PM', name: 'Jispa', blurb: 'Relax beside the Bhaga River with chai, photography and a riverside walk.' },
        { time: '5:30 PM', name: 'Jispa → Darcha', blurb: 'Continue the short drive towards Darcha.' },
        { time: '7:00 PM', name: 'Darcha Sunset', blurb: 'Walk around the village and surrounding valley.' },
        { time: '8:00 PM', name: 'CompasPanion Dinner', blurb: 'Enjoy dinner and a relaxed mountain evening.' }
      ]
    },
    {
      label: 'Day 2',
      title: 'Darcha — Do Nothing Day',
      stops: [
        { time: 'Morning', name: 'Slow Morning', blurb: 'Wake up in Darcha and enjoy a relaxed breakfast.' },
        { time: '10:00 AM', name: 'Darcha River Walk', blurb: 'Walk beside the river and enjoy the quiet valley.' },
        { time: 'Morning', name: 'Slow Hour', blurb: 'Spend time without rushing through the itinerary.' },
        { time: 'Afternoon', name: 'Optional Exploration', blurb: 'Take a short optional exploration around the local area.' },
        { time: '4:00 PM', name: 'Chai & Sunset', blurb: 'Relax with chai and enjoy the mountain sunset.' },
        { time: '5:00 PM', name: 'Golden Hour', blurb: 'Capture group photographs.' },
        { time: '7:00 PM', name: 'Final CompasPanion Night', blurb: 'Dinner, bonfire where permitted, stargazing and group conversations.' }
      ]
    },
    {
      label: 'Day 3',
      title: 'Darcha → Jispa → Keylong → Sissu → Manali → Delhi',
      stops: [
        { time: '6:30 AM', name: 'Wake Up', blurb: 'Start the return journey with tea and breakfast.' },
        { time: '8:00 AM', name: 'Drive to Manali', blurb: 'Begin driving back through Lahaul.' },
        { time: '9:00 AM', name: 'Jispa', blurb: 'Make a short riverside stop.' },
        { time: '10:30 AM', name: 'Keylong', blurb: 'Tea and snack stop.' },
        { time: '12:00 PM', name: 'Sissu', blurb: 'Make the final Lahaul stop.' },
        { time: '2:00 PM', name: 'Atal Tunnel → Manali', blurb: 'Continue towards Manali through the Atal Tunnel.' },
        { time: '4:00 PM', name: 'Manali', blurb: 'Quick refreshment stop.' },
        { time: '5:00 PM', name: 'Delhi Journey', blurb: 'Begin the overnight journey towards Delhi.' },
        { time: 'Morning', name: 'Delhi Arrival', blurb: 'Expected arrival around 5–8 AM depending on traffic and road conditions.' }
      ]
    },
    {
      label: 'Package',
      title: 'Package Includes',
      stops: [
        { time: 'Included', name: 'Delhi–Darcha–Delhi Transport', blurb: 'Round-trip transportation.' },
        { time: 'Included', name: '2 Nights Darcha Accommodation', blurb: 'Two nights in Darcha.' },
        { time: 'Included', name: 'Meals', blurb: 'Two breakfasts, two lunches and two dinners.' },
        { time: 'Included', name: 'Sissu', blurb: 'Sissu visit and waterfall viewpoint.' },
        { time: 'Included', name: 'Keylong', blurb: 'Keylong stop and local exploration.' },
        { time: 'Included', name: 'Jispa', blurb: 'Riverside experience beside the Bhaga River.' },
        { time: 'Included', name: 'Darcha', blurb: 'Darcha village exploration.' },
        { time: 'Included', name: 'Coordinator', blurb: 'CompasPanion trip coordination.' }
      ]
    },
    {
      label: 'Exclusions',
      title: 'Not Included',
      stops: [
        { time: 'Excluded', name: 'Personal Expenses', blurb: 'Personal expenses are excluded.' },
        { time: 'Excluded', name: 'Café Bills', blurb: 'Café expenses are excluded.' },
        { time: 'Excluded', name: 'Extra Snacks', blurb: 'Additional snacks are excluded.' },
        { time: 'Excluded', name: 'Alcohol', blurb: 'Alcohol is not included.' },
        { time: 'Excluded', name: 'Travel Insurance', blurb: 'Travel insurance is excluded.' },
        { time: 'Excluded', name: 'Optional Activities', blurb: 'Optional activities are excluded.' }
      ]
    }
  ]
}
      
    };

    let currentItinDayIndex = 0;

    function openItinerary(key) {
      const data = itineraryData[key];
      if (!data) return;

      document.getElementById('itinHero').style.backgroundImage = `url('${data.hero}')`;
      document.getElementById('itinTag').textContent = data.tag;
      document.getElementById('itinTitle').textContent = data.title;
      document.getElementById('itinSubtitle').textContent = data.subtitle;

      const metaEl = document.getElementById('itinMeta');
      metaEl.innerHTML = data.meta.map(m => `
        <div class="itin-meta-item">
          <span class="itin-meta-label">${m.label}</span>
          <span class="itin-meta-value">${m.value}</span>
        </div>
      `).join('');

      const galleryEl = document.getElementById('itinGallery');
      galleryEl.innerHTML = data.gallery.map(src => `<img src="${src}" alt="${data.title}" loading="lazy" />`).join('');

      currentItinDayIndex = 0;
      renderItinDayTabs(data);
      renderItinStops(data, 0);

      document.getElementById('itinOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function renderItinDayTabs(data) {
      const tabsEl = document.getElementById('itinDayTabs');
      tabsEl.innerHTML = data.days.map((d, i) =>
        `<button class="itin-day-tab${i === 0 ? ' active' : ''}" onclick="switchItinDay(${i})">${d.label}</button>`
      ).join('');
    }

    function switchItinDay(index) {
      const activeKey = Object.keys(itineraryData).find(k =>
        itineraryData[k].title === document.getElementById('itinTitle').textContent
      );
      const data = itineraryData[activeKey];
      currentItinDayIndex = index;
      document.querySelectorAll('.itin-day-tab').forEach((tab, i) => tab.classList.toggle('active', i === index));
      renderItinStops(data, index);
    }

    function renderItinStops(data, dayIndex) {
      const day = data.days[dayIndex];
      const stopsEl = document.getElementById('itinStops');
      const stopsHtml = day.stops.map(s => `
            <div class="itin-stop">
              <span class="itin-stop-time">${s.time}</span>
              <div class="itin-stop-body">
                <div class="itin-stop-name">${s.name}</div>
                <p class="itin-stop-blurb">${s.blurb}</p>
              </div>
            </div>
      `).join('');
      stopsEl.innerHTML = `
        <h4 class="itin-day-heading">${day.title}</h4>
        <div class="itin-stop-list">${stopsHtml}</div>
      `;
    }

    function closeItinerary() {
      document.getElementById('itinOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    // close modal on overlay click (outside modal card) or Escape key
    document.getElementById('itinOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'itinOverlay') closeItinerary();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeItinerary();
    });





