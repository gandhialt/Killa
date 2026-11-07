# UI update: editorial redesign

The site now uses a high-fashion editorial layout (monochrome, grotesque sans plus italic serif, pastel media tints). All the original content and features are kept: bilingual Marathi/English toggle, three maps plus the interactive blueprint, the fort inventory, the stories, the photo gallery with upload and lightbox, and the tutari button.

What changed:
* Fixed minimal nav with rotating plus icons, a crescent mark that appears after the hero, and a two-line burger that morphs into an X on mobile.
* Giant geometric TORNA wordmark in the hero and a wide-tracked one in the footer.
* Five-column staggered parallax gallery (one column per build phase). Three columns on desktop hide on mobile.
* Letter-by-letter strapline with random micro-rotations.
* Maps, Fort, Stories and Memories sections restyled as editorial lists and a 3-column masonry grid.
* Cursor-following image reveal on phase names and footer links (desktop only).
* Full-screen sticky reveal footer.
* Lenis smooth scroll (bundled in assets/vendor/lenis.min.js) and videos that pause when off screen.
* Three short looping clips made from the WhatsApp videos live in assets/video/. The original videos are untouched in images_to_be_added/.

Run it with `npm start` (or `node server.js`) and open http://localhost:3000. Fonts (Inter, Instrument Serif, Noto Devanagari) load from Google Fonts, with system fallbacks if offline.

---

# 🚩 तोरणा (प्रचंडगड) - Torna Fort & Diwali Memories Showcase

हिंदवी स्वराज्याचे पहिले तोरण आणि छत्रपती शिवाजी महाराजांचा पहिला ऐतिहासिक विजय असलेल्या **तोरणा (प्रचंडगड)** किल्ल्याची संपूर्ण माहिती, ऐतिहासिक नकाशे, वास्तूंचे वर्गीकरण, सुवर्णगाथा आणि **आमची किल्ला निर्मिती व धमाल फोटो दालन** (Our Fort Making & Squad Memories).

---

## 🌟 वेबसाईटची प्रमुख वैशिष्ट्ये (Key Features)

### १. अस्सल ऐतिहासिक नकाशे (Interactive Map Explorer)
* **नकाशा १ (Historical Sketch Map):** गडाचे अस्सल २२+ ऐतिहासिक ठिकाणांसह रेखाचित्र (`assets/maps/torna_sketch_map.jpg`)
* **नकाशा २ (Contour & Directions Map):** दिशा दर्शक नकाशा—उत्तरेस लोहगड-विसापूर, दक्षिणेस राजगड व प्रतापगड, पूर्वेस सिंहगड व पुरंदर, पश्चिमेस रायगड (`assets/maps/torna_contour_map.jpg`)
* **नकाशा ३ (Trekshitiz GPS Survey):** १८°१६'३०" उत्तर, ७३°३७'२२" पूर्व अक्षांश-रेखांश व वास्तूंचे सर्वेक्षण असणारा नकाशा (`assets/maps/torna_trekshitiz_map.pdf`)
* **परस्परसंवादी ब्लूप्रिंट (Interactive Blueprint):** गडाच्या नकाशावर क्लिक करून प्रत्येक बुरुज, दरवाजा, मंदिर व पाण्याच्या टाक्यांची माहिती तात्काळ पाहण्याची सोय.
* **झूम व पॅन टूल:** नकाशा मोठा करून सूक्ष्म निरीक्षण करण्याची सुविधा.

---

### २. तोरणा गडाची संपूर्ण दुर्ग रचना (Architectural Inventory)

* **मंदिरे (Temples):**
  1. **मेंगाई देवी मंदिर (Mengai Devi Mandir):** गडाची अधिष्ठात्री ग्रामदेवता, भाविकांचे व ट्रेकर्सचे हक्काचे आश्रयस्थान.
  2. **तोरणेश्वर महादेव मंदिर (Toraneshwar Mahadev):** प्राचीन शिवमंदिर, ज्यावरून गडाला 'तोरणा' नाव पडले.
  3. **गंगाजाई / वकंजाई मंदिर (Gangajai / Vakanjai Mandir):** बुधला माचीवरील सैनिकांचे श्रद्धास्थान.
  4. **वेताळ स्थान (Vetal Shrine):** हत्तीमाळ कड्यावरील रक्षक ओटा.

* **अभेद्य बुरुज (Bastions & Ramparts):**
  1. **चिलखती बुरुज (Chilakhati Buruj):** बुधला माचीवरील मराठा स्थापत्याचा चमत्कार! दुहेरी तटबंदी आणि अंतर्गत गोळीबार गॅलरी.
  2. **हनुमान बुरुज (Hanuman Buruj):** बिनी व कोठी दरवाजाचा रक्षक.
  3. **भेल बुरुज (Bhel Buruj):** झुंजार माचीच्या प्रारंभास.
  4. **रडतोंडीचा बुरुज (Radtondi Buruj):** शत्रू सैन्याला चढताना रडू कोसळेल इतकी भयंकर चढण.
  5. **टकमक बुरुज (Takmak Buruj):** उत्तरेकडील दरीवर नजर ठेवणारा.
  6. **सफेदी, माळेचा, फुटका, दिंडी, हत्तीमाळ व मिकुली बुरुज.**

