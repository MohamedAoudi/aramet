import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const programs = [
  {
    id: 1,
    categoryAr: 'المعايرة',
    categoryEn: 'Calibration',
    titleAr: 'برنامج تدريبي في معايرة أجهزة القياس الصناعية',
    titleEn: 'Training program in industrial measuring instrument calibration',
    descAr:
      'تكوين تطبيقي للمهندسين والفنيين حول إجراءات المعايرة، حساب الارتياب، وتوثيق النتائج وفق الممارسات الدولية.',
    descEn:
      'Applied training for engineers and technicians on calibration procedures, uncertainty calculation, and result documentation.',
    durationAr: '5 أيام',
    durationEn: '5 days',
    levelAr: 'متوسط',
    levelEn: 'Intermediate',
    modeAr: 'حضوري',
    modeEn: 'In-person',
    dateAr: 'يونيو 2026',
    dateEn: 'June 2026',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1400&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    categoryAr: 'الجودة',
    categoryEn: 'Quality',
    titleAr: 'أنظمة إدارة الجودة في مختبرات المعايرة ISO/IEC 17025',
    titleEn: 'Quality management systems in calibration laboratories ISO/IEC 17025',
    descAr:
      'برنامج يركز على متطلبات النظام، إدارة الوثائق، التدقيق الداخلي، وتحسين جاهزية المختبرات للاعتراف الفني.',
    descEn:
      'A program focused on system requirements, document control, internal audit, and laboratory readiness for technical recognition.',
    durationAr: '4 أيام',
    durationEn: '4 days',
    levelAr: 'متقدم',
    levelEn: 'Advanced',
    modeAr: 'عن بعد',
    modeEn: 'Online',
    dateAr: 'يوليو 2026',
    dateEn: 'July 2026',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    categoryAr: 'اختبارات الكفاءة',
    categoryEn: 'Proficiency Testing',
    titleAr: 'تصميم وتنفيذ برامج اختبارات الكفاءة والمقارنات البينية',
    titleEn: 'Design and implementation of proficiency testing and comparison programs',
    descAr:
      'تدريب متخصص حول تخطيط برامج المقارنة، تحليل النتائج، وتقييم أداء المختبرات المشاركة.',
    descEn:
      'Specialized training on comparison program planning, result analysis, and evaluation of participating laboratory performance.',
    durationAr: '3 أيام',
    durationEn: '3 days',
    levelAr: 'متقدم',
    levelEn: 'Advanced',
    modeAr: 'حضوري',
    modeEn: 'In-person',
    dateAr: 'سبتمبر 2026',
    dateEn: 'September 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    categoryAr: 'المترولوجيا القانونية',
    categoryEn: 'Legal Metrology',
    titleAr: 'أساسيات المترولوجيا القانونية والرقابة على أدوات القياس',
    titleEn: 'Fundamentals of legal metrology and measuring instrument control',
    descAr:
      'مدخل عملي إلى أنظمة الرقابة القانونية، التحقق الدوري، وحماية المستهلك من خلال موثوقية القياس.',
    descEn:
      'A practical introduction to legal control systems, periodic verification, and consumer protection through reliable measurements.',
    durationAr: '4 أيام',
    durationEn: '4 days',
    levelAr: 'أساسي',
    levelEn: 'Foundation',
    modeAr: 'هجين',
    modeEn: 'Hybrid',
    dateAr: 'أكتوبر 2026',
    dateEn: 'October 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    categoryAr: 'القياسات الحرارية',
    categoryEn: 'Thermal Metrology',
    titleAr: 'معايرة مجسات الحرارة وأنظمة القياس الحراري',
    titleEn: 'Calibration of temperature sensors and thermal measurement systems',
    descAr:
      'تكوين فني في القياسات الحرارية، تتبع السلاسل المرجعية، وتطبيق إجراءات المعايرة في المختبرات.',
    descEn:
      'Technical training in thermal measurements, reference traceability, and calibration procedure application in laboratories.',
    durationAr: '5 أيام',
    durationEn: '5 days',
    levelAr: 'متوسط',
    levelEn: 'Intermediate',
    modeAr: 'حضوري',
    modeEn: 'In-person',
    dateAr: 'نوفمبر 2026',
    dateEn: 'November 2026',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop',
  },
]

