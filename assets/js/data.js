// ==========================================
// TORNA FORT (PRACHANDAGAD) - MASTER DATA
// Bilingual: Marathi (mr) & English (en)
// With Complete Real Photographic Memories of the Diwali Killa Making
// ==========================================

const TORNA_DATA = {
  general: {
    mr: {
      name: "तोरणा (प्रचंडगड)",
      title: "स्वराज्याचे तोरण आणि छत्रपती शिवाजी महाराजांचा पहिला दुर्ग",
      tagline: "१६४६ मध्ये अवघ्या १६ व्या वर्षी छत्रपती शिवाजी महाराजांनी जिंकलेला हिंदवी स्वराज्याचा पहिला अजिंक्य दुर्ग!",
      elevation: "१,४०३ मीटर (४,६०३ फूट)",
      elevationNote: "पुणे जिल्ह्यातील सर्वात उंच डोंगरी किल्ला",
      location: "वेल्हे तालुका, पुणे जिल्हा, महाराष्ट्र",
      range: "सह्याद्रीची मुख्य रांग (वेल्ह्याचे खोरे)",
      type: "डोंगरी किल्ला (गिरीदुर्ग)",
      builtBy: "१३ व्या शतकात शिवपंथी शैव संप्रदाय / शिलहार व बहमनी काळ",
      conqueredDate: "इ.स. १६४६ (छत्रपती शिवाजी महाराज - वय १६ वर्षे)",
      distanceFromPune: "पुण्यापासून साधारण ६० कि.मी. (वेल्हे मार्गे)"
    },
    en: {
      name: "Torna (Prachandagad)",
      title: "The First Fort of Hindavi Swarajya & Chhatrapati Shivaji Maharaj's First Conquest",
      tagline: "Captured by 16-year-old Chhatrapati Shivaji Maharaj in 1646, marking the birth of Hindavi Swarajya!",
      elevation: "1,403 meters (4,603 feet)",
      elevationNote: "Highest hill fort in Pune district",
      location: "Velhe Taluka, Pune District, Maharashtra",
      range: "Sahyadri Western Ghats",
      type: "Hill Fort (Giridurga)",
      builtBy: "13th Century Shaiva sects / Silahara and Bahmani eras",
      conqueredDate: "1646 CE (Chhatrapati Shivaji Maharaj at age 16)",
      distanceFromPune: "Approx. 60 km from Pune via Velhe"
    }
  },

  // Key Statistics Counts
  stats: [
    { id: "elevation", icon: "mountain", mr: { value: "१,४०३ मी", label: "समुद्रसपाटीपासून उंची" }, en: { value: "1,403 m", label: "Elevation (Highest in Pune)" } },
    { id: "year", icon: "flag", mr: { value: "१६४६", label: "स्वराज्याची स्थापना (तोरण)" }, en: { value: "1646 CE", label: "Swarajya Foundation" } },
    { id: "machis", icon: "shield-half", mr: { value: "२ प्रमुख", label: "माच्या (झुंजार व बुधला)" }, en: { value: "2 Massive", label: "Machis (Zunjar & Budhla)" } },
    { id: "gates", icon: "door-open", mr: { value: "८+", label: "संरक्षित महाद्वारे" }, en: { value: "8+", label: "Fortified Gateways" } },
    { id: "buruj", icon: "tower-observation", mr: { value: "१२+", label: "अभेद्य बुरुज व चिलखती तट" }, en: { value: "12+", label: "Bastions & Armored Walls" } },
    { id: "tanks", icon: "droplet", mr: { value: "१०+", label: "पाण्याची टाकी व बारमाही तळी" }, en: { value: "10+", label: "Water Cisterns & Springs" } },
    { id: "temples", icon: "place-of-worship", mr: { value: "३+", label: "मंदिरे (मेंगाई, तोरणेश्वर, गंगाजाई)" }, en: { value: "3+", label: "Historical Temples" } }
  ],

  // Temples details
  temples: [
    {
      id: "mengai",
      icon: "goddess",
      mr: {
        name: "मेंगाई देवी मंदिर (Mengai Devi Temple)",
        category: "प्रमुख दैवत",
        location: "बालेकिल्ल्यावर बिनी व कोठी दरवाजा पार केल्यावर",
        desc: "मेंगाई देवी ही तोरणा किल्ल्याची अधिष्ठात्री ग्रामदेवता आहे. मंदिराच्या गर्भगृहात देवीची शेंदूरचर्चित प्रसन्न मूर्ती व त्रिशूल आहे. येथे मोठ्या संख्येने दुर्गप्रेमी व भाविक नतमस्तक होतात. मंदिरासमोर प्रशस्त पटांगण आणि मेंगाईचे पाण्याचे तळे आहे. ट्रेकर्ससाठी हे मंदिर रात्रीच्या मुक्कामासाठी हक्काचे आश्रयस्थान ठरते.",
        significance: "शिवाजी महाराजांनी गड जिंकल्यावर देवीचा जीर्णोद्धार करून आशीर्वाद घेतले होते."
      },
      en: {
        name: "Mengai Devi Temple",
        category: "Presiding Goddess",
        location: "On Balekilla plateau after crossing Bini & Kothi gates",
        desc: "Goddess Mengai is the guardian deity of Torna Fort. The sanctum houses a revered vermilion-adorned idol and a sacred trident. In front lies an open courtyard and the ancient Mengai freshwater pond. The temple hall provides sheltered lodging for visiting trekkers and fort pilgrims.",
        significance: "Shivaji Maharaj refurbished this temple after capturing the fort and offered prayers for the mission of Swarajya."
      }
    },
    {
      id: "toraneshwar",
      icon: "om",
      mr: {
        name: "तोरणेश्वर महादेव मंदिर (Toraneshwar Mahadev)",
        category: "शिव मंदिर",
        location: "मेंगाई मंदिराच्या पश्चिमेस, बालेकिल्ल्याच्या मध्यभागी",
        desc: "हे प्राचीन शिवमंदिर असून यात नंदी व पाषाण शिवलिंग आहे. तोरणेश्वर महादेवाच्या नावावरूनच या गडाला मूळ 'तोरणा' नाव पडले असेही मानले जाते. येथील शांत वातावरण आणि पुरातन दगडी बांधकाम सह्याद्रीतील शिवसंस्कृतीची साक्ष देते.",
        significance: "१३ व्या शतकातील शैव परंपरेचा ऐतिहासिक पुरावा."
      },
      en: {
        name: "Toraneshwar Mahadev Temple",
        category: "Lord Shiva Shrine",
        location: "West of Mengai Temple, central ridge of Balekilla",
        desc: "An ancient Shiva temple housing a stone Nandi sculpture and a sacred Shivling. Historical lore suggests the fort derived its original name 'Torna' from Lord Toraneshwar. The stone sanctum exudes deep tranquility amidst the mountain winds.",
        significance: "Evidence of 13th-century Shaivite presence in the Sahyadris."
      }
    },
    {
      id: "gangajai",
      icon: "shrine",
      mr: {
        name: "गंगाजाई / वकंजाई मंदिर (Gangajai / Vakanjai Mandir)",
        category: "माचीवरील दैवत",
        location: "बुधला माचीच्या वाटेवर, गंगाजाई पाण्याच्या टाक्याजवळ",
        desc: "बुधला माचीवर प्रवेश करण्यापूर्वी हे लहान परंतु अत्यंत जागृत मंदिर वसलेले आहे. माचीवरील पहारेकरी आणि सैनिकांचे हे श्रद्धास्थान होते. मंदिराच्या परिसरात बारमाही पाण्याचे पाषाण टाके आहे.",
        significance: "बुधला माचीवरील जवानांचे रक्षक स्थान."
      },
      en: {
        name: "Gangajai / Vakanjai Temple",
        category: "Machi Guardian Shrine",
        location: "En route to Budhla Machi, near the Gangajai water spring",
        desc: "A revered outpost shrine dedicated to Goddess Gangajai/Vakanjai on the western approach to Budhla Machi. It served as a spiritual haven for sentries guarding this difficult western wing.",
        significance: "Spiritual stronghold for warriors stationed on Budhla Machi."
      }
    },
    {
      id: "vetal",
      icon: "platform",
      mr: {
        name: "वेताळ ओटा / वेताळ स्थान (Vetal Shrine)",
        category: "संरक्षक स्थान",
        location: "हत्तीमाळ व मध्य कड्यावरील उंचवटा",
        desc: "सह्याद्रीच्या किल्ल्यांवर सीमारक्षक म्हणून वेताळाची स्थापना करण्याची जुनी परंपरा आहे. तोरण्यावरील हत्तीमाळ भागात उघड्यावर वेताळाचा ओटा व मूर्ती स्थापित आहे.",
        significance: "गडाच्या मध्यभागावरील पारंपारिक पहारा व ग्रामदैवत."
      },
      en: {
        name: "Vetal Platform / Shrine",
        category: "Boundary Guardian",
        location: "Hattimal ridge crest",
        desc: "Following ancient Sahyadri traditions of placing Vetal (the border guardian spirit) along exposed mountain ridges, this stone platform watches over the windswept Hattimal spine.",
        significance: "Guardian deity of the central ridge."
      }
    }
  ],

  // Bastions / Buruj details
  buruj: [
    {
      id: "chilakhati",
      nameMr: "चिलखती बुरुज (Chilakhati Buruj)",
      nameEn: "Armored Double-Walled Bastions",
      locationMr: "बुधला माचीच्या टोकावर (पश्चिमेस)",
      locationEn: "At the western tip of Budhla Machi",
      descMr: "तोरणा किल्ल्याचे सर्वात मोठे लष्करी आणि स्थापत्य वैशिष्ट्य! या बुरुजाला दुहेरी तटबंदी (चिलखत) असून बाहेरील तटाला शत्रूने खिंडार पाडले तरी आतील तटावरून सैनिक बाणांचा व बंदुकीचा मारा सुरू ठेवू शकत. यातून सैनिकांच्या येण्या-जाण्यासाठी पहारेकऱ्यांचे भुयारी मार्ग (गॅलरी) आहेत.",
      descEn: "The crowning defensive engineering marvel of Torna! Built with concentric double curtain-walls ('Chilakhat' meaning armor), allowing defenders to retreat to an inner parapet with musketry embrasures if the outer rampart was breached."
    },
    {
      id: "hanuman_buruj",
      nameMr: "हनुमान बुरुज (Hanuman Buruj)",
      nameEn: "Hanuman Bastion",
      locationMr: "बिनी व कोठी दरवाज्याच्या मुखावर",
      locationEn: "Guarding Bini and Kothi Gateways",
      descMr: "वेल्हे गावातून गडावर येणाऱ्या प्रमुख पायवाट आणि दरवाज्यावर थेट नजर ठेवणारा महाकाय बुरुज. यावर मारुतीरायांची मूर्ती कोरलेली असून तोफेच्या माऱ्यासाठी जागा केलेली आहे.",
      descEn: "Guarding the main entryway from Velhe village alongside Bini Darwaja. Features a sculpted Maruti deity and stone artillery placements commanding the valley approach."
    },
    {
      id: "bhel_buruj",
      nameMr: "भेल बुरुज (Bhel Buruj)",
      nameEn: "Bhel Bastion",
      locationMr: "झुंजार माचीच्या प्रारंभास",
      locationEn: "At the entrance of Zunjar Machi",
      descMr: "अतिशय अरुंद आणि खोल दऱ्यांनी वेढलेल्या झुंजार माचीवर जाणारा मार्ग अडवणारा अतिशय मजबूत बुरुज. गडाच्या पूर्वेकडील राजगड आणि कानद खोऱ्यावर येथून लक्ष ठेवता येत असे.",
      descEn: "Anchoring the entrance of the precipitous Zunjar Machi ridge. Positioned to monitor trails leading towards Rajgad and Kanand valley."
    },
    {
      id: "radtondi_buruj",
      nameMr: "रडतोंडीचा बुरुज (Radtondi Buruj)",
      nameEn: "Radtondi (Weeping-Face) Bastion",
      locationMr: "बुधला माचीच्या दक्षिणेकडील कड्यावर",
      locationEn: "On the southern cliff of Budhla Machi",
      descMr: "'रडतोंडी' म्हणजे या बुरुजाची चढण इतकी भयंकर आणि उभी आहे की शत्रू सैन्याला चढताना रडू कोसळायचे! येथून खाली खोल दरी कोसळते.",
      descEn: "Named 'Radtondi' (literally 'Crying Face') because its slope is so treacherous that assaulting invaders would weep in despair. Overlooks a sheer vertical abyss."
    },
    {
      id: "takmak_buruj",
      nameMr: "टकमक बुरुज (Takmak Buruj)",
      nameEn: "Takmak Bastion",
      locationMr: "उत्तरेकडील कडा, तोरणा पठार",
      locationEn: "Northern cliff, facing Lohagad valley",
      descMr: "उत्तरेकडे लोहगड-विसापूरच्या दिशेला रोखलेला उंच कड्यावरील बुरुज. कोकणातील हालचालींवर दूरवर नजर ठेवण्यासाठी हा मोक्याचा पहारा होता.",
      descEn: "Perched over the northern precipice pointing toward Lohagad and Visapur. Provided panoramic scouting across the Konkan plains."
    },
    {
      id: "dindi_buruj",
      nameMr: "दिंडीचा बुरुज (Dindi Buruj)",
      nameEn: "Dindi Bastion",
      locationMr: "दिंडी दरवाजा व कोकण बाजू",
      locationEn: "Guarding Dindi postern & Konkan face",
      descMr: "दिंडी दरवाजाच्या संरक्षणासाठी बांधलेला बुरुज, ज्यावरून गुपचूप गस्ती घालता येत असे.",
      descEn: "Defends the secret Dindi postern door and the steep Konkan descent."
    },
    {
      id: "safedi_buruj",
      nameMr: "सफेदीचा बुरुज (Safedi Buruj)",
      nameEn: "Safedi Bastion",
      locationMr: "बालेकिल्ल्याची पश्चिमोत्तर बाजू",
      locationEn: "North-west flank of Balekilla",
      descMr: "चुन्याचा गिलावा असलेला पांढरा शुभ्र दिसणारा बुरुज, जो दूरवरून ओळखता येत असे.",
      descEn: "Prominent whitewashed bastion historically coated with lime plaster, visible across distant ridges."
    },
    {
      id: "hattimal_buruj",
      nameMr: "हत्तीमाळ बुरुज (Hattimal Bastion)",
      nameEn: "Hattimal Bastion",
      locationMr: "गडाच्या मधोमध पसरलेल्या हत्तीमाळ कड्यावर",
      locationEn: "On the central Hattimal spine",
      descMr: "हत्तीच्या पाठीसारख्या पसरलेल्या मध्य कड्यावर टेहळणी व संरक्षणासाठी उभारलेला बुरुज.",
      descEn: "Positioned on the spine of the mountain resembling an elephant's back, providing continuous surveillance."
    },
    {
      id: "malecha_phutka",
      nameMr: "माळेचा व फुटका बुरुज (Malecha & Phutka Buruj)",
      nameEn: "Malecha & Phutka Bastions",
      locationMr: "बालेकिल्ल्याच्या बाहेरील तटबंदी",
      locationEn: "Outer perimeter of Balekilla",
      descMr: "तटबंदीच्या कोपऱ्यावर तोफा आणि तिरंदाजांसाठी उभारलेले मजबूत अर्धगोलाकार बुरुज.",
      descEn: "Semicircular corner bastions fortified for archers, musket gunners, and cannon swivels."
    },
    {
      id: "makuli_buruj",
      nameMr: "मिकुली / म्हाकुली बुरुज (Makuli Bastion)",
      nameEn: "Makuli Bastion",
      locationMr: "बुधला माचीच्या उत्तर टोकाजवळ",
      locationEn: "Near northern flank of Budhla rock",
      descMr: "बुधल्याच्या विस्तीर्ण खडकाला लागून असलेला पहारा बुरुज.",
      descEn: "Outpost bastion flanking the massive Budhla rock projection."
    }
  ],

  // Gates / Darwaje
  gates: [
    {
      id: "bini_darwaja",
      nameMr: "बिनी दरवाजा (Bini Darwaja)",
      nameEn: "Bini Darwaja (First Main Gate)",
      locationMr: "गडाची मुख्य प्रवेशवाट (वेल्हे गावाकडून)",
      locationEn: "Primary entrance trail from Velhe village",
      descMr: "गडाचा पहिला भव्य महाद्वार. नैसर्गिक कातळात कोरलेल्या पायऱ्या आणि दोन्ही बाजूंना बुरुजांचा कडक पहारा आहे. येथे शत्रुसैन्याला फसवण्यासाठी वळणावळणाचा मार्ग ठेवण्यात आला आहे.",
      descEn: "The primary fortified gateway into Torna from Velhe village. Set into natural volcanic rock with flanking bastions and a deliberate ninety-degree bend to disrupt charging cavalry or battering rams."
    },
    {
      id: "kothi_darwaja",
      nameMr: "कोठी दरवाजा (Kothi Darwaja)",
      nameEn: "Kothi Darwaja (Granary / Inner Gate)",
      locationMr: "बिनी दरवाजा पार केल्यावर",
      locationEn: "Sequential gate directly after Bini Darwaja",
      descMr: "दुसरा मुख्य दरवाजा. यातून बालेकिल्ल्यावर प्रवेश होतो. दरवाजाच्या दोन्ही बाजूला पहारेकऱ्यांच्या देवड्या (चौक्या) आहेत. येथे धान्य आणि शस्त्रागाराची कोठी होती म्हणून याला कोठी दरवाजा म्हणतात.",
      descEn: "The sequential second gateway leading directly onto the Balekilla plateau. Flanked by sentry guard alcoves (Devdya), it stood before the fort's grain and military storehouses (Kothi)."
    },
    {
      id: "konkan_darwaja",
      nameMr: "कोकण दरवाजा (Konkan Darwaja)",
      nameEn: "Konkan Darwaja",
      locationMr: "गडाच्या उत्तरेस कोकणाच्या दरीकडे",
      locationEn: "Northern precipice opening towards Konkan",
      descMr: "उत्तरेकडील कड्यावरून कोकणात उतरणाऱ्या अत्यंत दुर्गम वाटेवर हा दरवाजा आहे. हा दरवाजा आपत्कालीन हालचाली व कोकणातील रसद आणण्यासाठी वापरला जात असे.",
      descEn: "Facing the northern precipice towards the Konkan plains below. Served as an emergency sortie portal and a supply line connect to the valleys below."
    },
    {
      id: "chitta_darwaja",
      nameMr: "चित्ता दरवाजा (Chitta Darwaja)",
      nameEn: "Chitta Darwaja",
      locationMr: "बुधला माचीच्या प्रवेशावर",
      locationEn: "Rock-cut entrance to Budhla Machi",
      descMr: "बालेकिल्ल्यावरून बुधला माचीवर प्रवेश करताना हा कातळात कोरलेला दरवाजा लागतो. हा दरवाजा पार केल्याशिवाय बुधल्याच्या चिलखती तटावर जाता येत नाही.",
      descEn: "Carved into sheer living stone, serving as the choke point controlling access from the central ridge into the expansive Budhla Machi."
    },
    {
      id: "bhagat_darwaja",
      nameMr: "भगत दरवाजा (Bhagat Darwaja)",
      nameEn: "Bhagat Darwaja",
      locationMr: "बुधला माचीच्या दक्षिण अंगास (राजगड बाजू)",
      locationEn: "Southern flank of Budhla Machi facing Rajgad",
      descMr: "राजगडाच्या दिशेने तोंड असलेला जुना दरवाजा. येथून राजगडाशी गुप्त संदेशवहनासाठी खलिते पाठवले जात.",
      descEn: "Situated on the southern cliff facing neighboring Fort Rajgad, historically used for express courier dispatches between the twin royal citadels."
    },
    {
      id: "thinla_darwaja",
      nameMr: "थिनला / धिंगला दरवाजा (Thinla Darwaja)",
      nameEn: "Thinla / Dhingla Darwaja",
      locationMr: "हत्तीमाळ व बालेकिल्ल्याच्या जोडणीवर",
      locationEn: "Between Hattimal saddle and Balekilla",
      descMr: "गडाच्या मधल्या अरुंद भागावर पहारा ठेवणारा दरवाजा. बालेकिल्ला सुरक्षित ठेवण्यासाठी ही मधली संरक्षण भिंत होती.",
      descEn: "Mid-ridge defensive gate isolating Balekilla from the central Hattimal saddle for defensive compartmentalization."
    },
    {
      id: "vakanjai_darwaja",
      nameMr: "वकंजाई दरवाजा व सुरुंग (Vakanjai Gate & Tunnel)",
      nameEn: "Vakanjai Gate & Rock Tunnel",
      locationMr: "बुधला माचीच्या पश्चिमेस",
      locationEn: "Western face of Budhla Machi",
      descMr: "कातळ फोडून तयार केलेला बोगदा आणि गुप्त दरवाजा. गडाला वेढा पडल्यास संकटसमयी निसटून जाण्यासाठी हे गुप्त तोंड तयार करण्यात आले होते.",
      descEn: "An ingenious rock-cut secret tunnel and concealed sally port designed for stealth escapes and counter-ambushes during sieges."
    },
    {
      id: "ghor_dindi_darwaja",
      nameMr: "घोर दरवाजा व दिंडी दरवाजा (Ghor & Dindi Darwaja)",
      nameEn: "Ghor & Dindi Postern Gates",
      locationMr: "कातळातील गुप्त चोरवाटा",
      locationEn: "Concealed postern sally ports along walls",
      descMr: "तटबंदीमध्ये लपवलेल्या लहान दिंडी खिडक्या व दरवाजे, जे केवळ एका वेळी एका सैनिकाला येण्या-जाण्याइतके लहान असत.",
      descEn: "Concealed postern doors integrated into the ramparts, engineered wide enough for only one soldier at a time, making surprise enemy entries impossible."
    }
  ],

  // Water Tanks and Cisterns
  waterTanks: [
    {
      id: "mengai_tale",
      nameMr: "मेंगाईचे तळे (Mengai Tale)",
      nameEn: "Mengai Lake / Reservoir",
      locationMr: "मेंगाई देवी मंदिराच्या दक्षिणेस",
      locationEn: "South of Mengai Devi Temple",
      typeMr: "मोठे उघडे गोड्या पाण्याचे तळे",
      typeEn: "Large Freshwater Reservoir",
      descMr: "गडावरील सर्वात मोठे आणि प्रमुख पाण्याचे तळे. येथे बारमाही मुबलक पाणी उपलब्ध असते. आजही गडावर जाणारे पर्यटक व स्थानिक या पाण्याचा वापर करतात.",
      descEn: "The largest open freshwater reservoir on Torna Fort, situated directly near the Mengai temple. Retains cold, potable spring water year-round."
    },
    {
      id: "kapur_taki",
      nameMr: "कापूर टाके / कापूर तळे (Kapur Taki)",
      nameEn: "Kapur Taki (Camphor Cistern)",
      locationMr: "बुधला माचीकडे जाणाऱ्या वाटेवर",
      locationEn: "En route to Budhla Machi",
      typeMr: "पाषाण कोरलेले थंडगार पाण्याचे टाके",
      typeEn: "Rock-cut Crystal Spring Cistern",
      descMr: "या पाण्याचे वैशिष्ट्य म्हणजे हे कापरासारखे स्वच्छ, नितळ आणि अतिशय थंडगार असते, म्हणून याला 'कापूर टाके' म्हणतात. कातळात कोरलेले हे टाके उन्हाळ्यातही आटत नाही.",
      descEn: "Legendary for its crystalline clarity and ice-cold temperature resembling the purity of camphor (Kapur). Carved deep into basalt, it never dries up even in peak summer."
    },
    {
      id: "teen_taki",
      nameMr: "तीन टाकी (Teen Taki)",
      nameEn: "Teen Taki (The Three Interlinked Cisterns)",
      locationMr: "हत्तीमाळ पठार",
      locationEn: "Hattimal Plateau Ridge",
      typeMr: "सलग तीन कातळ खोदलेली टाकी",
      typeEn: "Sequential Rock-Cut Filtration Tanks",
      descMr: "एका रेषेत कातळात कोरलेली तीन टाकी. पावसाचे पाणी नैसर्गिकरित्या गाळून साठवण्यासाठी ही प्राचीन जलसंधारण पद्धत वापरली गेली आहे.",
      descEn: "A series of three sequential rock-hewn cisterns on the central Hattimal ridge. Rainwater naturally settled and filtered from one tank to the next."
    },
    {
      id: "sheshganga_patalganga",
      nameMr: "शेषगंगा आणि पाताळगंगा (Sheshganga & Patalganga)",
      nameEn: "Sheshganga & Patalganga Springs",
      locationMr: "बुधला माचीची पूर्व-दक्षिण बाजू",
      locationEn: "Southeast slope of Budhla Machi",
      typeMr: "नैसर्गिक बारमाही झरे व टाकी",
      typeEn: "Perennial Subterranean Springs",
      descMr: "डोंगराच्या पोटातून पाझरणारे पवित्र व गोड पाण्याचे झरे. गडावर शेकडो सैनिकांची तहान भागवण्यासाठी हे झरे अत्यंत महत्त्वाचे होते.",
      descEn: "Perennial mountain springs filtering through subterranean rock strata, providing drinking water to the garrisons stationed on Budhla Machi."
    },
    {
      id: "khokad_taki",
      nameMr: "खोकड / खेळकंडे टाके (Khokad Taki)",
      nameEn: "Khokad Cistern",
      locationMr: "हनुमान बुरुजाच्या खालील बाजूस",
      locationEn: "Directly below Hanuman Bastion",
      typeMr: "कातळातील टाकी",
      typeEn: "Cliffside Rock Tank",
      descMr: "बिनी दरवाज्यातून गडावर येणाऱ्या पहारेकऱ्यांसाठी हे पाण्याची मुख्य सोय होती.",
      descEn: "Rock cistern situated below Hanuman Bastion, serving the sentries guarding the primary entrance gates."
    },
    {
      id: "mahar_taki",
      nameMr: "महार टाकी (Mahar Taki)",
      nameEn: "Mahar Cistern",
      locationMr: "कोकण कड्याच्या उतारावर",
      locationEn: "Northern slope facing Konkan",
      typeMr: "उत्तरेकडील पाण्याच्या टाक्या",
      typeEn: "Northern Cliff Cistern",
      descMr: "कोकण दरवाजाजवळ कड्याच्या पायथ्याशी कोरलेले ऐतिहासिक टाके.",
      descEn: "Cliffside rock tank located on the northern slope overlooking the Konkan drop."
    },
    {
      id: "chaukoni_haud",
      nameMr: "चौकोनी तळे व हौद (Square Tank & Cistern)",
      nameEn: "Square Cisterns & Masonry Tanks",
      locationMr: "दारूकोठार व बुधला माची परिसर",
      locationEn: "Near Ammunition Storehouse, Budhla Machi",
      typeMr: "दगडी बांधीव हौद",
      typeEn: "Dressed Stone Masonry Cisterns",
      descMr: "सैन्य छावणी आणि प्रशासकीय वापरासाठी दगडी चिऱ्यांनी बांधलेले चौकोनी हौद.",
      descEn: "Dressed-stone masonry cisterns used for garrison utility, cooking, and construction maintenance."
    }
  ],

  // Machis and Topography
  machis: [
    {
      id: "zunjar_machi",
      nameMr: "झुंजार माची (Zunjar Machi)",
      nameEn: "Zunjar Machi (The Valiant Ridge)",
      orientationMr: "पूर्व-ईशान्य दिशा",
      orientationEn: "East-Northeast",
      lengthMr: "सुमारे १.५ कि.मी. लांब कडा",
      lengthEn: "Approx. 1.5 km long ridge",
      descMr: "तोरणा गडाची पूर्वेकडे जाणारी ही माची एखाद्या अजस्र नागासारखी किंवा तलवारीच्या धारेसारखी निमुळती होत जाते. दोन्ही बाजूला हजारो फूट खोल तुटलेले कडे आहेत. या माचीवर जाणे अत्यंत आव्हानात्मक असून याच्या टोकावर 'भेल बुरुज' आणि 'शिडीचा माळ' आहे. माचीच्या संरक्षणासाठी बंदुकीच्या माऱ्याचे चिरे (Embrasures) आजही सुस्थितीत आहेत.",
      descEn: "Extending east-northeast like a serrated dragon's spine or the razor edge of a Maratha talwar. Flanked on both sides by sheer 2,000-ft vertical drops. Fortified with Bhel Buruj, Shidicha Mal, and stone parapets pierced with musket loopholes."
    },
    {
      id: "budhla_machi",
      nameMr: "बुधला माची (Budhla Machi)",
      nameEn: "Budhla Machi (The Oil-Vessel Plateau)",
      orientationMr: "पश्चिम-नैऋत्य दिशा",
      orientationEn: "West-Southwest",
      lengthMr: "सुमारे २ कि.मी. लांब विस्तीर्ण माची",
      lengthEn: "Approx. 2 km long plateau",
      descMr: "गडाच्या पश्चिमेला पसरलेली ही अफाट माची आहे. या माचीवर एक महाकाय नैसर्गिक खडक उताण्या पालथ्या बुधल्यासारखा (तेलाचा चामडी बुधला) दिसतो, म्हणून याला 'बुधला' म्हणतात! या माचीवर विशाळा खडक, चित्ता दरवाजा, दारूचे कोठार, कापूर टाके आणि सर्वात शेवटी जगप्रसिद्ध 'चिलखती बुरुज' आहेत. टोकाला 'घोडेजिन खडक' नावाचा घोड्याच्या जिन्यासारखा नैसर्गिक खडक आहे.",
      descEn: "A sprawling western spur stretching nearly 2 km. It derives its name from a colossal natural basalt monolith that resembles an inverted traditional leather oil vessel ('Budhla'). Features Chitta Gate, Gunpowder Magazines, Kapur Tank, and culminates in the famous double-walled Chilakhati Bastions and Ghodejin (Saddle Rock)."
    },
    {
      id: "balekilla",
      nameMr: "बालेकिल्ला व हत्तीमाळ (Balekilla & Hattimal)",
      nameEn: "Balekilla & Hattimal (The Citadel & Elephant Spine)",
      orientationMr: "गडाचा मध्यवर्ती उंच भाग",
      orientationEn: "Central High Ridge",
      lengthMr: "गडाचे सर्वोच्च शिखर व सदर",
      lengthEn: "Highest summit & administrative seat",
      descMr: "गडाचा मध्यवर्ती सर्वोच्च भाग म्हणजे बालेकिल्ला. येथे मेंगाई देवी मंदिर, तोरणेश्वर मंदिर, लाकडखाना आणि प्रशासकीय सदरेचे अवशेष आहेत. बालेकिल्ल्यावरून सभोवतालच्या राजगडाचे बालेकिल्ला, सिंहगड, रायगड, पुरंदर आणि प्रतापगड यांचे विहंगम दर्शन होते.",
      descEn: "The crowning citadel of Torna, sheltering Mengai Temple, Toraneshwar, the timber storehouse (Lakadkhana), and ruined administrative court (Sadar). On clear days, it offers breathtaking 360-degree vistas of Rajgad, Sinhagad, Raigad, Purandar, and Pratapgad."
    }
  ],

  // Famous Stories & Chronicles
  stories: [
    {
      id: "swarajya_toran_1646",
      titleMr: "१. स्वराज्याचे पहिले तोरण (The Conquest of 1646)",
      titleEn: "1. Tying the First Garland of Swarajya (1646)",
      year: "१६४६ / 1646",
      subtitleMr: "अवघ्या १६ व्या वर्षी छत्रपती शिवाजी महाराजांचा पहिला ऐतिहासिक विजय!",
      subtitleEn: "16-Year-Old Shivaji Maharaj's Historic First Conquest!",
      contentMr: `इ.स. १६४६ चा काळ. अवघे १६ वर्षांचे बालराजे छत्रपती शिवाजी महाराज, हातात भवानीची प्रेरणा आणि उरामध्ये स्वतंत्र हिंदवी स्वराज्याचे ध्येय बाळगून होते. विजापूरच्या आदिलशाहीच्या ताब्यात असलेला तोरणा किल्ला हा प्रचंड मोठा, दुर्लक्षित पण अत्यंत सामरिक दृष्ट्या महत्वाचा होता.

शिवरायांनी आपले जिवाभावाचे सवंगडी—तानाजी मालुसरे, येसाजी कंक, बाजी पासलकर आणि विश्वासू मावळ्यांना सोबत घेतले. एकही थेंब रक्त न सांडता, अत्यंत चपळाईने आणि गुप्त व्यूहरचनेने शिवरायांनी तोरणा किल्ल्यावर भगवा ध्वज फडकवला! 

स्वराज्याचे पहिले तोरण या गडावर बांधले गेले, म्हणून या विजयाला 'स्वराज्याचे तोरण' मानले जाते. या अथांग आणि प्रचंड दुर्गाचे स्वरूप पाहून छत्रपती शिवरायांनी या गडाचे नामकरण **"प्रचंडगड"** असे केले!`,
      contentEn: `In 1646 CE, when Chhatrapati Shivaji Maharaj was only 16 years old, he envisioned an independent sovereign realm—Hindavi Swarajya—free from despotic sultanates. Torna, then under the neglectful rule of the Bijapur Adilshahi killedar, stood as a massive sentinel in the Sahyadris.

Gathering his band of devoted Mavala comrades including Tanaji Malusare, Yesaji Kank, and Baji Pasalkar, young Shivaji executed an audacious bloodless coup. Ascending the towering cliffs, the Mavalas took control of the citadel and hoisted the sacred saffron Maratha flag (Bhagwa Dhwaj)!

Because it was the very first fort captured to inaugurate Hindavi Swarajya, it was hailed as tying the festive garland ('Toran') of freedom. Struck by its gigantic ramparts and monumental cliffs, Shivaji Maharaj officially christened the fort **"Prachandagad"** (The Colossal Fortress)!`
    },
    {
      id: "hidden_treasure_rajgad",
      titleMr: "२. दडलेला खजिना आणि राजगडाची निर्मिती (The Divine Treasure that Built Rajgad)",
      titleEn: "2. The Unearthed Gold Treasure & The Rise of Fort Rajgad",
      year: "१६४७ / 1647",
      subtitleMr: "देवी भवानीचा प्रसाद आणि मावळ्यांचा निष्कलंक प्रामाणिकपणा!",
      subtitleEn: "Goddess Bhavani's Blessing & The Incorruptible Honesty of the Mavalas!",
      contentMr: `तोरणा किल्ला जिंकल्यानंतर छत्रपती शिवाजी महाराजांनी लगेचच गडाच्या पडक्या तटबंदी आणि बुरुजांच्या दुरुस्तीचे काम सुरू केले. सुरुंग लावताना व कातळ खोदताना मजुरांच्या कुदळीला तांब्याचे मोठे हंडे (घडे) लागले. 

ते हंडे उघडून पाहिले असता ते सोन्याच्या मोहरांनी काठोकाठ भरलेले होते! आश्चर्य म्हणजे, त्या गरीब मावळ्यांनी एकाही मोहरेला हात न लावता, तो सर्व अपार खजिना जसाच्या तसा छत्रपती शिवरायांच्या चरणी आणून ठेवला! मावळ्यांचा हा अढळ प्रामाणिकपणा पाहून शिवरायांचे डोळे पाणावले.

महाराजांनी मानले की हे धन म्हणजे आई भवानी आणि मेंगाई देवीने स्वराज्याच्या कार्यास दिलेला साक्षात आशीर्वाद आहे. या पवित्र खजिन्यातून महाराजांनी तोरण्याचे बुरुज मजबूत केले आणि उरलेल्या संपूर्ण खजिन्याचा उपयोग समोरच उभ्या असलेल्या मुरुंबदेवाच्या डोंगरावर हिंदवी स्वराज्याची पहिली राजधानी बांधण्यासाठी केला—तोच हा अजिंक्य **राजगड**!`,
      contentEn: `Soon after taking Torna, Shivaji Maharaj initiated extensive repair works on the crumbling battlements and bastions. While excavating foundation trenches near the ramparts, the workers' pickaxes struck buried copper cauldrons (Hande).

When opened, the vessels were brimming to the brim with gold mohurs and ancient royal coins! In an extraordinary display of incorruptible loyalty, the humble Mavala laborers did not pocket a single coin. They carried every jar unbroken and placed it at the feet of Shivaji Maharaj!

Overjoyed by their supreme honesty, Maharaj proclaimed the treasure a direct divine blessing from Goddess Bhavani and Mengai Devi. Using this fortune, he fully fortified Torna and channeled the remaining vast treasure into constructing Hindavi Swarajya's first permanent capital citadel on neighboring Murumbdev hill—the legendary **Fort Rajgad**!`
    },
    {
      id: "chilakhati_marvel",
      titleMr: "३. चिलखती बुरुजाचे स्थापत्य आश्चर्य (The Marvel of Armored Bastions)",
      titleEn: "3. The Engineering Marvel of Double-Walled Fortifications",
      year: "स्थापत्य / Architecture",
      subtitleMr: "जगातील सर्वोत्कृष्ट लष्करी कल्पकता आणि दुहेरी संरक्षण भिंती!",
      subtitleEn: "Pioneering Defense Architecture that Stunned Enemy Commanders!",
      contentMr: `तोरणा किल्ल्याची बुधला माची पश्चिमेकडे २ किलोमीटर पसरलेली आहे. या माचीच्या शेवटी असलेले 'चिलखती बुरुज' हे मराठा दुर्गस्थापत्याचे जगातील एक अद्वितीय उदाहरण आहे.

'चिलखत' म्हणजे सैनिकांचे संरक्षक चिलखत (Body Armor). त्याच धर्तीवर या बुरुजाला बाहेरील एक भिंत आणि आत दुसरी सुरक्षित भिंत अशी दुहेरी रचना केली आहे. बाहेरील तटाला शत्रूने सुरूंग लावून तोडले, तरी आतील बुरुजावरून रक्षक बाण व बंदुकीच्या गोळ्यांचा वर्षाव सुरू ठेवू शकत. या दोन तटबंदींच्या मध्ये सैनिकांच्या सुरक्षित हालचालीसाठी भुयारी गॅलरी आणि पाण्याचे टाके तयार केलेले आहेत. हे स्थापत्य पाहून मुघल सरदारही थक्क झाले होते!`,
      contentEn: `Extending two kilometers west, Budhla Machi terminates at the world-renowned 'Chilakhati Buruj'. The word 'Chilakhat' translates to personal body armor, and the Maratha military engineers applied this exact defensive concept to stone architecture!

The bastion possesses an outer curtain wall and a secondary inner wall with subterranean firing passages. Even if an attacking force managed to breach the outer parapet, defenders in the inner gallery retained commanding crossfire through specialized angled loopholes. Mughal siege engineers documented this complex as one of the most impenetrable bastion networks in peninsular India.`
    },
    {
      id: "aurangzeb_siege_1704",
      titleMr: "४. औरंगजेबाचा वेढा आणि मराठ्यांचा सिंहपराक्रम (The 1704 Mughal Siege)",
      titleEn: "4. Aurangzeb's Siege & The Defiant Maratha Retaliation (1704)",
      year: "१७०४ / 1704",
      subtitleMr: "बादशाहने नाव दिले 'फुतुल्गैब' (अदृश्य विजय), पण मराठ्यांनी तो पुन्हा हिसकावून घेतला!",
      subtitleEn: "Emperor Named it 'Futulgaib', but Maratha Warriors Stormed it Back!",
      contentMr: `इ.स. १७०४ मध्ये वयाच्या ८६ व्या वर्षी खुद्द मुघल सम्राट औरंगजेब तोरणा जिंकण्यासाठी वेल्हे येथे तळ ठोकून आला. मुघल सेनापती जुल्फिकार खान आणि बादशहाच्या प्रचंड फौजेने तोरण्याला वेढा दिला.

मराठा किल्लेदार आणि मूठभर मावळ्यांनी तब्बल अडीच महिने औरंगजेबाच्या तोफगोळ्यांचा सामना केला. प्रचंड चिकाटीने लढल्यानंतर जेव्हा अन्नधान्य संपले, तेव्हा मुघलांनी तोरणा ताब्यात घेतला. अतिशय कष्टाने मिळालेल्या या विजयामुळे औरंगजेबाने गर्वाने तोरण्याचे नाव **'फुतुल्गैब'** (Futulgaib - दैवी / अदृश्य विजय) ठेवले!

परंतु बादशहाचा हा आनंद फार काळ टिकला नाही! औरंगजेब महाराष्ट्रातून निघून जाण्यापूर्वीच, मराठा वीरांनी गनिमी काव्याने मुघल सैन्यावर अचानक हल्ला चढवून तोरणा पुन्हा स्वराज्यात दाखल केला आणि भगवा झेंडा पुन्हा दिमाखात फडकवला!`,
      contentEn: `In 1704 CE, the aging Mughal Emperor Aurangzeb himself pitched imperial tents at the base of Torna in Velhe, determined to bring down the fort where Shivaji had first hoisted the saffron standard 58 years prior.

Under General Zulfiqar Khan, the imperial army subjected the cliffs to relentless bombardments. A small Maratha garrison defied the mammoth Mughal army for two and a half grueling months until supplies were exhausted. Elated by finally capturing it, Aurangzeb renamed Torna **'Futulgaib'** ('Divine/Secret Victory').

Yet the Emperor's celebration was short-lived. In true Maratha guerrilla warfare style, daring commandos launched a surprise nocturnal assault shortly thereafter, wiping out the Mughal garrison and re-hoisting the Bhagwa Dhwaj high atop Prachandagad!`
    }
  ],

  // Sorted Real Fort Making Memories Gallery
  initialGallery: [
    // 1. Planning & Site Prep
    {
      id: "mem_01",
      titleMr: "गडाच्या जागेची झाडलोट व स्वच्छता",
      titleEn: "Sweeping & Preparing the Courtyard Grounds",
      stage: "planning",
      stageMr: "प्लॅनिंग व गप्पा",
      stageEn: "Planning & Banter",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.34 PM.jpeg",
      descMr: "तोरणा किल्ल्याच्या उभारणीसाठी सोसायटीच्या प्रांगणातील जागा झाडून चकचकीत करताना आमचे मावळे.",
      descEn: "Clearing and sweeping the apartment courtyard to mark out the expansive fort foundation area."
    },
    {
      id: "mem_02",
      titleMr: "रात्रीची जय्यत तयारी आणि जागा मोकळी करणे",
      titleEn: "Night Prep & Ground Cleaning",
      stage: "planning",
      stageMr: "प्लॅनिंग व गप्पा",
      stageEn: "Planning & Banter",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.34 PM (2).jpeg",
      descMr: "भव्य किल्ला बनवण्यासाठी जमिनीवरील धूळ-कचरा साफ करून जागा सज्ज करताना.",
      descEn: "Getting the vast floor space spotless and ready for chalk grid layout and brick boundaries."
    },
    {
      id: "mem_03",
      titleMr: "किल्ला उभारणीसाठी स्वच्छता मोहीम",
      titleEn: "Courtyard Site Clearing",
      stage: "planning",
      stageMr: "प्लॅनिंग व गप्पा",
      stageEn: "Planning & Banter",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.35 PM.jpeg",
      descMr: "प्रत्येक कोपरा स्वच्छ करून पाया आखण्यासाठी योग्य जागा तयार करतानाचे छायाचित्र.",
      descEn: "Making sure every corner of the courtyard is clear and prepared for building the mountain ridges."
    },
    {
      id: "mem_04",
      titleMr: "रात्रीच्या कामासाठी फ्लडलाईट्स फिटिंग!",
      titleEn: "Setting Up Night Floodlights on the Pole",
      stage: "planning",
      stageMr: "प्लॅनिंग व गप्पा",
      stageEn: "Planning & Banter",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.34 PM (1).jpeg",
      descMr: "रात्रभर चालणाऱ्या किल्ला बांधणीसाठी अथर्व सोसायटीच्या खांबावर एलईडी फोकस लाईट बसवताना मित्र!",
      descEn: "Mounting high-power floodlights on the building pole so the squad could work through late nights!"
    },
    {
      id: "mem_05",
      titleMr: "जमिनीवर ग्रिड आणि मापे आखणे",
      titleEn: "Ground Grid & Proportional Blueprinting",
      stage: "planning",
      stageMr: "प्लॅनिंग व गप्पा",
      stageEn: "Planning & Banter",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.35 PM (1).jpeg",
      descMr: "तोरणा गडाची अचूक लांबी आणि माच्यांचे प्रमाण राखण्यासाठी लाकडी पट्ट्या व दोरीने आखणी करताना.",
      descEn: "Snapping reference grid lines on concrete with chalk to mirror the authentic Torna layout proportions."
    },
    {
      id: "mem_06",
      titleMr: "नकाशा चर्चा आणि आमची गँग मीटिंग",
      titleEn: "Late-Night Squad Strategy Meeting",
      stage: "planning",
      stageMr: "प्लॅनिंग व गप्पा",
      stageEn: "Planning & Banter",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.30 PM (2).jpeg",
      descMr: "फोटो आणि नकाशे समोर ठेवून रात्री गोलाकार बसून पुढील टप्प्याची रणनीती आखताना सर्व मित्र.",
      descEn: "Sitting in a circle under the night sky, debating ridges and bastions with fort maps in hand."
    },

    // 2. Mud Work, Soil Digging & Sourcing
    {
      id: "mem_07",
      titleMr: "डोंगरातून अस्सल लाल मातीची खोदाई",
      titleEn: "Digging Natural Red Soil with Shovels",
      stage: "mudwork",
      stageMr: "मातीकाम व धमाल",
      stageEn: "Mud Work & Fun",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.38 PM.jpeg",
      descMr: "तोरणा गडाला सह्याद्रीचा नैसर्गिक रंग देण्यासाठी खोऱ्याने लाल मातीचे डोंगर उपसताना आमचे मित्र.",
      descEn: "Sourcing tons of authentic red Sahyadri earth with pickaxes and shovels by the truck!"
    },
    {
      id: "mem_08",
      titleMr: "पाटी-कुदळ आणि माती भरणे",
      titleEn: "Filling the Earth into Sacks",
      stage: "mudwork",
      stageMr: "मातीकाम व धमाल",
      stageEn: "Mud Work & Fun",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.38 PM (1).jpeg",
      descMr: "घमेली भरून पोत्यांमध्ये लाल माती भरतानाची धावपळ, उत्साह आणि मेहनत.",
      descEn: "Shoveling loose red earth into pans and bagging it for the fort base."
    },
    {
      id: "mem_09",
      titleMr: "एकत्रित कष्ट आणि मातीची पोती भरणे",
      titleEn: "Teamwork: Loading Sacks Together",
      stage: "mudwork",
      stageMr: "मातीकाम व धमाल",
      stageEn: "Mud Work & Fun",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.38 PM (2).jpeg",
      descMr: "एकमेकांना मदत करत मातीची पोती भरताना झालेली मज्जा आणि दोस्तांची ताकद.",
      descEn: "Sweating it out together while loading heavy sacks of fertile red clay for the killa."
    },
    {
      id: "mem_10",
      titleMr: "काळ्या मातीचा चिखल आणि प्लॅस्टर कालवणे",
      titleEn: "Kneading Clay & Plaster Mix on Newspapers",
      stage: "mudwork",
      stageMr: "मातीकाम व धमाल",
      stageEn: "Mud Work & Fun",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.29 PM.jpeg",
      descMr: "हातमोजे घालून वर्तमानपत्रांवर माती व सिमेंटचा चिखल मळताना जमलेली मित्रमंडळी.",
      descEn: "Sitting on the ground in gloves, kneading clay and plaster paste for the rock sculpting."
    },
    {
      id: "mem_11",
      titleMr: "बादलीत रंगाचे मिश्रण तयार करताना",
      titleEn: "Mixing Earth Pigments in Buckets",
      stage: "mudwork",
      stageMr: "मातीकाम व धमाल",
      stageEn: "Mud Work & Fun",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.37 PM (2).jpeg",
      descMr: "गडाच्या खडकांना अस्सल सह्याद्रीचे शेडिंग देण्यासाठी बादलीत रंग कालवताना.",
      descEn: "Blending ochre, stone grey, and black pigment powders in buckets for rock washing."
    },

    // 3. Shaping the Fort, Foundation, Cliffs & Bastions
    {
      id: "mem_12",
      titleMr: "विटांची पहिली पायाभरणी",
      titleEn: "Laying the Brick Foundation Contour",
      stage: "sculpting",
      stageMr: "किल्ला साकारताना",
      stageEn: "Shaping the Fort",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.35 PM (2).jpeg",
      descMr: "आखलेल्या पांढऱ्या रेषेवर लाल विटा रचून तोरणा गडाचा मुख्य सांगाडा उभा करताना.",
      descEn: "Laying red bricks along the curved chalk boundary to form the spine of the fort."
    },
    {
      id: "mem_13",
      titleMr: "ड्रम व विटांवर गोणपाट-कापड चढवणे",
      titleEn: "Draping Fabric Over the Structural Frame",
      stage: "sculpting",
      stageMr: "किल्ला साकारताना",
      stageEn: "Shaping the Fort",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.35 PM (3).jpeg",
      descMr: "गडाची उत्तुंग उंची गाठण्यासाठी ड्रम आणि विटांवर गोणपाट टाकून कड्यांचा आकार देणे.",
      descEn: "Draping burlap and cloth over stacked drums and bricks to shape the colossal mountain drop."
    },
    {
      id: "mem_14",
      titleMr: "प्लॅस्टर कापडाने कडे मढवणे",
      titleEn: "Stretching Plaster Cloth Across the Ridge",
      stage: "sculpting",
      stageMr: "किल्ला साकारताना",
      stageEn: "Shaping the Fort",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.37 PM.jpeg",
      descMr: "उभ्या कातळकड्यांना भक्कम रूप देण्यासाठी प्लॅस्टरचे पांढरे कापड घट्ट ओढून लावताना.",
      descEn: "Carefully stretching and smoothing plaster-soaked cloth to mimic vertical basalt cliffs."
    },
    {
      id: "mem_15",
      titleMr: "कातळावर रंगाचा पहिला हात",
      titleEn: "Brush-Coating Natural Ochre Stone Texture",
      stage: "sculpting",
      stageMr: "किल्ला साकारताना",
      stageEn: "Shaping the Fort",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.36 PM (1).jpeg",
      descMr: "ब्रशने पांढऱ्या कड्यांवर तांबूस गेरूचा आणि तपकिरी खडकाचा थर चढवताना.",
      descEn: "Hand-brushing rich earthy ochre and dark rock textures onto the hardened cliff faces."
    },
    {
      id: "mem_16",
      titleMr: "झुंजार माची आणि पाण्याचे टाके",
      titleEn: "Long Ridge View: Zunjar Machi & Water Tank",
      stage: "sculpting",
      stageMr: "किल्ला साकारताना",
      stageEn: "Shaping the Fort",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.31 PM (2).jpeg",
      descMr: "टोकाकडून दिसणारा तोरण्याचा विस्तीर्ण कडा आणि कातळात कोरलेले पाण्याचे टाके.",
      descEn: "Spectacular lengthwise perspective showing the carved water cistern cavity and narrow ridge."
    },
    {
      id: "mem_17",
      titleMr: "माथ्यावरील बुरुजांची तटबंदी",
      titleEn: "Curved Sentry Bastions Along the Crest",
      stage: "sculpting",
      stageMr: "किल्ला साकारताना",
      stageEn: "Shaping the Fort",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.30 PM.jpeg",
      descMr: "गडाच्या माथ्यावर गोलाकार बुरुज आणि तटबंदी कोरल्यानंतरचा भव्य देखावा.",
      descEn: "Intricately detailed semicircular stone bastions sculpted along the fort ramparts."
    },

    // 4. Shading & Mountain Realism
    {
      id: "mem_18",
      titleMr: "स्प्रे गनने कड्यांना अस्सल शेडिंग!",
      titleEn: "Pneumatic Spray Painting: Realistic Mountain Shading",
      stage: "lighting",
      stageMr: "रोषणाई व दिवा",
      stageEn: "Diyas & Flags",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.30 PM (1).jpeg",
      descMr: "आधुनिक स्प्रे गन वापरून काळ्या-हिरव्या-तपकिरी रंगाचे नैसर्गिक शेडिंग करताना.",
      descEn: "Using an air compressor spray gun to give natural basalt gradients and mossy undertones."
    },
    {
      id: "mem_19",
      titleMr: "स्प्रे पेंटिंग आणि दोस्तांची फोटोग्राफी!",
      titleEn: "Spray Painting Action & Photo Clicks!",
      stage: "lighting",
      stageMr: "रोषणाई व दिवा",
      stageEn: "Diyas & Flags",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.31 PM.jpeg",
      descMr: "एक जण एकाग्रतेने रंग मारत असताना समोरून मोबाईलमध्ये त्याचे फोटो काढताना मित्र!",
      descEn: "Concentrated spray work while buddies grin and capture the moment on their phones!"
    },
    {
      id: "mem_20",
      titleMr: "प्रचंडगडाचा अथांग विस्तार: पूर्ण दृश्य",
      titleEn: "Colossal Expanse: Full Mountain Panorama",
      stage: "lighting",
      stageMr: "रोषणाई व दिवा",
      stageEn: "Diyas & Flags",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.29 PM (1).jpeg",
      descMr: "इमारतीच्या प्रांगणात पसरलेला तोरणा किल्ल्याचा १५ ते २० फूट लांबीचा अवाढव्य देखावा!",
      descEn: "Breathtaking overhead panoramic view of the 20-foot mammoth Torna fort replica!"
    },
    {
      id: "mem_21",
      titleMr: "सोसायटीतील चिमुरड्यांचा आणि सर्वांचा उत्साह",
      titleEn: "Society Kids & Neighbors Gathering in Awe",
      stage: "lighting",
      stageMr: "रोषणाई व दिवा",
      stageEn: "Diyas & Flags",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.31 PM (1).jpeg",
      descMr: "किल्ल्याच्या दोन्ही बाजूला कौतुकाने पाहण्यासाठी जमलेले सोसायटीतील लहान-थोर रहिवासी.",
      descEn: "Entire society neighborhood gathering around in excitement to see the fort take life!"
    },

    // 5. Squad Banter, Midnight Feasts & Shiv Pujan Celebrations
    {
      id: "mem_22",
      titleMr: "रात्रीची भेळ आणि गप्पांची मैफल",
      titleEn: "Midnight Bhel & Snack Break for the Squad",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.36 PM.jpeg",
      descMr: "रात्री किल्ला बनवून झाल्यावर टेबलवर भेळ आणि नाश्त्यावर पडलेली पहिली धाड!",
      descEn: "Digging into big bags of spicy bhel and snacks after hours of hard teamwork!"
    },
    {
      id: "mem_23",
      titleMr: "सोसायटी प्रांगणात सामूहिक जेवणाची पंगत",
      titleEn: "Community Dinner Buffet in the Courtyard",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.36 PM (2).jpeg",
      descMr: "किल्ला मोहिमेदरम्यान सर्व रहिवासी आणि मित्रांनी एकत्र जेवणाचा घेतलेला आनंद.",
      descEn: "A delicious outdoor community feast bringing everyone in the building together."
    },
    {
      id: "mem_24",
      titleMr: "बाकावर बसून चहा-नाश्ता आणि गप्पा",
      titleEn: "Relaxing on Benches with Chai & Food",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.37 PM (1).jpeg",
      descMr: "थकवा विसरून बाकावर बसून नाश्ता करताना आमचे बालमावळे आणि कुटुंबीय.",
      descEn: "Taking a happy break on the stone benches, laughing, chatting, and enjoying hot food."
    },
    {
      id: "mem_25",
      titleMr: "छत्रपती शिवरायांचे पूजन व पुष्पहार",
      titleEn: "Garlanding Chhatrapati Shivaji Maharaj",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.32 PM.jpeg",
      descMr: "किल्ला पूर्ण झाल्यावर छत्रपती शिवाजी महाराजांच्या प्रतिमेला मानाचा पुष्पहार अर्पण करताना.",
      descEn: "Offering fragrant marigold garlands to the portrait of Chhatrapati Shivaji Maharaj."
    },
    {
      id: "mem_26",
      titleMr: "दसरा-दिवाळी मंगलमय शुभेच्छा फलक व पूजन",
      titleEn: "Festive Dussehra-Diwali Board & Elders' Tribute",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.32 PM (1).jpeg",
      descMr: "अथर्व सोसायटीच्या फलकासमोर महाराजांच्या प्रतिमेची मनोभावे पूजा करताना ज्येष्ठ नागरिक.",
      descEn: "Society elders paying reverence before the festival board, blessing the youth's endeavor."
    },
    {
      id: "mem_27",
      titleMr: "श्रीफळ व प्रसादाची नैवेद्य पूजा",
      titleEn: "Offering Coconut, Prasad & Aarti",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.32 PM (2).jpeg",
      descMr: "नारळ, मिठाई आणि उदबत्ती लावून महाराजांना वंदन करताना.",
      descEn: "Lighting incense, offering coconut and sweets before the revered portrait of Maharaj."
    },
    {
      id: "mem_28",
      titleMr: "पुष्पवृष्टी आणि नतमस्तक भाव",
      titleEn: "Offering Golden Flowers with Devotion",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.33 PM.jpeg",
      descMr: "गेंड्याची फुले महाराजांच्या चरणी वाहताना सर्व मित्रांची श्रद्धा.",
      descEn: "Showering marigold petals at the feet of the King who gave us Swarajya."
    },
    {
      id: "mem_29",
      titleMr: "सर्वांचे हात जोडलेले: 'जय भवानी, जय शिवाजी!'",
      titleEn: "United in Devotion: 'Jai Bhavani, Jai Shivaji!'",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.33 PM (1).jpeg",
      descMr: "लहान-मोठे सर्वजण हात जोडून महाराजांच्या चरणी लीन झालेला पवित्र क्षण.",
      descEn: "All hands folded together in deep gratitude for the glorious Maratha heritage."
    },
    {
      id: "mem_30",
      titleMr: "साष्टांग दंडवत आणि आदरभाव",
      titleEn: "Bowing in Deep Reverence",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "images_to_be_added/WhatsApp Image 2026-11-07 at 4.48.33 PM (2).jpeg",
      descMr: "किल्ल्याच्या साक्षीने शिवछत्रपतींच्या चरणी नतमस्तक होताना.",
      descEn: "Prostrating in deep respect before Maharaj as our fort stands tall beside us."
    },

    // Video clips (short looping previews made from the original WhatsApp videos)
    {
      id: "vid_01",
      titleMr: "रात्रीचे मातीकाम: व्हिडिओ",
      titleEn: "Night Work on the Fort: Clip",
      stage: "mudwork",
      stageMr: "मातीकाम व धमाल",
      stageEn: "Mud Work & Fun",
      image: "assets/video/clip-mudwork.jpg",
      video: "assets/video/clip-mudwork.mp4",
      descMr: "रात्रीच्या प्रकाशात किल्ल्याच्या कामात गुंतलेली आमची टीम.",
      descEn: "The squad hard at work on the fort under the night lights."
    },
    {
      id: "vid_02",
      titleMr: "लाल मातीचा थर: व्हिडिओ",
      titleEn: "Laying the Red Soil Coat: Clip",
      stage: "sculpting",
      stageMr: "किल्ला साकारताना",
      stageEn: "Shaping the Fort",
      image: "assets/video/clip-sculpting.jpg",
      video: "assets/video/clip-sculpting.mp4",
      descMr: "प्लास्टर केलेल्या डोंगरावर लाल मातीचा थर देताना.",
      descEn: "Coating the plastered ridge with red earth by hand."
    },
    {
      id: "vid_03",
      titleMr: "महाराजांना अभिवादन: व्हिडिओ",
      titleEn: "Tribute to Maharaj: Clip",
      stage: "squad",
      stageMr: "आमची गँग",
      stageEn: "The Squad",
      image: "assets/video/clip-squad.jpg",
      video: "assets/video/clip-squad.mp4",
      descMr: "आरती आणि अभिवादनासाठी एकत्र जमलेली आमची गँग.",
      descEn: "Everyone gathered for the aarti and a tribute to Maharaj."
    }
  ]
};
