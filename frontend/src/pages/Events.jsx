import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const events = [
  {
    id: 1,
    day: '20',
    monthAr: 'مايو',
    monthEn: 'May',
    year: '2026',
    categoryAr: 'ندوة علمية',
    categoryEn: 'Scientific Seminar',
    titleAr: 'ندوة علمية بمناسبة اليوم العالمي للمترولوجيا',
    titleEn: 'Scientific seminar for World Metrology Day',
    descAr:
      'لقاء علمي لمناقشة دور القياسات الدقيقة في بناء الثقة في السياسات العامة ودعم التنمية الصناعية المستدامة.',
    descEn:
      'A scientific session on the role of accurate measurements in building confidence in public policy and supporting sustainable industrial development.',
    locationAr: 'الرباط، المملكة المغربية',
    locationEn: 'Rabat, Kingdom of Morocco',
    timeAr: '10:00 صباحا',
    timeEn: '10:00 AM',
    statusAr: 'التسجيل مفتوح',
    statusEn: 'Registration open',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    day: '14',
    monthAr: 'يونيو',
    monthEn: 'Jun',
    year: '2026',
    categoryAr: 'ورشة عمل',
    categoryEn: 'Workshop',
    titleAr: 'ورشة عمل حول معايرة أجهزة القياس الطبي',
    titleEn: 'Workshop on medical measurement device calibration',
    descAr:
      'برنامج تدريبي متقدم للمهندسين والفنيين لضمان دقة أجهزة التشخيص والمراقبة الصحية.',
    descEn:
      'An advanced training program for engineers and technicians to ensure diagnostic and monitoring device accuracy.',
    locationAr: 'تونس',
    locationEn: 'Tunisia',
    timeAr: '09:30 صباحا',
    timeEn: '09:30 AM',
    statusAr: 'قريبا',
    statusEn: 'Coming soon',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    day: '08',
    monthAr: 'يوليو',
    monthEn: 'Jul',
    year: '2026',
    categoryAr: 'اجتماع لجنة',
    categoryEn: 'Committee Meeting',
    titleAr: 'اجتماع اللجنة الفنية للكميات الكهربائية والمغناطيسية',
    titleEn: 'Technical committee meeting for electrical and magnetic quantities',
    descAr:
      'اجتماع دوري لتنسيق برامج المقارنات البينية ومتابعة خطط تطوير القدرات الفنية في المجال الكهربائي.',
    descEn:
      'A periodic meeting to coordinate comparison programs and follow technical capacity plans in electrical metrology.',
    locationAr: 'اجتماع عن بعد',
    locationEn: 'Online meeting',
    timeAr: '12:00 ظهرا',
    timeEn: '12:00 PM',
    statusAr: 'دعوات الأعضاء',
    statusEn: 'Members invited',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    day: '22',
    monthAr: 'سبتمبر',
    monthEn: 'Sep',
    year: '2026',
    categoryAr: 'تكوين',
    categoryEn: 'Training',
    titleAr: 'دورة تكوينية حول أنظمة إدارة الجودة ISO/IEC 17025',
    titleEn: 'Training course on ISO/IEC 17025 quality management systems',
    descAr:
      'دورة تطبيقية لتعزيز جاهزية المختبرات الوطنية وتطوير ممارسات التوثيق والتدقيق الداخلي.',
    descEn:
      'A practical course to strengthen national laboratory readiness and improve documentation and internal audit practices.',
    locationAr: 'عمّان، الأردن',
    locationEn: 'Amman, Jordan',
    timeAr: '09:00 صباحا',
    timeEn: '09:00 AM',
    statusAr: 'قيد التحضير',
    statusEn: 'In preparation',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    day: '17',
    monthAr: 'نوفمبر',
    monthEn: 'Nov',
    year: '2026',
    categoryAr: 'ملتقى إقليمي',
    categoryEn: 'Regional Forum',
    titleAr: 'ملتقى عربي حول الاعتراف المتبادل في القياس والمعايرة',
    titleEn: 'Arab forum on mutual recognition in measurement and calibration',
    descAr:
      'فضاء لتبادل التجارب بين الهيئات الوطنية وتعزيز التكامل مع المنظمات الإقليمية والدولية.',
    descEn:
      'A platform for exchanging national experiences and strengthening integration with regional and international bodies.',
    locationAr: 'دبي، الإمارات العربية المتحدة',
    locationEn: 'Dubai, United Arab Emirates',
    timeAr: '11:00 صباحا',
    timeEn: '11:00 AM',
    statusAr: 'قريبا',
    statusEn: 'Coming soon',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
  },
]

