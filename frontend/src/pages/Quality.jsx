import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const qmsItems = [
  {
    id: 1,
    countryAr: 'المملكة المغربية',
    countryEn: 'Kingdom of Morocco',
    code: 'ARAMET QMS MA-01',
    instituteAr: 'المختبر الوطني للمترولوجيا - المملكة المغربية',
    instituteEn: 'National Metrology Laboratory - Kingdom of Morocco',
    standard: 'ISO/IEC 17025',
    statusAr: 'قيد التنفيذ',
    statusEn: 'Implementation',
    fieldAr: 'المعايرة والقياس الصناعي',
    fieldEn: 'Calibration and industrial measurement',
    countryCode: 'ma',
  },
  {
    id: 2,
    countryAr: 'المملكة العربية السعودية',
    countryEn: 'Kingdom of Saudi Arabia',
    code: 'ARAMET QMS SA-02',
    instituteAr: 'المركز الوطني للقياس والمعايرة',
    instituteEn: 'National Measurement and Calibration Center',
    standard: 'ISO/IEC 17043',
    statusAr: 'مراجعة فنية',
    statusEn: 'Technical review',
    fieldAr: 'برامج اختبارات الكفاءة',
    fieldEn: 'Proficiency testing programs',
    countryCode: 'sa',
  },
  {
    id: 3,
    countryAr: 'دولة الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    code: 'ARAMET QMS UAE-01',
    instituteAr: 'معهد الإمارات للمترولوجيا',
    instituteEn: 'Emirates Metrology Institute',
    standard: 'ISO/IEC 17025',
    statusAr: 'قيد التنفيذ',
    statusEn: 'Implementation',
    fieldAr: 'المترولوجيا العلمية',
    fieldEn: 'Scientific metrology',
    countryCode: 'ae',
  },
]

const comparisons = [
  {
    id: 1,
    code: 'ARAMET.M-K3',
    areaAr: 'مترولوجيا الكتلة',
    areaEn: 'Mass Metrology',
    type: 'Key Comparison',
    stageAr: 'مجدولة',
    stageEn: 'Scheduled',
    statusAr: 'قيد الإنجاز',
    statusEn: 'In progress',
    pilotAr: 'المركز الوطني للمترولوجيا / المملكة الأردنية الهاشمية',
    pilotEn: 'National Metrology Center / Hashemite Kingdom of Jordan',
    subFieldsAr: 'معايرة الكتل الصغيرة والمتوسطة',
    subFieldsEn: 'Small and medium mass calibration',
    color: 'bg-blue-50 text-blue-700',
    icon: 'pi pi-balance-scale',
  },
  {
    id: 2,
    code: 'ARAMET.TM-K1',
    areaAr: 'المترولوجيا الحرارية',
    areaEn: 'Thermal Metrology',
    type: 'Key Comparison',
    stageAr: 'معتمدة',
    stageEn: 'Approved',
    statusAr: 'قيد الإنجاز',
    statusEn: 'In progress',
    pilotAr: 'المعهد القومي للقياس والمعايرة',
    pilotEn: 'National Institute for Standards',
    subFieldsAr: 'معايرة مجسات الحرارة وأنظمة قياس الحرارة',
    subFieldsEn: 'Temperature sensor and measurement system calibration',
    color: 'bg-emerald-50 text-emerald-700',
    icon: 'pi pi-sun',
  },
  {
    id: 3,
    code: 'ARAMET.EM-K2',
    areaAr: 'المترولوجيا الكهربائية',
    areaEn: 'Electrical Metrology',
    type: 'Key Comparison',
    stageAr: 'معتمدة',
    stageEn: 'Approved',
    statusAr: 'بانتظار الموافقة',
    statusEn: 'Waiting for approval',
    pilotAr: 'المعهد القومي للقياس والمعايرة',
    pilotEn: 'National Institute for Standards',
    subFieldsAr: 'قياسات كهربائية ومغناطيسية مرجعية',
    subFieldsEn: 'Reference electrical and magnetic measurements',
    color: 'bg-amber-50 text-amber-700',
    icon: 'pi pi-bolt',
  },
]

const copy = {
  AR: {
    eyebrow: 'الجودة والمقارنات',
    title: 'أنظمة الجودة وبرامج المقارنات',
    subtitle:
      'منصة متابعة لأنظمة إدارة الجودة في المعاهد الوطنية وبرامج المقارنات البينية التي تدعم موثوقية القياسات والاعتراف المتبادل.',
    qmsTitle: 'أنظمة إدارة الجودة',
    qmsSub: 'المعاهد المنفذة لأنظمة الجودة وفق المواصفات الدولية',
    comparisonTitle: 'برامج المقارنات البينية',
    comparisonSub: 'متابعة برامج المقارنة الفنية بين المعاهد الوطنية العربية',
    standard: 'المواصفة',
    status: 'الحالة',
    field: 'المجال',
    institute: 'المعهد الوطني',
    type: 'النوع',
    stage: 'المرحلة',
    pilot: 'المختبر التجريبي',
    subFields: 'المجالات الفرعية',
    details: 'التفاصيل',
    filters: ['الكل', 'أنظمة الجودة', 'المقارنات الرئيسية', 'المعايرة', 'اختبارات الكفاءة'],
    stats: [
      { value: '03', label: 'أنظمة جودة' },
      { value: '03', label: 'مقارنات بينية' },
      { value: '05', label: 'مجالات قياس' },
    ],
  },
  EN: {
    eyebrow: 'Quality & Comparisons',
    title: 'Quality Systems and Comparison Programs',
    subtitle:
      'A monitoring space for national institute quality management systems and interlaboratory comparison programs supporting measurement reliability and mutual recognition.',
    qmsTitle: 'Quality Management Systems',
    qmsSub: 'Institutes implementing quality systems according to international standards',
    comparisonTitle: 'Interlaboratory Comparison Programs',
    comparisonSub: 'Tracking technical comparison programs among Arab national institutes',
    standard: 'Standard',
    status: 'Status',
    field: 'Field',
    institute: 'National institute',
    type: 'Type',
    stage: 'Stage',
    pilot: 'Pilot laboratory',
    subFields: 'Sub fields',
    details: 'Details',
    filters: ['All', 'Quality systems', 'Key comparisons', 'Calibration', 'Proficiency tests'],
    stats: [
      { value: '03', label: 'Quality systems' },
      { value: '03', label: 'Comparisons' },
      { value: '05', label: 'Measurement areas' },
    ],
  },
}