* **संरक्षित महाद्वारे (Gateways / Darwaje):**
  1. **बिनी दरवाजा (Bini Darwaja):** वेल्ह्याकडून येणारा मुख्य महाद्वार.
  2. **कोठी दरवाजा (Kothi Darwaja):** बालेकिल्ल्याचा अंतर्गत दरवाजा.
  3. **कोकण दरवाजा (Konkan Darwaja):** उत्तरेकडील कोकण दरीत उतरणारा दरवाजा.
  4. **चित्ता दरवाजा (Chitta Darwaja):** बुधला माचीवर प्रवेश देणारा कातळ दरवाजा.
  5. **भगत दरवाजा (Bhagat Darwaja):** दक्षिणेस राजगडाच्या बाजूला.
  6. **थिनला / धिंगला दरवाजा (Thinla Darwaja):** बालेकिल्ला व हत्तीमाळ जोडणारा.
  7. **वकंजाई दरवाजा व सुरुंग:** आणीबाणीच्या वेळेस निसटण्यासाठी कातळ बोगदा.
  8. **घोर व दिंडी दरवाजे:** गुप्त चोरवाटा.

* **पाण्याची टाकी व तळी (Water Tanks & Springs):**
  1. **मेंगाईचे तळे:** सर्वात मोठे बारमाही गोड्या पाण्याचे तळे.
  2. **कापूर टाके:** कापरासारखे स्वच्छ, थंडगार पाणी देणारे कातळातील टाके.
  3. **तीन टाकी:** हत्तीमाळ कड्यावर सलग कोरलेली ३ जलसंधारण टाकी.
  4. **शेषगंगा व पाताळगंगा:** डोंगराच्या पोटातून पाझरणारे गोड झरे.
  5. **खोकड टाके, महार टाके, दगडी हौद व चौकोनी तळे.**

* **प्रमुख माच्या (Sprawling Machis):**
  1. **झुंजार माची (Zunjar Machi):** पूर्व-ईशान्येस १.५ कि.मी. पसरलेली तलवारीच्या धारेसारखी अरुंद माची.
  2. **बुधला माची (Budhla Machi):** पश्चिमेस २ कि.मी. लांब, पालथ्या बुधल्यासारखा विशाल खडक आणि चिलखती बुरुज.

---

### ३. ऐतिहासिक सुवर्णगाथा (Famous Stories & Legends)
1. **स्वराज्याचे पहिले तोरण (१६४६):** अवघ्या १६ व्या वर्षी छत्रपती शिवरायांनी तोरणा जिंकून हिंदवी स्वराज्याची मुहूर्तमेढ रोवली आणि नाव ठेवले 'प्रचंडगड'!
2. **दडलेला खजिना आणि राजगडाची निर्मिती (१६४७):** तटबंदी दुरुस्त करताना सापडलेले सोन्याने भरलेले हंडे मावळ्यांनी शिवरायांच्या चरणी ठेवले; त्या पवित्र धनातून स्वराज्याची राजधानी **राजगड** उभा राहिला!
3. **चिलखती बुरुजाचे स्थापत्य आश्चर्य:** मुघल सेनापतींना थक्क करणारी दुहेरी संरक्षण भिंत.
4. **औरंगजेबाचा वेढा आणि मराठ्यांचा सिंहपराक्रम (१७०४):** औरंगजेबाने नाव ठेवले 'फुतुल्गैब' (अदृश्य विजय), पण मराठ्यांनी गनिमी काव्याने तोरणा पुन्हा स्वराज्यात खेचून आणला!

---

### ४. आमची किल्ला निर्मिती आणि धमाल फोटो दालन (Squad Memories & Fort Photos)
* **थीम:** किल्ला बनवताना आमची झालेली धमाल, चिखलातले हात, रात्रीच्या चहाच्या पार्ट्या, किल्ल्याचे रूप आणि आमचे सेलिब्रेशन!
* **कॅटेगरी फिल्टर्स:**
  - **सर्व आठवणी (All Memories)**
  - **प्लॅनिंग व गप्पा (Planning & Banter)**
  - **मातीकाम व धमाल (Mud Work & Fun)**
  - **किल्ला साकारताना (Shaping the Fort)**
  - **रोषणाई व दिवा (Diyas & Flags)**
  - **आमची गँग (The Squad)**
* **लाईव्ह फोटो अपलोडर (Upload Photos):** मोबाईल किंवा लॅपटॉपवरून आपले फोटो थेट ॲड करा; हे फोटो ब्राऊझरच्या LocalStorage मध्ये कायम सेव्ह राहतात!
* **फुलस्क्रीन लाईटबॉक्स:** छायाचित्रे मोठ्या स्क्रीनवर नेक्स्ट/प्रिव्हियस बटणांसह आणि आठवणींच्या वर्णनासह पाहण्याची सोय.

---

### ५. द्विभाषिक अनुभव (Bilingual: Marathi & English)
* एका क्लिकवर संपूर्ण साईट मराठी व इंग्लिशमध्ये बदलण्याची सोय (`[मराठी] [EN]`).
* तुतारी वादन बटण (Web Audio API Synthesizer).

---

## 🚀 वेबसाईट कशी सुरू करावी? (How to Run)

### पर्याय १: थेट ब्राउझरमध्ये उघडा
[index.html](file:///C:/Killa_Site/index.html) वर डबल-क्लिक करा. कोणत्याही ब्राउझरमध्ये त्वरित उघडेल!

### पर्याय २: लोकल वेब सर्व्हरवर चालवा
```powershell
cd C:\Killa_Site
node server.js
```
आणि ब्राउझरमध्ये `http://localhost:3000` उघडा.