const copy = {
  AR: {
    eyebrow: 'البرامج التدريبية',
    title: 'برامج بناء القدرات والتكوين',
    subtitle:
      'مسارات تدريبية عملية لفائدة المعاهد والمختبرات والهيئات العربية العاملة في مجالات المترولوجيا والجودة والمعايرة.',
    featured: 'برنامج مميز',
    catalog: 'دليل البرامج التدريبية',
    upcoming: 'الدورات القادمة',
    register: 'التفاصيل والتسجيل',
    duration: 'المدة',
    level: 'المستوى',
    mode: 'النمط',
    date: 'الموعد',
    search: 'بحث في البرامج',
    filters: ['الكل', 'المعايرة', 'الجودة', 'اختبارات الكفاءة', 'المترولوجيا القانونية'],
    stats: [
      { value: '05', label: 'برامج تدريبية' },
      { value: '04', label: 'مجالات تخصص' },
      { value: '2026', label: 'موسم التكوين' },
    ],
  },
  EN: {
    eyebrow: 'Training Programs',
    title: 'Capacity Building and Training Programs',
    subtitle:
      'Practical training tracks for Arab institutes, laboratories, and authorities working in metrology, quality, and calibration.',
    featured: 'Featured Program',
    catalog: 'Training Program Catalog',
    upcoming: 'Upcoming Courses',
    register: 'Details & registration',
    duration: 'Duration',
    level: 'Level',
    mode: 'Mode',
    date: 'Date',
    search: 'Search programs',
    filters: ['All', 'Calibration', 'Quality', 'Proficiency tests', 'Legal metrology'],
    stats: [
      { value: '05', label: 'Training programs' },
      { value: '04', label: 'Specialty areas' },
      { value: '2026', label: 'Training season' },
    ],
  },
}

