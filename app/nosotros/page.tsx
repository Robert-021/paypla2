import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "../components/ScrollReveal";

const values = [
    {
        num: "01",
        title: "Inclusión financiera",
        desc: "Creamos modelos de financiamiento flexibles para personas sin historial crediticio o acceso a la banca tradicional.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    },
    {
        num: "02",
        title: "Tecnología accesible",
        desc: "Reducimos las brechas de acceso para que un teléfono inteligente sea una herramienta real para estudiar, trabajar y emprender.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="20" x="5" y="2" rx="2" /><path d="M12 18h.01" />
            </svg>
        )
    },
    {
        num: "03",
        title: "Seguridad y confianza",
        desc: "Desarrollamos herramientas de control, KYC y análisis de riesgo para que cada venta financiada esté respaldada.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
            </svg>
        )
    },
    {
        num: "04",
        title: "Innovación continua",
        desc: "Seguimos desarrollando soluciones que generan nuevas oportunidades e impulsan el crecimiento de nuestras comunidades.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path d="M11 10.27 7 3.34" /><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M22 12h-2" /><path d="M2 12h2" /><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m17 3.34-1 1.73" /><path d="m11 13.73-4 6.93" />
            </svg>
        )
    },
];

const linkedServices = [
    { label: "Bloqueo de Dispositivos", tag: "MDM", href: "/servicios/mdm" },
    { label: "Indicadores de Riesgo", tag: "RIESGO", href: "/servicios/riesgo" },
    { label: "KYC — Validación de Identidad", tag: "KYC", href: "/servicios/kyc" },
    { label: "Plataforma de Ventas a Cuotas", tag: "A CUOTAS", href: "/servicios/plataformas" },
];

