"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import "../components/css/slider.css";
import { ScrollReveal } from "../components/ScrollReveal";

const services = [
    {
        id: 1,
        title: "Bloqueo de Dispositivos",
        tag: "MDM",
        description: "Protege los equipos vendidos a crédito con bloqueo remoto y control total de tu flota desde una sola plataforma centralizada.",
        features: ["Bloqueo automático por falta de pago", "Detección de cambio de SIM", "Seguro contra formateo", "Compatible con Android y Smart TVs"],
        image: "/image/Lucas.png",
        btnText: "Más Información",
        href: "/servicios/mdm"
    },
    {
        id: 2,
        title: "Indicadores de Riesgo",
        tag: "RIESGO",
        description: "Analiza el perfil financiero de cada cliente antes de otorgar crédito y toma decisiones basadas en datos reales.",
        features: ["Historial y capacidad de pago", "Nivel de endeudamiento", "Comportamiento financiero", "Alertas de riesgo y fraude"],
        image: "/image/LucasRiesgos.png",
        btnText: "Más Información",
        href: "/servicios/riesgo"
    },
    {
        id: 3,
        title: "KYC — Validación de Identidad",
        tag: "KYC",
        description: "Verifica la identidad de tus clientes de forma 100% digital en minutos, con análisis antifraude automatizado.",
        features: ["Verificación de documentos", "Validación de datos personales", "Análisis antifraude", "Onboarding 100% digital"],
        image: "/image/LucasKYC.png",
        btnText: "Más Información",
        href: "/servicios/kyc"
    },
    {
        id: 4,
        title: "Plataforma de Créditos",
        tag: "CRÉDITOS",
        description: "Convierte tu negocio en una financiera. Gestiona todo el ciclo del crédito desde la aprobación hasta la cobranza automatizada.",
        features: ["Aprobación en minutos", "Reglas de crédito personalizadas", "Cobranza automatizada", "Control total de cartera"],
        image: "/image/LucasCredito.png",
        btnText: "Más Información",
        href: "/servicios/plataformas"
    }
];

