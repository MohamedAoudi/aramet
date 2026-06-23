import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';

function Contact() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Contactez-nous</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Une question, une suggestion ou besoin d'informations ? Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 h-full">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FloatLabel>
                                    <InputText id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full" />
                                    <label htmlFor="lastName">Nom</label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full" />
                                    <label htmlFor="firstName">Prénom</label>
                                </FloatLabel>
                            </div>
                            <FloatLabel>
                                <InputText id="email" keyfilter="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
                                <label htmlFor="email">Adresse e-mail</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} autoResize className="w-full" />
                                <label htmlFor="message">Votre message</label>
                            </FloatLabel>
                            
                            <div className="flex justify-end pt-4">
                                <Button type="submit" label="Envoyer le message" icon="pi pi-send" size="large" />
                            </div>
                        </form>
                    </div>
                    <div className="h-full w-full">
                        <iframe 
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4358.762740052641!2d-6.8529211878093665!3d33.99675227306604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76dd32500881d%3A0xd989cfa8a28391fe!2sOrganisation%20arabe%20pour%20le%20d%C3%A9veloppement%20industriel%2C%20de%20normalisation%20et%20des%20mines!5e1!3m2!1sfr!2sma!4v1782211558036!5m2!1sfr!2sma'
                            width="100%" 
                            height="100%" 
                            style={{ border:0, minHeight: '595px' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;