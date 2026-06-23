import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const BRAND = '#0b1d5c';

const translations = {
    AR: {
        badge: 'اتصال',
        title: 'اتصل بنا',
        subtitle: 'سؤال أو اقتراح أو حاجة لمعلومات؟ املأ النموذج أدناه وسيرد عليك فريقنا في أقرب وقت ممكن.',
        infoTitle: 'معلومات الاتصال',
        infoSubtitle: 'لا تتردد في التواصل معنا بإحدى الطرق التالية.',
        followUs: 'تابعنا',
        cards: {
            address: { label: 'عنواننا', value: 'شارع فرنسا، الرباط - أكدال، المملكة المغربية' },
            email: { label: 'راسلنا', value: 'info@aramet.org' },
            phone: { label: 'اتصل بنا', value: '(+212) 53-7274500' },
        },
        form: {
            lastName: 'الاسم',
            lastNamePh: 'اسمك',
            firstName: 'النسب',
            firstNamePh: 'نسبك',
            email: 'البريد الإلكتروني',
            emailPh: 'you@example.com',
            subject: 'الموضوع',
            subjectPh: 'موضوع رسالتك',
            message: 'رسالتك',
            messagePh: 'اكتب رسالتك هنا...',
            submit: 'إرسال الرسالة',
        },
        mapTitle: 'موقع أراميت',
    },
    EN: {
        badge: 'Contact',
        title: 'Contact us',
        subtitle: "A question, a suggestion or need information? Fill out the form below and our team will get back to you as soon as possible.",
        infoTitle: 'Information',
        infoSubtitle: 'Feel free to reach us through any of the following channels.',
        followUs: 'Follow us',
        cards: {
            address: { label: 'Our address', value: 'France Street, Rabat - Agdal, Kingdom of Morocco' },
            email: { label: 'Write to us', value: 'info@aramet.org' },
            phone: { label: 'Call us', value: '(+212) 53-7274500' },
        },
        form: {
            lastName: 'Last name',
            lastNamePh: 'Your last name',
            firstName: 'First name',
            firstNamePh: 'Your first name',
            email: 'Email address',
            emailPh: 'you@example.com',
            subject: 'Subject',
            subjectPh: 'Subject of your message',
            message: 'Your message',
            messagePh: 'Write your message here...',
            submit: 'Send message',
        },
        mapTitle: 'ARAMET location',
    },
};

const cardMeta = [
    { key: 'address', icon: 'pi pi-map-marker', href: 'https://www.google.com/maps/search/?api=1&query=Aidsmo+Rabat' },
    { key: 'email', icon: 'pi pi-envelope', href: 'mailto:info@aramet.org' },
    { key: 'phone', icon: 'pi pi-phone', href: 'tel:+212537274500' },
];

const socials = [
    { icon: 'pi pi-facebook', href: '#' },
    { icon: 'pi pi-twitter', href: '#' },
    { icon: 'pi pi-linkedin', href: '#' },
    { icon: 'pi pi-youtube', href: '#' },
];

function Contact() {
    const [currentLang, setCurrentLang] = useState(() => {
        try { return localStorage.getItem('aramet_lang') || 'AR' } catch (e) { return 'AR' }
    });

    useEffect(() => {
        const handler = (e) => {
            const next = e?.detail || localStorage.getItem('aramet_lang') || 'AR';
            setCurrentLang(next);
        };
        window.addEventListener('aramet:lang', handler);
        return () => window.removeEventListener('aramet:lang', handler);
    }, []);

    const t = translations[currentLang] || translations.AR;
    const isRTL = currentLang === 'AR';
    const iconPos = isRTL ? 'right' : 'left';

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="bg-slate-50 py-16 md:py-24" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">

                    {/* En-tête */}
                    <div className="text-center mb-14">
                        <span
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4"
                            style={{ color: BRAND, backgroundColor: `${BRAND}14` }}
                        >
                            <i className="pi pi-send text-xs"></i>
                            {t.badge}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                            {t.title}
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {t.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

                        {/* Colonne infos de contact */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <div
                                className="rounded-2xl p-8 text-white shadow-xl flex-1"
                                style={{ background: `linear-gradient(160deg, ${BRAND} 0%, #16297a 100%)` }}
                            >
                                <h2 className="text-2xl font-bold mb-2">{t.infoTitle}</h2>
                                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                                    {t.infoSubtitle}
                                </p>

                                <div className="space-y-5">
                                    {cardMeta.map((meta) => {
                                        const card = t.cards[meta.key];
                                        return (
                                            <a
                                                key={meta.key}
                                                href={meta.href}
                                                className="group flex items-start gap-4 rounded-xl p-3 -mx-3 transition-colors hover:bg-white/10"
                                            >
                                                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0b1d5c] transition-colors">
                                                    <i className={`${meta.icon} text-lg`}></i>
                                                </span>
                                                <div className="min-w-0">
                                                    <p className="text-xs uppercase tracking-wide text-slate-400">
                                                        {card.label}
                                                    </p>
                                                    <p className="font-semibold text-white break-words" dir={meta.key === 'phone' ? 'ltr' : undefined}>
                                                        {card.value}
                                                    </p>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>

                                <div className="mt-10 pt-6 border-t border-white/15">
                                    <p className="text-sm text-slate-300 mb-3">{t.followUs}</p>
                                    <div className="flex gap-3">
                                        {socials.map((s) => (
                                            <a
                                                key={s.icon}
                                                href={s.href}
                                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#0b1d5c] transition-colors"
                                            >
                                                <i className={s.icon}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Colonne formulaire */}
                        <div className="lg:col-span-3">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 h-full">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">{t.form.lastName}</label>
                                            <IconField iconPosition={iconPos} className="w-full">
                                                <InputIcon className="pi pi-user" />
                                                <InputText id="lastName" placeholder={t.form.lastNamePh} value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full" />
                                            </IconField>
                                        </div>
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">{t.form.firstName}</label>
                                            <IconField iconPosition={iconPos} className="w-full">
                                                <InputIcon className="pi pi-user" />
                                                <InputText id="firstName" placeholder={t.form.firstNamePh} value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full" />
                                            </IconField>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">{t.form.email}</label>
                                        <IconField iconPosition={iconPos} className="w-full">
                                            <InputIcon className="pi pi-envelope" />
                                            <InputText id="email" keyfilter="email" placeholder={t.form.emailPh} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
                                        </IconField>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">{t.form.subject}</label>
                                        <IconField iconPosition={iconPos} className="w-full">
                                            <InputIcon className="pi pi-tag" />
                                            <InputText id="subject" placeholder={t.form.subjectPh} value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full" />
                                        </IconField>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">{t.form.message}</label>
                                        <InputTextarea id="message" placeholder={t.form.messagePh} value={message} onChange={(e) => setMessage(e.target.value)} rows={5} autoResize className="w-full" />
                                    </div>

                                    <div className="flex justify-end pt-2">
                                        <Button type="submit" label={t.form.submit} icon="pi pi-send" size="large" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Carte */}
                    <div className="mt-8 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                        <iframe
                            title={t.mapTitle}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4358.762740052641!2d-6.8529211878093665!3d33.99675227306604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76dd32500881d%3A0xd989cfa8a28391fe!2sOrganisation%20arabe%20pour%20le%20d%C3%A9veloppement%20industriel%2C%20de%20normalisation%20et%20des%20mines!5e1!3m2!1sfr!2sma!4v1782211693946!5m2!1sfr!2sma"
                            width="100%"
                            height="380"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
