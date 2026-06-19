import React, { useState, useEffect } from 'react';
import ArametFooterLogo from '../assets/Aramet-footer-logo.png';
import SecondLogo from '../assets/logo-aidsmo white.svg'; 

function Footer({ currentLang: propLang, toggleLanguage }) {
    const [currentLang, setCurrentLang] = useState(() => {
        try { return propLang || localStorage.getItem('aramet_lang') || 'AR' } catch (e) { return propLang || 'AR' }
    })

    useEffect(() => {
        const handler = (e) => {
            const next = e?.detail || localStorage.getItem('aramet_lang') || 'AR'
            setCurrentLang(next)
        }
        window.addEventListener('aramet:lang', handler)
        return () => window.removeEventListener('aramet:lang', handler)
    }, [])

    const translations = {
        AR: {
            addressLabel: 'عنوان المنظمة',
            addressText: 'شارع فرنسا ,الرباط - اكدال, المملكة المغربية',
            contactLabel: 'راسلنا هنا',
            email: 'info@aramet.org',
            phoneLabel: 'رقم الهاتف',
            linksTitle: 'روابط مفيدة',
            links: ['عن التجمع','التأسيس','الأهداف','المهام','الجمعية العمومية','اللجان','قاعدة الخبراء','الأدلة والمنشورات','نقل المعرفة وبناء القدرات','الأنشطة والفعاليات','اتصال'],
            phoneNumber: '(+212)53-7274500',
            copyrightLine1: 'المنظمة العربية للتنمية الصناعية والتقييس والتعدين',
            copyrightLine2: 'جميع الحقوق محفوظة © 2026 - ARAMET.',
            toggleLabel: (lang) => (lang === 'AR' ? 'EN' : 'AR'),
            arrow: '←'
        },
        EN: {
            addressLabel: 'Address',
            addressText: 'France Street, Rabat - Agdal, Kingdom of Morocco',
            contactLabel: 'Contact us',
            email: 'info@aramet.org',
            phoneLabel: 'Phone',
            linksTitle: 'Useful links',
            links: ['About','Foundation','Goals','Tasks','General Assembly','Committees','Experts Database','Guides & Publications','Knowledge Transfer','Activities & Events','Contact'],
            phoneNumber: '(+212)53-7274500',
            copyrightLine1: 'Arab Organization for Industrial Development, Standardization and Mining',
            copyrightLine2: 'All rights reserved © 2026 - ARAMET.',
            toggleLabel: (lang) => (lang === 'AR' ? 'EN' : 'AR'),
            arrow: '→'
        }
    }

    const t = translations[currentLang] || translations.AR

    const handleToggle = () => {
        const next = currentLang === 'AR' ? 'EN' : 'AR'
        try { localStorage.setItem('aramet_lang', next) } catch (e) {}
        window.dispatchEvent(new CustomEvent('aramet:lang', { detail: next }))
        if (typeof toggleLanguage === 'function') toggleLanguage(next)
    }

    const arrow = t.arrow

    return (
        <footer className="relative w-full bg-[#0b1d5c] text-slate-300 font-['Cairo',_sans-serif] pt-[50px] md:pt-[80px]" dir={currentLang === 'AR' ? 'rtl' : 'ltr'}>
            
            {/* الأمواج العلوية */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none rotate-180">
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

            {/* شريط معلومات الاتصال */}
            <div className="border-b border-slate-700/50 bg-[#0b1d5c]/80 text-xs text-slate-400 py-4 z-20 relative">
                <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">{t.addressLabel}</p>
                            <p className="text-sm font-medium text-white">{t.addressText}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">{t.contactLabel}</p>
                            <a href={`mailto:${t.email}`} className="text-sm font-medium text-white hover:text-white transition-colors">{t.email}</a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">{t.phoneLabel}</p>
                            <p className="text-sm font-medium text-white select-all" dir="ltr">{t.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* المحتوى الرئيسي للفوتر */}
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* العمود الأول: الشعار الأول والنص (اليمين) */}
                <div className="space-y-4 lg:col-span-1">
                    <div className="mb-2">
                        <img src={ArametFooterLogo} alt="Logo ARAMET" className="h-20 w-auto object-contain"/>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400 text-justify">
                        {currentLang === 'AR' ? 'التجمع العربي للمترولوجيا هو نظام إقليمي متخصص للجهات الرسمية في الدول العربية العاملة في مجال المترولوجيا القانونية والعلمية والصناعية.' : 'The Arab Association for Metrology is a regional body for official metrology authorities in Arab countries focusing on legal, scientific and industrial metrology.'}
                    </p>
                </div>

                {/* العمود الثاني والثالث: الروابط (الوسط) */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-lg font-bold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-0.5 after:bg-white">
                        {t.linksTitle}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 pt-2">
                        {t.links.map((lnk, i) => (
                            <a key={i} href="#" className="text-sm text-slate-400 hover:text-white hover:translate-x-[-4px] transition-all duration-200 flex items-center gap-2">
                                <span className="text-white text-xs">{arrow}</span> {lnk}
                            </a>
                        ))}
                    </div>
                </div>

                {/* العمود الرابع: الشعار الثاني (اليسار) */}
                <div className="lg:col-span-1 flex items-center justify-start lg:justify-center pt-8 lg:pt-0">
                    <img 
                        src={SecondLogo} 
                        alt="Logo" 
                        className="h-50 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>

            </div>

            {/* الشريط السفلي - مقسم إلى 3 أعمدة للتوسيط الدقيق */}
            <div className="border-t border-slate-800 bg-[#0b1325]/60 text-xs text-slate-500 py-6">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
                    
                    {/* حقوق النشر (اليمين) */}
                    <div className="space-y-1 md:text-right">
                        <p className="text-slate-400 font-medium">المنظمة العربية للتنمية الصناعية والتقييس والتعدين</p>
                        <p>جميع الحقوق محفوظة © 2026 - ARAMET.</p>
                    </div>
                    
                    {/* زر تغيير اللغة (موسط تماماً) */}
                    <div className="flex justify-center">
                        <button 
                            onClick={handleToggle}
                            className="cursor-pointer text-slate-300 font-bold px-3 py-1.5 rounded-lg text-sm transition-all flex items-center gap-1.5 border border-slate-700/50 hover:border-slate-600 hover:text-white hover:bg-slate-800/50 active:scale-95"
                            dir="ltr"
                        >
                            <i className="pi pi-globe text-xs"></i>
                            <span>{t.toggleLabel(currentLang)}</span>
                        </button>
                    </div>
                    
                    {/* الروابط (اليسار) */}
                    <div className="flex gap-4 justify-center md:justify-end">
                        <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
                        <span className="text-slate-700">|</span>
                        <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;