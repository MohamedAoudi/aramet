import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const aboutNav = [
  { key: 'who-we-are', path: '/about/who-we-are', labelAr: 'من نحن', labelEn: 'Who we are' },
  { key: 'goals', path: '/about/goals', labelAr: 'الأهداف', labelEn: 'Goals' },
  { key: 'structure', path: '/about/structure', labelAr: 'الهيكل التنظيمي', labelEn: 'Structure' },
  { key: 'members', path: '/about/members', labelAr: 'الدول الأعضاء', labelEn: 'Member states' },
]

const pages = {
  'who-we-are': {
    eyebrowAr: 'عن الأراميت',
    eyebrowEn: 'About ARAMET',
    titleAr: 'من نحن',
    titleEn: 'Who we are',
    subtitleAr:
      'التجمع العربي للمترولوجيا هو إطار إقليمي متخصص يجمع الجهات الرسمية العربية العاملة في المترولوجيا القانونية والعلمية والصناعية.',
    subtitleEn:
      'The Arab Association for Metrology is a regional framework for official Arab bodies working in legal, scientific, and industrial metrology.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop',
    introAr:
      'أنشئ الأراميت كنظام إقليمي متخصص للجهات الرسمية في الدول العربية العاملة في مجالات المترولوجيا، وجاء نتيجة دمج البرنامج العربي للمترولوجيا العلمية والصناعية والبرنامج العربي للمترولوجيا القانونية تحت مسمى ARAMET.',
    introEn:
      'ARAMET was created as a specialized regional system for official Arab bodies working in metrology. It came from merging the Arab scientific and industrial metrology program with the Arab legal metrology program under the ARAMET name.',
    pointsAr: [
      'يعزز التعاون بين المعاهد الوطنية والجهات الرسمية في الدول الأعضاء.',
      'يدعم تطوير البنية التحتية للقياس والمعايرة في المنطقة العربية.',
      'يربط المترولوجيا القانونية والعلمية والصناعية ضمن إطار عربي مشترك.',
    ],
    pointsEn: [
      'Strengthens cooperation between national institutes and official bodies in member states.',
      'Supports the development of measurement and calibration infrastructure in the Arab region.',
      'Connects legal, scientific, and industrial metrology within a shared Arab framework.',
    ],
    stats: [
      { value: '2021', labelAr: 'قرار التأسيس', labelEn: 'Establishment decision' },
      { value: '02', labelAr: 'برنامجان مدمجان', labelEn: 'Merged programs' },
      { value: '03', labelAr: 'مجالات مترولوجية', labelEn: 'Metrology domains' },
    ],
  },
  goals: {
    eyebrowAr: 'عن الأراميت',
    eyebrowEn: 'About ARAMET',
    titleAr: 'الأهداف',
    titleEn: 'Goals',
    subtitleAr:
      'تتمحور أهداف التجمع حول الاعتراف الدولي، تجانس الأنظمة المترولوجية، وتيسير التعاون الفني بين الدول العربية.',
    subtitleEn:
      'ARAMET goals focus on international recognition, harmonized metrology systems, and stronger technical cooperation among Arab countries.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop',
    introAr:
      'يعمل التجمع على تأهيل المعاهد الوطنية للمترولوجيا ودعمها في مسار الاعتراف الدولي، مع تعزيز مواءمة القوانين والأنظمة المترولوجية بما ينسجم مع المتطلبات الدولية.',
    introEn:
      'ARAMET works to qualify and support national metrology institutes on the path to international recognition while promoting harmonized laws and metrology systems aligned with international requirements.',
    pointsAr: [
      'تدعيم روابط التعاون بين المعاهد الوطنية للمترولوجيا في الدول الأعضاء.',
      'دعم التأهيل للحصول على الاعتراف الدولي عبر اتفاقية CIPM-MRA.',
      'تحقيق تجانس القوانين والأنظمة المترولوجية بما يسهل حركة التجارة البينية.',
    ],
    pointsEn: [
      'Strengthen cooperation between national metrology institutes in member states.',
      'Support qualification for international recognition through the CIPM-MRA framework.',
      'Promote harmonized metrology laws and systems that facilitate intra-regional trade.',
    ],
    stats: [
      { value: 'CIPM', labelAr: 'اعتراف دولي', labelEn: 'International recognition' },
      { value: 'MRA', labelAr: 'اتفاقية الاعتراف', labelEn: 'Mutual recognition' },
      { value: 'AR', labelAr: 'تجانس عربي', labelEn: 'Arab harmonization' },
    ],
  },
  structure: {
    eyebrowAr: 'عن الأراميت',
    eyebrowEn: 'About ARAMET',
    titleAr: 'الهيكل التنظيمي',
    titleEn: 'Organizational Structure',
    subtitleAr:
      'يتألف التجمع من أجهزة حوكمة ولجان تنفيذية وفنية ومجموعات عمل متخصصة لتنسيق أنشطة المترولوجيا.',
    subtitleEn:
      'ARAMET consists of governance bodies, executive committees, technical committees, and working groups that coordinate metrology activities.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1800&auto=format&fit=crop',
    introAr:
      'يعتمد الهيكل التنظيمي للتجمع على الجمعية العمومية واللجان التنفيذية للمترولوجيا القانونية والعلمية والصناعية، إضافة إلى اللجان الفنية المتخصصة والفرعية ومجموعات العمل.',
    introEn:
      'The structure is built around the General Assembly, executive committees for legal and scientific-industrial metrology, specialized and sub-technical committees, and working groups.',
    structureAr: [
      'الجمعية العمومية',
      'اللجنة التنفيذية للمترولوجيا القانونية',
      'اللجنة التنفيذية للمترولوجيا العلمية والصناعية',
      'اللجان الفنية المتخصصة',
      'اللجان الفنية الفرعية',
      'مجموعات العمل',
    ],
    structureEn: [
      'General Assembly',
      'Executive Committee of Legal Metrology',
      'Executive Committee of Scientific and Industrial Metrology',
      'Specialized Technical Committees',
      'Technical Subcommittees',
      'Working Groups',
    ],
    stats: [
      { value: '06', labelAr: 'أجهزة تنظيمية', labelEn: 'Organizational bodies' },
      { value: '02', labelAr: 'لجان تنفيذية', labelEn: 'Executive committees' },
      { value: 'TC', labelAr: 'لجان فنية', labelEn: 'Technical committees' },
    ],
  },
  members: {
    eyebrowAr: 'عن الأراميت',
    eyebrowEn: 'About ARAMET',
    titleAr: 'الدول الأعضاء',
    titleEn: 'Member States',
    subtitleAr:
      'تضم الجمعية أعضاء كاملي العضوية وأعضاء منتسبين ومشاركين، ويمثل كل عضو جهة وطنية تتابع قرارات وتوصيات الجمعية.',
    subtitleEn:
      'The association includes full, associate, and participating members, with each member represented by a national body that follows up assembly decisions.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1800&auto=format&fit=crop',
    introAr:
      'تضم صفحة الدول الأعضاء على موقع الأراميت جهات وطنية من عدة دول عربية، وتشمل معاهد ومراكز مترولوجيا وهيئات مواصفات ومقاييس ووزارات معنية بالصناعة والتجارة.',
    introEn:
      'ARAMET member pages include national bodies from several Arab countries, including metrology institutes, standards bodies, and ministries concerned with industry and trade.',
    countriesAr: [
      'مملكة البحرين',
      'جمهورية العراق',
      'الجمهورية الجزائرية الديمقراطية الشعبية',
      'المملكة المغربية',
      'سلطنة عمان',
      'المملكة الأردنية الهاشمية',
      'دولة الإمارات العربية المتحدة',
      'المملكة العربية السعودية',
      'دولة فلسطين',
      'دولة الكويت',
      'الجمهورية التونسية',
      'جمهورية مصر العربية',
    ],
    countriesEn: [
      'Bahrain',
      'Iraq',
      'Algeria',
      'Morocco',
      'Oman',
      'Jordan',
      'United Arab Emirates',
      'Saudi Arabia',
      'Palestine',
      'Kuwait',
      'Tunisia',
      'Egypt',
    ],
    membersAr: [
      { body: 'إدارة الفحص والمقاييس/وزارة الصناعة والتجارة', country: 'مملكة البحرين' },
      { body: 'الجهاز المركزي للتقييس والسيطرة النوعية', country: 'جمهورية العراق' },
      { body: 'الديوان الوطني للمترولوجيا', country: 'الجمهورية الجزائرية الديمقراطية الشعبية' },
      { body: 'المختبر الوطني للمترولوجيا', country: 'المملكة المغربية' },
      { body: 'المديرية العامة للمواصفات والمقاييس/وزارة التجارة والصناعة', country: 'سلطنة عمان' },
    ],
    membersEn: [
      { body: 'Testing and Metrology Directorate / Ministry of Industry and Commerce', country: 'Bahrain' },
      { body: 'Central Organization for Standardization and Quality Control', country: 'Iraq' },
      { body: 'National Office of Metrology', country: 'Algeria' },
      { body: 'National Metrology Laboratory', country: 'Morocco' },
      { body: 'Directorate General for Standards and Metrology / Ministry of Commerce and Industry', country: 'Oman' },
    ],
    stats: [
      { value: '12+', labelAr: 'دولة ظاهرة', labelEn: 'Listed countries' },
      { value: '03', labelAr: 'أنواع عضوية', labelEn: 'Membership types' },
      { value: '05', labelAr: 'نماذج جهات', labelEn: 'Sample bodies' },
    ],
  },
}

