import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgHome from '../assets/bg home.mp4';
import logoOIML from '../assets/logos/Logo-OIML.png';
import logoEURAMET from '../assets/logos/logo-euromet.png';
import logoGULFMET from '../assets/logos/logo-gulfmet.png';
import logoARAC from '../assets/logos/logo-spn-arac.png';
import logoBIPM from '../assets/logos/International_Bureau_of_Weights_and_Measures_BPIM_Logo-1.png';
import logoAFRIMETS from '../assets/logos/Logo-Afri-met.png';
import logoISO from '../assets/logos/logo-spn-iso.png';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentQmsIndex, setCurrentQmsIndex] = useState(0);
  const [currentIlcIndex, setCurrentIlcIndex] = useState(0);
  const [currentLang, setCurrentLang] = useState(() => {
    try { return localStorage.getItem('aramet_lang') || 'AR' } catch (e) { return 'AR' }
  });

  const translations = {
    AR: {
      slides: [
        {
          id: 1,
          title: "اليوم العالمي للمترولوجيا 2026",
          subtitle: "تحت شعار “المترولوجيا: بناء الثقة في صنع السياسات”",
          image: "https://aramet.org/wp-content/uploads/2025/09/WMD_ARAMET_2026_AR_A1-scaled.png",
          buttonText: "اقرأ المزيد"
        },
        {
          id: 2,
          title: "من نحن",
          subtitle: "التجمع العربي للمترولوجيا (ARAMET) يهدف إلى تعزيز التعاون وتطوير البنية التحتية للقياس في الدول العربية.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
          buttonText: "تعرف علينا"
        },
        {
          id: 3,
          title: "آخر خبر",
          subtitle: "ورشة عمل حول كيفية التحقق من أدوات قياس تدفق السوائل الكهرومغناطيسية.",
          image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop",
          buttonText: "التفاصيل"
        },
        {
          id: 4,
          title: "برنامج تدريبي",
          subtitle: "تطوير الكفاءات الفنية وبناء القدرات في مجالات القياس والمعايرة الدقيقة.",
          image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
          buttonText: "سجل الآن"
        },
        {
          id: 5,
          title: "آخر مقارنة",
          subtitle: "المقارنات البينية لضمان دقة وتوحيد القياسات بين المعاهد الوطنية.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
          buttonText: "عرض النتائج"
        }
      ],
      eventsTitle: "الفعاليات القادمة",
      events: [
        {
          id: 1,
          day: "20",
          month: "مايو",
          year: "2026",
          title: "ندوة علمية بمناسبة اليوم العالمي للمترولوجيا",
          description: "مناقشة دور القياسات الدقيقة في صياغة السياسات البيئية والاقتصادية المستدامة وتوحيد الرؤى العربية.",
          btnText: "التفاصيل والتسجيل"
        },
        {
          id: 2,
          day: "14",
          month: "يونيو",
          year: "2026",
          title: "ورشة عمل: معايرة أجهزة القياس الطبي",
          description: "برنامج تدريبي متقدم مخصص للمهندسين الطبيين لضمان دقة أجهزة التشخيص والمراقبة الصحية.",
          btnText: "احجز مقعدك الآن"
        }
      ],
      wmdTitle: "اليوم العالمي للمترولوجيا لسنة 2026",
      wmdSlogan: "“المترولوجيا: بناء الثقة في صنع السياسات”",
      wmdDesc: "يعد اليوم العالمي للمترولوجيا احتفاءً سنويًا بذكرى توقيع اتفاقية المتر الدولية. ويسلط شعار هذا العام الضوء على الدور المحوري الذي تلعبه علوم القياس الدقيقة في توفير البيانات الموثوقة والأسس العلمية اللازمة لاتخاذ قرارات سيادية وسياسات عامة ناجحة على المستويين الوطني والدولي.",
      wmdBtn: "اكتشف الفعاليات المصاحبة",
      newsTitle: "آخر أخبار التجمع",
      newsSubTitle: "اطلع على أحدث الأنشطة، ورش العمل، والاجتماعات الدورية الفنية للتجمع العربي للمترولوجيا.",
      newsBtn: "عرض جميع الأخبار",
      news: [
        {
          id: 1,
          tag: "ورش عمل فنية",
          date: "04 مارس 2026",
          title: "ورشة عمل فنية حول التحقق من أدوات قياس تدفق السوائل الكهرومغناطيسية",
          desc: "تنظيم ورشة عمل فنية متخصصة تهدف إلى تبادل الخبرات وبناء القدرات الفنية للمعاهد والمراكز الوطنية العربية في مجالات دقة قياس التدفق الكهرومغناطيسي.",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
        },
        {
          id: 2,
          tag: "اللجان الفنية",
          date: "12 يناير 2026",
          title: "الاجتماع الدوري للجنة الفنية للكتلة والكميات المرتبطة بها",
          desc: "عقدت اللجنة الفنية للكتلة بالتجمع العربي للمترولوجيا اجتماعها الدوري لمناقشة نتائج المقارنات البينية الإقليمية وخطط التطوير المستقبلية لمعايير القياس الوطنية.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
        },
        {
          id: 3,
          tag: "تعاون إقليمي",
          date: "18 نوفمبر 2025",
          title: "تعزيز التعاون المترولوجي العربي المشترك لضمان دقة القياس",
          desc: "متابعة المبادرات المشتركة لتطوير البنية التحتية للجودة والمترولوجيا في الدول العربية بما يتماشى مع المعايير الدولية والاعتراف المتبادل CIPM MRA.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        }
      ],
      qmsSectionTitle: "أنظمة إدارة الجودة (TC-QS)",
      qmsSectionSub: "أحدث المعاهد المنفذة لأنظمة إدارة الجودة وفق المواصفات الدولية",
      qmsList: [
        {
          id: 1,
          country: "المملكة المغربية",
          code: "ARAMET QMS MA-01",
          institute: "المختبر الوطني للمترولوجيا - المملكة المغربية",
          standard: "ISO 17025",
          status: "قيد التنفيذ (Implementation)",
          countryCode: "ma"
        },
        {
          id: 2,
          country: "المملكة العربية السعودية",
          code: "ARAMET QMS A01-6",
          institute: "المركز الوطني للقياس والمعايرة",
          standard: "ISO 17043",
          status: "قيد التنفيذ (Implementation)",
          countryCode: "sa"
        },
        {
          id: 3,
          country: "دولة الإمارات العربية المتحدة",
          code: "ARAMET QMS UAE-01",
          institute: "معهد الإمارات للمترولوجيا (EMI)",
          standard: "ISO 17025",
          status: "قيد التنفيذ (Implementation)",
          countryCode: "ae"
        }
      ],
      ilcSectionTitle: "برامج المقارنات البينية",
      ilcSectionSub: "أحدث برامج إثبات الكفاءة الفنية والتكافؤ الدولي بين المعاهد الوطنية",
      ilcLabels: {
        type: "النوع:",
        stage: "المرحلة:",
        status: "الحالة:",
        subFields: "Sub Fields:",
        area: "منطقة القياس:",
        pilot: "المختبر التجريبي:",
        details: "التفاصيل"
      },
      ilcList: [
        {
          id: 1,
          code: "ARAMET.M-K3",
          type: "Key Comparison",
          stage: "Schedule",
          status: "In Progress",
          subFields: "Small and Medium Mass Calibration",
          area: "Mass Metrology",
          pilot: "المركز الوطني للمترولوجيا/المملكة الأردنية الهاشمية",
          statusColor: "text-blue-600 bg-blue-100",
          icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        },
        {
          id: 2,
          code: "ARAMET.TM-K1",
          type: "Key Comparison",
          stage: "Approved",
          status: "In Progress",
          subFields: "Temperature Sensor Calibration RTD (Resistance Temperature Detector) Calibration Pt-100 Sensor Calibration Temperature Measurement Systems Calibration of Indicators with Sensors",
          area: "Thermal Metrology",
          pilot: "المعهد القومي للقياس والمعايرة",
          statusColor: "text-blue-600 bg-blue-100",
          icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        },
        {
          id: 3,
          code: "ARAMET.EM-K2",
          type: "Key Comparison",
          stage: "Approved",
          status: "Waiting for approval",
          subFields: "N/A",
          area: "Electrical Metrology",
          pilot: "المعهد القومي للقياس والمعايرة",
          statusColor: "text-orange-600 bg-orange-100",
          icon: "M13 10V3L4 14h7v7l9-11h-7z"
        }
      ],
      partnersTitle: "الشركاء والمنظمات الدولية",
      partnersSub: "يرتبط التجمع بشراكات وثيقة وعضويات فاعلة مع كبرى الهيئات الدولية والإقليمية لضمان قبول شهادات القياس والمعايرة عالمياً",
      partnersList: [
        { id: 1, name: "OIML", logo: logoOIML },
        { id: 2, name: "EURAMET", logo: logoEURAMET },
        { id: 3, name: "GULFMET", logo: logoGULFMET },
        { id: 4, name: "ARAC", logo: logoARAC },
        { id: 5, name: "BIPM", logo: logoBIPM },
        { id: 6, name: "ISO", logo: logoISO },
        { id: 7, name: "AFRIMETS", logo: logoAFRIMETS }
      ]
    },
    EN: {
      slides: [
        {
          id: 1,
          title: 'World Metrology Day 2026',
          subtitle: 'Under the motto "Metrology: Building confidence in policymaking"',
          image: 'https://aramet.org/wp-content/uploads/2025/09/WMD_ARAMET_2026_AR_A1-scaled.png',
          buttonText: 'Read more'
        },
        {
          id: 2,
          title: 'Who we are',
          subtitle: 'The Arab Association for Metrology (ARAMET) aims to strengthen cooperation and develop measurement infrastructure in Arab countries.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
          buttonText: 'Learn more'
        },
        {
          id: 3,
          title: 'Latest news',
          subtitle: 'A workshop on verification of electromagnetic flowmeter instruments.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop',
          buttonText: 'Details'
        },
        {
          id: 4,
          title: 'Training program',
          subtitle: 'Developing technical competencies and capacity building in precision measurement and calibration.',
          image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop',
          buttonText: 'Register'
        },
        {
          id: 5,
          title: 'Latest comparison',
          subtitle: 'Interlaboratory comparisons to ensure accuracy and harmonization of measurements among national institutes.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
          buttonText: 'View results'
        }
      ],
      eventsTitle: "Upcoming Events",
      events: [
        {
          id: 1,
          day: "20",
          month: "May",
          year: "2026",
          title: "World Metrology Day Scientific Seminar",
          description: "Discussing the pivotal role of precise measurements in building confidence for sustainable policymaking.",
          btnText: "Details & Registration"
        },
        {
          id: 2,
          day: "14",
          month: "Jun",
          year: "2026",
          title: "Workshop: Medical Devices Calibration",
          description: "Advanced training program dedicated to medical engineers to guarantee diagnostics accuracy.",
          btnText: "Book Your Seat"
        }
      ],
      wmdTitle: "World Metrology Day 2026",
      wmdSlogan: '"Metrology: Building confidence in policymaking"',
      wmdDesc: "World Metrology Day is an annual celebration of the signature of the Metre Convention. This year's theme highlights the critical role that measurement science plays in providing the reliable data and solid scientific foundation required for robust public policy and sovereign decisions.",
      wmdBtn: "Explore Associated Events",
      newsTitle: "ARAMET Latest News",
      newsSubTitle: "Discover the most recent activities, workshops, and technical committee updates from the Arab Metrology Association.",
      newsBtn: "View All News",
      news: [
        {
          id: 1,
          tag: "Technical Workshops",
          date: "March 04, 2026",
          title: "Technical Workshop on Verification of Electromagnetic Flowmeters",
          desc: "Organizing a specialized technical workshop aimed at knowledge sharing and capacity building for Arab NMIs in the fields of electromagnetic flow measurement accuracy.",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
        },
        {
          id: 2,
          tag: "Technical Committees",
          date: "January 12, 2026",
          title: "Regular Meeting of the Technical Committee for Mass and Related Quantities",
          desc: "The ARAMET Technical Committee for Mass held its regular assembly to discuss regional interlaboratory comparison outcomes and future roadmaps for national measurement standards.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
        },
        {
          id: 3,
          tag: "Regional Cooperation",
          date: "November 18, 2025",
          title: "Enhancing Joint Arab Metrology Cooperation for Measurement Accuracy",
          desc: "Following up on joint initiatives to advance quality and metrology infrastructure in Arab nations in alignment with international standards and the CIPM MRA.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        }
      ],
      qmsSectionTitle: "Quality Management Systems (TC-QS)",
      qmsSectionSub: "Latest institutes implementing QMS according to international standards",
      qmsList: [
        {
          id: 1,
          country: "Kingdom of Morocco",
          code: "ARAMET QMS MA-01",
          institute: "National Laboratory of Metrology (LNM)",
          standard: "ISO 17025",
          status: "Implementation",
          countryCode: "ma"
        },
        {
          id: 2,
          country: "Kingdom of Saudi Arabia",
          code: "ARAMET QMS A01-6",
          institute: "National Measurement and Calibration Center (NMCC)",
          standard: "ISO 17043",
          status: "Implementation",
          countryCode: "sa"
        },
        {
          id: 3,
          country: "United Arab Emirates",
          code: "ARAMET QMS UAE-01",
          institute: "Emirates Metrology Institute (EMI)",
          standard: "ISO 17025",
          status: "Implementation",
          countryCode: "ae"
        }
      ],
      ilcSectionTitle: "Interlaboratory Comparisons",
      ilcSectionSub: "Latest programs demonstrating technical competence and international equivalence",
      ilcLabels: {
        type: "Type:",
        stage: "Stage:",
        status: "Status:",
        subFields: "Sub Fields:",
        area: "Measurement Area:",
        pilot: "Pilot Lab:",
        details: "Details"
      },
      ilcList: [
        {
          id: 1,
          code: "ARAMET.M-K3",
          type: "Key Comparison",
          stage: "Schedule",
          status: "In Progress",
          subFields: "Small and Medium Mass Calibration",
          area: "Mass Metrology",
          pilot: "National Metrology Center / Hashemite Kingdom of Jordan",
          statusColor: "text-blue-600 bg-blue-100",
          icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        },
        {
          id: 2,
          code: "ARAMET.TM-K1",
          type: "Key Comparison",
          stage: "Approved",
          status: "In Progress",
          subFields: "Temperature Sensor Calibration RTD (Resistance Temperature Detector) Calibration Pt-100 Sensor Calibration Temperature Measurement Systems Calibration of Indicators with Sensors",
          area: "Thermal Metrology",
          pilot: "National Institute of Standards (NIS)",
          statusColor: "text-blue-600 bg-blue-100",
          icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        },
        {
          id: 3,
          code: "ARAMET.EM-K2",
          type: "Key Comparison",
          stage: "Approved",
          status: "Waiting for approval",
          subFields: "N/A",
          area: "Electrical Metrology",
          pilot: "National Institute of Standards (NIS)",
          statusColor: "text-orange-600 bg-orange-100",
          icon: "M13 10V3L4 14h7v7l9-11h-7z"
        }
      ],
      partnersTitle: "International Partners",
      partnersSub: "We establish strategic alliances with prominent global and regional organizations to strengthen quality infrastructure",
      partnersList: [
        { id: 1, name: "OIML", logo: logoOIML },
        { id: 2, name: "EURAMET", logo: logoEURAMET },
        { id: 3, name: "GULFMET", logo: logoGULFMET },
        { id: 4, name: "ARAC", logo: logoARAC },
        { id: 5, name: "BIPM", logo: logoBIPM },
        { id: 6, name: "ISO", logo: logoISO },
        { id: 7, name: "AFRIMETS", logo: logoAFRIMETS }
      ]
    }
  };

  const slides = translations[currentLang].slides;
  const events = translations[currentLang].events;
  const newsList = translations[currentLang].news;
  const qmsData = translations[currentLang];
  const ilcData = translations[currentLang];
  
  // تكرار القائمة مرتين فقط لإنشاء حلقة متصلة رياضياً
  const marqueePartners = [
    ...translations[currentLang].partnersList, 
    ...translations[currentLang].partnersList
  ];

  // Timers
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [events.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQmsIndex((prev) => (prev + 1) % qmsData.qmsList.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [qmsData.qmsList.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIlcIndex((prev) => (prev + 1) % ilcData.ilcList.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [ilcData.ilcList.length]);

  useEffect(() => {
    const handler = (e) => {
      const next = e?.detail || localStorage.getItem('aramet_lang') || 'AR'
      setCurrentLang(next)
    }
    window.addEventListener('aramet:lang', handler)
    return () => window.removeEventListener('aramet:lang', handler)
  }, [])

  const isWorldMetrologyDay = slides[currentIndex].id === 1;
  const isRTL = currentLang === 'AR'
  const textOrderClasses = isRTL ? 'order-2 lg:order-1' : 'order-1 lg:order-2'
  const imageOrderClasses = isRTL ? 'order-1 lg:order-2' : 'order-2 lg:order-1'
  const textAlignClass = isRTL ? 'text-right' : 'text-left'
  const buttonArrow = isRTL ? '←' : '→'

  const nextEvent = () => setCurrentEventIndex((prev) => (prev + 1) % events.length);
  const prevEvent = () => setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);

  const nextQms = () => setCurrentQmsIndex((prev) => (prev + 1) % qmsData.qmsList.length);
  const prevQms = () => setCurrentQmsIndex((prev) => (prev - 1 + qmsData.qmsList.length) % qmsData.qmsList.length);

  const nextIlc = () => setCurrentIlcIndex((prev) => (prev + 1) % ilcData.ilcList.length);
  const prevIlc = () => setCurrentIlcIndex((prev) => (prev - 1 + ilcData.ilcList.length) % ilcData.ilcList.length);

  return (
    <>
      {/* SECTION SLIDER HERO */}
      <section className="relative w-full max-w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <video src={bgHome} className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]">
            <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#ffffff" fillOpacity="0.25"></path>
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#ffffff"></path>
          </svg>
        </div>

        <div dir={isRTL ? 'rtl' : 'ltr'} className="relative z-20 w-full h-full flex flex-col md:flex-row font-sans">
          <div className="w-full md:w-[280px] lg:w-[320px] h-[120px] md:h-full bg-black/10 backdrop-blur-md flex md:flex-col items-center md:justify-center gap-3 z-20 px-4 py-4 overflow-x-auto md:overflow-y-auto shrink-0 border-l border-white/10">
            {slides.map((slide, index) => {
              const isActive = currentIndex === index;
              return (
                <div key={slide.id} onClick={() => setCurrentIndex(index)} className={`relative overflow-hidden cursor-pointer transition-all duration-300 rounded-lg flex items-center p-2 lg:p-3 gap-3 shrink-0 w-[200px] md:w-full ${isActive ? 'bg-white/20 shadow-lg md:scale-105' : 'bg-black/20 opacity-60 hover:opacity-100'}`}>
                  <img src={slide.image} alt="thumbnail" className="w-12 h-12 object-cover bg-white rounded-md shrink-0 border border-white/10" />
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm lg:text-base font-bold truncate text-white">{slide.title}</span>
                  </div>
                  {isActive && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="absolute bottom-0 right-0 h-1 bg-white" />}
                </div>
              );
            })}
          </div>

          <div className="relative flex-1 flex items-center justify-center h-[calc(100%-120px)] md:h-full overflow-hidden pb-[50px] md:pb-[80px]">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-8 w-full h-full max-w-6xl">
                <div className={`w-full flex flex-col justify-center ${textOrderClasses} z-10 ${textAlignClass} transition-all duration-500 ${isWorldMetrologyDay ? 'lg:w-1/2' : 'lg:w-full max-w-3xl mx-auto'}`}>
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 drop-shadow-md">
                    {slides[currentIndex].title}
                  </motion.h1>
                  <motion.div initial={{ width: 0 }} animate={{ width: "4rem" }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-white mb-5 rounded-full" />
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-base md:text-xl text-gray-200 mb-6 leading-relaxed drop-shadow">
                    {slides[currentIndex].subtitle}
                  </motion.p>
                  <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white hover:bg-gray-100 text-[#0F2982] text-base md:text-lg font-bold py-2.5 px-6 rounded-full shadow-lg w-fit transition-colors">
                    {slides[currentIndex].buttonText} {buttonArrow}
                  </motion.button>
                </div>
                {isWorldMetrologyDay && (
                  <div className={`w-full lg:w-1/2 flex justify-center items-center ${imageOrderClasses} h-full max-h-[300px] lg:max-h-[500px] py-4`}>
                    <motion.img initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: 0.2, duration: 0.5 }} src={slides[currentIndex].image} alt={slides[currentIndex].title} className="w-auto h-auto max-w-full max-h-full object-contain drop-shadow-2xl rounded-xl border border-white/10" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>  
      </section>

      {/* SECTION ÉVÉNEMENTS PROCHAINS */}
      <section className="w-full bg-slate-50 py-16 border-b border-gray-100">
        <div dir={isRTL ? 'rtl' : 'ltr'} className="container mx-auto px-6 max-w-5xl font-sans">
          <div className="flex flex-row justify-between items-end mb-10">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 block mb-1">ARAMET Agenda</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">{translations[currentLang].eventsTitle}</h2>
            </div>
            <div className="flex gap-2 invisible sm:flex">
              <button onClick={prevEvent} className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-[#0F2982] hover:text-white transition-all shadow-sm font-bold">{isRTL ? '→' : '←'}</button>
              <button onClick={nextEvent} className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-[#0F2982] hover:text-white transition-all shadow-sm font-bold">{isRTL ? '←' : '→'}</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[280px]">
            <div className="bg-[#0F2982] w-full md:w-[220px] shrink-0 flex flex-col justify-center items-center text-white py-6 px-6 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-white/5 rounded-full pointer-events-none" />
              <AnimatePresence mode="wait">
                <motion.div key={currentEventIndex} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }} className="text-center">
                  <span className="block text-6xl font-black mb-1">{events[currentEventIndex].day}</span>
                  <span className="block text-lg font-bold uppercase tracking-wide opacity-90">{events[currentEventIndex].month}</span>
                  <span className="block text-sm opacity-60 mt-1">{events[currentEventIndex].year}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-white">
              <AnimatePresence mode="wait">
                <motion.div key={currentEventIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className={`flex flex-col h-full justify-between ${textAlignClass}`}>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug mb-3">{events[currentEventIndex].title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed max-w-2xl">{events[currentEventIndex].description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <motion.button whileHover={{ x: isRTL ? -4 : 4 }} className="inline-flex items-center gap-2 font-bold text-[#0F2982] text-base group">
                      <span className="underline underline-offset-4 decoration-2">{events[currentEventIndex].btnText}</span>
                      <span>{buttonArrow}</span>
                    </motion.button>
                    <div className="flex gap-1">
                      {events.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentEventIndex(idx)} className={`h-1.5 transition-all duration-300 rounded-full ${currentEventIndex === idx ? 'w-6 bg-[#0F2982]' : 'w-1.5 bg-slate-200'}`} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* BANNIÈRE FOCUS JOURNÉE MONDIALE DE LA MÉTROLOGIE 2026 */}
      <section className="w-full bg-[#0b1d5c] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div dir={isRTL ? 'rtl' : 'ltr'} className="container mx-auto px-6 max-w-6xl font-sans relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`col-span-1 lg:col-span-5 flex justify-center ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative p-3 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm max-w-[360px] w-full"
              >
                <img 
                  src="https://aramet.org/wp-content/uploads/2025/09/WMD_ARAMET_2026_AR_A1-scaled.png" 
                  alt="World Metrology Day 2026" 
                  className="w-full h-auto object-contain rounded-xl shadow-inner"
                />
              </motion.div>
            </div>

            <div className={`col-span-1 lg:col-span-7 ${textAlignClass} ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full inline-block mb-4">
                Global Event 2026
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                {translations[currentLang].wmdTitle}
              </h2>
              
              <div className={`my-6 p-4 border-l-4 border-blue-500 bg-white/5 rounded-r-xl ${isRTL ? 'border-l-0 border-r-4 rounded-r-none rounded-l-xl text-right' : ''}`}>
                <p className="text-2xl md:text-3xl font-extrabold text-blue-300">
                  {translations[currentLang].wmdSlogan}
                </p>
              </div>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                {translations[currentLang].wmdDesc}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/30 text-base transition-colors"
              >
                {translations[currentLang].wmdBtn} {buttonArrow}
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION : LATEST NEWS */}
      <section className="w-full bg-white py-20">
        <div dir={isRTL ? 'rtl' : 'ltr'} className="container mx-auto px-6 max-w-6xl font-sans">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className={textAlignClass}>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 block mb-1">
                ARAMET Newsroom
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                {translations[currentLang].newsTitle}
              </h2>
              <p className="text-slate-500 text-base mt-2 max-w-xl">
                {translations[currentLang].newsSubTitle}
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-xl border-2 border-slate-200 hover:border-[#0F2982] text-[#0F2982] font-bold text-base transition-all whitespace-nowrap"
            >
              {translations[currentLang].newsBtn}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((newsItem) => (
              <motion.article 
                key={newsItem.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden flex flex-col justify-between h-full"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 group">
                  <img 
                    src={newsItem.image} 
                    alt={newsItem.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-[#0F2982] text-white text-xs font-bold py-1 px-3 rounded-full shadow-md`}>
                    {newsItem.tag}
                  </span>
                </div>

                <div className={`p-6 flex-1 flex flex-col justify-between ${textAlignClass}`}>
                  <div>
                    <span className="text-sm text-slate-400 font-medium block mb-2">
                      📅 {newsItem.date}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug mb-3 hover:text-[#0F2982] transition-colors line-clamp-2">
                      {newsItem.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-4">
                      {newsItem.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-50">
                    <button className="text-sm font-bold text-[#0F2982] hover:underline inline-flex items-center gap-1">
                      {currentLang === 'AR' ? 'اقرأ المزيد' : 'Read full story'} {buttonArrow}
                    </button>
                  </div>
                </div>

              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION : QUALITY MANAGEMENT SYSTEM SLIDER (أنظمة إدارة الجودة) */}
      <section className="w-full bg-[#f8fafc] py-20 border-t border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 z-0"></div>
        
        <div dir={isRTL ? 'rtl' : 'ltr'} className="container mx-auto px-6 max-w-5xl font-sans relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className={`w-full md:w-2/3 ${textAlignClass}`}>
              <h2 className="text-4xl font-black text-[#0F2982] mb-2">{qmsData.qmsSectionTitle}</h2>
              <p className="text-slate-600 font-medium text-base md:text-lg">{qmsData.qmsSectionSub}</p>
            </div>
            
            <div className="flex gap-3">
              <button onClick={prevQms} className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#0F2982] hover:text-white transition-all shadow-md font-bold text-lg">
                {isRTL ? '→' : '←'}
              </button>
              <button onClick={nextQms} className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#0F2982] hover:text-white transition-all shadow-md font-bold text-lg">
                {isRTL ? '←' : '→'}
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentQmsIndex} 
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: isRTL ? 30 : -30 }} 
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#0F2982]/5 border border-white flex flex-col md:flex-row items-center gap-8"
              >
                
                {/* Icône / Drapeau */}
                <div className={`flex flex-col items-center justify-center w-full md:w-1/3 ${isRTL ? 'md:border-l' : 'md:border-r'} border-slate-200 pb-6 md:pb-0 md:px-6`}>
                  <div className="w-24 h-auto mb-4 overflow-hidden rounded-md shadow-md border border-slate-100">
                    <img 
                      src={`https://flagcdn.com/w160/${qmsData.qmsList[currentQmsIndex].countryCode}.png`}
                      alt={`Flag of ${qmsData.qmsList[currentQmsIndex].country}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 text-center">
                    {qmsData.qmsList[currentQmsIndex].country}
                  </h3>
                  <span className="text-base font-bold text-slate-400 mt-2 bg-slate-100 px-3 py-1 rounded-full">
                    {qmsData.qmsList[currentQmsIndex].code}
                  </span>
                </div>

                {/* Détails QMS */}
                <div className={`w-full md:w-2/3 ${textAlignClass}`}>
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-widest text-[#0F2982] font-bold block mb-1">
                      {currentLang === 'AR' ? 'المعهد الوطني للقياس' : 'National Metrology Institute'}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                      {qmsData.qmsList[currentQmsIndex].institute}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <span className="block text-sm text-slate-500 font-medium mb-1">
                        {currentLang === 'AR' ? 'المواصفة المطبقة' : 'Applied Standard'}
                      </span>
                      <span className="block text-xl font-bold text-green-600">
                        {qmsData.qmsList[currentQmsIndex].standard}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <span className="block text-sm text-slate-500 font-medium mb-1">
                        {currentLang === 'AR' ? 'حالة النظام' : 'System Status'}
                      </span>
                      <span className="block text-xl font-bold text-blue-600">
                        {qmsData.qmsList[currentQmsIndex].status}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
            
            {/* Indicateurs (Dots) */}
            <div className="flex justify-center gap-2 mt-8">
              {qmsData.qmsList.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentQmsIndex(idx)} 
                  className={`h-2 transition-all duration-300 rounded-full ${currentQmsIndex === idx ? 'w-8 bg-[#0F2982]' : 'w-2 bg-slate-300'}`} 
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION : INTERLABORATORY COMPARISONS SLIDER (المقارنات البينية) */}
      <section className="w-full bg-white py-24 border-t border-slate-100 overflow-hidden relative">
        <div dir={isRTL ? 'rtl' : 'ltr'} className="container mx-auto px-6 max-w-5xl font-sans relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className={`w-full md:w-2/3 ${textAlignClass}`}>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982] block mb-2">
                ARAMET ILC Programs
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{ilcData.ilcSectionTitle}</h2>
              <p className="text-slate-500 text-base md:text-lg max-w-2xl">{ilcData.ilcSectionSub}</p>
            </div>
            
            <div className="flex gap-3">
              <button onClick={prevIlc} className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#0F2982] hover:text-white hover:border-[#0F2982] transition-all shadow-sm font-bold text-lg">
                {isRTL ? '→' : '←'}
              </button>
              <button onClick={nextIlc} className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#0F2982] hover:text-white hover:border-[#0F2982] transition-all shadow-sm font-bold text-lg">
                {isRTL ? '←' : '→'}
              </button>
            </div>
          </div>

          <div className="relative h-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIlcIndex} 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }} 
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl shadow-slate-200/50 border border-slate-100"
              >
                {/* Header of ILC Card */}
                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-slate-100 ${textAlignClass}`}>
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#0F2982] text-white shadow-lg flex items-center justify-center shrink-0">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ilcData.ilcList[currentIlcIndex].icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight font-mono">
                        {ilcData.ilcList[currentIlcIndex].code}
                      </h3>
                      <span className="text-base font-bold text-slate-400">
                        {ilcData.ilcList[currentIlcIndex].area}
                      </span>
                    </div>
                  </div>
                  
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-base font-bold shadow-sm border border-white/20 ${ilcData.ilcList[currentIlcIndex].statusColor}`}>
                    <span className="w-2.5 h-2.5 rounded-full bg-current mr-2 rtl:ml-2 rtl:mr-0 animate-pulse"></span>
                    {ilcData.ilcList[currentIlcIndex].status}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                  
                  {/* Info Points */}
                  <div className={`flex flex-col gap-5 ${textAlignClass}`}>
                    <div>
                      <span className="block text-sm font-bold text-slate-400 uppercase mb-1">
                        {ilcData.ilcLabels.type}
                      </span>
                      <span className="text-lg font-bold text-slate-800">
                        {ilcData.ilcList[currentIlcIndex].type}
                      </span>
                    </div>
                    
                    <div>
                      <span className="block text-sm font-bold text-slate-400 uppercase mb-1">
                        {ilcData.ilcLabels.stage}
                      </span>
                      <span className="text-lg font-bold text-slate-800">
                        {ilcData.ilcList[currentIlcIndex].stage}
                      </span>
                    </div>

                    <div>
                      <span className="block text-sm font-bold text-slate-400 uppercase mb-1">
                        {ilcData.ilcLabels.pilot}
                      </span>
                      <span className="inline-block bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-base font-bold text-slate-700">
                        {ilcData.ilcList[currentIlcIndex].pilot}
                      </span>
                    </div>
                  </div>

                  {/* Sub Fields */}
                  <div className={`flex flex-col ${textAlignClass}`}>
                    <span className="block text-sm font-bold text-slate-400 uppercase mb-2">
                      {ilcData.ilcLabels.subFields}
                    </span>
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 h-full">
                      <p className="text-base font-medium text-slate-600 leading-relaxed break-words">
                        {ilcData.ilcList[currentIlcIndex].subFields}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Card Action */}
                <div className={`mt-8 pt-6 border-t border-slate-100 flex ${isRTL ? 'justify-end' : 'justify-end'}`}>
                  <button className="text-base font-bold text-[#0F2982] hover:text-blue-600 transition-colors flex items-center gap-2 group">
                    <span className="underline underline-offset-4 decoration-2">{ilcData.ilcLabels.details}</span>
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">{buttonArrow}</span>
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {ilcData.ilcList.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIlcIndex(idx)} 
                  className={`h-2 transition-all duration-300 rounded-full ${currentIlcIndex === idx ? 'w-8 bg-[#0F2982]' : 'w-2 bg-slate-200 hover:bg-slate-300'}`} 
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION : PARTNERS (المنظمات الشريكة بألوانها الأصلية وخلفية بيضاء - حلقة متصلة) */}
      <section className="w-full bg-white py-16 border-t border-slate-200 overflow-hidden">
        <div dir={isRTL ? 'rtl' : 'ltr'} className="container mx-auto px-6 max-w-6xl font-sans mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F2982] mb-3">{translations[currentLang].partnersTitle}</h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">{translations[currentLang].partnersSub}</p>
        </div>
        
        {/* شريط الصور المتحرك لا نهائياً (Marquee) - بإعدادات مسافات دقيقة للحصول على Perfect Loop */}
        <div className="relative w-full flex overflow-hidden group marquee">
          {/* تأثير التدرج (Fade) على جانبي الشريط (متوافق مع الخلفية البيضاء) */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* لتكوين حلقة مثالية (Perfect Loop):
            1. استخدمنا 14 عنصر (7 مكررة مرتين).
            2. استخدمنا gap-16 (أو مسافة محددة).
            3. أضفنا Padding في النهاية يماثل تماماً حجم الـ gap (pr-16 أو pl-16).
            4. قمنا بتحريك الـ x بنسبة 50% (أي إزاحة المجموعة الأولى بالكامل).
          */}
          <div
            className={`marquee__inner flex items-center gap-16 md:gap-24 w-max py-4 ${isRTL ? 'pl-16 md:pl-24' : 'pr-16 md:pr-24'}`}
            aria-hidden="true"
            style={{ animationDuration: '30s' }}
          >
            {/* تكرار المصفوفة مرتين يعطي 14 عنصراً. 
              نحتاج للتأكد من إضافة نفس الـ gap في العنصر الأخير قبل التكرار التالي 
              في CSS Grid/Flex الـ gap يُطبق بين العناصر فقط، لذا نضيف margin-right/left وهمي للعنصر الأخير أو نعتمد على حركة الـ 50% الدقيقة.
            */}
            {marqueePartners.map((partner, index) => (
              <div 
                key={index} 
                className="w-32 md:w-44 h-24 shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer marquee-item"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full h-full object-contain" 
                  onError={(e) => {
                    // Fallback في حال حدوث أي خطأ في جلب الروابط الأصلية للموقع
                    e.target.src = `https://via.placeholder.com/200x80/ffffff/0F2982?text=${partner.name}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}