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
        hero: 'images/kalpa (1).jpg.jpg',
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





