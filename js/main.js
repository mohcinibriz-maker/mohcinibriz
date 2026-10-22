/* Bab Digital : tous les textes du site, en français (fr) et en arabe (ar), et quelques petits scripts.

   Pour modifier un texte : changez-le ci-dessous, dans "fr" et dans "ar".
   Le français est aussi écrit dans les pages HTML (c'est ce qui s'affiche sans JavaScript) :
   gardez les deux identiques.
   Le numéro WhatsApp est plus bas, dans WHATSAPP_NUMBER. */

const translations = {
  /* ---------- Commun ---------- */
  "wa.default": { fr: "Bonjour Bab Digital, je veux une page pour mon entreprise.", ar: "مرحبًا باب ديجيتال، أريد صفحة لمشروعي." },
  "wa.float": { fr: "Écrire à Bab Digital sur WhatsApp", ar: "راسل باب ديجيتال على واتساب" },
  "a11y.skip": { fr: "Aller au contenu", ar: "انتقل إلى المحتوى" },
  "a11y.home": { fr: "Bab Digital, retour en haut de la page", ar: "باب ديجيتال، العودة إلى أعلى الصفحة" },
  "lang.label": { fr: "Langue", ar: "اللغة" },
  "cta.start": { fr: "Démarrer mon projet", ar: "ابدأ مشروعي" },
  "hero.badge1": { fr: "En ligne en 48h", ar: "أونلاين فـ 48 ساعة" },
  "hero.badge2": { fr: "0 DH Avance", ar: "0 درهم تسبيق" },
  "hero.badge3": { fr: "Démarrage sur WhatsApp", ar: "البداية على واتساب" },
  "cta.trust": { fr: "Sans engagement • Résultat en 48h • Payez après validation", ar: "بدون التزام • النتيجة خلال 48 ساعة • الأداء بعد الموافقة" },
  "cta.whatsapp": { fr: "Écrire sur WhatsApp", ar: "راسلنا على واتساب" },
  "cta.formnote": { fr: "", ar: "الاستمارة بالفرنسية حاليًا. إن كنت تفضّل العربية، راسلنا على واتساب." },

  /* ---------- Page d'accueil ---------- */
  "meta.title": { fr: "Bab Digital, création de sites web pour entreprises au Maroc", ar: "باب ديجيتال، إنشاء مواقع إلكترونية للشركات في المغرب" },
  "meta.description": {
    fr: "Bab Digital crée la page web de votre entreprise en 48h : services, photos, horaires, Google Maps et bouton WhatsApp. 0 DH au démarrage, vous payez après validation.",
    ar: "باب ديجيتال كتصاوب الموقع ديال مشروعك فـ 48 ساعة: الخدمات، التصاور، الأوقات، Google Maps وزر واتساب. 0 درهم تسبيق، كتخلص غير ملي كتعجبك."
  },
  "meta.og": {
    fr: "Ouvrez la porte à vos clients : une page web claire sur mobile, avec vos services, vos photos et un bouton WhatsApp.",
    ar: "افتح الباب لزبنائك: صفحة إلكترونية واضحة على الهاتف، فيها خدماتك وصورك وزر واتساب."
  },

  "nav.label": { fr: "Navigation principale", ar: "القائمة الرئيسية" },
  "nav.services": { fr: "Services", ar: "الخدمات" },
  "nav.work": { fr: "Réalisations", ar: "النماذج" },
  "nav.pricing": { fr: "Tarifs", ar: "الأسعار" },
  "nav.contact": { fr: "Contact", ar: "تواصل معنا" },
  "nav.whatsapp": { fr: "WhatsApp", ar: "واتساب" },
  "nav.toggle": { fr: "Ouvrir ou fermer le menu", ar: "فتح القائمة أو إغلاقها" },

  "hero.eyebrow": { fr: "Agence web au Maroc", ar: "وكالة رقمية في المغرب" },
  "hero.title.a": { fr: "Ouvrez ", ar: "موقع إلكتروني احترافي لمشروعك " },
  "hero.title.hl": { fr: "la porte", ar: "فـ 48 ساعة" },
  "hero.title.b": { fr: " à vos clients", ar: "" },
  "hero.sub": {
    fr: "Nous créons la page web de votre entreprise en 48h : vos services, vos photos et un bouton WhatsApp pour recevoir des clients directement.",
    ar: "شوف موقعك واجد فـ تلفونك عاد خلص • 0 درهم تسبيق"
  },
  "hero.fact1": { fr: "1000 DH la création", ar: "1000 درهم للإنشاء" },
  "hero.fact2": { fr: "Option Sérénité : 300 DH/mois", ar: "خيار راحة البال: 300 درهم شهريًا" },
  "hero.fact3": { fr: "En ligne en 48h", ar: "أونلاين فـ 48 ساعة" },

  "art.name": { fr: "Café Nakhla", ar: "مقهى نخلة" },
  "art.badge": { fr: "Exemple", ar: "نموذج" },
  "art.title": { fr: "Le café du quartier, du matin au soir.", ar: "مقهى الحي، من الصباح إلى المساء." },
  "art.hours": { fr: "Ouvert aujourd'hui, 7h - 23h", ar: "مفتوح اليوم، 7:00 - 23:00" },
  "art.btn": { fr: "Commander sur WhatsApp", ar: "اطلب عبر واتساب" },
  "art.item1": { fr: "Thé à la menthe", ar: "شاي بالنعناع" },
  "art.item2": { fr: "Café crème", ar: "قهوة بالحليب" },
  "art.item3": { fr: "Msemen et amlou", ar: "مسمن وأملو" },
  "art.price1": { fr: "12 DH", ar: "12 درهم" },
  "art.price2": { fr: "15 DH", ar: "15 درهم" },
  "art.price3": { fr: "18 DH", ar: "18 درهم" },
  "art.msg.title": { fr: "Nouveau message", ar: "رسالة جديدة" },
  "art.msg.text": { fr: "Bonjour, vous êtes ouverts ce soir ?", ar: "مرحبًا، هل أنتم مفتوحون هذا المساء؟" },

  "problem.kicker": { fr: "Le constat", ar: "الواقع" },
  "problem.text1": { fr: "Vos clients vous cherchent sur Google et Instagram avant de vous appeler.", ar: "زبناؤك يبحثون عنك في غوغل وإنستغرام قبل أن يتصلوا بك." },
  "problem.text2": { fr: "Sans site, ils partent chez le concurrent.", ar: "وبدون موقع، يذهبون إلى المنافس." },
  "problem.without.title": { fr: "Sans page web", ar: "بدون صفحة إلكترونية" },
  "problem.without.text": { fr: "Le client ne trouve ni vos horaires, ni vos prix, ni votre adresse. Il appelle ailleurs.", ar: "لا يجد الزبون أوقات عملك ولا أسعارك ولا عنوانك، فيتصل بغيرك." },
  "problem.with.title": { fr: "Avec Bab Digital", ar: "مع باب ديجيتال" },
  "problem.with.text": { fr: "Il trouve une page claire avec vos services, vos photos et un bouton pour vous écrire sur WhatsApp.", ar: "يجد صفحة واضحة فيها خدماتك وصورك وزر ليراسلك على واتساب." },

  "steps.kicker": { fr: "Comment ça marche", ar: "كيف نعمل" },
  "steps.title": { fr: "Trois étapes, et votre porte est ouverte.", ar: "ثلاث خطوات، وبابك مفتوح." },
  "steps.1.title": { fr: "Vous remplissez notre questionnaire", ar: "عمّر الاستمارة" },
  "steps.1.time": { fr: "(5 minutes)", ar: "(5 دقائق)" },
  "steps.1.text": { fr: "Votre activité, vos services, vos horaires. Vous pouvez aussi y ajouter votre logo et vos photos.", ar: "النشاط ديالك، الخدمات، والأوقات. وتقدر تزيد اللوغو والتصاور ديالك." },
  "steps.1.link": { fr: "Remplir le questionnaire", ar: "املأ الاستمارة" },
  "steps.2.title": { fr: "Nous créons votre page en 48h", ar: "نجهزوا ليك الصفحة فـ 48 ساعة" },
  "steps.2.text": { fr: "Nous écrivons les textes, mettons en valeur vos photos et préparons la version mobile.", ar: "كنكتبو النصوص، كنبيّنو التصاور ديالك، وكنوجدو نسخة التلفون." },
  "steps.3.title": { fr: "Vous la validez, puis elle passe en ligne", ar: "تشوفها وتخلص باش تطلق أونلاين" },
  "steps.3.text": { fr: "Vous voyez votre page sur votre téléphone. Une fois validée et payée, elle est publiée sur votre nom de domaine.", ar: "كتشوف الصفحة فـ تلفونك. ملي كتعجبك وكتخلص، كنطلقوها على الدومين ديالك." },

  "services.kicker": { fr: "Services", ar: "الخدمات" },
  "services.title": { fr: "Tout ce qu'il faut pour être trouvé et contacté", ar: "كل ما تحتاجه ليجدك الزبناء ويتواصلوا معك" },
  "services.sub": { fr: "Une page complète, prête à partager sur WhatsApp, Instagram et Google.", ar: "صفحة متكاملة، جاهزة للمشاركة على واتساب وإنستغرام وغوغل." },
  "services.1.title": { fr: "Page professionnelle sur mobile", ar: "صفحة احترافية على الهاتف" },
  "services.1.text": { fr: "Pensée d'abord pour le téléphone, là où vos clients vous cherchent.", ar: "مصمّمة للهاتف أولًا، حيث يبحث عنك زبناؤك." },
  "services.2.title": { fr: "Bouton WhatsApp", ar: "زر واتساب" },
  "services.2.text": { fr: "Un geste, et le client vous écrit avec un message déjà préparé.", ar: "بلمسة واحدة، يراسلك الزبون برسالة جاهزة." },
  "services.3.title": { fr: "Google Maps et horaires", ar: "خرائط غوغل وأوقات العمل" },
  "services.3.text": { fr: "Votre adresse sur la carte et vos heures d'ouverture, faciles à trouver.", ar: "عنوانك على الخريطة وأوقات عملك، يجدها الزبون بسهولة." },
  "services.4.title": { fr: "Vos photos et votre logo", ar: "صورك وشعارك" },
  "services.4.text": { fr: "Votre lieu, vos produits, votre image : la page vous ressemble.", ar: "مكانك ومنتجاتك وصورتك: صفحة تشبهك." },
  "services.5.title": { fr: "Référencement Google de base", ar: "ظهور أساسي في غوغل" },
  "services.5.text": { fr: "Un titre, une description et des informations claires pour que Google comprenne votre page.", ar: "عنوان ووصف ومعلومات واضحة حتى يفهم غوغل صفحتك." },
  "services.6.title": { fr: "Hébergement", ar: "الاستضافة" },
  "services.6.text": { fr: "Votre page reste en ligne, rapide et sécurisée en HTTPS.", ar: "صفحتك تبقى على الإنترنت، سريعة ومؤمّنة بـ HTTPS." },
  "services.7.title": { fr: "2 modifications par mois (offre Sérénité)", ar: "تعديلان في الشهر (عرض راحة البال)" },
  "services.7.text": { fr: "Un prix change, un horaire bouge ? Envoyez-nous le changement sur WhatsApp.", ar: "تغيّر سعر أو موعد؟ أرسل لنا التعديل على واتساب." },
  "services.8.title": { fr: "Nom de domaine", ar: "اسم النطاق" },
  "services.8.text": { fr: "Une adresse web au nom de votre entreprise.", ar: "عنوان إلكتروني باسم مشروعك." },

  "work.kicker": { fr: "Réalisations", ar: "النماذج" },
  "work.title": { fr: "Exemples de design", ar: "نماذج تصميم" },
  "work.sub": {
    fr: "Des pages créées pour des entreprises imaginaires, pour vous montrer le style et la qualité. Ce ne sont pas des clients.",
    ar: "صفحات صمّمناها لمشاريع خيالية، لنريك الأسلوب والجودة. ليست صفحات لزبناء حقيقيين."
  },
  "work.badge": { fr: "Exemple de design", ar: "نموذج تصميم" },
  "work.view": { fr: "Voir l'exemple", ar: "شاهد النموذج" },
  "work.cafe.type": { fr: "Café", ar: "مقهى" },
  "work.cafe.name": { fr: "Café Nakhla", ar: "مقهى نخلة" },
  "work.cafe.text": { fr: "La carte, les horaires et la commande sur WhatsApp.", ar: "القائمة وأوقات العمل والطلب عبر واتساب." },
  "work.cafe.alt": { fr: "Illustration d'une théière marocaine et de verres de thé à la menthe", ar: "رسم توضيحي لبراد مغربي وكؤوس شاي بالنعناع" },
  "work.salon.type": { fr: "Salon de beauté", ar: "صالون تجميل" },
  "work.salon.name": { fr: "Salon Safran", ar: "صالون زعفران" },
  "work.salon.text": { fr: "Les prestations, les prix et la prise de rendez-vous.", ar: "الخدمات والأسعار وحجز المواعيد." },
  "work.salon.alt": { fr: "Illustration d'un miroir doré et de produits de soin", ar: "رسم توضيحي لمرآة ذهبية ومنتجات عناية" },
  "work.ecole.type": { fr: "Auto-école", ar: "مدرسة لتعليم السياقة" },
  "work.ecole.name": { fr: "Auto-école Virage", ar: "مدرسة فيراج للسياقة" },
  "work.ecole.text": { fr: "Les forfaits, les étapes du permis et l'inscription.", ar: "الباقات ومراحل الرخصة والتسجيل." },
  "work.ecole.alt": { fr: "Illustration d'une voiture d'auto-école sur une route en virage", ar: "رسم توضيحي لسيارة تعليم السياقة على طريق منعرج" },
  "work.dent.type": { fr: "Cabinet dentaire", ar: "عيادة أسنان" },
  "work.dent.name": { fr: "Cabinet Dentaire Nacre", ar: "عيادة الصدف لطب الأسنان" },
  "work.dent.text": { fr: "Les soins, les horaires et la prise de rendez-vous.", ar: "العلاجات وأوقات العمل وحجز المواعيد." },
  "work.dent.alt": { fr: "Fauteuil dentaire dans une salle de soins claire", ar: "كرسي طب الأسنان في غرفة علاج مضيئة" },

  "pricing.kicker": { fr: "Tarifs", ar: "الأسعار" },
  "pricing.title": { fr: "Deux offres claires, sans surprise", ar: "عرضان واضحان، بلا مفاجآت" },
  "pricing.p1.name": { fr: "Page seule", ar: "الصفحة فقط" },
  "pricing.p1.price": { fr: "1000 DH", ar: "1000 درهم" },
  "pricing.p1.when": { fr: "une seule fois", ar: "مرة واحدة" },
  "pricing.p1.desc": { fr: "Votre page professionnelle livrée et remise entre vos mains.", ar: "صفحتك الاحترافية جاهزة ومسلّمة بين يديك." },
  "pricing.badge": { fr: "Recommandé", ar: "موصى به" },
  "pricing.p2.name": { fr: "Page + Sérénité", ar: "الصفحة + راحة البال" },
  "pricing.p2.price": { fr: "1000 DH", ar: "1000 درهم" },
  "pricing.p2.monthly": { fr: "+ 300 DH/mois", ar: "+ 300 درهم في الشهر" },
  "pricing.p2.desc": { fr: "Hébergement, nom de domaine en .com (.ma sur devis), maintenance et 2 modifications par mois.", ar: "الاستضافة، اسم نطاق بامتداد com (وامتداد ma حسب عرض السعر)، الصيانة وتعديلان في الشهر." },
  "pricing.p2.inc1": { fr: "Tout ce que comprend la Page seule", ar: "كل ما تتضمنه الصفحة فقط" },
  "pricing.p2.inc2": { fr: "Hébergement et maintenance", ar: "الاستضافة والصيانة" },
  "pricing.p2.inc3": { fr: "Nom de domaine en .com (.ma sur devis)", ar: "اسم نطاق بامتداد com، وامتداد ma حسب عرض السعر" },
  "pricing.p2.inc4": { fr: "2 modifications par mois (offre Sérénité)", ar: "تعديلان في الشهر (عرض راحة البال)" },
  "pricing.payment.title": { fr: "0 DH au démarrage :", ar: "0 درهم عند الانطلاق:" },
  "pricing.payment": { fr: "Vous voyez votre page prête sur votre téléphone d'abord. Vous ne payez que si vous êtes satisfait.", ar: "تشاهد صفحتك جاهزة على هاتفك أولًا، ولا تؤدي إلا إذا كنت راضيًا." },
  "pricing.after": { fr: "Payable uniquement après validation de votre page", ar: "لا تؤدي إلا بعد موافقتك على صفحتك" },
  "pricing.question": { fr: "Une question sur l'offre ?", ar: "سؤال حول العرضين؟" },
  "pricing.question.link": { fr: "Écrivez-nous sur WhatsApp", ar: "راسلنا على واتساب" },
  "pricing.inc1": { fr: "Page professionnelle sur mobile", ar: "صفحة احترافية على الهاتف" },
  "pricing.inc2": { fr: "Bouton WhatsApp", ar: "زر واتساب" },
  "pricing.inc3": { fr: "Google Maps et horaires", ar: "خرائط غوغل وأوقات العمل" },
  "pricing.inc4": { fr: "Vos photos et votre logo", ar: "صورك وشعارك" },
  "pricing.inc5": { fr: "Référencement Google de base", ar: "ظهور أساسي في غوغل" },

  "faq.kicker": { fr: "Questions fréquentes", ar: "أسئلة شائعة" },
  "faq.title": { fr: "Vos questions, nos réponses", ar: "أسئلتكم وأجوبتنا" },
  "faq.1.q": { fr: "Combien de temps ?", ar: "كم من الوقت يلزم؟" },
  "faq.1.a": {
    fr: "En 48h en général, dès que nous avons vos informations : le questionnaire rempli, vos photos et votre logo si vous en avez un.",
    ar: "فـ 48 ساعة فالعادة، من نهار كتوصلنا المعلومات ديالك: الاستمارة، التصاور، واللوغو إلا كان عندك."
  },
  "faq.6.q": { fr: "Comment se passe le paiement ?", ar: "كيفاش كيدوز الخلاص؟" },
  "faq.6.a": {
    fr: "Vous ne payez rien au début. Nous créons la page complète sur un lien de démonstration. Une fois que vous la validez, vous effectuez le paiement pour activer votre nom de domaine officiel.",
    ar: "ما كتخلص والو فالبداية. كنصاوبو ليك الصفحة كاملة على رابط تجريبي، وملي كتوافق عليها، كتخلص باش نفعّلو الدومين الرسمي ديالك."
  },
  "faq.2.q": { fr: "Je n'ai pas de logo ?", ar: "ليس لدي شعار؟" },
  "faq.2.a": {
    fr: "Ce n'est pas un problème. Nous écrivons le nom de votre entreprise avec une belle typographie, et vous pourrez ajouter un logo plus tard.",
    ar: "لا مشكلة. نكتب اسم مشروعك بخط أنيق، ويمكنك إضافة شعار لاحقًا."
  },
  "faq.3.q": { fr: "Je n'ai pas de photos ?", ar: "ليست لدي صور؟" },
  "faq.3.a": {
    fr: "Des photos prises avec votre téléphone, en pleine lumière, suffisent souvent. Sans photos, nous créons votre page avec des couleurs, des formes et des icônes à votre image, et nous ajoutons vos photos quand vous les avez.",
    ar: "الصور الملتقطة بهاتفك في ضوء جيد تكفي غالبًا. وبدون صور، نصمّم صفحتك بألوان وأشكال وأيقونات تناسب نشاطك، ثم نضيف صورك عندما تكون جاهزة."
  },
  "faq.4.q": { fr: "Puis-je modifier ma page ?", ar: "هل يمكنني تعديل صفحتي؟" },
  "faq.4.a": {
    fr: "Oui. Avec l'offre Page + Sérénité, 2 modifications par mois sont comprises : textes, prix, horaires ou photos, que vous nous envoyez sur WhatsApp. Une nouvelle section ou une refonte se fait sur devis.",
    ar: "نعم. مع عرض الصفحة + راحة البال، يشمل الاشتراك تعديلين في الشهر: النصوص أو الأسعار أو الأوقات أو الصور، ترسلها لنا على واتساب. أما إضافة قسم جديد أو إعادة التصميم فتكون حسب عرض سعر."
  },
  "faq.5.q": { fr: "Pourquoi pas seulement Instagram ?", ar: "لماذا لا أكتفي بإنستغرام؟" },
  "faq.5.a": {
    fr: "Instagram est utile pour montrer votre quotidien. Mais tout le monde n'y a pas de compte, et vos horaires, vos prix et votre adresse se perdent entre les publications. Votre page rassemble l'essentiel au même endroit, s'ouvre sans application et peut apparaître sur Google. Les deux se complètent.",
    ar: "إنستغرام مفيد لعرض يومياتك، لكن ليس لكل الناس حساب فيه، وأوقاتك وأسعارك وعنوانك تضيع بين المنشورات. صفحتك تجمع الأساسي في مكان واحد، وتُفتح بدون تطبيق، ويمكن أن تظهر في غوغل. والاثنان يكمّلان بعضهما."
  },

  "contact.title": { fr: "Prêt à ouvrir la porte à vos clients ?", ar: "مستعد لتفتح الباب لزبنائك؟" },
  "contact.text": { fr: "Remplissez le questionnaire, ou posez-nous vos questions sur WhatsApp.", ar: "املأ الاستمارة، أو اطرح علينا أسئلتك على واتساب." },
  "contact.phone": { fr: "WhatsApp :", ar: "واتساب:" },

  "footer.tagline": { fr: "Ouvrez la porte à vos clients", ar: "افتح الباب لزبنائك" },
  "footer.sub": {
    fr: "Agence web au Maroc. Des pages web pour les cafés, les salons, les cabinets, les auto-écoles et toutes les petites entreprises.",
    ar: "وكالة رقمية في المغرب. صفحات إلكترونية للمقاهي والصالونات والعيادات ومدارس السياقة وكل المشاريع الصغيرة."
  },
  "footer.contact": { fr: "Contact", ar: "تواصل" },
  "footer.form": { fr: "Questionnaire de projet", ar: "استمارة المشروع" },
  "footer.follow": { fr: "Suivez-nous", ar: "تابعونا" },

  /* ---------- Pages d'exemple : textes communs ---------- */
  "ex.bar.back": { fr: "Retour à Bab Digital", ar: "العودة إلى باب ديجيتال" },
  "ex.bar.pill": { fr: "Exemple de design", ar: "نموذج تصميم" },
  "ex.bar.text": { fr: "Entreprise imaginaire, créée par Bab Digital pour montrer son travail.", ar: "مشروع خيالي، صمّمته باب ديجيتال لتعرض عملها." },
  "ex.nav.label": { fr: "Sur cette page", ar: "في هذه الصفحة" },
  "ex.prices.note": { fr: "Prix d'exemple : cette page est un exemple de design.", ar: "أسعار للتوضيح فقط: هذه الصفحة نموذج تصميم." },
  "ex.info.title": { fr: "Horaires et accès", ar: "أوقات العمل والعنوان" },
  "ex.hours.title": { fr: "Horaires", ar: "أوقات العمل" },
  "ex.address.title": { fr: "Adresse", ar: "العنوان" },
  "ex.closed": { fr: "Fermé", ar: "مغلق" },
  "ex.today": { fr: "Aujourd'hui", ar: "اليوم" },
  "ex.map.label": { fr: "Plan d'accès (exemple)", ar: "خريطة الوصول (نموذج)" },
  "ex.map.note": { fr: "Sur votre page : votre emplacement Google Maps.", ar: "في صفحتك: موقعك على خرائط غوغل." },
  "ex.cta.hint": { fr: "Sur votre page, ce bouton ouvre votre WhatsApp. Ici, il écrit à Bab Digital.", ar: "في صفحتك، يفتح هذا الزر واتساب الخاص بك. هنا، يراسل باب ديجيتال." },
  "ex.footer.demo": { fr: "Exemple de design : cette entreprise n'existe pas.", ar: "نموذج تصميم: هذا المشروع غير موجود." },
  "ex.footer.photos": { fr: "Photos : Unsplash.", ar: "الصور: Unsplash." },
  "ex.footer.illus": { fr: "Illustrations : Bab Digital.", ar: "الرسوم: باب ديجيتال." },
  "ex.footer.credit": { fr: "Site créé par Bab Digital", ar: "موقع من إنجاز باب ديجيتال" },

  /* ---------- Exemple : Café Nakhla ---------- */
  "cafe.wa": { fr: "Bonjour Bab Digital, j'ai vu l'exemple Café Nakhla et je veux une page pour mon entreprise.", ar: "مرحبًا باب ديجيتال، شاهدت نموذج مقهى نخلة وأريد صفحة لمشروعي." },
  "cafe.meta.title": { fr: "Café Nakhla, Marrakech (exemple de design) | Bab Digital", ar: "مقهى نخلة، مراكش (نموذج تصميم) | باب ديجيتال" },
  "cafe.meta.description": { fr: "Exemple de page web pour un café, créé par Bab Digital : la carte, les prix, les horaires et la commande sur WhatsApp.", ar: "نموذج صفحة إلكترونية لمقهى من تصميم باب ديجيتال: القائمة والأسعار وأوقات العمل والطلب عبر واتساب." },
  "cafe.name": { fr: "Café Nakhla", ar: "مقهى نخلة" },
  "cafe.nav.1": { fr: "La carte", ar: "القائمة" },
  "cafe.nav.2": { fr: "Le lieu", ar: "المكان" },
  "cafe.nav.3": { fr: "Horaires", ar: "أوقات العمل" },
  "cafe.header.cta": { fr: "Commander", ar: "اطلب" },
  "cafe.kicker": { fr: "Café, Guéliz, Marrakech", ar: "مقهى، جليز، مراكش" },
  "cafe.title": { fr: "Le café du quartier, du matin au soir.", ar: "مقهى الحي، من الصباح إلى المساء." },
  "cafe.sub": { fr: "Café, thé à la menthe, jus frais et petits-déjeuners marocains, sur place ou à emporter.", ar: "قهوة، شاي بالنعناع، عصائر طازجة وفطور مغربي، في المقهى أو للأخذ." },
  "cafe.cta": { fr: "Commander sur WhatsApp", ar: "اطلب عبر واتساب" },
  "cafe.cta2": { fr: "Voir la carte", ar: "شاهد القائمة" },
  "cafe.chip1": { fr: "Ouvert tous les jours", ar: "مفتوح كل يوم" },
  "cafe.chip2": { fr: "Terrasse ombragée", ar: "شرفة مظللة" },
  "cafe.img.hero": { fr: "Illustration : théière marocaine, verres de thé à la menthe et cornes de gazelle", ar: "رسم توضيحي: براد مغربي، كؤوس شاي بالنعناع وكعب غزال" },
  "cafe.float1": { fr: "Thé à la menthe, 12 DH", ar: "شاي بالنعناع، 12 درهم" },
  "cafe.float2": { fr: "Commande prête en 10 minutes", ar: "طلبك جاهز في 10 دقائق" },
  "cafe.menu.title": { fr: "La carte", ar: "القائمة" },
  "cafe.menu.sub": { fr: "Préparé à la commande, avec des produits frais du marché.", ar: "يُحضَّر عند الطلب، بمنتجات طازجة من السوق." },
  "cafe.cat1": { fr: "Cafés", ar: "القهوة" },
  "cafe.i1": { fr: "Espresso", ar: "إسبريسو" },
  "cafe.p1": { fr: "12 DH", ar: "12 درهم" },
  "cafe.i2": { fr: "Café crème", ar: "قهوة بالحليب" },
  "cafe.p2": { fr: "15 DH", ar: "15 درهم" },
  "cafe.i3": { fr: "Nouss-nouss", ar: "نص نص" },
  "cafe.i3.note": { fr: "Moitié café, moitié lait", ar: "نصف قهوة ونصف حليب" },
  "cafe.p3": { fr: "14 DH", ar: "14 درهم" },
  "cafe.cat2": { fr: "Thés et jus", ar: "الشاي والعصائر" },
  "cafe.i4": { fr: "Thé à la menthe", ar: "شاي بالنعناع" },
  "cafe.p4": { fr: "12 DH", ar: "12 درهم" },
  "cafe.i5": { fr: "Jus d'orange pressé", ar: "عصير برتقال طبيعي" },
  "cafe.p5": { fr: "15 DH", ar: "15 درهم" },
  "cafe.i6": { fr: "Jus d'avocat aux fruits secs", ar: "عصير أفوكادو بالفواكه الجافة" },
  "cafe.p6": { fr: "25 DH", ar: "25 درهم" },
  "cafe.cat3": { fr: "Petit-déjeuner", ar: "الفطور" },
  "cafe.i7": { fr: "Petit-déjeuner beldi", ar: "فطور بلدي" },
  "cafe.i7.note": { fr: "Msemen, harcha, amlou, olives et thé", ar: "مسمن، حرشة، أملو، زيتون وشاي" },
  "cafe.p7": { fr: "45 DH", ar: "45 درهم" },
  "cafe.i8": { fr: "Msemen et amlou", ar: "مسمن وأملو" },
  "cafe.p8": { fr: "18 DH", ar: "18 درهم" },
  "cafe.i9": { fr: "Baghrir au miel", ar: "بغرير بالعسل" },
  "cafe.p9": { fr: "18 DH", ar: "18 درهم" },
  "cafe.place.title": { fr: "Un café pour chaque moment", ar: "مقهى لكل لحظة" },
  "cafe.place.sub": { fr: "Pour un café rapide le matin ou une longue pause l'après-midi.", ar: "لقهوة سريعة في الصباح أو استراحة طويلة بعد الظهر." },
  "cafe.pt1.title": { fr: "Terrasse ombragée", ar: "شرفة مظللة" },
  "cafe.pt1.text": { fr: "Pour un café au calme, à l'abri du soleil.", ar: "لقهوة هادئة بعيدًا عن الشمس." },
  "cafe.pt2.title": { fr: "Wi-Fi gratuit", ar: "واي فاي مجاني" },
  "cafe.pt2.text": { fr: "Pratique pour travailler ou réviser.", ar: "مناسب للعمل أو المراجعة." },
  "cafe.pt3.title": { fr: "À emporter", ar: "للأخذ" },
  "cafe.pt3.text": { fr: "Commandez sur WhatsApp, passez récupérer.", ar: "اطلب عبر واتساب ومُرّ لأخذ طلبك." },
  "cafe.h1.days": { fr: "Lundi - Vendredi", ar: "الإثنين - الجمعة" },
  "cafe.h2.days": { fr: "Samedi - Dimanche", ar: "السبت - الأحد" },
  "cafe.address": { fr: "15, rue de l'Exemple, Guéliz, Marrakech", ar: "15، زنقة المثال، جليز، مراكش" },
  "cafe.cta.title": { fr: "Un café, une table, une commande à emporter ?", ar: "قهوة، طاولة، أو طلب للأخذ؟" },
  "cafe.cta.text": { fr: "Envoyez votre commande sur WhatsApp, elle vous attend au comptoir.", ar: "أرسل طلبك عبر واتساب، وسيكون جاهزًا في انتظارك." },
  "cafe.float.label": { fr: "Commander sur WhatsApp", ar: "اطلب عبر واتساب" },

  /* ---------- Exemple : Salon Safran ---------- */
  "salon.wa": { fr: "Bonjour Bab Digital, j'ai vu l'exemple Salon Safran et je veux une page pour mon entreprise.", ar: "مرحبًا باب ديجيتال، شاهدت نموذج صالون زعفران وأريد صفحة لمشروعي." },
  "salon.meta.title": { fr: "Salon Safran, Rabat (exemple de design) | Bab Digital", ar: "صالون زعفران، الرباط (نموذج تصميم) | باب ديجيتال" },
  "salon.meta.description": { fr: "Exemple de page web pour un salon de beauté, créé par Bab Digital : prestations, prix, horaires et prise de rendez-vous sur WhatsApp.", ar: "نموذج صفحة إلكترونية لصالون تجميل من تصميم باب ديجيتال: الخدمات والأسعار وأوقات العمل وحجز المواعيد عبر واتساب." },
  "salon.name": { fr: "Salon Safran", ar: "صالون زعفران" },
  "salon.nav.1": { fr: "Prestations", ar: "الخدمات" },
  "salon.nav.2": { fr: "Le salon", ar: "الصالون" },
  "salon.nav.3": { fr: "Horaires", ar: "أوقات العمل" },
  "salon.header.cta": { fr: "Rendez-vous", ar: "موعد" },
  "salon.kicker": { fr: "Salon de beauté, Agdal, Rabat", ar: "صالون تجميل، أكدال، الرباط" },
  "salon.title": { fr: "Prenez le temps de prendre soin de vous.", ar: "خذي وقتك للعناية بنفسك." },
  "salon.sub": { fr: "Coiffure, soins du visage, manucure et hammam, dans un salon calme et lumineux.", ar: "تصفيف الشعر، العناية بالوجه، المانيكير والحمام، في صالون هادئ ومضيء." },
  "salon.cta": { fr: "Prendre rendez-vous", ar: "احجزي موعدك" },
  "salon.cta2": { fr: "Voir les prestations", ar: "شاهدي الخدمات" },
  "salon.chip1": { fr: "Du mardi au dimanche", ar: "من الثلاثاء إلى الأحد" },
  "salon.chip2": { fr: "Sur rendez-vous", ar: "بموعد مسبق" },
  "salon.img.hero": { fr: "Illustration : miroir doré, flacons de soin et bouquet de crocus de safran", ar: "رسم توضيحي: مرآة ذهبية، قوارير عناية وباقة من زهور الزعفران" },
  "salon.float1": { fr: "Produits professionnels", ar: "منتجات احترافية" },
  "salon.float2": { fr: "Hammam et soins sur rendez-vous", ar: "الحمام والعلاجات بموعد مسبق" },
  "salon.menu.title": { fr: "Nos prestations", ar: "خدماتنا" },
  "salon.menu.sub": { fr: "Des soins doux, réalisés avec des produits de qualité.", ar: "علاجات لطيفة بمنتجات عالية الجودة." },
  "salon.cat1": { fr: "Coiffure", ar: "تصفيف الشعر" },
  "salon.i1": { fr: "Brushing", ar: "براشينغ" },
  "salon.p1": { fr: "80 DH", ar: "80 درهم" },
  "salon.i2": { fr: "Coupe et brushing", ar: "قص وبراشينغ" },
  "salon.p2": { fr: "150 DH", ar: "150 درهم" },
  "salon.i3": { fr: "Coloration", ar: "صباغة الشعر" },
  "salon.p3": { fr: "dès 250 DH", ar: "ابتداءً من 250 درهم" },
  "salon.cat2": { fr: "Soins", ar: "العناية" },
  "salon.i4": { fr: "Soin du visage", ar: "عناية بالوجه" },
  "salon.p4": { fr: "200 DH", ar: "200 درهم" },
  "salon.i5": { fr: "Manucure", ar: "مانيكير" },
  "salon.p5": { fr: "80 DH", ar: "80 درهم" },
  "salon.i6": { fr: "Pédicure", ar: "باديكير" },
  "salon.p6": { fr: "100 DH", ar: "100 درهم" },
  "salon.cat3": { fr: "Hammam", ar: "الحمام" },
  "salon.i7": { fr: "Hammam et gommage", ar: "حمام وتقشير" },
  "salon.p7": { fr: "150 DH", ar: "150 درهم" },
  "salon.i8": { fr: "Hammam, gommage et massage", ar: "حمام، تقشير وتدليك" },
  "salon.p8": { fr: "300 DH", ar: "300 درهم" },
  "salon.place.title": { fr: "Un moment pour vous", ar: "لحظة لكِ" },
  "salon.place.sub": { fr: "Un salon pensé pour se détendre, du premier thé au dernier coup de brosse.", ar: "صالون مُصمَّم للاسترخاء، من أول كأس شاي إلى آخر لمسة." },
  "salon.pt1.title": { fr: "Produits choisis", ar: "منتجات مختارة" },
  "salon.pt1.text": { fr: "Des marques professionnelles, adaptées à chaque type de peau et de cheveux.", ar: "علامات احترافية تناسب كل نوع من البشرة والشعر." },
  "salon.pt2.title": { fr: "Hygiène soignée", ar: "نظافة صارمة" },
  "salon.pt2.text": { fr: "Serviettes propres et outils désinfectés pour chaque cliente.", ar: "مناشف نظيفة وأدوات معقّمة لكل زبونة." },
  "salon.pt3.title": { fr: "Sans attente", ar: "بدون انتظار" },
  "salon.pt3.text": { fr: "Votre créneau est réservé : vous êtes accueillie à l'heure.", ar: "موعدك محجوز: نستقبلك في الوقت المحدد." },
  "salon.h1.days": { fr: "Mardi - Dimanche", ar: "الثلاثاء - الأحد" },
  "salon.h2.days": { fr: "Lundi", ar: "الإثنين" },
  "salon.address": { fr: "8, avenue de l'Exemple, Agdal, Rabat", ar: "8، شارع المثال، أكدال، الرباط" },
  "salon.cta.title": { fr: "Réservez votre moment.", ar: "احجزي لحظتك." },
  "salon.cta.text": { fr: "Choisissez votre prestation et votre horaire sur WhatsApp.", ar: "اختاري الخدمة والموعد عبر واتساب." },
  "salon.float.label": { fr: "Prendre rendez-vous sur WhatsApp", ar: "احجزي موعدك عبر واتساب" },

  /* ---------- Exemple : Auto-école Virage ---------- */
  "ecole.wa": { fr: "Bonjour Bab Digital, j'ai vu l'exemple Auto-école Virage et je veux une page pour mon entreprise.", ar: "مرحبًا باب ديجيتال، شاهدت نموذج مدرسة فيراج للسياقة وأريد صفحة لمشروعي." },
  "ecole.meta.title": { fr: "Auto-école Virage, Agadir (exemple de design) | Bab Digital", ar: "مدرسة فيراج للسياقة، أكادير (نموذج تصميم) | باب ديجيتال" },
  "ecole.meta.description": { fr: "Exemple de page web pour une auto-école, créé par Bab Digital : forfaits, étapes du permis, horaires et inscription sur WhatsApp.", ar: "نموذج صفحة إلكترونية لمدرسة تعليم السياقة من تصميم باب ديجيتال: الباقات ومراحل الرخصة وأوقات العمل والتسجيل عبر واتساب." },
  "ecole.name": { fr: "Auto-école Virage", ar: "مدرسة فيراج للسياقة" },
  "ecole.nav.1": { fr: "Forfaits", ar: "الباقات" },
  "ecole.nav.2": { fr: "Étapes", ar: "المراحل" },
  "ecole.nav.3": { fr: "Horaires", ar: "أوقات العمل" },
  "ecole.header.cta": { fr: "S'inscrire", ar: "سجّل" },
  "ecole.kicker": { fr: "Auto-école, Talborjt, Agadir", ar: "مدرسة لتعليم السياقة، تالبرجت، أكادير" },
  "ecole.title": { fr: "Votre permis, étape par étape.", ar: "رخصتك، خطوة بخطوة." },
  "ecole.sub": { fr: "Code de la route et leçons de conduite pour le permis B, avec des moniteurs patients et des horaires souples.", ar: "قانون السير ودروس السياقة لرخصة الصنف ب، مع مدربين صبورين ومواعيد مرنة." },
  "ecole.cta": { fr: "S'inscrire sur WhatsApp", ar: "سجّل عبر واتساب" },
  "ecole.cta2": { fr: "Voir les forfaits", ar: "شاهد الباقات" },
  "ecole.chip1": { fr: "Permis B", ar: "رخصة الصنف ب" },
  "ecole.chip2": { fr: "Horaires souples", ar: "مواعيد مرنة" },
  "ecole.img.hero": { fr: "Illustration : voiture d'auto-école sur une route en virage, près d'Agadir", ar: "رسم توضيحي: سيارة لتعليم السياقة على طريق منعرج قرب أكادير" },
  "ecole.float1": { fr: "Voiture à double commande", ar: "سيارة بدواسات مزدوجة" },
  "ecole.float2": { fr: "Tests de code en ligne", ar: "اختبارات قانون السير عبر الإنترنت" },
  "ecole.menu.title": { fr: "Nos forfaits", ar: "باقاتنا" },
  "ecole.menu.sub": { fr: "Des prix clairs, sans frais cachés.", ar: "أسعار واضحة، بدون رسوم خفية." },
  "ecole.cat1": { fr: "Permis B", ar: "رخصة الصنف ب" },
  "ecole.i1": { fr: "Code de la route", ar: "قانون السير" },
  "ecole.i1.note": { fr: "Cours et tests blancs", ar: "دروس واختبارات تجريبية" },
  "ecole.p1": { fr: "800 DH", ar: "800 درهم" },
  "ecole.i2": { fr: "Permis B complet", ar: "رخصة ب كاملة" },
  "ecole.i2.note": { fr: "Code et 20 heures de conduite", ar: "قانون السير و20 ساعة سياقة" },
  "ecole.p2": { fr: "3200 DH", ar: "3200 درهم" },
  "ecole.i3": { fr: "Heure de conduite en plus", ar: "ساعة سياقة إضافية" },
  "ecole.p3": { fr: "150 DH", ar: "150 درهم" },
  "ecole.cat2": { fr: "Options", ar: "خيارات إضافية" },
  "ecole.i4": { fr: "Préparation à l'examen pratique", ar: "التحضير للامتحان التطبيقي" },
  "ecole.p4": { fr: "300 DH", ar: "300 درهم" },
  "ecole.i5": { fr: "Paiement en plusieurs fois", ar: "الأداء على دفعات" },
  "ecole.p5": { fr: "sans frais", ar: "بدون رسوم" },
  "ecole.steps.title": { fr: "Les étapes du permis", ar: "مراحل الحصول على الرخصة" },
  "ecole.steps.sub": { fr: "Nous vous accompagnons de l'inscription jusqu'à l'examen.", ar: "نرافقك من التسجيل حتى الامتحان." },
  "ecole.st1.title": { fr: "Inscription", ar: "التسجيل" },
  "ecole.st1.text": { fr: "Pièce d'identité, photos et certificat médical.", ar: "بطاقة التعريف، صور وشهادة طبية." },
  "ecole.st2.title": { fr: "Code de la route", ar: "قانون السير" },
  "ecole.st2.text": { fr: "Cours et tests blancs jusqu'à l'examen théorique.", ar: "دروس واختبارات تجريبية حتى الامتحان النظري." },
  "ecole.st3.title": { fr: "Conduite", ar: "السياقة" },
  "ecole.st3.text": { fr: "Leçons en ville et sur route, à votre rythme.", ar: "دروس في المدينة وعلى الطريق، حسب وتيرتك." },
  "ecole.st4.title": { fr: "Examen pratique", ar: "الامتحان التطبيقي" },
  "ecole.st4.text": { fr: "Nous vous accompagnons le jour de l'examen.", ar: "نرافقك يوم الامتحان." },
  "ecole.h1.days": { fr: "Lundi - Vendredi", ar: "الإثنين - الجمعة" },
  "ecole.h2.days": { fr: "Samedi", ar: "السبت" },
  "ecole.h3.days": { fr: "Dimanche", ar: "الأحد" },
  "ecole.address": { fr: "5, boulevard de l'Exemple, Talborjt, Agadir", ar: "5، شارع المثال، تالبرجت، أكادير" },
  "ecole.cta.title": { fr: "Prêt à prendre le volant ?", ar: "مستعد لتمسك المقود؟" },
  "ecole.cta.text": { fr: "Inscrivez-vous sur WhatsApp : nous vous rappelons pour fixer votre première leçon.", ar: "سجّل عبر واتساب: سنتصل بك لتحديد أول درس." },
  "ecole.float.label": { fr: "S'inscrire sur WhatsApp", ar: "سجّل عبر واتساب" },

  /* ---------- Exemple : Cabinet Dentaire Nacre ---------- */
  "dent.wa": { fr: "Bonjour Bab Digital, j'ai vu l'exemple Cabinet Dentaire Nacre et je veux une page pour mon entreprise.", ar: "مرحبًا باب ديجيتال، شاهدت نموذج عيادة الصدف لطب الأسنان وأريد صفحة لمشروعي." },
  "dent.meta.title": { fr: "Cabinet Dentaire Nacre, Casablanca (exemple de design) | Bab Digital", ar: "عيادة الصدف لطب الأسنان، الدار البيضاء (نموذج تصميم) | باب ديجيتال" },
  "dent.meta.description": { fr: "Exemple de page web pour un cabinet dentaire, créé par Bab Digital : soins, prix, horaires et prise de rendez-vous sur WhatsApp.", ar: "نموذج صفحة إلكترونية لعيادة أسنان من تصميم باب ديجيتال: العلاجات والأسعار وأوقات العمل وحجز المواعيد عبر واتساب." },
  "dent.name": { fr: "Cabinet Dentaire Nacre", ar: "عيادة الصدف لطب الأسنان" },
  "dent.nav.1": { fr: "Soins", ar: "العلاجات" },
  "dent.nav.2": { fr: "Le cabinet", ar: "العيادة" },
  "dent.nav.3": { fr: "Horaires", ar: "أوقات العمل" },
  "dent.header.cta": { fr: "Rendez-vous", ar: "موعد" },
  "dent.kicker": { fr: "Cabinet dentaire, Maârif, Casablanca", ar: "عيادة أسنان، المعاريف، الدار البيضاء" },
  "dent.title": { fr: "Des soins dentaires doux, expliqués simplement.", ar: "علاج أسنان لطيف، بشرح بسيط." },
  "dent.sub": { fr: "Consultations, détartrage, soins et esthétique du sourire, dans un cabinet moderne et lumineux.", ar: "فحوصات، إزالة الجير، علاجات وتجميل الابتسامة، في عيادة حديثة ومضيئة." },
  "dent.cta": { fr: "Prendre rendez-vous", ar: "احجز موعدًا" },
  "dent.cta2": { fr: "Voir les soins", ar: "شاهد العلاجات" },
  "dent.chip1": { fr: "Du lundi au samedi", ar: "من الإثنين إلى السبت" },
  "dent.chip2": { fr: "Rendez-vous sur WhatsApp", ar: "المواعيد عبر واتساب" },
  "dent.img.hero": { fr: "Fauteuil dentaire dans une salle de soins claire", ar: "كرسي طب الأسنان في غرفة علاج مضيئة" },
  "dent.img.1": { fr: "Salle de soins équipée, avec un fauteuil bleu clair", ar: "غرفة علاج مجهّزة بكرسي أزرق فاتح" },
  "dent.img.2": { fr: "Fauteuil de soins bleu près d'une fenêtre", ar: "كرسي علاج أزرق قرب نافذة" },
  "dent.float1": { fr: "Chaque soin expliqué avant de commencer", ar: "كل علاج يُشرح قبل البدء" },
  "dent.float2": { fr: "Paiement par carte ou en espèces", ar: "الدفع بالبطاقة أو نقدًا" },
  "dent.menu.title": { fr: "Nos soins", ar: "علاجاتنا" },
  "dent.menu.sub": { fr: "Pour toute la famille, avec un plan de soins et un prix annoncés à l'avance.", ar: "لكل أفراد العائلة، مع خطة علاج وسعر معروفين مسبقًا." },
  "dent.cat1": { fr: "Soins courants", ar: "العلاجات اليومية" },
  "dent.i1": { fr: "Consultation et bilan", ar: "فحص وتشخيص" },
  "dent.p1": { fr: "250 DH", ar: "250 درهم" },
  "dent.i2": { fr: "Détartrage", ar: "إزالة الجير" },
  "dent.p2": { fr: "400 DH", ar: "400 درهم" },
  "dent.i3": { fr: "Soin d'une carie", ar: "علاج التسوس" },
  "dent.p3": { fr: "dès 400 DH", ar: "ابتداءً من 400 درهم" },
  "dent.cat2": { fr: "Esthétique et orthodontie", ar: "التجميل وتقويم الأسنان" },
  "dent.i4": { fr: "Blanchiment", ar: "تبييض الأسنان" },
  "dent.p4": { fr: "dès 2500 DH", ar: "ابتداءً من 2500 درهم" },
  "dent.i5": { fr: "Facettes", ar: "القشور التجميلية" },
  "dent.p5": { fr: "sur devis", ar: "حسب الحالة" },
  "dent.i6": { fr: "Orthodontie", ar: "تقويم الأسنان" },
  "dent.p6": { fr: "sur devis", ar: "حسب الحالة" },
  "dent.gallery.title": { fr: "Le cabinet", ar: "العيادة" },
  "dent.gallery.sub": { fr: "Des salles claires, du matériel récent et un accueil au calme.", ar: "غرف مضيئة، معدات حديثة واستقبال هادئ." },
  "dent.pt1.title": { fr: "Un plan de soins clair", ar: "خطة علاج واضحة" },
  "dent.pt1.text": { fr: "Chaque soin et son prix sont expliqués avant de commencer.", ar: "يُشرح لك كل علاج وسعره قبل البدء." },
  "dent.pt2.title": { fr: "Matériel stérilisé", ar: "أدوات معقّمة" },
  "dent.pt2.text": { fr: "Instruments stérilisés, et à usage unique quand c'est possible.", ar: "أدوات معقّمة، وأخرى تُستعمل مرة واحدة كلما أمكن." },
  "dent.pt3.title": { fr: "Pour toute la famille", ar: "لكل أفراد العائلة" },
  "dent.pt3.text": { fr: "Enfants, adultes et seniors, avec douceur.", ar: "الأطفال والكبار والمسنّون، بكل لطف." },
  "dent.h1.days": { fr: "Lundi - Vendredi", ar: "الإثنين - الجمعة" },
  "dent.h2.days": { fr: "Samedi", ar: "السبت" },
  "dent.h3.days": { fr: "Dimanche", ar: "الأحد" },
  "dent.address": { fr: "12, avenue de l'Exemple, Maârif, Casablanca", ar: "12، شارع المثال، المعاريف، الدار البيضاء" },
  "dent.cta.title": { fr: "Un rendez-vous, une question ?", ar: "موعد أو سؤال؟" },
  "dent.cta.text": { fr: "Écrivez au cabinet sur WhatsApp, avec le jour qui vous arrange.", ar: "راسل العيادة على واتساب، واذكر اليوم الذي يناسبك." },
  "dent.float.label": { fr: "Prendre rendez-vous sur WhatsApp", ar: "احجز موعدًا عبر واتساب" }

  /* === FIN DES TEXTES === */
};

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "212702915333";
  var DEFAULT_LANG = "fr";
  var LANGS = ["fr", "ar"];
  var STORAGE_KEY = "bab-lang";
  var NBSP = String.fromCharCode(160);
  var root = document.documentElement;

  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }

  // Espaces insécables : « 1000 DH », « Combien de temps ? », « 300 درهم »...
  function tidy(text, lang) {
    if (lang === "fr") {
      return text
        .replace(/ ([?!:;»])/g, NBSP + "$1")
        .replace(/« /g, "«" + NBSP)
        .replace(/ à /g, " à" + NBSP)
        .replace(/(\d) (?=(DH|%|minutes?|jours?|mois|heures?)(?![a-zà-ÿ]))/g, "$1" + NBSP);
    }
    return text.replace(/(\d) (?=(درهم|دقائق|دقيقة))/g, "$1" + NBSP);
  }

  function t(key, lang) {
    var entry = translations[key];
    if (!entry) return null;
    return entry[lang] != null ? entry[lang] : entry.fr;
  }

  function waLink(key, lang) {
    var message = t(key, lang) || t("wa.default", lang) || "";
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  function startingLang() {
    try {
      var fromUrl = new URLSearchParams(location.search).get("lang");
      if (LANGS.indexOf(fromUrl) > -1) return fromUrl;
      var saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.indexOf(saved) > -1) return saved;
    } catch (e) { /* stockage indisponible : langue par défaut */ }
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* rien à faire */ }
    try {
      var url = new URL(location.href);
      if (lang === DEFAULT_LANG) url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    } catch (e) { /* rien à faire */ }
  }

  function applyLang(lang) {
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    each("[data-i18n]", function (el) {
      var v = t(el.getAttribute("data-i18n"), lang);
      if (v != null) el.textContent = tidy(v, lang);
    });
    each("[data-i18n-attr]", function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var i = pair.indexOf(":");
        if (i < 0) return;
        var v = t(pair.slice(i + 1).trim(), lang);
        if (v != null) el.setAttribute(pair.slice(0, i).trim(), tidy(v, lang));
      });
    });
    each("[data-wa]", function (a) { a.href = waLink(a.getAttribute("data-wa") || "wa.default", lang); });
    each("[data-lang]", function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    markToday(lang);
    root.classList.remove("i18n-wait");
  }

  // Tableau des horaires (pages d'exemple) : met en avant le jour actuel.
  function markToday(lang) {
    var day = new Date().getDay();
    each("tr[data-days]", function (row) {
      var days = row.getAttribute("data-days").split(",").map(Number);
      var today = days.indexOf(day) > -1;
      row.classList.toggle("is-today", today);
      var old = row.querySelector(".today-badge");
      if (old) old.remove();
      if (today) {
        var badge = document.createElement("span");
        badge.className = "today-badge";
        badge.textContent = t("ex.today", lang) || "";
        var cell = row.querySelector("th, td");
        if (cell) cell.appendChild(badge);
      }
    });
  }

  function setupMenu() {
    var header = document.querySelector(".site-header");
    var button = document.querySelector(".menu-toggle");
    if (!header || !button) return;
    function set(open) {
      header.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    }
    button.addEventListener("click", function () { set(!header.classList.contains("is-open")); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("is-open")) { set(false); button.focus(); }
    });
    each(".main-nav a", function (a) { a.addEventListener("click", function () { set(false); }); });
    var wide = window.matchMedia("(min-width: 960px)");
    var close = function (m) { if (m.matches) set(false); };
    if (wide.addEventListener) wide.addEventListener("change", close);
  }

  // En-tête avec ombre après défilement ; bouton WhatsApp flottant après l'accueil.
  function watchScroll() {
    var header = document.querySelector(".site-header, .ex-header");
    var fab = document.querySelector(".wa-float");
    var hero = document.querySelector(".hero, .ex-hero");
    var ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY || window.pageYOffset || 0;
      if (header) header.classList.toggle("is-scrolled", y > 8);
      if (fab) {
        var limit = hero ? hero.offsetTop + hero.offsetHeight * 0.55 : 320;
        fab.classList.toggle("is-shown", y > limit);
      }
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  // Apparition douce des blocs au défilement.
  function reveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) return;
    root.classList.add("reveal-on");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.1 });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  applyLang(startingLang());
  setupMenu();
  watchScroll();
  reveal();

  document.addEventListener("click", function (e) {
    var button = e.target.closest ? e.target.closest("[data-lang]") : null;
    if (!button) return;
    var lang = button.getAttribute("data-lang");
    if (LANGS.indexOf(lang) < 0 || lang === root.lang) return;
    saveLang(lang);
    applyLang(lang);
  });
})();
