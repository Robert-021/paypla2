import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col text-white font-sans">
      
      {/* Background Estático */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url("/image/MundoFondo.svg")' }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[rgb(31,31,31)] via-[rgb(31,31,31)]/80 to-[rgb(217,61,47)]/30 pointer-events-none"
        />
      </div>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-[rgb(217,61,47)] to-red-400 bg-clip-text text-transparent drop-shadow-sm">
            Bienvenido a PAY&PLAY
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-300 mb-10 drop-shadow-md">
            La plataforma definitiva para gestionar tus pagos y disfrutar de la mejor experiencia de juego.
            Rápido, seguro y diseñado para ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/servicios"
              className="bg-[rgb(217,61,47)] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5"
            >
              Explorar Servicios
            </Link>
            <Link
              href="/nosotros"
              className="border border-white/20 text-white hover:border-white/40 hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all backdrop-blur-sm"
            >
              Conócenos más
            </Link>
          </div>
        </main>

        {/* Services Section */}
        <section className="py-24 bg-[rgb(31,31,31)]/40 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-white">
                Nuestros <span className="text-[rgb(217,61,47)]">Servicios</span>
              </h2>
              <div className="h-1.5 w-24 bg-[rgb(217,61,47)] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* Bloqueo de Dispositivos */}
              <Link href="/servicios/mdm" className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[rgb(217,61,47)]/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[rgb(217,61,47)]/10">
                <div className="w-14 h-14 bg-[rgb(217,61,47)]/20 rounded-2xl flex items-center justify-center mb-8 text-[rgb(217,61,47)] transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tight mb-4 text-white group-hover:text-[rgb(217,61,47)] transition-colors">Bloqueo de Equipos</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">Impulsa tu negocio de financiamiento para Smartphones Android y Smart TVs con tecnología de bloqueo inteligente que detecta cambios de SIM y falta de pago, ayudándote a disminuir la morosidad hasta en un 83%.</p>
                <span className="text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest flex items-center gap-2">Ver más <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></span>
              </Link>

              {/* Riesgo */}
              <Link href="/servicios/riesgo" className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[rgb(217,61,47)]/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[rgb(217,61,47)]/10">
                <div className="w-14 h-14 bg-[rgb(217,61,47)]/20 rounded-2xl flex items-center justify-center mb-8 text-[rgb(217,61,47)] transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tight mb-4 text-white group-hover:text-[rgb(217,61,47)] transition-colors">Indicadores de riesgo</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">Toma mejores decisiones al otorgar crédito con evaluaciones inteligentes que predicen la capacidad de pago de una persona, incluso cuando no cuenta con historial crediticio.</p>
                <span className="text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest flex items-center gap-2">Ver más <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></span>
              </Link>

              {/* KYC */}
              <Link href="/servicios/kyc" className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[rgb(217,61,47)]/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[rgb(217,61,47)]/10">
                <div className="w-14 h-14 bg-[rgb(217,61,47)]/20 rounded-2xl flex items-center justify-center mb-8 text-[rgb(217,61,47)] transition-transform group-hover:scale-110">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <circle cx="8" cy="12" r="2"/>
                    <path d="M14 10h4"/>
                    <path d="M14 14h4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tight mb-4 text-white group-hover:text-[rgb(217,61,47)] transition-colors">Validación KYC</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">Protege tus procesos de crédito y financiamiento detectando a tiempo documentos falsos e identidades manipuladas, reduciendo el fraude antes de que afecte tu negocio.</p>
                <span className="text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest flex items-center gap-2">Ver más <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></span>
              </Link>

              {/* Pagos y Créditos */}
              <Link href="/servicios/plataformas" className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[rgb(217,61,47)]/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[rgb(217,61,47)]/10">
                <div className="w-14 h-14 bg-[rgb(217,61,47)]/20 rounded-2xl flex items-center justify-center mb-8 text-[rgb(217,61,47)] transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tight mb-4 text-white group-hover:text-[rgb(217,61,47)] transition-colors">Plataforma de Pagos</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">Optimiza la administración de tus créditos con una plataforma que automatiza la originación, gestión y cobranza.</p>
                <span className="text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest flex items-center gap-2">Ver más <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center bg-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(31,31,31)]/80 to-transparent -z-10" />
          <h2 className="text-3xl font-bold mb-6 text-white">¿Listo para empezar?</h2>
          <p className="text-zinc-300 mb-8 max-w-xl mx-auto drop-shadow-md">Únete a la comunidad de PAY&PLAY hoy mismo y evoluciona tu negocio con nuestras herramientas.</p>
          <a
            href="https://wa.me/593959728822?text=Saludos%20estoy%20interesado%20en%20sus%20servicios,%20quiero%20mas%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(217,61,47)] hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-red-900/40 hover:-translate-y-0.5 inline-block"
          >
            Hablar por WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