const copy = {
  AR: {
    eyebrow: 'الاجتماعات والفعاليات',
    title: 'برنامج الفعاليات والاجتماعات',
    subtitle:
      'رزنامة محدثة لأهم اجتماعات التجمع العربي للمترولوجيا، ورش العمل، الدورات التكوينية، واللقاءات الإقليمية.',
    featured: 'الفعالية القادمة',
    calendar: 'الرزنامة',
    upcoming: 'الفعاليات القادمة',
    register: 'التفاصيل والتسجيل',
    location: 'المكان',
    time: 'الوقت',
    search: 'بحث في الفعاليات',
    filters: ['الكل', 'ورش العمل', 'اللجان', 'التكوين', 'الملتقيات'],
    stats: [
      { value: '05', label: 'فعاليات مبرمجة' },
      { value: '04', label: 'دول مستضيفة' },
      { value: '2026', label: 'موسم الفعاليات' },
    ],
  },
  EN: {
    eyebrow: 'Meetings & Events',
    title: 'Meetings and Events Program',
    subtitle:
      'An updated calendar for ARAMET meetings, workshops, training courses, and regional gatherings.',
    featured: 'Next Event',
    calendar: 'Calendar',
    upcoming: 'Upcoming Events',
    register: 'Details & registration',
    location: 'Location',
    time: 'Time',
    search: 'Search events',
    filters: ['All', 'Workshops', 'Committees', 'Training', 'Forums'],
    stats: [
      { value: '05', label: 'Scheduled events' },
      { value: '04', label: 'Host countries' },
      { value: '2026', label: 'Events season' },
    ],
  },
}

export default function Events() {
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

  const localizedEvents = useMemo(
    () =>
      events.map((event) => ({
        ...event,
        month: isRTL ? event.monthAr : event.monthEn,
        category: isRTL ? event.categoryAr : event.categoryEn,
        title: isRTL ? event.titleAr : event.titleEn,
        desc: isRTL ? event.descAr : event.descEn,
        location: isRTL ? event.locationAr : event.locationEn,
        time: isRTL ? event.timeAr : event.timeEn,
        status: isRTL ? event.statusAr : event.statusEn,
      })),
    [isRTL],
  )

  const featuredEvent = localizedEvents.find((event) => event.featured)
  const otherEvents = localizedEvents.filter((event) => !event.featured)

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full bg-white font-sans text-slate-900">
      <section className="relative min-h-[540px] overflow-hidden bg-[#081a55]">
        <img
          src={featuredEvent.image}
          alt={featuredEvent.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081a55]/85 via-[#0F2982]/70 to-[#081a55]" />

        <div className="relative z-10 mx-auto grid min-h-[540px] max-w-7xl items-end gap-10 px-6 pb-16 pt-24 lg:grid-cols-[1fr_360px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              <i className="pi pi-calendar-plus text-xs" />
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
            <div className="mt-5 flex items-center gap-5">
              <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-white text-[#0F2982] shadow-xl">
                <span className="text-4xl font-black leading-none">{featuredEvent.day}</span>
                <span className="mt-1 text-sm font-bold">{featuredEvent.month}</span>
              </div>
              <div>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">{featuredEvent.category}</span>
                <h2 className="mt-3 text-xl font-black leading-snug">{featuredEvent.title}</h2>
              </div>
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
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">ARAMET</span>
              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{t.calendar}</h2>
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
            className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/60 lg:grid-cols-[420px_1fr]"
          >
            <div className="relative min-h-[360px] overflow-hidden bg-slate-100">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-5 rounded-full bg-[#0F2982] px-4 py-2 text-xs font-bold text-white ltr:left-5 rtl:right-5">
                {featuredEvent.category}
              </span>
            </div>

            <div className="grid gap-8 p-7 md:grid-cols-[150px_1fr] md:p-10">
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-3xl bg-[#0F2982] text-white shadow-xl shadow-[#0F2982]/20">
                <span className="text-5xl font-black leading-none">{featuredEvent.day}</span>
                <span className="mt-2 text-lg font-bold">{featuredEvent.month}</span>
                <span className="text-sm font-bold text-blue-100">{featuredEvent.year}</span>
              </div>

              <div>
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-[#0F2982]">
                  {featuredEvent.status}
                </span>
                <h3 className="mt-5 text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                  {featuredEvent.title}
                </h3>
                <p className="mt-5 text-base font-medium leading-8 text-slate-500 md:text-lg">{featuredEvent.desc}</p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <span className="block text-xs font-bold text-slate-400">{t.location}</span>
                    <span className="mt-1 block text-base font-black text-slate-800">{featuredEvent.location}</span>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <span className="block text-xs font-bold text-slate-400">{t.time}</span>
                    <span className="mt-1 block text-base font-black text-slate-800">{featuredEvent.time}</span>
                  </div>
                </div>

                <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0F2982] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0F2982]/20 transition-all hover:bg-[#0a2268]">
                  {t.register}
                  <i className={`pi ${isRTL ? 'pi-arrow-left' : 'pi-arrow-right'} text-xs`} />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">ARAMET EVENTS</span>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{t.upcoming}</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {otherEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 sm:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-48 overflow-hidden bg-slate-100">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                  <div className="absolute bottom-4 rounded-2xl bg-white px-4 py-3 text-center text-[#0F2982] shadow-lg ltr:left-4 rtl:right-4">
                    <span className="block text-3xl font-black leading-none">{event.day}</span>
                    <span className="block text-xs font-bold">{event.month}</span>
                  </div>
                </div>

                <div className="flex flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0F2982]">
                      {event.category}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-black leading-snug text-slate-900">{event.title}</h3>
                  <p className="mt-3 flex-1 text-sm font-medium leading-7 text-slate-500">{event.desc}</p>

                  <div className="mt-5 grid gap-2 text-sm font-bold text-slate-500">
                    <span className="flex items-center gap-2">
                      <i className="pi pi-map-marker text-[#0F2982]" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="pi pi-clock text-[#0F2982]" />
                      {event.time}
                    </span>
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
