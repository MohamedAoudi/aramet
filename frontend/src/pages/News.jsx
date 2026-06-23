import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const newsItems = [
  {
    id: 1,
    tagAr: 'ورش عمل فنية',
    tagEn: 'Technical Workshop',
    dateAr: '04 مارس 2026',
    dateEn: '04 Mar 2026',
    titleAr: 'ورشة عمل فنية حول التحقق من أدوات قياس تدفق السوائل الكهرومغناطيسية',
    titleEn: 'Technical workshop on verification of electromagnetic liquid flowmeters',
    descAr:
      'برنامج متخصص لتبادل الخبرات وبناء القدرات الفنية للمعاهد والمراكز الوطنية العربية في مجالات قياس التدفق والمعايرة الدقيقة.',
    descEn:
      'A specialized program for exchanging expertise and building technical capacity among Arab national institutes in flow measurement and precision calibration.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    tagAr: 'اللجان الفنية',
    tagEn: 'Technical Committees',
    dateAr: '12 يناير 2026',
    dateEn: '12 Jan 2026',
    titleAr: 'الاجتماع الدوري للجنة الفنية للكتلة والكميات المرتبطة بها',
    titleEn: 'Periodic meeting of the technical committee for mass and related quantities',
    descAr:
      'ناقشت اللجنة نتائج المقارنات البينية الإقليمية وخطط تطوير معايير القياس الوطنية بما يدعم الاعتراف المتبادل.',
    descEn:
      'The committee reviewed regional comparison results and development plans for national measurement standards supporting mutual recognition.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    tagAr: 'تعاون إقليمي',
    tagEn: 'Regional Cooperation',
    dateAr: '18 نوفمبر 2025',
    dateEn: '18 Nov 2025',
    titleAr: 'تعزيز التعاون المترولوجي العربي المشترك لضمان دقة القياس',
    titleEn: 'Strengthening joint Arab metrology cooperation to ensure measurement accuracy',
    descAr:
      'متابعة المبادرات المشتركة لتطوير البنية التحتية للجودة والمترولوجيا في الدول العربية بما يتماشى مع المعايير الدولية.',
    descEn:
      'Follow-up on joint initiatives to develop quality and metrology infrastructure in Arab countries in line with international standards.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    tagAr: 'بناء القدرات',
    tagEn: 'Capacity Building',
    dateAr: '26 أكتوبر 2025',
    dateEn: '26 Oct 2025',
    titleAr: 'برنامج تدريبي حول أنظمة إدارة الجودة في مختبرات المعايرة',
    titleEn: 'Training program on quality management systems in calibration laboratories',
    descAr:
      'دورة تطبيقية موجهة للمختصين في المختبرات الوطنية لتعزيز تطبيق المواصفات الدولية وتحسين كفاءة خدمات المعايرة.',
    descEn:
      'An applied course for national laboratory specialists to strengthen international standard implementation and improve calibration services.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    tagAr: 'المقارنات البينية',
    tagEn: 'Interlaboratory Comparisons',
    dateAr: '09 سبتمبر 2025',
    dateEn: '09 Sep 2025',
    titleAr: 'إطلاق برنامج مقارنة بينية جديد في مجال القياسات الحرارية',
    titleEn: 'Launching a new interlaboratory comparison program in thermal metrology',
    descAr:
      'يساهم البرنامج في تقييم الكفاءة الفنية وتعزيز موثوقية القياسات الحرارية بين المعاهد الوطنية المشاركة.',
    descEn:
      'The program helps assess technical competence and strengthen thermal measurement reliability among participating national institutes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    tagAr: 'اليوم العالمي للمترولوجيا',
    tagEn: 'World Metrology Day',
    dateAr: '20 مايو 2025',
    dateEn: '20 May 2025',
    titleAr: 'احتفاء التجمع العربي للمترولوجيا باليوم العالمي للمترولوجيا',
    titleEn: 'ARAMET marks World Metrology Day',
    descAr:
      'فعاليات علمية وتواصلية تسلط الضوء على دور القياسات الدقيقة في الصناعة والتجارة وحماية المستهلك.',
    descEn:
      'Scientific and outreach activities highlighting the role of accurate measurements in industry, trade, and consumer protection.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop',
  },
]

