"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import "../components/css/slider.css";

const services = [
    {
        id: 1,
        title: "Bloqueo de Dispositivos",
        description: "Bloquea, administra y controla tus equipos de forma remota. Seguridad total para tu negocio en todo momento.",
        image: "/image/Lucas.png",
        btnText: "Más Información",
        href: "/servicios/mdm"
    },
    {
        id: 2,
        title: "Indicadores de Riesgo",
        description: "Nuestros indicadores permiten detectar señales tempranas de incumplimiento y reducir el riesgo financiero.",
        image: "/image/LucasRiesgos.png",
        btnText: "Más Información",
        href: "/servicios/riesgo"
    },
    {
        id: 3,
        title: "KYC (Validación de Identidad)",
        description: "Nuestro sistema KYC valida la identidad de los usuarios para prevenir fraudes y fortalecer la seguridad en cada operación.",
        image: "/image/LucasKYC.png",
        btnText: "Más Información",
        href: "/servicios/kyc"
    },
    {
        id: 4,
        title: "Plataforma de Pagos y Créditos",
        description: "Gestiona cobros y otorga créditos de forma automatizada con nuestra plataforma especializada.",
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

    // Animation timeline
    const tl = useRef<gsap.core.Timeline | null>(null);

    // Auto-slide effect
    useEffect(() => {
        tl.current = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });

        // Initial animation
        animateSlide(activeIndex);

        // Start interval
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [activeIndex]);

    const animateSlide = (index: number) => {
        if (!tl.current) return;

        const selector = `.box-${index + 1}`;

        // Reset previous animations and animate new ones
        tl.current.restart().clear()
            .fromTo(`${selector} .bg-overlay`, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1 })
            .fromTo(`${selector} .details h2`, { opacity: 0, y: "20px" }, { opacity: 1, y: "0px" }, "-=0.3")
            .fromTo(`${selector} .details p`, { opacity: 0, y: "15px" }, { opacity: 1, y: "0px" }, "-=0.35")
            .fromTo(`${selector} .details button`, { opacity: 0, y: "10px" }, { opacity: 1, y: "0px" }, "-=0.35");
    };

    const slideTo = (index: number) => {
        setActiveIndex(index);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Update transform when activeIndex changes
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${activeIndex * (100 / totalSlides)}%)`;
        }
    }, [activeIndex, totalSlides]);

    return (
        <div className="min-h-screen bg-[rgb(31,31,31)] text-white pt-32 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
                <p className="text-zinc-400 mb-8">Descubre todo lo que Pay&Play tiene para ofrecerte.</p>

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
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
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
            </div>
            <section className="py-24 text-center bg-white border-b border-zinc-200">
                <h2 className="text-3xl font-bold mb-6 text-zinc-900">¿Listo para empezar?</h2>
                <p className="text-zinc-600 mb-8 max-w-xl mx-auto">Únete a la comunidad de PAY&PLAY hoy mismo y evoluciona tu negocio con nuestras herramientas.</p>
                <a
                    href="https://wa.me/593959728822?text=Saludos%20estoy%20interesado%20en%20sus%20servicios,%20quiero%20mas%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(217,61,47)] hover:opacity-90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block"
                >
                    Hablar por WhatsApp
                </a>
            </section>
        </div>

    );
}
