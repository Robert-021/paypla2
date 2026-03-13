"use client";

import Image from "next/image";

export default function PlataformasPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Main Header Section */}
            <section className="pt-40 pb-20 px-6 bg-zinc-50 text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10">
                    <h1 className="text-5xl sm:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none text-zinc-900">
                        Plataforma de <br />
                        <span className="text-[rgb(217,61,47)]">Pagos y Créditos</span>
                    </h1>
                    <div className="h-2 w-24 bg-[rgb(217,61,47)] mb-8"></div>
                    <p className="text-zinc-600 text-xl max-w-2xl leading-relaxed font-light">
                        Nuestra plataforma ya está lista para transformar tu negocio. Gestiona cobros, automatiza procesos y otorga créditos con total seguridad y eficiencia.
                    </p>
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgb(217,61,47)]/10 to-transparent pointer-events-none"></div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 bg-white text-zinc-900">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-black mb-8 italic uppercase tracking-tighter text-zinc-900">
                                Solución <span className="text-[rgb(217,61,47)]">Integral</span>
                            </h2>
                            <div className="space-y-6 text-zinc-700 text-lg">
                                <p>
                                    No necesitas desarrollar nada desde cero. Nuestra plataforma te ofrece todas las herramientas necesarias para la gestión de pagos y créditos en un solo lugar.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[rgb(217,61,47)] shrink-0"></div>
                                        <span>Gestión automatizada de cartera de créditos.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[rgb(217,61,47)] shrink-0"></div>
                                        <span>Pasarela de pagos segura y confiable.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[rgb(217,61,47)] shrink-0"></div>
                                        <span>Reportes detallados y análisis en tiempo real.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-white rounded-3xl border border-zinc-200 shadow-md flex items-center justify-center p-12 hover:border-[rgb(217,61,47)] transition-colors duration-500">
                                <img src="/image/LucasCredito.png" alt="Plataforma de Créditos" className="w-full h-auto drop-shadow-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