const fallbackKey = 'who-we-are'

export default function About() {
  const location = useLocation()
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

  const pageKey = location.pathname.split('/').filter(Boolean).at(-1) || fallbackKey
  const page = pages[pageKey] || pages[fallbackKey]
  const isRTL = currentLang === 'AR'
  const activeIndex = aboutNav.findIndex((item) => item.key === pageKey)

  const localized = useMemo(
    () => ({
      eyebrow: isRTL ? page.eyebrowAr : page.eyebrowEn,
      title: isRTL ? page.titleAr : page.titleEn,
      subtitle: isRTL ? page.subtitleAr : page.subtitleEn,
      intro: isRTL ? page.introAr : page.introEn,
      points: isRTL ? page.pointsAr : page.pointsEn,
      structure: isRTL ? page.structureAr : page.structureEn,
      countries: isRTL ? page.countriesAr : page.countriesEn,
      members: isRTL ? page.membersAr : page.membersEn,
      nav: aboutNav.map((item) => ({ ...item, label: isRTL ? item.labelAr : item.labelEn })),
      stats: page.stats.map((item) => ({ value: item.value, label: isRTL ? item.labelAr : item.labelEn })),
      labels: isRTL
        ? { overview: 'نظرة عامة', components: 'مكونات الهيكل', sampleMembers: 'نماذج من الجهات الأعضاء', countries: 'الدول' }
        : { overview: 'Overview', components: 'Structure components', sampleMembers: 'Sample member bodies', countries: 'Countries' },
    }),
    [isRTL, page],
  )

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full bg-white font-sans text-slate-900">
      <section className="relative min-h-[500px] overflow-hidden bg-[#081a55]">
        <img src={page.image} alt={localized.title} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081a55]/90 via-[#0F2982]/72 to-[#081a55]" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col justify-end px-6 pb-16 pt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              <i className="pi pi-info-circle text-xs" />
              {localized.eyebrow}
            </span>
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">{localized.title}</h1>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-blue-50 md:text-xl">{localized.subtitle}</p>
          </motion.div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {localized.stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/25 pt-4 text-white">
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="mt-1 text-sm font-semibold text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-5">
          {localized.nav.map((item) => {
            const active = item.key === pageKey
            return (
              <Link
                key={item.key}
                to={item.path}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition-all ${
                  active
                    ? 'bg-[#0F2982] text-white shadow-lg shadow-[#0F2982]/20'
                    : 'border border-slate-200 bg-slate-50 text-slate-600 hover:border-[#0F2982] hover:bg-white hover:text-[#0F2982]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[320px_1fr]">
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
              <div className="bg-[#0F2982] p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100">ARAMET</span>
                <h2 className="mt-2 text-2xl font-black">{localized.labels.overview}</h2>
              </div>

              <div className="divide-y divide-slate-100">
                {localized.nav.map((item, index) => {
                  const active = item.key === pageKey
                  return (
                    <Link
                      key={item.key}
                      to={item.path}
                      className={`flex items-center justify-between px-5 py-4 text-sm font-black transition-colors ${
                        active ? 'bg-blue-50 text-[#0F2982]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#0F2982]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`h-2 w-2 rounded-full ${active ? 'bg-[#0F2982]' : 'bg-slate-300'}`} />
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {localized.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-3xl font-black text-[#0F2982]">{stat.value}</div>
                  <div className="mt-1 text-sm font-bold text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/60"
            >
              <div className="grid lg:grid-cols-[1fr_320px]">
                <div className="p-7 md:p-10">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F2982] text-xl font-black text-white">
                      {String(activeIndex + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">{localized.eyebrow}</span>
                      <h2 className="mt-1 text-3xl font-black text-slate-900 md:text-4xl">{localized.title}</h2>
                    </div>
                  </div>
                  <p className="text-xl font-bold leading-10 text-slate-700">{localized.intro}</p>
                </div>

                <div className="min-h-72 overflow-hidden bg-slate-100">
                  <img src={page.image} alt={localized.title} className="h-full w-full object-cover" />
                </div>
              </div>
            </motion.article>

            {localized.points && (
              <div className="grid gap-4 md:grid-cols-3">
                {localized.points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F2982] text-sm font-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-5 text-base font-bold leading-8 text-slate-700">{point}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {localized.structure && (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 md:p-10">
                <h3 className="mb-6 text-3xl font-black text-slate-900">{localized.labels.components}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {localized.structure.map((item, index) => (
                    <div key={item} className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-6">
                      <span className="absolute top-4 text-6xl font-black text-[#0F2982]/10 ltr:right-5 rtl:left-5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="relative text-lg font-black leading-8 text-slate-800">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {localized.members && (
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 md:p-10">
                  <h3 className="mb-6 text-3xl font-black text-slate-900">{localized.labels.sampleMembers}</h3>
                  <div className="grid gap-4">
                    {localized.members.map((member) => (
                      <div key={`${member.body}-${member.country}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors hover:border-[#0F2982]/30 hover:bg-white">
                        <h4 className="text-lg font-black leading-7 text-slate-900">{member.body}</h4>
                        <p className="mt-2 text-sm font-bold text-[#0F2982]">{member.country}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 md:p-10">
                  <h3 className="mb-6 text-3xl font-black text-slate-900">{localized.labels.countries}</h3>
                  <div className="flex flex-wrap gap-3">
                    {localized.countries.map((country) => (
                      <span key={country} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
