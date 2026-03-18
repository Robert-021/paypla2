import Image from "next/image";
import { ScrollReveal } from "../../components/ScrollReveal";

export default function MDMPage() {
    const features = [
        {
            title: "Bloqueo automático por falta de pago",
            desc: "Configura fechas límite y el sistema bloqueará el dispositivo automáticamente si el cliente no cumple con sus cuotas.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            title: "Detección de cambio de SIM",
            desc: "El sistema detecta cuando se cambia la tarjeta SIM original y aplica las medidas de seguridad configuradas automáticamente.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7zm6 4h4" /><path d="M10 4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4H10V4z" />
                </svg>
            )
        },
        {
            title: "Ubicación del dispositivo",
            desc: "Consulta la ubicación geográfica del equipo directamente desde el panel administrativo en tiempo real.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
            )
        },
        {
            title: "Panel de control centralizado",
            desc: "Administra todos los dispositivos desde una sola plataforma fácil de usar, sin importar la cantidad de equipos.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
            )
        },
        {
            title: "Protección contra desinstalación",
            desc: "La aplicación solo puede ser desinstalada con autorización del administrador, evitando manipulaciones del sistema.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
            )
        },
        {
            title: "Seguro contra formateo",
            desc: "Si el usuario intenta restablecer el dispositivo, el sistema solicitará el correo del superadministrador para completar el proceso.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
            )
        },
        {
            title: "Compatible con Android y Smart TVs",
            desc: "Gestiona celulares Android y televisores inteligentes desde el mismo sistema centralizado.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="20" x="5" y="2" rx="2" /><path d="M12 18h.01" />
                </svg>
            )
        }
    ];

    const benefits = [
        {
            title: "Protege tus ventas a cuotas",
            desc: "Reduce el riesgo de pérdidas bloqueando dispositivos en caso de incumplimiento.",
            num: "01"
        },
        {
            title: "Mayor control y seguridad",
            desc: "Evita manipulaciones del dispositivo y protege la app contra desinstalaciones o formateos no autorizados.",
            num: "02"
        },
        {
            title: "Disminuye el fraude",
            desc: "Detecta cambios no autorizados como la sustitución de SIM.",
            num: "03"
        },
        {
            title: "Recupera tu inversión",
            desc: "El bloqueo del dispositivo incentiva al cliente a cumplir con sus pagos.",
            num: "04"
        },
        {
            title: "Escala tu negocio con seguridad",
            desc: "Vende más dispositivos financiados sin aumentar el riesgo.",
            num: "05"
        }
    ];

    return (
        <div className="min-h-screen">

            {/* ─── HERO ─── */}
            <section className="bg-white text-zinc-900 pt-36 pb-16 px-6 relative overflow-hidden">
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -skew-x-6 origin-top-right pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="right">
                            <div className="flex flex-col items-start">
                                <div className="inline-block bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                                    Tecnología de Control Remoto
                                </div>
                                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                                    Sistema de<br />
                                    Bloqueo<br />
                                    <span className="text-[rgb(217,61,47)]">Inteligente</span>
                                </h1>
                                <div className="h-1.5 w-20 bg-[rgb(217,61,47)] mb-8 rounded-full" />
                                <p className="text-zinc-600 text-lg leading-relaxed font-light max-w-md">
                                    Protege los equipos vendidos a cuotas y reduce el riesgo de pérdidas por falta de pago. Control total desde una plataforma centralizada para <span className="font-bold text-zinc-900">celulares Android y Smart TVs</span>.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* ── IMAGE 1 — Hero visual / producto principal ── */}
                        <ScrollReveal delay={0.2} direction="left">
                            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
                                <Image
                                    src="/image/image_logo.png"
                                    alt="Sistema MDM PayPlay"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ─── INTRO PARAGRAPH ─── */}
            <section className="bg-zinc-900 text-white py-16 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="right">
                        <div>
                            <p className="text-lg sm:text-xl leading-relaxed text-white/80 font-light">
                                A través de una plataforma de administración centralizada, puedes{" "}
                                <span className="text-[rgb(217,61,47)] font-bold">controlar, monitorear y bloquear</span>{" "}
                                dispositivos de forma remota, asegurando que cada venta financiada esté respaldada.
                            </p>
                            <p className="mt-6 text-lg leading-relaxed text-white/80 font-light">
                                La solución está diseñada para <span className="text-white font-semibold">celulares Android y Smart TVs</span>, brindando a tu negocio seguridad, control y protección en cada dispositivo.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="flex flex-col gap-4">
                        {["Tiendas de tecnología", "Distribuidores", "Empresas de venta a cuotas"].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} direction="left">
                                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 hover:border-[rgb(217,61,47)] transition-all duration-300 w-full">
                                    <div className="w-2 h-2 rounded-full bg-[rgb(217,61,47)] shrink-0" />
                                    <span className="text-white/90 font-light text-lg">{item}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FEATURES ─── */}
            <section className="bg-white text-zinc-900 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
                            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight">
                                Funciones<br /><span className="text-[rgb(217,61,47)]">Principales</span>
                            </h2>
                            <p className="text-zinc-500 font-light max-w-xs text-right hidden sm:block">
                                Todo lo que necesitas para proteger tu flota de dispositivos financiados.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {features.map((f, i) => (
                            <ScrollReveal key={i} delay={i * 0.05} className="h-full">
                                <div
                                    className="group flex gap-5 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-[rgb(217,61,47)] hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-red-50 h-full"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[rgb(217,61,47)]/10 text-[rgb(217,61,47)] flex items-center justify-center group-hover:bg-[rgb(217,61,47)] group-hover:text-white transition-all duration-300">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-1">{f.title}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed font-light">{f.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── COMPATIBILITY ─── */}
            <section className="bg-[rgb(217,61,47)] text-white py-20 px-6 overflow-hidden relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                    backgroundSize: "20px 20px"
                }} />
                <div className="max-w-5xl mx-auto relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
                            Compatibilidad
                        </h2>
                        <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-12">
                            Multi-Plataforma
                        </h3>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        {/* Android card */}
                        <ScrollReveal direction="right" className="h-full">
                            <div className="bg-zinc-900/20 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md h-full w-full flex flex-col items-center text-center group hover:bg-zinc-900/30 transition-colors duration-500">
                                <div className="flex flex-col items-center gap-4 mb-10 w-full">
                                    <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" /><path d="M12 18h.01" /></svg>
                                    </div>
                                    <span className="text-2xl font-black uppercase tracking-tight">Celulares Android</span>
                                </div>
                                {/* ── IMAGE 3 — Imagen de celular con sistema de bloqueo ── */}
                                <div className="flex-1 flex items-center justify-center w-full mb-10">
                                    <div className="relative w-full h-80 transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src="/image/LockCell.png"
                                            alt="Android Device Lock"
                                            fill
                                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                                        />
                                    </div>
                                </div>
                                <p className="text-white/60 font-light text-sm max-w-[200px] leading-relaxed">Control total sobre smartphones Android financiados.</p>
                            </div>
                        </ScrollReveal>

                        {/* Smart TV card */}
                        <ScrollReveal direction="left" className="h-full">
                            <div className="bg-zinc-900/20 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md h-full w-full flex flex-col items-center text-center group hover:bg-zinc-900/30 transition-colors duration-500">
                                <div className="flex flex-col items-center gap-4 mb-10 w-full">
                                    <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="3" rx="2" /><polyline points="8 21 12 17 16 21" /></svg>
                                    </div>
                                    <span className="text-2xl font-black uppercase tracking-tight">Smart TVs</span>
                                </div>
                                {/* ── IMAGE 4 — Imagen de Smart TV con sistema de bloqueo ── */}
                                <div className="flex-1 flex items-center justify-center w-full mb-10">
                                    <div className="relative w-full h-80 transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src="/image/TVLock.png"
                                            alt="Smart TV Lock"
                                            fill
                                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                                        />
                                    </div>
                                </div>
                                <p className="text-white/60 font-light text-sm max-w-[200px] leading-relaxed">El mismo sistema de protección para televisores inteligentes.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ─── BENEFITS ─── */}
            <section className="bg-zinc-900 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-14 text-center">
                            Beneficios para <span className="text-[rgb(217,61,47)]">tu negocio</span>
                        </h2>
                    </ScrollReveal>

                    <div className="flex flex-col gap-4">
                        {benefits.map((b, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div
                                    className="group flex items-center gap-8 p-6 rounded-2xl border border-white/10 hover:border-[rgb(217,61,47)] bg-white/5 hover:bg-white/10 transition-all duration-300 w-full"
                                >
                                    <span className="text-4xl font-black text-white/10 group-hover:text-[rgb(217,61,47)] transition-colors duration-300 shrink-0 w-14 text-right">
                                        {b.num}
                                    </span>
                                    <div className="h-8 w-px bg-white/10 group-hover:bg-[rgb(217,61,47)] transition-colors duration-300 shrink-0" />
                                    <div>
                                        <h3 className="font-black uppercase tracking-tight text-white text-base mb-1">{b.title}</h3>
                                        <p className="text-white/50 text-sm font-light leading-relaxed">{b.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA CLOSING ─── */}
            <section className="bg-[rgb(217,61,47)] py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-zinc-900/10 pointer-events-none" />
                <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-zinc-900/10 pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-zinc-900 leading-tight mb-6">
                            Más control,<br />más seguridad,<br />
                            <span className="text-white">más ventas.</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-zinc-900 rounded-full mx-auto mb-8" />
                        <p className="text-white/90 text-lg sm:text-xl font-light max-w-xl mx-auto leading-relaxed">
                            Nuestro sistema te permite vender tecnología a cuotas mientras proteges tu inversión.
                        </p>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