export default function ServiciosPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const totalSlides = services.length;
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        tl.current = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });
        animateSlide(activeIndex);
        intervalRef.current = setInterval(() => { handleNext(); }, 5000);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [activeIndex]);

    const animateSlide = (index: number) => {
        if (!tl.current) return;
        const selector = `.box-${index + 1}`;
        tl.current.restart().clear()
            .fromTo(`${selector} .bg-overlay`, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1 })
            .fromTo(`${selector} .details h2`, { opacity: 0, y: "20px" }, { opacity: 1, y: "0px" }, "-=0.3")
            .fromTo(`${selector} .details p`, { opacity: 0, y: "15px" }, { opacity: 1, y: "0px" }, "-=0.35")
            .fromTo(`${selector} .details button`, { opacity: 0, y: "10px" }, { opacity: 1, y: "0px" }, "-=0.35");
    };

    const slideTo = (index: number) => { setActiveIndex(index); };
    const handleNext = () => { setActiveIndex((prev) => (prev + 1) % totalSlides); };
    const handlePrev = () => { setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides); };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${activeIndex * (100 / totalSlides)}%)`;
        }
    }, [activeIndex, totalSlides]);

    return (
        <div className="min-h-screen bg-[rgb(31,31,31)] text-white">

            {/* ─── HERO HEADER ─── */}
            <section className="pt-36 pb-16 px-6 bg-[rgb(31,31,31)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 40px)",
                    }}
                />
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[rgb(217,61,47)]" />

                <div className="max-w-7xl mx-auto relative z-10 pl-6">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                            <div>
                                <span className="inline-block border border-[rgb(217,61,47)] text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                                    Suite completa de soluciones
                                </span>
                                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.88] text-white mb-6">
                                    Nuestros<br />
                                    <span className="text-[rgb(217,61,47)]">Servicios</span>
                                </h1>
                                <div className="h-1.5 w-20 bg-[rgb(217,61,47)] mb-8 rounded-full" />
                                <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-lg">
                                    Desde la validación de identidad hasta la gestión de crédito y el bloqueo de dispositivos, Pay&Play integra todo lo que necesitas para{" "}
                                    <span className="text-white font-semibold">vender con seguridad y crecer sin riesgos</span>.
                                </p>
                            </div>

                            {/* Service tag pills */}
                            <div className="flex flex-wrap gap-3 md:justify-end">
                                {services.map((s, i) => (
                                    <span key={i} className="flex items-center gap-2 border border-white/10 bg-white/5 text-zinc-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[rgb(217,61,47)]" />
                                        {s.tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── CAROUSEL ─── */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <ScrollReveal>
                    <div className="slider-container shadow-2xl border border-zinc-900 rounded-3xl overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="slider"
                            style={{ width: `${totalSlides * 100}%` }}
                        >
                            {services.map((service, idx) => (
                                <div key={service.id} className={`box box-${idx + 1}`}>
                                    <div className="bg-overlay"></div>
                                    <div className="details">
                                        <span className="inline-block border border-white/40 text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                                            {service.tag}
                                        </span>
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                            {service.features.map((f, fi) => (
                                                <span key={fi} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1 rounded-full">
                                                    <span className="w-1 h-1 rounded-full bg-[rgb(217,61,47)] shrink-0" />
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                        <Link href={service.href}>
                                            <button>{service.btnText}</button>
                                        </Link>
                                    </div>
                                    <div className="illustration">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="arrow-nav arrow-prev" onClick={handlePrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </div>
                        <div className="arrow-nav arrow-next" onClick={handleNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </div>

                        {/* Trail Indicators */}
                        <div className="trail">
                            {services.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`trail-item ${activeIndex === idx ? 'active' : ''}`}
                                    onClick={() => slideTo(idx)}
                                >
                                    {idx + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ─── STATS STRIP ─── */}
            <section className="py-16 px-6 bg-[rgb(217,61,47)]">
                <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/20 rounded-2xl overflow-hidden">
                    {[
                        { val: "4", label: "Soluciones integradas" },
                        { val: "100%", label: "Procesos digitales" },
                        { val: "360°", label: "Control de tu cartera" }
                    ].map((s, i) => (
                        <ScrollReveal 
                            key={i} 
                            delay={i * 0.1}
                            className={`${i === 2 ? "col-span-2 sm:col-span-1" : ""} h-full`}
                        >
                            <div className="bg-[rgb(217,61,47)] px-6 py-8 flex flex-col items-center text-center w-full h-full">
                                <span className="text-5xl font-black text-zinc-900 mb-1">{s.val}</span>
                                <span className="text-white/80 text-xs font-light uppercase tracking-widest">{s.label}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-24 text-center bg-white border-b border-zinc-200">
                <div className="max-w-3xl mx-auto px-6">
                    <ScrollReveal>
                        <span className="inline-block bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                            ¿Listo para empezar?
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-900 leading-tight mb-6">
                            Evoluciona tu negocio<br />
                            <span className="text-[rgb(217,61,47)]">hoy mismo</span>
                        </h2>
                        <div className="h-1.5 w-16 bg-[rgb(217,61,47)] mx-auto mb-8 rounded-full" />
                        <p className="text-zinc-600 mb-10 max-w-xl mx-auto font-light text-lg leading-relaxed">
                            Únete a la comunidad de PAY&PLAY y accede a todas las herramientas para vender con seguridad, reducir riesgos y crecer sin límites.
                        </p>
                        <a
                            href="https://wa.me/593959728822?text=Saludos%20estoy%20interesado%20en%20sus%20servicios,%20quiero%20mas%20información"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[rgb(217,61,47)] hover:opacity-90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block"
                        >
                            Hablar por WhatsApp
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}