export default function Programs() {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      return localStorage.getItem('aramet_lang') || 'AR'
    } catch (e) {
      return 'AR'
    }
  })

  useEffect(() => {
    const handler = (event) => {
      setCurrentLang(event?.detail || localStorage.getItem('aramet_lang') || 'AR')
    }

    window.addEventListener('aramet:lang', handler)
    return () => window.removeEventListener('aramet:lang', handler)
  }, [])

  const isRTL = currentLang === 'AR'
  const t = copy[currentLang] || copy.AR

  const localizedPrograms = useMemo(
    () =>
      programs.map((program) => ({
        ...program,
        category: isRTL ? program.categoryAr : program.categoryEn,
        title: isRTL ? program.titleAr : program.titleEn,
        desc: isRTL ? program.descAr : program.descEn,
        duration: isRTL ? program.durationAr : program.durationEn,
        level: isRTL ? program.levelAr : program.levelEn,
        mode: isRTL ? program.modeAr : program.modeEn,
        date: isRTL ? program.dateAr : program.dateEn,
      })),
    [isRTL],
  )

  const featuredProgram = localizedPrograms.find((program) => program.featured)
  const regularPrograms = localizedPrograms.filter((program) => !program.featured)

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full bg-white font-sans text-slate-900">
      <section className="relative min-h-[540px] overflow-hidden bg-[#081a55]">
        <img
          src={featuredProgram.image}
          alt={featuredProgram.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081a55]/90 via-[#0F2982]/72 to-[#081a55]" />

        <div className="relative z-10 mx-auto grid min-h-[540px] max-w-7xl items-end gap-10 px-6 pb-16 pt-24 lg:grid-cols-[1fr_420px]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              <i className="pi pi-book text-xs" />
              {t.eyebrow}
            </span>
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">{t.title}</h1>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-blue-50 md:text-xl">{t.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-md"
          >
            <span className="text-sm font-bold text-blue-100">{t.featured}</span>
            <h2 className="mt-4 text-2xl font-black leading-snug">{featuredProgram.title}</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                [t.duration, featuredProgram.duration],
                [t.level, featuredProgram.level],
                [t.mode, featuredProgram.mode],
                [t.date, featuredProgram.date],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4">
                  <span className="block text-xs font-bold text-blue-100">{label}</span>
                  <span className="mt-1 block text-base font-black text-white">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {t.filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                  index === 0
                    ? 'bg-[#0F2982] text-white shadow-lg shadow-[#0F2982]/20'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-[#0F2982] hover:text-[#0F2982]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <label className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm lg:max-w-sm">
            <i className="pi pi-search text-slate-400" />
            <input
              type="search"
              placeholder={t.search}
              className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">ARAMET TRAINING</span>
              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{t.catalog}</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {t.stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-[#0F2982] pt-3">
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-xs font-bold text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/60 lg:grid-cols-2"
          >
            <div className="relative min-h-[360px] overflow-hidden bg-slate-100">
              <img
                src={featuredProgram.image}
                alt={featuredProgram.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-5 rounded-full bg-[#0F2982] px-4 py-2 text-xs font-bold text-white ltr:left-5 rtl:right-5">
                {featuredProgram.category}
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="mb-4 inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-[#0F2982]">
                {featuredProgram.date}
              </span>
              <h3 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                {featuredProgram.title}
              </h3>
              <p className="mt-5 text-base font-medium leading-8 text-slate-500 md:text-lg">{featuredProgram.desc}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <span className="block text-xs font-bold text-slate-400">{t.duration}</span>
                  <span className="mt-1 block text-base font-black text-slate-800">{featuredProgram.duration}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <span className="block text-xs font-bold text-slate-400">{t.level}</span>
                  <span className="mt-1 block text-base font-black text-slate-800">{featuredProgram.level}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <span className="block text-xs font-bold text-slate-400">{t.mode}</span>
                  <span className="mt-1 block text-base font-black text-slate-800">{featuredProgram.mode}</span>
                </div>
              </div>

              <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0F2982] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0F2982]/20 transition-all hover:bg-[#0a2268]">
                {t.register}
                <i className={`pi ${isRTL ? 'pi-arrow-left' : 'pi-arrow-right'} text-xs`} />
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">PROGRAMS</span>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{t.upcoming}</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {regularPrograms.map((program, index) => (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 sm:grid-cols-[190px_1fr]"
              >
                <div className="relative min-h-52 overflow-hidden bg-slate-100">
                  <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
                  <span className="absolute top-4 rounded-full bg-[#0F2982] px-3 py-1 text-xs font-bold text-white ltr:left-4 rtl:right-4">
                    {program.category}
                  </span>
                </div>

                <div className="flex flex-col p-6">
                  <span className="mb-3 text-sm font-black text-[#0F2982]">{program.date}</span>
                  <h3 className="text-xl font-black leading-snug text-slate-900">{program.title}</h3>
                  <p className="mt-3 flex-1 text-sm font-medium leading-7 text-slate-500">{program.desc}</p>

                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <span className="block text-[11px] font-bold text-slate-400">{t.duration}</span>
                      <span className="mt-1 block text-xs font-black text-slate-800">{program.duration}</span>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3">
                      <span className="block text-[11px] font-bold text-slate-400">{t.level}</span>
                      <span className="mt-1 block text-xs font-black text-slate-800">{program.level}</span>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3">
                      <span className="block text-[11px] font-bold text-slate-400">{t.mode}</span>
                      <span className="mt-1 block text-xs font-black text-slate-800">{program.mode}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
