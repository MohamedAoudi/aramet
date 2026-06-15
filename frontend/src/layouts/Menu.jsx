import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('AR') // Langue par défaut

  const items = [
    { label: 'الرئيسية', link: '/' },
    {
      label: 'عن الأراميت',
      subItems: [
        { label: 'من نحن', link: '#' },
        { label: 'الأهداف', link: '#' },
        { label: 'الهيكل التنظيمي', link: '#' },
        { label: 'الدول الأعضاء', link: '#' }
      ]
    },
    {
      label: 'اللجان',
      subItems: [
        { label: 'اللجان التنفيذية', link: '#' },
        { label: 'اللجان الفنية', link: '#' }
      ]
    },
    { label: 'البرامج', link: '#' },
    { label: 'الجودة والمقارنات', link: '#' },
    { label: 'الاجتماعات والفعاليات', link: '#' },
    { label: 'مركز المعرفة', link: '#' },
    { label: 'الأخبار', link: '#' },
    { label: 'اتصل بنا', link: '#' }
  ]

  // Fonction pour basculer de langue
  const toggleLanguage = () => {
    setCurrentLang(prev => (prev === 'AR' ? 'FR' : 'AR'))
  }

  return (
    <div className="w-full font-sans" dir="rtl">
      {/* Top Bar */}
      <div className="w-full bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            
            {/* À DROITE : Sélecteur de Langue */}
            <div className="flex items-center gap-2 justify-center md:justify-start flex-shrink-0">
              <button 
                onClick={toggleLanguage}
                className="text-[#0F2982] font-bold px-2 py-1 rounded-lg text-sm transition-all flex items-center gap-1.5 hover:text-[#0F2982] active:scale-95"
              >
                <i className="pi pi-globe text-xs"></i>
                <span>{currentLang === 'AR' ? 'FR' : 'AR'}</span>
              </button>
            </div>

            {/* AU CENTRE : Barre de Recherche */}
            <div className="hidden md:flex justify-center flex-1 max-w-xs mx-4">
              <div className="flex w-full rounded-lg overflow-hidden shadow-sm border border-gray-300 bg-white">
                <input
                  type="text"
                  placeholder="بحث..."
                  className="w-full px-4 py-2 text-sm focus:outline-none"
                />
                <button className="bg-[#0F2982] hover:bg-[#0a2268] text-white px-4 transition-colors">
                  <i className="pi pi-search"></i>
                </button>
              </div>
            </div>

            {/* À GAUCHE : Réseaux Sociaux et Infos */}
            <div className="flex flex-wrap items-center gap-6 justify-center md:justify-end md:flex-1">
              
              {/* 1. Réseaux Sociaux */}
              <div className="flex items-center gap-4 border-l border-gray-300 pl-4">
                <a href="#" className="hover:text-[#0F2982] transition-colors"><i className="pi pi-facebook text-base"></i></a>
                <a href="#" className="hover:text-pink-600 transition-colors"><i className="pi pi-instagram text-base"></i></a>
                <a href="#" className="hover:text-[#0F2982] transition-colors"><i className="pi pi-linkedin text-base"></i></a>
                <a href="#" className="hover:text-gray-900 transition-colors"><i className="pi pi-twitter text-base"></i></a>
              </div>

              {/* 2. Infos de contact & Adresse */}
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <span className="flex items-center gap-2 text-center sm:text-right">
                  <i className="pi pi-map-marker text-[#0F2982]"></i>
                  <span>شارع فرنسا، الرباط - أكدال، المملكة المغربية</span>
                </span>
                <span className="flex items-center gap-2">
                  <i className="pi pi-envelope text-[#0F2982]"></i>
                  <span>info@aramet.com</span>
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/aramet_logo.png"
                  alt="Aramet"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center flex-1 justify-center gap-1 px-4">
              {items.map((item, index) => (
                <div key={index} className="relative group">
                  {item.subItems ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-[#0F2982] font-medium text-sm rounded-md hover:bg-gray-50 transition-all">
                        <span>{item.label}</span>
                        <i className="pi pi-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                      </button>
                      
                      <div className="absolute right-0 top-full pt-2 w-56 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                          {item.subItems.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href={sub.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0F2982]/10 hover:text-[#0F2982] transition-colors"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      className="block px-3 py-2 text-gray-700 hover:text-[#0F2982] font-medium text-sm rounded-md hover:bg-gray-50 transition-all"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Login Button - Sans fond ni bordure sur Desktop */}
            <div className="hidden lg:block flex-shrink-0">
              <button className="text-gray-700 hover:text-[#0F2982] p-2 rounded-lg transition-colors flex items-center justify-center active:scale-95">
                <i className="pi pi-user text-xl"></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0F2982] hover:bg-gray-100 focus:outline-none transition-colors"
              >
                <i className={`pi ${isOpen ? 'pi-times' : 'pi-bars'} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-2 space-y-2">
              {items.map((item, index) => (
                <div key={index}>
                  {item.subItems ? (
                    <div className="space-y-1">
                      <div className="font-bold text-gray-900 px-3 py-2 text-sm">
                        {item.label}
                      </div>
                      <div className="space-y-1 pr-4">
                        {item.subItems.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.link}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0F2982] hover:bg-gray-50 rounded transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0F2982] hover:bg-gray-50 rounded transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              {/* Login Button - Épuré sur Mobile aussi */}
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full text-gray-700 hover:text-[#0F2982] hover:bg-gray-50 py-2.5 rounded-lg flex items-center justify-center transition-all">
                  <i className="pi pi-user text-xl"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}