export default function Quality() {
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

  const localizedQms = useMemo(
    () =>
      qmsItems.map((item) => ({
        ...item,
        country: isRTL ? item.countryAr : item.countryEn,
        institute: isRTL ? item.instituteAr : item.instituteEn,
        status: isRTL ? item.statusAr : item.statusEn,
        field: isRTL ? item.fieldAr : item.fieldEn,
      })),
    [isRTL],
  )

  const localizedComparisons = useMemo(
    () =>
      comparisons.map((item) => ({
        ...item,
        area: isRTL ? item.areaAr : item.areaEn,
        stage: isRTL ? item.stageAr : item.stageEn,
        status: isRTL ? item.statusAr : item.statusEn,
        pilot: isRTL ? item.pilotAr : item.pilotEn,
        subFields: isRTL ? item.subFieldsAr : item.subFieldsEn,
      })),
    [isRTL],
  )

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full bg-white font-sans text-slate-900">
      <section className="relative overflow-hidden bg-[#081a55]">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
          alt={t.title}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081a55]/90 via-[#0F2982]/75 to-[#081a55]" />

        <div className="relative z-10 mx-auto grid min-h-[540px] max-w-7xl items-end gap-10 px-6 pb-16 pt-24 lg:grid-cols-[1fr_420px]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              <i className="pi pi-verified text-xs" />
              {t.eyebrow}
            </span>
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">{t.title}</h1>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-blue-50 md:text-xl">{t.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-md"
          >
            {t.stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <span className="text-sm font-bold text-blue-100">{stat.label}</span>
                <span className="text-4xl font-black">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-6">
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
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">QMS</span>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{t.qmsTitle}</h2>
            <p className="mt-3 max-w-3xl text-base font-medium leading-8 text-slate-500">{t.qmsSub}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {localizedQms.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-4 border-b border-slate-100 bg-slate-50 p-6">
                  <img
                    src={`https://flagcdn.com/w160/${item.countryCode}.png`}
                    alt={item.country}
                    className="h-14 w-20 rounded-lg border border-slate-200 object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{item.country}</h3>
                    <span className="mt-1 block text-sm font-bold text-[#0F2982]">{item.code}</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.institute}</span>
                  <h4 className="mt-2 min-h-16 text-2xl font-black leading-tight text-slate-900">{item.institute}</h4>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <span className="block text-xs font-bold text-slate-400">{t.standard}</span>
                      <span className="mt-1 block text-lg font-black text-emerald-600">{item.standard}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <span className="block text-xs font-bold text-slate-400">{t.status}</span>
                        <span className="mt-1 block text-sm font-black text-[#0F2982]">{item.status}</span>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <span className="block text-xs font-bold text-slate-400">{t.field}</span>
                        <span className="mt-1 block text-sm font-black text-slate-700">{item.field}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0F2982]">ILC</span>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">{t.comparisonTitle}</h2>
            <p className="mt-3 max-w-3xl text-base font-medium leading-8 text-slate-500">{t.comparisonSub}</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {localizedComparisons.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="grid gap-6 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 lg:grid-cols-[280px_1fr]"
              >
                <div className="flex items-center gap-5 rounded-3xl bg-[#0F2982] p-6 text-white lg:flex-col lg:items-start lg:justify-between">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                    <i className={`${item.icon} text-3xl`} />
                  </div>
                  <div>
                    <h3 className="font-mono text-3xl font-black">{item.code}</h3>
                    <p className="mt-2 text-sm font-bold text-blue-100">{item.area}</p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <span className={`inline-flex rounded-full px-4 py-2 text-xs font-bold ${item.color}`}>
                      {item.status}
                    </span>
                    <div className="mt-6 grid gap-4">
                      <div>
                        <span className="block text-xs font-bold uppercase text-slate-400">{t.type}</span>
                        <span className="mt-1 block text-lg font-black text-slate-900">{item.type}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase text-slate-400">{t.stage}</span>
                        <span className="mt-1 block text-lg font-black text-slate-900">{item.stage}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase text-slate-400">{t.pilot}</span>
                        <span className="mt-1 block text-base font-bold leading-7 text-slate-700">{item.pilot}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col rounded-3xl bg-slate-50 p-6">
                    <span className="block text-xs font-bold uppercase text-slate-400">{t.subFields}</span>
                    <p className="mt-3 flex-1 text-lg font-bold leading-8 text-slate-700">{item.subFields}</p>
                    <button className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-black text-[#0F2982] hover:underline">
                      {t.details}
                      <i className={`pi ${isRTL ? 'pi-arrow-left' : 'pi-arrow-right'} text-xs`} />
                    </button>
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
