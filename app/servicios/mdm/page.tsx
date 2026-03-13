export default function MDMPage() {
    return (
        <div className="min-h-screen">
            {/* Section 1: Intro - White Background */}
            <section className="bg-white text-zinc-900 pt-36 pb-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase italic leading-tight mb-6">
                        Herramienta de <br />
                        <span className="text-[rgb(217,61,47)]">Bloqueo de Dispositivos</span>
                    </h1>
                    <div className="h-1.5 w-24 bg-[rgb(217,61,47)] mb-8 rounded-full"></div>
                    <p className="text-zinc-600 text-lg sm:text-xl leading-relaxed font-light max-w-4xl">
                        Nuestra <span className="text-zinc-900 font-bold italic text-xl">Herramienta de Bloqueo</span> permite administrar y proteger dispositivos de forma remota desde una plataforma centralizada. Diseñada para brindar control, seguridad y gestión eficiente durante todo el ciclo de uso del equipo.
                    </p>
                </div>
            </section>

            {/* Section 2: Security & Lock - Red Background */}
            <section className="bg-[rgb(217,61,47)] text-white py-14 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-black mb-6 italic uppercase tracking-tighter text-zinc-900">
                            Bloqueo y Protección
                        </h2>
                        <div className="space-y-6 text-white/95 text-lg leading-relaxed">
                            <p>
                                El sistema incluye <span className="font-bold underline decoration-zinc-900 underline-offset-4 decoration-2">bloqueo total del dispositivo</span>, bloqueo automático por fecha programada y bloqueo por cambio de SIM.
                            </p>
                            <p className="font-light">
                                Estas herramientas ayudan a prevenir usos no autorizados y permiten mantener un control estricto sobre cada uno de los equipos de su flota.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 bg-[rgb(31,31,31)]/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                            </div>
                            <span className="text-xl font-bold italic uppercase">Seguridad Activa</span>
                        </div>
                        <p className="text-white/80 italic">Prevención inmediata ante manipulaciones o vencimiento de plazos establecidos.</p>
                    </div>
                </div>
            </section>

            {/* Section 3: Management - White Background */}
            <section className="bg-white text-zinc-900 py-14 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                            <p className="text-zinc-600 text-lg leading-relaxed italic font-light">
                                "El administrador puede gestionar remotamente los dispositivos y autorizar la desinstalación del MDM una vez finalizado el período de uso o acuerdo establecido."
                            </p>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl sm:text-4xl font-black mb-6 italic uppercase tracking-tighter">
                                Gestión por <span className="text-[rgb(217,61,47)]">Administrador</span>
                            </h2>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                Control administrativo total para supervisar el estado de los equipos y ejecutar comandos críticos de forma centralizada sin necesidad de acceso físico al dispositivo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Compatibility - Red Background */}
            <section className="bg-[rgb(217,61,47)] text-white py-14 px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter mb-6 text-zinc-900 leading-tight">
                            Compatibilidad <br /> <span className="text-white">Multi-Plataforma</span>
                        </h2>
                        <p className="text-white/90 text-lg max-w-xl font-light leading-relaxed">
                            Nuestra tecnología es compatible con <span className="font-bold underline decoration-zinc-900 decoration-2 underline-offset-4">smartphones y Smart TV</span>, permitiendo aplicar políticas de control en distintos tipos de dispositivos desde una sola plataforma.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end gap-4 sm:gap-12 items-center">
                        <img src="/image/LockCell.png" alt="Smartphone Compatibility" className="w-36 sm:w-44 h-auto drop-shadow-2xl transition hover:scale-105 duration-500" />
                        <img src="/image/TVLock.png" alt="Smart TV Compatibility" className="w-52 sm:w-60 h-auto drop-shadow-2xl transition hover:scale-105 duration-500" />
                    </div>
                </div>
            </section>

            {/* Section 5: Functions Grid - White Background */}
            <section className="bg-white text-zinc-900 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-5xl font-black mb-12 italic uppercase tracking-tighter text-center">
                        Funciones <span className="text-[rgb(217,61,47)] font-black">Principales</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Bloqueo Total",
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            },
                            {
                                title: "Bloqueo por Fecha",
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            },
                            {
                                title: "Bloqueo por SIM",
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7zm6 4h4" /><path d="M10 4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4H10V4z" /></svg>
                            },
                            {
                                title: "Gestión Remota",
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
                            },
                            {
                                title: "Desinstalación Autorizada",
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                            },
                            {
                                title: "Celulares y Smart TV",
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /><path d="M2 12h3" /><path d="M19 12h3" /></svg>
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-6 p-6 bg-zinc-50 border border-zinc-100 rounded-2xl hover:border-[rgb(217,61,47)] transition-all duration-300 group">
                                <div className="text-[rgb(217,61,47)] transition-transform group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-sm font-black italic uppercase text-zinc-900 leading-tight">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Simple Outro - Red Background */}
            <section className="bg-[rgb(217,61,47)] text-white py-12 px-6 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <p className="text-xl sm:text-2xl font-black italic uppercase tracking-tight leading-tight italic">
                        Controle, asegure y optimice su gestión móvil.
                    </p>
                    <div className="h-1 w-16 bg-zinc-900 rounded-full"></div>
                </div>
            </section>
        </div>
    );
}
