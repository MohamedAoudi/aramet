import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgHome from '../assets/bg home.mp4';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
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
      ]
    }
  }

  const slides = translations[currentLang].slides;
  const events = translations[currentLang].events;

  // Timer Slider Principal
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Timer Slider Événements
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [events.length]);

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

  // Fonctions de navigation pour les événements
  const nextEvent = () => setCurrentEventIndex((prev) => (prev + 1) % events.length);
  const prevEvent = () => setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);

  return (
    <>
      {/* SECTION SLIDER HERO */}
      <section className="relative w-full max-w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src={bgHome}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]"
          >
            <path 
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" 
              fill="#ffffff" 
              fillOpacity="0.25"
            ></path>
            <path 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        <div dir={isRTL ? 'rtl' : 'ltr'} className="relative z-20 w-full h-full flex flex-col md:flex-row font-sans">
          <div className="w-full md:w-[280px] lg:w-[320px] h-[120px] md:h-full bg-black/10 backdrop-blur-md flex md:flex-col items-center md:justify-center gap-3 z-20 px-4 py-4 overflow-x-auto md:overflow-y-auto shrink-0 border-l border-white/10">
            {slides.map((slide, index) => {
              const isActive = currentIndex === index;
              return (
                <div 
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-300 rounded-lg flex items-center p-2 lg:p-3 gap-3 shrink-0 w-[200px] md:w-full
                    ${isActive ? 'bg-white/20 shadow-lg md:scale-105' : 'bg-black/20 opacity-60 hover:opacity-100'}
                  `}
                >
                  <img src={slide.image} alt="thumbnail" className="w-12 h-12 object-cover bg-white rounded-md shrink-0 border border-white/10" />
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs lg:text-sm font-bold truncate text-white">{slide.title}</span>
                  </div>
                  {isActive && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute bottom-0 right-0 h-1 bg-white"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative flex-1 flex items-center justify-center h-[calc(100%-120px)] md:h-full overflow-hidden pb-[50px] md:pb-[80px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-8 w-full h-full max-w-6xl"
              >
                <div className={`w-full flex flex-col justify-center ${textOrderClasses} z-10 ${textAlignClass} transition-all duration-500
                  ${isWorldMetrologyDay ? 'lg:w-1/2' : 'lg:w-full max-w-3xl mx-auto'}`}
                >
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 drop-shadow-md">
                    {slides[currentIndex].title}
                  </motion.h1>
                  <motion.div initial={{ width: 0 }} animate={{ width: "4rem" }} transition={{ delay: 0.3, duration: 0.5 }} className="h-1 bg-white mb-5 rounded-full" />
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed drop-shadow">
                    {slides[currentIndex].subtitle}
                  </motion.p>
                  <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white hover:bg-gray-100 text-[#0F2982] text-sm md:text-base font-bold py-2.5 px-6 rounded-full shadow-lg w-fit transition-colors">
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

      {/* DESIGN 2 : SECTION ÉVÉNEMENTS PROCHAINS (Split-Layout Moderne) */}
      <section className="w-full bg-slate-50 py-20 border-b border-gray-100">
        <div dir={isRTL ? 'rtl' : 'ltr'} className="container mx-auto px-6 max-w-5xl font-sans">
          
          {/* En-tête avec navigation intégrée */}
          <div className="flex flex-row justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                ARAMET Agenda
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900">
                {translations[currentLang].eventsTitle}
              </h2>
            </div>
            
            {/* Flèches de navigation manuelles */}
            <div className="flex gap-2 invisible sm:visible">
              <button onClick={prevEvent} className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-[#0F2982] hover:text-white transition-all shadow-sm font-bold">
                {isRTL ? '→' : '←'}
              </button>
              <button onClick={nextEvent} className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-[#0F2982] hover:text-white transition-all shadow-sm font-bold">
                {isRTL ? '←' : '→'}
              </button>
            </div>
          </div>

          {/* Card Asymétrique */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[320px]">
            
            {/* Colonne Date (Bloc de couleur fixe) */}
            <div className="bg-[#0F2982] w-full md:w-[240px] shrink-0 flex flex-col justify-center items-center text-white py-8 px-6 relative overflow-hidden">
              {/* Effet décoratif de fond */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEventIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <span className="block text-6xl font-black tracking-tight mb-1">
                    {events[currentEventIndex].day}
                  </span>
                  <span className="block text-lg font-bold tracking-wide uppercase opacity-90">
                    {events[currentEventIndex].month}
                  </span>
                  <span className="block text-sm opacity-60 mt-1">
                    {events[currentEventIndex].year}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Colonne Contenu */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between bg-white relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEventIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col h-full justify-between ${textAlignClass}`}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug mb-4 hover:text-[#0F2982] transition-colors">
                      {events[currentEventIndex].title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
                      {events[currentEventIndex].description}
                    </p>
                  </div>

                  {/* Bouton style épuré */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <motion.button
                      whileHover={{ x: isRTL ? -4 : 4 }}
                      className="inline-flex items-center gap-2 font-bold text-[#0F2982] text-sm group"
                    >
                      <span className="underline underline-offset-4 decoration-2 group-hover:text-blue-700">
                        {events[currentEventIndex].btnText}
                      </span>
                      <span className="text-base">{buttonArrow}</span>
                    </motion.button>

                    {/* Indicateurs de progression discrets */}
                    <div className="flex gap-1.5 self-center sm:self-auto">
                      {events.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentEventIndex(idx)}
                          className={`h-1.5 transition-all duration-300 rounded-full ${
                            currentEventIndex === idx ? 'w-8 bg-[#0F2982]' : 'w-2 bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}