export default function NosotrosPage() {
    return (
        <div className="min-h-screen">

            {/* ─── HERO ─── */}
            <section className="bg-[rgb(31,31,31)] text-white pt-36 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 40px)",
                    }}
                />
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[rgb(217,61,47)]" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-[rgb(217,61,47)]" />

                <div className="max-w-5xl mx-auto relative z-10 pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                        <ScrollReveal direction="right">
                            <div>
                                <span className="inline-block border border-[rgb(217,61,47)] text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                                    Empresa ecuatoriana · Desde 2022
                                </span>
                                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
                                    Sobre<br />
                                    <span className="text-[rgb(217,61,47)]">Nosotros</span>
                                </h1>
                                <div className="h-1.5 w-20 bg-[rgb(217,61,47)] mb-8 rounded-full" />
                                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                                    Nacimos con una misión clara:{" "}
                                    <span className="text-white font-semibold">hacer que la tecnología y el financiamiento sean accesibles para todos</span>.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Logo / imagen principal */}
                        <ScrollReveal direction="left">
                            <div className="relative flex justify-center">
                                <div className="relative w-full max-w-sm aspect-square">
                                    <Image
                                        src="/image/PayPlaysito.png"
                                        alt="PAY&PLAY"
                                        fill
                                        className="object-contain drop-shadow-2xl transition duration-500"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ─── ORIGIN STORY ─── */}
            <section className="bg-white text-zinc-900 py-20 px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    <ScrollReveal direction="right">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
                                ¿Por qué<br /><span className="text-[rgb(217,61,47)]">PAY&PLAY?</span>
                            </h2>
                            <div className="h-1.5 w-16 bg-[rgb(217,61,47)] mb-8 rounded-full" />
                            <p className="text-zinc-600 text-lg leading-relaxed font-light mb-6">
                                En un mundo donde la tecnología abre puertas a nuevas oportunidades, muchas personas aún encuentran barreras para acceder a ella. Fue a partir de esta realidad que en{" "}
                                <span className="font-bold text-zinc-900">2022 nació PAY&PLAY</span>.
                            </p>
                            <p className="text-zinc-600 text-lg leading-relaxed font-light">
                                Después de la pandemia, entendimos que estar conectado ya no es un lujo, sino una necesidad. Sin embargo, muchas personas no cuentan con historial crediticio o acceso a la banca tradicional. Por eso creamos{" "}
                                <span className="font-bold text-zinc-900">modelos de financiamiento flexibles e innovadores</span>, pensados para adaptarse a la reality de cada cliente.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Quote callout */}
                    <ScrollReveal direction="left">
                        <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(217,61,47)] rounded-l-3xl" />
                            <p className="text-zinc-500 text-5xl font-black leading-none mb-4 text-[rgb(217,61,47)]">"</p>
                            <p className="text-zinc-700 text-xl font-light leading-relaxed">
                                Un teléfono inteligente puede ser más que un dispositivo: puede ser una herramienta para estudiar, trabajar, emprender y mantenerse conectado con el mundo.
                            </p>
                            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-zinc-400">— PAY&PLAY, 2022</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── VALUES ─── */}
            <section className="bg-[rgb(217,61,47)] text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "28px 28px"
                    }}
                />
                <div className="max-w-5xl mx-auto relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-tight mb-14">
                            Nuestros <span className="text-white">valores</span>
                        </h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {values.map((v, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                                <div className="group flex gap-5 bg-zinc-900/20 border border-white/20 rounded-2xl p-6 hover:bg-zinc-900/30 hover:border-white/40 transition-all duration-300 backdrop-blur-sm h-full">
                                    <span className="text-4xl font-black text-white/15 group-hover:text-white/30 transition-colors shrink-0 leading-none pt-1">
                                        {v.num}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                                                {v.icon}
                                            </div>
                                            <h3 className="font-black uppercase tracking-tight text-sm">{v.title}</h3>
                                        </div>
                                        <p className="text-white/70 text-sm font-light leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── MISSION ─── */}
            <section className="bg-zinc-900 text-white py-20 px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    <ScrollReveal direction="right">
                        <div>
                            <span className="inline-block border border-white/20 text-white/50 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                                Nuestro compromiso
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
                                Impulsamos la<br />
                                <span className="text-[rgb(217,61,47)]">inclusión financiera</span>
                            </h2>
                            <p className="text-white/70 text-lg font-light leading-relaxed">
                                Nuestro compromiso es seguir desarrollando soluciones tecnológicas que reduzcan las brechas de acceso y generen nuevas oportunidades, impulsando la inclusión financiera y el crecimiento de nuestras comunidades.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { val: "2022", label: "Año de fundación" },
                            { val: "ECU", label: "Empresa ecuatoriana" },
                            { val: "4", label: "Soluciones activas" },
                            { val: "360°", label: "Gestión de ventas a cuotas" },
                        ].map((s, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} direction="left" className="h-full">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full w-full">
                                    <span className="text-4xl font-black text-[rgb(217,61,47)] mb-1">{s.val}</span>
                                    <span className="text-white/50 text-xs font-light uppercase tracking-widest">{s.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── OUR SOLUTIONS BRIDGE ─── */}
            <section className="bg-white text-zinc-900 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight">
                                Lo que<br /><span className="text-[rgb(217,61,47)]">construimos</span>
                            </h2>
                            <Link
                                href="/servicios"
                                className="shrink-0 flex items-center gap-2 border border-zinc-200 text-zinc-500 hover:border-[rgb(217,61,47)] hover:text-[rgb(217,61,47)] text-sm font-bold uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 group"
                            >
                                Ver todos los servicios
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </Link>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {linkedServices.map((s, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                                <Link href={s.href}
                                    className="group flex items-center justify-between gap-4 p-6 bg-zinc-50 border border-zinc-100 rounded-2xl hover:border-[rgb(217,61,47)] hover:bg-white hover:shadow-lg hover:shadow-red-50 transition-all duration-300 w-full h-full"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[rgb(217,61,47)] shrink-0" />
                                        <div>
                                            <span className="text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest block mb-0.5">{s.tag}</span>
                                            <span className="font-black uppercase tracking-tight text-zinc-900 text-sm">{s.label}</span>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-[rgb(217,61,47)] group-hover:translate-x-1 transition-all duration-200 shrink-0">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="bg-[rgb(217,61,47)] py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-zinc-900/10 pointer-events-none" />
                <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-zinc-900/10 pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-zinc-900 leading-tight mb-6">
                            Tecnología para<br />
                            <span className="text-white">todos.</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-zinc-900 rounded-full mx-auto mb-8" />
                        <p className="text-white/90 text-lg sm:text-xl font-light max-w-xl mx-auto leading-relaxed mb-10">
                            Conoce cómo PAY&PLAY puede transformar tu negocio con soluciones de ventas a cuotas, seguridad y gestión financiera.
                        </p>
                        <Link
                            href="/servicios"
                            className="bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block"
                        >
                            Nuestros Servicios
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

        </div>
    );
}