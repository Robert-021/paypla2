"use client";

import { ScrollReveal } from "../../components/ScrollReveal";

export default function PlataformasPage() {
    const capabilities = [
        "Evaluar automáticamente la capacidad de pago de tus clientes",
        "Aprobar ventas a cuotas en minutos con reglas personalizadas",
        "Definir montos, plazos y condiciones de financiamiento",
        "Monitorear el comportamiento de pago de tu cartera de cuotas",
        "Automatizar recordatorios y procesos de cobranza",
        "Tomar decisiones basadas en datos financieros reales",
    ];

    const benefits = [
        {
            num: "01",
            title: "Más ventas",
            desc: "Ofrece financiamiento a más clientes y aumenta tus oportunidades de negocio.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
                </svg>
            )
        },
        {
            num: "02",
            title: "Menos riesgo",
            desc: "Evalúa a cada cliente antes de otorgar el pago a cuotas y reduce la morosidad.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
                </svg>
            )
        },
        {
            num: "03",
            title: "Automatización total",
            desc: "Olvídate de procesos manuales y gestiona todo desde una sola plataforma.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path d="M11 10.27 7 3.34" /><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M22 12h-2" /><path d="M2 12h2" /><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m17 3.34-1 1.73" /><path d="m11 13.73-4 6.93" />
                </svg>
            )
        },
        {
            num: "04",
            title: "Control de tu cartera",
            desc: "Visualiza el estado de todas tus ventas a cuotas y toma decisiones estratégicas.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
            )
        },
    ];

    return (
        <div className="min-h-screen">

            {/* ─── HERO ─── */}
            <section className="bg-white text-zinc-900 pt-36 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/5 h-full bg-zinc-50 -skew-x-6 origin-top-right pointer-events-none" />
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[rgb(217,61,47)]" />

                {/* Background Image with controlled opacity - Placed after accents to stay on top of them */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
                    style={{
                        backgroundImage: 'url("/image/PlataformaCredito.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 35%',
                    }}
                />

                <div className="max-w-5xl mx-auto relative z-10 pl-6">
                    <ScrollReveal>
                        <span className="inline-block bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                            Gestión de Ventas a Cuotas Inteligente
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.88] mb-8">
                            Convierte tu<br />negocio en una<br />
                            <span className="text-[rgb(217,61,47)]">financiera</span>
                        </h1>
                        <div className="h-1.5 w-20 bg-zinc-900 mb-8 rounded-full" />
                        <p className="text-zinc-600 text-lg sm:text-xl leading-relaxed font-light max-w-2xl">
                            Nuestra plataforma permite que cualquier empresa pueda ofrecer financiamiento a sus clientes de forma{" "}
                            <span className="font-bold text-zinc-900">segura, automatizada y basada en datos</span>.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── INTRO + IMAGE ─── */}
            <section className="bg-zinc-900 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    <ScrollReveal direction="right">
                        <div>
                            <p className="text-white/80 text-lg font-light leading-relaxed mb-6">
                                Analizamos el perfil financiero de cada cliente, evaluamos su capacidad de pago y gestionamos todo el{" "}
                                <span className="text-white font-semibold">ciclo de venta a cuotas</span>, desde la solicitud hasta el seguimiento y la cobranza.
                            </p>
                            <p className="text-white/80 text-lg font-light leading-relaxed">
                                Con nuestra tecnología podrás{" "}
                                <span className="text-[rgb(217,61,47)] font-bold">vender más</span>,{" "}
                                <span className="text-[rgb(217,61,47)] font-bold">reducir riesgos</span> y tener control total de su cartera de ventas a cuotas.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Existing product image */}
                    <ScrollReveal direction="left">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex items-center justify-center hover:border-[rgb(217,61,47)] transition-colors duration-500 w-full">
                            <img
                                src="/image/CreditoAnalisis.png"
                                alt="Plataforma de Ventas a Cuotas"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── CAPABILITIES ─── */}
            <section className="bg-[rgb(217,61,47)] text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "28px 28px"
                    }}
                />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
                        <ScrollReveal direction="right">
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-tight mb-4">
                                    ¿Qué puedes hacer<br />
                                    <span className="text-white">con nuestra plataforma?</span>
                                </h2>
                                <p className="text-white/80 font-light text-lg mt-4">
                                    Todo lo que necesitas para gestionar ventas a cuotas de principio a fin, en un solo lugar.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="flex flex-col gap-3">
                            {capabilities.map((cap, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} direction="left" className="h-full">
                                    <div className="flex items-start gap-4 bg-zinc-900/20 border border-white/15 rounded-xl px-5 py-4 hover:bg-zinc-900/30 hover:border-white/30 transition-all duration-300 backdrop-blur-sm h-full w-full">
                                        <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <span className="text-white/90 text-sm font-light leading-relaxed">{cap}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* ── IMAGE PLACEHOLDER — Dashboard / panel de créditos ──
                    <ScrollReveal>
                        <div className="mt-14 border-2 border-dashed border-white/25 rounded-3xl flex flex-col items-center justify-center py-16">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-30">
                                <rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                            </svg>
                            <p className="text-white/30 text-sm font-bold uppercase tracking-widest text-center px-6">Imagen: captura del panel de ventas a cuotas o dashboard de cartera</p>
                        </div>
                    </ScrollReveal> */}
                </div>
            </section>

            {/* ─── BENEFITS ─── */}
            <section className="bg-white text-zinc-900 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-14">
                            Beneficios para <span className="text-[rgb(217,61,47)]">tu empresa</span>
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {benefits.map((b, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                                <div className="group flex gap-6 p-7 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-[rgb(217,61,47)] hover:bg-white hover:shadow-lg hover:shadow-red-50 transition-all duration-300 h-full">
                                    <span className="text-4xl font-black text-zinc-100 group-hover:text-[rgb(217,61,47)] transition-colors duration-300 shrink-0 leading-none pt-1">
                                        {b.num}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-xl bg-[rgb(217,61,47)]/10 text-[rgb(217,61,47)] flex items-center justify-center group-hover:bg-[rgb(217,61,47)] group-hover:text-white transition-all duration-300">
                                                {b.icon}
                                            </div>
                                            <h3 className="font-black uppercase tracking-tight text-zinc-900 text-sm">{b.title}</h3>
                                        </div>
                                        <p className="text-zinc-500 text-sm font-light leading-relaxed">{b.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TECHNOLOGY BLOCK ─── */}
            <section className="bg-zinc-900 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center overflow-hidden">
                    <ScrollReveal direction="right">
                        <div>
                            <span className="inline-block border border-white/20 text-white/50 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                                Análisis · Automatización · Gestión
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
                                Tecnología para<br />vender a cuotas<br />
                                <span className="text-[rgb(217,61,47)]">con seguridad</span>
                            </h2>
                            <p className="text-white/70 text-lg font-light leading-relaxed">
                                Nuestra solución integra análisis de datos, automatización y herramientas de gestión financiera para que puedas otorgar ventas a cuotas con mayor confianza.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Mini metrics visual */}
                    <ScrollReveal direction="left">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 w-full">
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Resumen de cartera</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { label: "Ventas a cuotas activas", val: "1,284", delta: "+12%" },
                                    { label: "Tasa de pago", val: "94.3%", delta: "+2.1%" },
                                    { label: "Aprobados hoy", val: "37", delta: "+8%" },
                                    { label: "En cobranza", val: "5.7%", delta: "-0.3%" },
                                ].map((m, i) => (
                                    <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                                        <p className="text-white/40 text-xs font-light mb-1">{m.label}</p>
                                        <p className="text-white text-2xl font-black">{m.val}</p>
                                        <p className={`text-xs font-bold mt-1 ${m.delta.startsWith('+') ? 'text-green-400' : 'text-[rgb(217,61,47)]'}`}>{m.delta}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                                <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Estado general</span>
                                <span className="text-green-400 font-black uppercase text-sm">Cartera saludable</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── CLOSING CTA ─── */}
            <section className="bg-[rgb(217,61,47)] py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-zinc-900/10 pointer-events-none" />
                <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-zinc-900/10 pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-zinc-900 leading-tight mb-6">
                            Impulsa tus ventas.<br />
                            <span className="text-white">Haz crecer tu empresa.</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-zinc-900 rounded-full mx-auto mb-8" />
                        <p className="text-white/90 text-lg sm:text-xl font-light max-w-xl mx-auto leading-relaxed">
                            Una plataforma diseñada para gestionar ventas a cuotas de forma inteligente, proteger tu negocio y escalar sin límites.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

        </div>
    );
}