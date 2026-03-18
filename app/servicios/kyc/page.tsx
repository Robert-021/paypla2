import Image from "next/image";
import { ScrollReveal } from "../../components/ScrollReveal";

export default function KYCPage() {
    const steps = [
        {
            num: "01",
            title: "Verificación de documentos",
            desc: "El cliente sube su documento de identidad y el sistema lo valida automáticamente.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" />
                </svg>
            )
        },
        {
            num: "02",
            title: "Validación de datos personales",
            desc: "Cruzamos la información proporcionada con fuentes confiables para confirmar su veracidad.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
            )
        },
        {
            num: "03",
            title: "Análisis antifraude",
            desc: "Detectamos inconsistencias, documentos alterados o señales de suplantación de identidad.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
                </svg>
            )
        },
        {
            num: "04",
            title: "Identificación digital segura",
            desc: "Todo el proceso se realiza en minutos, de forma automatizada y sin necesidad de presencia física.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" />
                </svg>
            )
        },
    ];

    const benefits = [
        {
            title: "Prevención de fraude",
            desc: "Asegúrate de que cada cliente es legítimo antes de otorgar el pago a cuotas o servicios.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
            )
        },
        {
            title: "Onboarding digital rápido",
            desc: "Registra nuevos clientes sin procesos presenciales ni papeleo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /><line x1="9" y1="15" x2="15" y2="15" />
                </svg>
            )
        },
        {
            title: "Mayor seguridad financiera",
            desc: "Reduce riesgos legales y protege tu negocio de actividades ilegales.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Mejor experiencia para el cliente",
            desc: "Procesos simples, rápidos y totalmente digitales desde cualquier dispositivo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            )
        },
    ];

    return (
        <div className="min-h-screen">

            {/* ─── HERO ─── */}
            <section className="bg-zinc-900 text-white pt-36 pb-20 px-6 relative overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/image/KYC.jpg"
                    alt="KYC Digital Background"
                    fill
                    className="object-cover opacity-30 pointer-events-none"
                    priority
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-zinc-900/20 z-0 pointer-events-none" />

                {/* Red bottom border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[rgb(217,61,47)] z-10" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end gap-12">
                        <ScrollReveal direction="right" className="flex-1">
                            <div>
                                <span className="inline-block border border-[rgb(217,61,47)] text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                                    Know Your Customer
                                </span>
                                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.88] mb-8">
                                    Conoce a<br />tu cliente.<br />
                                    <span className="text-[rgb(217,61,47)]">Protege tu</span><br />
                                    <span className="text-[rgb(217,61,47)]">negocio.</span>
                                </h1>
                                <p className="text-white/70 text-lg font-light leading-relaxed max-w-lg">
                                    Verifica la identidad de tus clientes de forma{" "}
                                    <span className="text-white font-semibold">100% digital</span>, rápida y segura, cumpliendo con los estándares del sector financiero.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ─── WHAT IS KYC ─── */}
            <section className="bg-white text-zinc-900 py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    <ScrollReveal direction="right">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
                                ¿Qué es el <span className="text-[rgb(217,61,47)]">KYC</span>?
                            </h2>
                            <div className="h-1.5 w-16 bg-[rgb(217,61,47)] mb-8 rounded-full" />
                            <p className="text-zinc-600 text-lg leading-relaxed font-light mb-6">
                                El KYC es el proceso que permite{" "}
                                <span className="font-bold text-zinc-900">verificar la identidad de tus clientes</span>{" "}
                                antes de iniciar una relación comercial o aprobar un pago a cuotas.
                            </p>
                            <p className="text-zinc-600 text-lg leading-relaxed font-light">
                                Su objetivo es garantizar que las personas son quienes dicen ser, reduciendo riesgos de fraude, suplantación de identidad y actividades ilegales.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* ── IMAGE PLACEHOLDER 2 — Proceso de escaneo / selfie con documento ── */}
                    <ScrollReveal direction="left">
                        <div className="border-2 border-dashed border-zinc-200 rounded-3xl flex flex-col items-center justify-center py-20 bg-zinc-50">
                            <img
                                src="/image/KYCValidate.png"
                                alt="Plataforma de Ventas a Validacion KYC"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── HOW IT WORKS ─── */}
            <section className="bg-[rgb(217,61,47)] text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "28px 28px"
                    }}
                />
                <div className="max-w-5xl mx-auto relative z-10">
                    <ScrollReveal>
                        <div className="mb-14">
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-tight">
                                ¿Cómo <span className="text-white">funciona?</span>
                            </h2>
                            <p className="text-white/80 font-light mt-4 max-w-xl">
                                Todo el proceso se realiza en minutos, de forma automatizada, sin presencia física ni papeleo.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {steps.map((s, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                                <div className="group bg-zinc-900/20 border border-white/20 rounded-2xl p-6 hover:bg-zinc-900/30 hover:border-white/40 transition-all duration-300 backdrop-blur-sm h-full">
                                    <div className="flex items-start gap-5">
                                        <span className="text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors shrink-0">
                                            {s.num}
                                        </span>
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                                                    {s.icon}
                                                </div>
                                                <h3 className="font-black uppercase tracking-tight text-sm">{s.title}</h3>
                                            </div>
                                            <p className="text-white/70 text-sm font-light leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((b, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                                <div className="group flex gap-5 p-7 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-[rgb(217,61,47)] hover:bg-white hover:shadow-lg hover:shadow-red-50 transition-all duration-300 h-full">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[rgb(217,61,47)]/10 text-[rgb(217,61,47)] flex items-center justify-center group-hover:bg-[rgb(217,61,47)] group-hover:text-white transition-all duration-300">
                                        {b.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase tracking-tight text-zinc-900 text-sm mb-2">{b.title}</h3>
                                        <p className="text-zinc-500 text-sm font-light leading-relaxed">{b.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TRUST BLOCK ─── */}
            <section className="bg-zinc-900 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center overflow-hidden">
                    {/* ── IMAGE PLACEHOLDER 4 — Ícono de seguridad / escudo digital / verificado ── */}
                    <ScrollReveal direction="right">
                        <div className="border-2 border-dashed border-white/15 rounded-3xl flex flex-col items-center justify-center py-20 bg-white/5 w-full">
                            <img
                                src="/image/CheckKYC.png"
                                alt="Plataforma de Ventas a Validacion KYC" />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="left">
                        <div>
                            <span className="inline-block border border-white/20 text-white/50 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                                Tecnología KYC Digital
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
                                Identifica clientes<br /><span className="text-[rgb(217,61,47)]">con confianza</span>
                            </h2>
                            <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                                Con nuestra tecnología de KYC digital, puedes validar la identidad de tus clientes, reducir fraudes y otorgar el pago a cuotas con mayor seguridad, mientras haces crecer tu negocio de forma confiable.
                            </p>

                            {/* Checklist */}
                            <div className="flex flex-col gap-3">
                                {[
                                    "Verificación de documentos de identidad",
                                    "Validación de datos personales",
                                    "Análisis antifraude automatizado",
                                    "Procesos de identificación digital seguros",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[rgb(217,61,47)] flex items-center justify-center shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <span className="text-white/80 text-sm font-light">{item}</span>
                                    </div>
                                ))}
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
                            Valida con confianza.<br />
                            <span className="text-white">Crece con seguridad.</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-zinc-900 rounded-full mx-auto mb-8" />
                        <p className="text-white/90 text-lg sm:text-xl font-light max-w-xl mx-auto leading-relaxed">
                            KYC digital, rápido y 100% automatizado para que tu negocio avance sin riesgos.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

        </div>
    );
}
