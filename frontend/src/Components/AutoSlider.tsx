'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "من نحن",
    subtitle: "التجمع العربي للمترولوجيا (ARAMET) يهدف إلى تعزيز التعاون وتطوير البنية التحتية للقياس في الدول العربية.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    buttonText: "تعرف علينا"
  },
  {
    id: 2,
    title: "اليوم العالمي للمترولوجيا 2026",
    subtitle: "تحت شعار “المترولوجيا: بناء الثقة في صنع السياسات”",
    image: "https://aramet.org/wp-content/uploads/2025/09/WMD_ARAMET_2026_AR_A1-scaled.png",
    buttonText: "اقرأ المزيد"
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
];

export default function AutoTitleThumbnailsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-screen h-[700px] overflow-hidden bg-[#FAFAFA] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col font-sans border-b border-gray-200">
      
      {/* PARTIE HAUTE */}
      <div className="relative flex-grow flex items-center justify-center h-[calc(100%-100px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-8 w-full h-full"
          >
            <div dir="rtl" className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0F2982] mb-4"
              >
                {slides[currentIndex].title}
              </motion.h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-[#0F2982] mb-6 rounded-full" 
              />
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
              >
                {slides[currentIndex].subtitle}
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0F2982] hover:bg-[#0a1b56] text-white text-lg font-bold py-3 px-8 rounded-full shadow-md w-fit"
              >
                {slides[currentIndex].buttonText} ←
              </motion.button>
            </div>

            {/* الصورة الكبيرة مع rounded-lg */}
            <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 h-full py-8">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-auto max-h-[450px] object-contain drop-shadow-xl rounded-lg" 
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* PARTIE SUD (BAS) */}
      <div dir="rtl" className="absolute bottom-0 w-full h-[100px] bg-white border-t border-gray-200 flex items-center justify-center gap-2 md:gap-4 z-20 px-4 overflow-x-auto">
        {slides.map((slide, index) => {
          const isActive = currentIndex === index;
          return (
            <div 
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-300 rounded-md border-2 bg-gray-50 flex items-center p-2 gap-3 shrink-0
                ${isActive ? 'border-[#0F2982] w-[240px] h-[75px] shadow-md' : 'border-transparent w-[180px] h-[65px] opacity-60 hover:opacity-100'}
              `}
            >
              {/* الصورة المصغرة مع rounded-lg */}
              <img 
                src={slide.image} 
                alt="thumbnail" 
                className="w-10 h-10 object-contain bg-white rounded-lg border border-gray-100 shrink-0" 
              />
              <div className="flex-1 min-w-0">
                <span className={`block text-xs md:text-sm font-bold truncate ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                  {slide.title}
                </span>
              </div>
              {isActive && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute bottom-0 right-0 h-1 bg-[#0F2982]"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}