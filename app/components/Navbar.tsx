"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false); // Scroll Down
            } else {
                setIsVisible(true); // Scroll Up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const getIndicatorStatus = (path: string) => {
        const isActive = pathname === path;
        return isActive 
            ? "w-full opacity-100 scale-x-100" 
            : "w-0 opacity-0 scale-x-0 group-hover:w-full group-hover:opacity-100 group-hover:scale-x-100";
    }

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Servicios", href: "/servicios" },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            } bg-black/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* Logo */}
                <Link href="/" className="logo flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-[rgb(217,61,47)] rounded-xl flex items-center justify-center shadow-lg shadow-red-900/20 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white">
                        P<span className="text-[rgb(217,61,47)]">A</span>Y&PL<span className="text-[rgb(217,61,47)]">A</span>Y
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link, index) => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            className={`group relative text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                                pathname === link.href ? "text-[rgb(217,61,47)]" : "text-zinc-200 hover:text-white"
                            }`}
                            style={{ animation: `fadeIn 0.5s ease forwards ${0.1 * (index + 1)}s`, opacity: 0 }}
                        >
                            {link.name}
                            <span 
                                className={`absolute -bottom-2 left-0 h-0.5 bg-[rgb(217,61,47)] transition-all duration-500 origin-left ease-out ${getIndicatorStatus(link.href)}`}
                            />
                        </Link>
                    ))}

                    <a
                        href="https://wa.me/593959728822?text=Saludos%20estoy%20interesado%20en%20sus%20servicios,%20quiero%20mas%20información"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 animate-pulse-slow"
                    >
                        <button className="bg-[rgb(217,61,47)] text-white px-8 py-2.5 rounded-full hover:bg-red-700 transition-all font-black text-xs uppercase tracking-widest shadow-lg shadow-red-900/40 hover:-translate-y-1">
                            Contáctanos
                        </button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div 
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer z-[1100]" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black z-[1050] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
            }`}>
                <div className="flex flex-col gap-8 text-center">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            className={`text-3xl font-black uppercase tracking-tighter transition-all ${
                                pathname === link.href ? "text-[rgb(217,61,47)] scale-110" : "text-white hover:text-[rgb(217,61,47)]"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a 
                        href="https://wa.me/593959728822" 
                        target="_blank"
                        className="bg-[rgb(217,61,47)] text-white px-10 py-4 rounded-full font-bold text-xl mt-4"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: .8; }
                }
            `}</style>
        </nav>
    )
}