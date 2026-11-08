export type Lang = 'en' | 'ar'

export type Translation = {
  school: {
    name: string
    shortName: string
    mark: string
    tagline: string
    city: string
    email: string
    phone: string
    address: string
  }
  nav: { to: string; label: string }[]
  a11y: {
    primaryNav: string
    mobileNav: string
    openMenu: string
    closeMenu: string
    home: string
    langSwitcher: string
    slideshow: string
    slides: string
  }
  common: {
    skip: string
    explore: string
    visit: string
    frontendOnly: string
    httpsNote: string
    viewSection: string
  }
  hero: {
    copy: string
    ctaAdmissions: string
    ctaCampus: string
    playVideo: string
  }
  slides: { id: string; alt: string; caption: string }[]
  dashboard: {
    eyebrow: string
    title: string
    intro: string
    cards: {
      title: string
      body: string
      to: string
      metric: string
      metricLabel: string
    }[]
  }
  home: {
    whyEyebrow: string
    whyTitle: string
    whyBody: string
    whyStory: string
    whyVisit: string
    classroomAlt: string
    valuesEyebrow: string
    valuesTitle: string
    valuesIntro: string
    newsEyebrow: string
    newsTitle: string
    newsIntro: string
    allNews: string
  }
  values: { title: string; body: string }[]
  about: {
    eyebrow: string
    title: string
    intro: string
    courtyardAlt: string
    missionTitle: string
    missionBody: string
    communityTitle: string
    communityBody: string
    principlesEyebrow: string
    principlesTitle: string
  }
  academics: {
    eyebrow: string
    title: string
    intro: string
    strengthsTitle: string
    strengths: { title: string; body: string }[]
    programs: { title: string; ages: string; summary: string }[]
  }
  admissions: {
    eyebrow: string
    title: string
    intro: string
    processTitle: string
    steps: { title: string; body: string }[]
    cta: string
    familyAlt: string
  }
  campus: {
    eyebrow: string
    title: string
    intro: string
    buildingAlt: string
    facilitiesTitle: string
    facilities: { title: string; body: string }[]
    clubsChip: string
    clubsTitle: string
    clubsBody: string
    wellbeingChip: string
    wellbeingTitle: string
    wellbeingBody: string
  }
  news: {
    eyebrow: string
    title: string
    intro: string
    items: { date: string; title: string; excerpt: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    visitTitle: string
    hours: string
    formTitle: string
    thanks: string
    fullName: string
    email: string
    interest: string
    interestTour: string
    interestAdmissions: string
    interestGeneral: string
    message: string
    submit: string
    formNote: string
  }
  footer: {
    blurb: string
  }
}

export const translations: Record<Lang, Translation> = {
  en: {
    school: {
      name: 'King Abdullah II School for Excellence – Al-Muqabalein',
      shortName: 'KASE Al-Muqabalein',
      mark: 'KA',
      tagline: 'Excellence with character. Learning with purpose.',
      city: 'Al-Muqabalein, Amman, Jordan',
      email: 'admissions@kase-muqabalein.edu.jo',
      phone: '+962 6 555 0140',
      address: 'Al-Muqabalein, Amman, Jordan',
    },
    nav: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/academics', label: 'Academics' },
      { to: '/admissions', label: 'Admissions' },
      { to: '/campus', label: 'Campus' },
      { to: '/news', label: 'News' },
      { to: '/contact', label: 'Contact' },
    ],
    a11y: {
      primaryNav: 'Primary',
      mobileNav: 'Mobile',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'home',
      langSwitcher: 'Language',
      slideshow: 'Campus showcase slideshow',
      slides: 'Slideshow slides',
    },
    common: {
      skip: 'Skip to content',
      explore: 'Explore',
      visit: 'Visit',
      frontendOnly: 'Frontend-only public website.',
      httpsNote: 'HTTPS · CDN · Globally accessible',
      viewSection: 'View section →',
    },
    hero: {
      copy:
        'A publicly accessible campus experience for families in Jordan and around the world.',
      ctaAdmissions: 'Start admissions',
      ctaCampus: 'Explore campus',
      playVideo: 'Play campus video',
    },
    slides: [
      {
        id: 'campus-dawn',
        alt: 'Modern campus buildings at sunrise',
        caption: 'A campus designed for discovery',
      },
      {
        id: 'campus-life',
        alt: 'Students walking across campus',
        caption: 'Everyday energy across our halls',
      },
      {
        id: 'lab',
        alt: 'Students collaborating in a science lab',
        caption: 'Hands-on science and inquiry',
      },
      {
        id: 'arts',
        alt: 'Creative arts studio with natural light',
        caption: 'Studios for makers and storytellers',
      },
      {
        id: 'athletics',
        alt: 'Athletics on a sunlit field',
        caption: 'Sport, stamina, and team spirit',
      },
    ],
    dashboard: {
      eyebrow: 'At a glance',
      title: 'A clear view of school life',
      intro:
        'Key pathways for families — academics, admissions, campus culture, and our Al-Muqabalein community — in one responsive dashboard.',
      cards: [
        {
          title: 'Academic Excellence',
          body: 'Pathways of excellence with bilingual strength in Arabic and English.',
          to: '/academics',
          metric: '18:1',
          metricLabel: 'student–teacher',
        },
        {
          title: 'Admissions Open',
          body: 'Rolling applications for the new academic year across KG–Grade 12.',
          to: '/admissions',
          metric: 'KG–12',
          metricLabel: 'full continuum',
        },
        {
          title: 'Campus Life',
          body: 'Athletics, arts, robotics, and community service woven into every week.',
          to: '/campus',
          metric: '40+',
          metricLabel: 'clubs & teams',
        },
        {
          title: 'Jordan & Beyond',
          body: 'A nationally rooted school of excellence connected to the wider world.',
          to: '/about',
          metric: 'Excellence',
          metricLabel: 'our mission',
        },
      ],
    },
    home: {
      whyEyebrow: 'Why KASE',
      whyTitle: 'Rooted in Al-Muqabalein. Ready for the world.',
      whyBody:
        'blends rigorous academics with wellbeing, arts, and athletics. Families visit from across Jordan — explore this site freely on any device.',
      whyStory: 'Our story',
      whyVisit: 'Plan a visit',
      classroomAlt: 'Students collaborating around a classroom table',
      valuesEyebrow: 'Values',
      valuesTitle: 'What guides every day',
      valuesIntro: 'Three commitments that shape teaching, coaching, and community life.',
      newsEyebrow: 'Latest',
      newsTitle: 'School news',
      newsIntro: 'Highlights from campus — always available on mobile and desktop.',
      allNews: 'All news',
    },
    values: [
      {
        title: 'Integrity',
        body: 'We act with honesty and accountability in every classroom and corridor.',
      },
      {
        title: 'Curiosity',
        body: 'Questions are celebrated. Discovery is the daily rhythm of learning.',
      },
      {
        title: 'Belonging',
        body: 'Every student is seen, supported, and challenged to grow.',
      },
    ],
    about: {
      eyebrow: 'About',
      title: 'A school of excellence in Al-Muqabalein',
      intro:
        'is a distinguished day school serving families across Jordan. We combine academic ambition with belonging, wellbeing, and civic responsibility.',
      courtyardAlt: 'School courtyard with trees and pathways',
      missionTitle: 'Our mission',
      missionBody:
        'To educate confident, compassionate learners who think critically, communicate clearly, and contribute meaningfully — in Amman and wherever life takes them.',
      communityTitle: 'Our community',
      communityBody:
        'Students, teachers, and families partner across every stage of the journey in a culture of excellence.',
      principlesEyebrow: 'Principles',
      principlesTitle: 'How we show up',
    },
    academics: {
      eyebrow: 'Academics',
      title: 'Learning that travels with students',
      intro:
        'From early years through senior school, our continuum balances depth, creativity, and university readiness — with bilingual strength in Arabic and English.',
      strengthsTitle: 'Signature strengths',
      strengths: [
        {
          title: 'STEM & design thinking',
          body: 'Labs, makerspaces, and robotics from middle school onward.',
        },
        {
          title: 'Languages & culture',
          body: 'Arabic and English pathways with global perspectives.',
        },
        {
          title: 'Arts & athletics',
          body: 'Studios and fields treated as essential learning spaces.',
        },
        {
          title: 'University counseling',
          body: 'Personalized guidance for local and international destinations.',
        },
      ],
      programs: [
        {
          title: 'Early Years',
          ages: 'Ages 3–5',
          summary: 'Play-rich learning that builds language, curiosity, and confidence.',
        },
        {
          title: 'Primary School',
          ages: 'Grades 1–5',
          summary: 'Foundational literacy, numeracy, and inquiry across the sciences and arts.',
        },
        {
          title: 'Middle School',
          ages: 'Grades 6–8',
          summary: 'Project-based learning with digital fluency and character education.',
        },
        {
          title: 'Senior School',
          ages: 'Grades 9–12',
          summary: 'University preparation with advanced STEM, humanities, and leadership.',
        },
      ],
    },
    admissions: {
      eyebrow: 'Admissions',
      title: 'Join our community of excellence',
      intro:
        'Applications are open across KG–Grade 12. Tour campus, meet teachers, and learn how we support every learner — no account needed to browse this site.',
      processTitle: 'Simple process',
      steps: [
        { title: '1. Inquire', body: 'Share family details and preferred grade level.' },
        { title: '2. Visit', body: 'Book a campus tour or join an open house weekend.' },
        { title: '3. Apply', body: 'Submit records and complete a friendly assessment.' },
        { title: '4. Enroll', body: 'Receive a decision and welcome package.' },
      ],
      cta: 'Contact admissions',
      familyAlt: 'Family walking through a bright school corridor',
    },
    campus: {
      eyebrow: 'Campus',
      title: 'Spaces that invite energy',
      intro:
        'Learning commons, science labs, arts studios, and athletic fields — designed for Amman’s climate and for students who learn by doing.',
      buildingAlt: 'Modern school building exterior',
      facilitiesTitle: 'Facilities',
      facilities: [
        {
          title: 'Learning commons',
          body: 'Quiet zones, collaboration pods, and a digital library.',
        },
        {
          title: 'Innovation labs',
          body: 'Robotics, coding, and design workshops.',
        },
        {
          title: 'Arts wing',
          body: 'Music rehearsal rooms, gallery, and black-box theatre.',
        },
        {
          title: 'Athletics',
          body: 'Track, courts, and a multi-purpose sports hall.',
        },
      ],
      clubsChip: 'Clubs',
      clubsTitle: '40+ student-led activities',
      clubsBody: 'Debate, Model UN, eco club, coding, journalism, and more.',
      wellbeingChip: 'Wellbeing',
      wellbeingTitle: 'Counseling & pastoral care',
      wellbeingBody: 'Dedicated mentors and counselors supporting every grade band.',
    },
    news: {
      eyebrow: 'News',
      title: 'Stories from campus',
      intro: 'Updates that celebrate student achievement, community events, and campus growth.',
      items: [
        {
          date: '2026-10-12',
          title: 'KASE Robotics wins regional STEM challenge',
          excerpt: 'Our senior team brought home gold with an autonomous navigation prototype.',
        },
        {
          date: '2026-09-28',
          title: 'Open House weekend draws record families',
          excerpt: 'Hundreds of visitors toured labs, studios, and the new learning commons.',
        },
        {
          date: '2026-09-05',
          title: 'New arts wing opens for the autumn term',
          excerpt: 'Purpose-built spaces for music, theatre, and visual arts are now live.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'We would love to meet you',
      intro:
        'Reach admissions, book a tour, or ask a question. This form stays on the frontend — submissions are simulated for this public demo site.',
      visitTitle: 'Visit us',
      hours: 'Sunday–Thursday · 8:00–15:30 (Jordan time)',
      formTitle: 'Send a message',
      thanks:
        'Thank you — your inquiry is ready to share with admissions. For a live production workflow, connect this frontend form to your preferred email or form service.',
      fullName: 'Full name',
      email: 'Email',
      interest: 'Interest',
      interestTour: 'Campus tour',
      interestAdmissions: 'Admissions',
      interestGeneral: 'General question',
      message: 'Message',
      submit: 'Submit inquiry',
      formNote: 'Frontend only — no backend or login required.',
    },
    footer: {
      blurb:
        'A school of excellence in {city}, preparing students for university and life with curiosity, character, and community.',
    },
  },
  ar: {
    school: {
      name: 'مدرسة الملك عبدالله الثاني للتميز – المقابلين',
      shortName: 'تميز المقابلين',
      mark: 'تم',
      tagline: 'تميزٌ بشخصيةٍ راسخة. وتعلّمٌ بهدفٍ واضح.',
      city: 'المقابلين، عمّان، الأردن',
      email: 'admissions@kase-muqabalein.edu.jo',
      phone: '+962 6 555 0140',
      address: 'المقابلين، عمّان، الأردن',
    },
    nav: [
      { to: '/', label: 'الرئيسية' },
      { to: '/about', label: 'عن المدرسة' },
      { to: '/academics', label: 'الأكاديميات' },
      { to: '/admissions', label: 'القبول' },
      { to: '/campus', label: 'الحرم' },
      { to: '/news', label: 'الأخبار' },
      { to: '/contact', label: 'تواصل معنا' },
    ],
    a11y: {
      primaryNav: 'القائمة الرئيسية',
      mobileNav: 'قائمة الجوال',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      home: 'الرئيسية',
      langSwitcher: 'اللغة',
      slideshow: 'عرض صور وفيديو الحرم',
      slides: 'شرائح العرض',
    },
    common: {
      skip: 'تخطَّ إلى المحتوى',
      explore: 'استكشف',
      visit: 'الزيارة',
      frontendOnly: 'موقع عام للواجهة الأمامية فقط.',
      httpsNote: 'HTTPS · شبكة توصيل محتوى · متاح عالمياً',
      viewSection: 'عرض القسم ←',
    },
    hero: {
      copy: 'تجربة حرم مدرسي متاحة للعائلات في الأردن وحول العالم.',
      ctaAdmissions: 'ابدأ التسجيل',
      ctaCampus: 'استكشف الحرم',
      playVideo: 'تشغيل فيديو الحرم',
    },
    slides: [
      {
        id: 'campus-dawn',
        alt: 'مباني الحرم المدرسي عند شروق الشمس',
        caption: 'حرمٌ صُمم للاكتشاف',
      },
      {
        id: 'campus-life',
        alt: 'طلاب يسيرون في الحرم المدرسي',
        caption: 'طاقة يومية في أروقتنا',
      },
      {
        id: 'lab',
        alt: 'طلاب يتعاونون في مختبر العلوم',
        caption: 'علوم عملية واستقصاء',
      },
      {
        id: 'arts',
        alt: 'استوديو فنون بإضاءة طبيعية',
        caption: 'مساحات للمبدعين وصنّاع القصص',
      },
      {
        id: 'athletics',
        alt: 'أنشطة رياضية في ملعب مشمس',
        caption: 'رياضة وتحمل وروح الفريق',
      },
    ],
    dashboard: {
      eyebrow: 'نظرة سريعة',
      title: 'صورة واضحة عن حياة المدرسة',
      intro:
        'مسارات أساسية للعائلات — الأكاديميات والقبول وحياة الحرم ومجتمع المقابلين — في لوحة واحدة متجاوبة.',
      cards: [
        {
          title: 'التميز الأكاديمي',
          body: 'مسارات تميز مع قوة ثنائية اللغة بالعربية والإنجليزية.',
          to: '/academics',
          metric: '18:1',
          metricLabel: 'طالب–معلم',
        },
        {
          title: 'القبول مفتوح',
          body: 'طلبات مستمرة للعام الدراسي الجديد من الروضة حتى الصف الثاني عشر.',
          to: '/admissions',
          metric: 'روضة–12',
          metricLabel: 'مسار كامل',
        },
        {
          title: 'حياة الحرم',
          body: 'رياضة وفنون وروبوتات وخدمة مجتمعية في كل أسبوع.',
          to: '/campus',
          metric: '+40',
          metricLabel: 'أندية وفرق',
        },
        {
          title: 'الأردن والعالم',
          body: 'مدرسة تميز متجذرة وطنياً ومتصلة بالعالم.',
          to: '/about',
          metric: 'تميز',
          metricLabel: 'رسالتنا',
        },
      ],
    },
    home: {
      whyEyebrow: 'لماذا تميز المقابلين',
      whyTitle: 'جذور في المقابلين. واستعداد للعالم.',
      whyBody:
        'تجمع بين أكاديميات صارمة والرفاهية والفنون والرياضة. تزورنا العائلات من أنحاء الأردن — وتصفح هذا الموقع بحرية من أي جهاز.',
      whyStory: 'قصتنا',
      whyVisit: 'خطط لزيارة',
      classroomAlt: 'طلاب يتعاونون حول طاولة الصف',
      valuesEyebrow: 'القيم',
      valuesTitle: 'ما يوجّه يومنا',
      valuesIntro: 'ثلاثة التزامات تشكّل التعليم والإرشاد وحياة المجتمع.',
      newsEyebrow: 'الأحدث',
      newsTitle: 'أخبار المدرسة',
      newsIntro: 'أبرز أحداث الحرم — متاحة دائماً على الجوال والحاسوب.',
      allNews: 'كل الأخبار',
    },
    values: [
      {
        title: 'النزاهة',
        body: 'نعمل بصدق ومسؤولية في كل صف وممر.',
      },
      {
        title: 'حب الاستطلاع',
        body: 'نرحّب بالأسئلة، والاكتشاف إيقاع التعلّم اليومي.',
      },
      {
        title: 'الانتماء',
        body: 'كل طالب مرئي ومدعوم ومُحفَّز لينمو.',
      },
    ],
    about: {
      eyebrow: 'عن المدرسة',
      title: 'مدرسة تميز في المقابلين',
      intro:
        'مدرسة نهاريّة مميزة تخدم العائلات في أنحاء الأردن. نجمع بين الطموح الأكاديمي والانتماء والرفاهية والمسؤولية المجتمعية.',
      courtyardAlt: 'فناء المدرسة مع أشجار وممرات',
      missionTitle: 'رسالتنا',
      missionBody:
        'تربية متعلمين واثقين ومتعاطفين يفكرون نقدياً ويتواصلون بوضوح ويسهمون بفاعلية — في عمّان وحيثما تأخذهم الحياة.',
      communityTitle: 'مجتمعنا',
      communityBody:
        'الطلاب والمعلمون والعائلات شركاء في كل مرحلة ضمن ثقافة التميز.',
      principlesEyebrow: 'المبادئ',
      principlesTitle: 'كيف نظهر',
    },
    academics: {
      eyebrow: 'الأكاديميات',
      title: 'تعلّم يبقى مع الطالب',
      intro:
        'من السنوات المبكرة حتى المرحلة الثانوية، يوازن مسارنا بين العمق والإبداع والاستعداد الجامعي — مع قوة ثنائية اللغة بالعربية والإنجليزية.',
      strengthsTitle: 'نقاط القوة المميزة',
      strengths: [
        {
          title: 'العلوم والتصميم',
          body: 'مختبرات ومساحات صنع وروبوتات من المرحلة المتوسطة فصاعداً.',
        },
        {
          title: 'اللغات والثقافة',
          body: 'مسارات بالعربية والإنجليزية مع آفاق عالمية.',
        },
        {
          title: 'الفنون والرياضة',
          body: 'استوديوهات وملاعب تُعامل كمساحات تعلم أساسية.',
        },
        {
          title: 'الإرشاد الجامعي',
          body: 'توجيه شخصي للوجهات المحلية والدولية.',
        },
      ],
      programs: [
        {
          title: 'السنوات المبكرة',
          ages: 'الأعمار 3–5',
          summary: 'تعلّم غني باللعب يبني اللغة وحب الاستطلاع والثقة.',
        },
        {
          title: 'المرحلة الابتدائية',
          ages: 'الصفوف 1–5',
          summary: 'أساسيات القراءة والرياضيات والاستقصاء عبر العلوم والفنون.',
        },
        {
          title: 'المرحلة المتوسطة',
          ages: 'الصفوف 6–8',
          summary: 'تعلّم قائم على المشاريع مع طلاقة رقمية وتربية شخصية.',
        },
        {
          title: 'المرحلة الثانوية',
          ages: 'الصفوف 9–12',
          summary: 'إعداد جامعي مع علوم متقدمة وعلوم إنسانية وقيادة.',
        },
      ],
    },
    admissions: {
      eyebrow: 'القبول',
      title: 'انضم إلى مجتمع التميز',
      intro:
        'الطلبات مفتوحة من الروضة حتى الصف الثاني عشر. تجوّل في الحرم والتقِ بالمعلمين وتعرّف كيف ندعم كل متعلم — دون حاجة لحساب لتصفح الموقع.',
      processTitle: 'خطوات بسيطة',
      steps: [
        { title: '1. الاستفسار', body: 'شارك بيانات العائلة والصف المفضل.' },
        { title: '2. الزيارة', body: 'احجز جولة في الحرم أو انضم ليوم الباب المفتوح.' },
        { title: '3. التقديم', body: 'قدّم السجلات وأكمل تقييماً ودّياً.' },
        { title: '4. التسجيل', body: 'استلم القرار وحزمة الترحيب.' },
      ],
      cta: 'تواصل مع القبول',
      familyAlt: 'عائلة تسير في ممر مدرسي مضيء',
    },
    campus: {
      eyebrow: 'الحرم',
      title: 'مساحات تدعو للطاقة',
      intro:
        'مساحات تعلّم مشتركة ومختبرات علوم واستوديوهات فنون وملاعب رياضية — مصممة لمناخ عمّان وللطلاب الذين يتعلمون بالممارسة.',
      buildingAlt: 'واجهة مبنى مدرسي حديث',
      facilitiesTitle: 'المرافق',
      facilities: [
        {
          title: 'مساحة التعلّم المشتركة',
          body: 'مناطق هدوء ووحدات تعاون ومكتبة رقمية.',
        },
        {
          title: 'مختبرات الابتكار',
          body: 'ورش روبوتات وبرمجة وتصميم.',
        },
        {
          title: 'جناح الفنون',
          body: 'غرف تدريب موسيقى ومعرض ومسرح صغير.',
        },
        {
          title: 'الرياضة',
          body: 'مضمار وملاعب وقاعة رياضية متعددة الأغراض.',
        },
      ],
      clubsChip: 'الأندية',
      clubsTitle: 'أكثر من 40 نشاطاً بقيادة الطلاب',
      clubsBody: 'مناظرات ونموذج الأمم المتحدة ونادي البيئة والبرمجة والصحافة والمزيد.',
      wellbeingChip: 'الرفاهية',
      wellbeingTitle: 'إرشاد ورعاية تربوية',
      wellbeingBody: 'مرشدون وموجهون مخصصون لدعم كل مرحلة دراسية.',
    },
    news: {
      eyebrow: 'الأخبار',
      title: 'قصص من الحرم',
      intro: 'تحديثات تحتفي بإنجازات الطلاب وفعاليات المجتمع ونمو الحرم.',
      items: [
        {
          date: '2026-10-12',
          title: 'فريق الروبوتات يفوز بتحدي STEM الإقليمي',
          excerpt: 'حقق فريقنا الذهبي نموذجاً للملاحة الذاتية.',
        },
        {
          date: '2026-09-28',
          title: 'يوم الباب المفتوح يستقطب عدداً قياسياً من العائلات',
          excerpt: 'مئات الزوار تجوّلوا في المختبرات والاستوديوهات ومساحة التعلّم الجديدة.',
        },
        {
          date: '2026-09-05',
          title: 'افتتاح جناح الفنون للفصل الخريفي',
          excerpt: 'مساحات مخصصة للموسيقى والمسرح والفنون البصرية أصبحت جاهزة.',
        },
      ],
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'يسعدنا لقاؤكم',
      intro:
        'تواصل مع القبول أو احجز جولة أو اطرح سؤالاً. يبقى هذا النموذج في الواجهة الأمامية — والإرسال محاكى لهذا الموقع التجريبي العام.',
      visitTitle: 'زورونا',
      hours: 'الأحد–الخميس · 8:00–15:30 (توقيت الأردن)',
      formTitle: 'أرسل رسالة',
      thanks:
        'شكراً لكم — استفساركم جاهز للمشاركة مع القبول. لربط النموذج بخدمة بريد أو نماذج حقيقية في الإنتاج، يمكنكم توصيله لاحقاً.',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      interest: 'الاهتمام',
      interestTour: 'جولة في الحرم',
      interestAdmissions: 'القبول',
      interestGeneral: 'سؤال عام',
      message: 'الرسالة',
      submit: 'إرسال الاستفسار',
      formNote: 'واجهة أمامية فقط — دون خادم خلفي أو تسجيل دخول.',
    },
    footer: {
      blurb:
        'مدرسة تميز في {city}، تُعدّ الطلاب للجامعة وللحياة بفضول وشخصية ومجتمع.',
    },
  },
}
