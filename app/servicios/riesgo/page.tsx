import { ScrollReveal } from "../../components/ScrollReveal";

export default function RiesgoPage() {
    const indicators = [
        {
            num: "01",
            title: "Historial Crediticio",
            desc: "Revisamos el comportamiento de pago del cliente para identificar si ha cumplido correctamente con créditos anteriores.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                </svg>
            )
        },
        {
            num: "02",
            title: "Capacidad de Pago",
            desc: "Analizamos ingresos, gastos y patrones financieros para estimar si el cliente puede asumir nuevas obligaciones.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            )
        },
        {
            num: "03",
            title: "Nivel de Endeudamiento",
            desc: "Evaluamos cuántas deudas activas tiene el cliente y si existe riesgo de sobreendeudamiento.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
                </svg>
            )
        },
        {
            num: "04",
            title: "Comportamiento Financiero",
            desc: "Detectamos patrones de consumo y transacciones que ayudan a entender la estabilidad financiera del solicitante.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                </svg>
            )
        },
        {
            num: "05",
            title: "Alertas de Riesgo y Fraude",
            desc: "Identificamos señales que podrían indicar posibles intentos de fraude o perfiles de alto riesgo antes de aprobar.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
            )
        },
    ];

    const outcomes = [
        { label: "Aprueba créditos", sub: "a clientes con alta probabilidad de pago" },
        { label: "Evita perfiles", sub: "que puedan afectar tu cartera" },
        { label: "Genera perfiles", sub: "de riesgo claros y confiables" },
    ];

    return (
        <div className="min-h-screen">

            {/* ─── HERO ─── */}
            <section className="bg-white text-zinc-900 pt-36 pb-16 px-6 relative overflow-hidden">
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-2/5 h-full bg-zinc-50 -skew-x-6 origin-top-right pointer-events-none" />
                {/* Red vertical stripe */}
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[rgb(217,61,47)]" />

                <div className="max-w-5xl mx-auto relative z-10 pl-6">
                    <ScrollReveal>
                        <span className="inline-block bg-[rgb(217,61,47)] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                            Análisis inteligente de crédito
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.88] mb-8">
                            Indicadores<br />
                            de Riesgo<br />
                            <span className="text-[rgb(217,61,47)]">Inteligentes</span>
                        </h1>
                        <div className="h-1.5 w-20 bg-zinc-900 mb-8 rounded-full" />
                        <p className="text-zinc-600 text-lg sm:text-xl leading-relaxed font-light max-w-2xl">
                            Nuestra plataforma utiliza indicadores clave para analizar si un cliente tiene la{" "}
                            <span className="font-bold text-zinc-900">capacidad real de pagar un crédito</span>, ayudando a tomar decisiones seguras antes de otorgar financiamiento.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── INTRO STAT BANNER ─── */}
            <section className="bg-zinc-900 text-white py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                { value: "5", label: "Indicadores clave de riesgo" },
                                { value: "360°", label: "Perfil financiero del cliente" },
                                { value: "100%", label: "Decisiones basadas en datos" },
                            ].map((s, i) => (
                                <div key={i} className="bg-zinc-900 px-8 py-8 flex flex-col items-center text-center">
                                    <span className="text-5xl font-black text-[rgb(217,61,47)] mb-1">{s.value}</span>
                                    <span className="text-white/60 text-sm font-light uppercase tracking-widest">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── INDICATORS LIST ─── */}
            <section className="bg-white text-zinc-900 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-14">
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight">
                                Principales indicadores<br />
                                <span className="text-[rgb(217,61,47)]">que analizamos</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col gap-4">
                        {indicators.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div
                                    className="group grid grid-cols-[4rem_1px_1fr] items-center gap-6 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-[rgb(217,61,47)] hover:bg-white hover:shadow-lg hover:shadow-red-50 transition-all duration-300"
                                >
                                    {/* Number */}
                                    <span className="text-3xl font-black text-zinc-200 group-hover:text-[rgb(217,61,47)] transition-colors duration-300 text-right">
                                        {item.num}
                                    </span>
                                    {/* Divider */}
                                    <div className="h-12 w-px bg-zinc-200 group-hover:bg-[rgb(217,61,47)] transition-colors duration-300" />
                                    {/* Content */}
                                    <div className="flex items-start gap-5">
                                        <div className="shrink-0 w-11 h-11 rounded-xl bg-[rgb(217,61,47)]/10 text-[rgb(217,61,47)] flex items-center justify-center group-hover:bg-[rgb(217,61,47)] group-hover:text-white transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-black uppercase tracking-tight text-zinc-900 text-base mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-zinc-500 text-sm font-light leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── HOW IT WORKS — Red section ─── */}
            <section className="bg-[rgb(217,61,47)] text-white py-20 px-6 relative overflow-hidden">
                {/* Subtle dot grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "28px 28px"
                    }}
                />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                        <ScrollReveal direction="right">
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-tight mb-6">
                                    Decisiones de<br />
                                    <span className="text-white">crédito más seguras</span>
                                </h2>
                                <p className="text-white/90 text-lg font-light leading-relaxed">
                                    Con estos indicadores, nuestra tecnología genera{" "}
                                    <span className="font-bold underline decoration-zinc-900 decoration-2 underline-offset-4">
                                        perfiles de riesgo claros y confiables
                                    </span>, permitiendo aprobar créditos a clientes con mayor probabilidad de pago y evitar aquellos que puedan afectar tu cartera.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="flex flex-col gap-4">
                            {outcomes.map((o, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} direction="left">
                                    <div className="flex items-center gap-5 bg-zinc-900/20 border border-white/20 rounded-2xl px-6 py-5 backdrop-blur-sm h-full">
                                        <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-black uppercase text-white text-sm block">{o.label}</span>
                                            <span className="text-white/70 text-xs font-light">{o.sub}</span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── TECHNOLOGY BLOCK ─── */}
            <section className="bg-zinc-900 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
                    <ScrollReveal direction="right">
                        <div>
                            <span className="inline-block border border-white/20 text-white/60 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                                Tecnología & Análisis de Datos
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
                                Tu cartera,<br /><span className="text-[rgb(217,61,47)]">protegida</span>
                            </h2>
                            <p className="text-white/70 text-lg font-light leading-relaxed">
                                A través de tecnología y análisis de datos, ayudamos a las empresas a tomar decisiones seguras antes de otorgar financiamiento, construyendo una cartera de crédito más saludable y rentable.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Mini visual: risk meter */}
                    <ScrollReveal direction="left">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 w-full">
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Perfil de riesgo del cliente</p>
                            <div className="flex flex-col gap-4">
                                {[
                                    { label: "Historial de pago", pct: 88, color: "#22c55e" },
                                    { label: "Capacidad de pago", pct: 72, color: "#22c55e" },
                                    { label: "Endeudamiento", pct: 44, color: "#eab308" },
                                    { label: "Comportamiento", pct: 91, color: "#22c55e" },
                                    { label: "Alertas de fraude", pct: 15, color: "rgb(217,61,47)" },
                                ].map((bar, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-white/60 text-xs font-light">{bar.label}</span>
                                            <span className="text-white/40 text-xs font-bold">{bar.pct}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full"
                                                style={{ width: `${bar.pct}%`, backgroundColor: bar.color }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                                <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Resultado</span>
                                <span className="text-green-400 font-black uppercase text-sm">Riesgo Bajo — Aprobar</span>
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
                            Más ventas,<br />menos riesgo.
                        </h2>
                        <div className="h-1.5 w-20 bg-white rounded-full mx-auto mb-8" />
                        <p className="text-white/90 text-lg sm:text-xl font-light max-w-xl mx-auto leading-relaxed">
                            Una cartera de crédito más saludable para tu negocio, respaldada por análisis inteligente en cada decisión.
                        </p>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}