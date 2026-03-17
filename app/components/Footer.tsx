"use client";

import { useState, useEffect, useRef } from "react";

export default function Footer() {
    const [isCtrlPressed, setIsCtrlPressed] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Control") {
                setIsCtrlPressed(true);
                setShowOverlay(false);
            }
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === "Control") setIsCtrlPressed(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    const handleWheel = (e: React.WheelEvent) => {
        if (!e.ctrlKey) {
            setShowOverlay(true);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setShowOverlay(false);
            }, 2000);
        } else {
            setShowOverlay(false);
        }
    };

    return (
        <footer className="bg-black text-white py-12 px-6 border-t border-zinc-800 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                {/* Column 1: Information */}
                <div className="flex flex-col space-y-6">
                    <div className="text-2xl font-black tracking-tighter">
                        <span className="text-white">P</span>
                        <span className="text-[rgb(217,61,47)]">A</span>
                        <span className="text-white">Y&PL</span>
                        <span className="text-[rgb(217,61,47)]">A</span>
                        <span className="text-white">Y</span>
                    </div>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                        Soluciones innovadoras para la gestión de pagos y experiencias digitales.
                        Seguridad y excelencia en cada transacción.
                    </p>
                </div>

                {/* Column 2: Social Media */}
                <div className="flex flex-col space-y-6">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[rgb(217,61,47)]">Síguenos</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-[rgb(217,61,47)] hover:border-[rgb(217,61,47)] transition-all duration-300 group shadow-lg">
                            <svg className="w-6 h-6 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/payplay.23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-[rgb(217,61,47)] hover:border-[rgb(217,61,47)] transition-all duration-300 group shadow-lg">
                            <svg className="w-6 h-6 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-[rgb(217,61,47)] hover:border-[rgb(217,61,47)] transition-all duration-300 group shadow-lg">
                            <svg className="w-6 h-6 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 3: Contact */}
                <div className="flex flex-col space-y-6">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[rgb(217,61,47)]">Contacto</h3>
                    <div className="space-y-4 text-zinc-400">
                        <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="text-[rgb(217,61,47)]">
                                <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z" />
                                <circle cx="12" cy="11" r="2" />
                            </svg>
                            <span className="text-sm lg:text-base">
                                Edificio Empresarial Unicornio II, Piso 15-04
                            </span>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(217,61,47)]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span className="text-sm lg:text-base">096 903 1988 - 096 019 2561</span>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(217,61,47)]"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <span className="text-sm lg:text-base">ventas@lockplay.org</span>
                        </div>
                    </div>
                </div>

                {/* Column 4: Location Map */}
                <div className="flex flex-col space-y-6">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[rgb(217,61,47)]">Ubicación</h3>
                <div
                    className="w-full h-32 lg:h-40 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg relative transition-all duration-500"
                    onWheel={handleWheel}
                >
                    <iframe
                        title="PAY&PLAY Ubicación"
                        src="https://maps.google.com/maps?q=Edificio%20Empresarial%20Unicornio%20II,%20Quito&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{
                            border: 0,
                            pointerEvents: isCtrlPressed ? "auto" : "none"
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={`absolute inset-0 grayscale contrast-125 transition-all duration-500 ${isCtrlPressed ? "grayscale-0" : "hover:grayscale-0"}`}
                    ></iframe>

                    {/* Overlay Tip */}
                    <div className={`absolute inset-0 bg-black/60 flex items-center justify-center p-4 transition-opacity duration-300 pointer-events-none z-10 ${showOverlay ? "opacity-100" : "opacity-0"}`}>
                        <p className="text-white text-xs font-bold uppercase tracking-widest text-center">
                            Usa <span className="text-[rgb(217,61,47)]">Ctrl + Scroll</span> para hacer zoom
                        </p>
                    </div>
                </div>
                </div>

            </div>

            <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-zinc-800 text-center text-zinc-500 text-sm">
                <p>© {new Date().getFullYear()} PAY&PLAY. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}