const copy = {
  AR: {
    eyebrow: 'المركز الإعلامي',
    title: 'الأخبار',
    subtitle:
      'تابع أحدث أنشطة التجمع العربي للمترولوجيا، اجتماعات اللجان الفنية، برامج التدريب، والمقارنات البينية.',
    latest: 'آخر الأخبار',
    featured: 'خبر مميز',
    all: 'كل الأخبار',
    readMore: 'اقرأ المزيد',
    search: 'بحث في الأخبار',
    filters: ['الكل', 'ورش عمل', 'اللجان الفنية', 'التعاون', 'المقارنات'],
    stats: [
      { value: '06', label: 'أخبار منشورة' },
      { value: '04', label: 'مجالات فنية' },
      { value: '2026', label: 'آخر تحديث' },
    ],
  },
  EN: {
    eyebrow: 'Media Center',
    title: 'News',
    subtitle:
      'Follow the latest ARAMET activities, technical committee meetings, training programs, and interlaboratory comparisons.',
    latest: 'Latest News',
    featured: 'Featured Story',
    all: 'All News',
    readMore: 'Read more',
    search: 'Search news',
    filters: ['All', 'Workshops', 'Technical committees', 'Cooperation', 'Comparisons'],
    stats: [
      { value: '06', label: 'Published stories' },
      { value: '04', label: 'Technical areas' },
      { value: '2026', label: 'Last update' },
    ],
  },
}

export default function News() {
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
  const featuredItem = newsItems.find((item) => item.featured)
  const regularItems = newsItems.filter((item) => !item.featured)

  const localizedNews = useMemo(
    () =>
      newsItems.map((item) => ({
        ...item,
        tag: isRTL ? item.tagAr : item.tagEn,
        date: isRTL ? item.dateAr : item.dateEn,
        title: isRTL ? item.titleAr : item.titleEn,
        desc: isRTL ? item.descAr : item.descEn,
      })),
    [isRTL],
  )

  const localizedFeatured = localizedNews.find((item) => item.id === featuredItem.id)
  const localizedRegular = localizedNews.filter((item) => regularItems.some((regular) => regular.id === item.id))

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full bg-white font-sans text-slate-900">
      <section className="relative min-h-[520px] overflow-hidden bg-[#081a55]">
        <img
          src={localizedFeatured.image}
          alt={localizedFeatured.title}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081a55]/80 via-[#0F2982]/75 to-[#081a55]" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-6 pb-16 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              <i className="pi pi-megaphone text-xs" />
              {t.eyebrow}
            </span>
            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">{t.title}</h1>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-blue-50 md:text-xl">{t.subtitle}</p>
          </motion.div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {t.stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/25 pt-4 text-white">
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="mt-1 text-sm font-semibold text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
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
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">{t.featured}</span>
              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{t.latest}</h2>
            </div>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/60 lg:grid-cols-2"
          >
            <div className="relative min-h-[340px] overflow-hidden bg-slate-100">
              <img
                src={localizedFeatured.image}
                alt={localizedFeatured.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-5 rounded-full bg-[#0F2982] px-4 py-2 text-xs font-bold text-white ltr:left-5 rtl:right-5">
                {localizedFeatured.tag}
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-400">
                <i className="pi pi-calendar text-[#0F2982]" />
                {localizedFeatured.date}
              </span>
              <h3 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                {localizedFeatured.title}
              </h3>
              <p className="mt-5 text-base font-medium leading-8 text-slate-500 md:text-lg">{localizedFeatured.desc}</p>
              <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0F2982] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0F2982]/20 transition-all hover:bg-[#0a2268]">
                {t.readMore}
                <i className={`pi ${isRTL ? 'pi-arrow-left' : 'pi-arrow-right'} text-xs`} />
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">ARAMET</span>
              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{t.all}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {localizedRegular.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 rounded-full bg-[#0F2982] px-3 py-1 text-xs font-bold text-white ltr:left-4 rtl:right-4">
                    {item.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-400">
                    <i className="pi pi-calendar text-[#0F2982]" />
                    {item.date}
                  </span>
                  <h3 className="text-xl font-black leading-snug text-slate-900 transition-colors hover:text-[#0F2982]">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm font-medium leading-7 text-slate-500">{item.desc}</p>
                  <button className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-[#0F2982] hover:underline">
                    {t.readMore}
                    <i className={`pi ${isRTL ? 'pi-arrow-left' : 'pi-arrow-right'} text-xs`} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
