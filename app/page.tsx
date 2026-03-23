import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./components/ScrollReveal";

const services = [
  {
    tag: "MDM",
    title: "Bloqueo de Dispositivos",
    desc: "Protege equipos vendidos a cuotas con bloqueo remoto, detección de SIM y seguro contra formateo.",
    stat: "83%",
    statLabel: "menos morosidad",
    href: "/servicios/mdm",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    tag: "RIESGO",
    title: "Indicadores de Riesgo",
    desc: "Evalúa la capacidad de pago de cada cliente antes de otorgar el pago a cuotas, incluso sin historial crediticio.",
    stat: "360°",
    statLabel: "perfil financiero",
    href: "/servicios/riesgo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  },
  {
    tag: "KYC",
    title: "Validación de Identidad",
    desc: "Verifica documentos y detecta fraudes de forma 100% digital antes de aprobar cualquier pago a cuotas.",
    stat: "100%",
    statLabel: "digital",
    href: "/servicios/kyc",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="8" cy="12" r="2" /><path d="M14 10h4" /><path d="M14 14h4" />
      </svg>
    )
  },
  {
    tag: "A CUOTAS",
    title: "Plataforma de Ventas a Cuotas",
    desc: "Gestiona todo el ciclo de venta a cuotas: evaluación, aprobación, seguimiento y cobranza automatizada.",
    stat: "0",
    statLabel: "desarrollo requerido",
    href: "/servicios/plataformas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    )
  },
];

const pillars = [
  { val: "2022", label: "Fundada en Ecuador" },
  { val: "4", label: "Soluciones integradas" },
  { val: "100%", label: "Procesos digitales" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col text-white">

      {/* ─── BACKGROUND ─── */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url("/image/MundoFondo.svg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(31,31,31)] via-[rgb(31,31,31)]/80 to-[rgb(217,61,47)]/30 pointer-events-none" />
      </div>

      <div className="relative z-10 pt-20">

        {/* ─── HERO ─── */}
        <main className="flex flex-col items-center justify-center px-6 py-28 sm:py-36 text-center relative">
          <ScrollReveal>
            {/* Badge */}
            <span className="inline-block border border-[rgb(217,61,47)] text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-10">
              Empresa ecuatoriana · Tecnología financiera · Desde 2022
            </span>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[1.1] mb-8 max-w-5xl mx-auto">
              Vende tecnología<br />
              a cuotas,{" "}
              <span className="text-[rgb(217,61,47)]">sin riesgos</span>
            </h1>

            <div className="h-1.5 w-20 bg-[rgb(217,61,47)] mx-auto mb-8 rounded-full" />

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-300 mb-12 font-light leading-relaxed">
              PAY&PLAY es la plataforma que permite a tiendas, distribuidores y empresas ofrecer{" "}
              <span className="text-white font-semibold">financiamiento seguro</span>{" "}
              con control total: bloqueo de dispositivos, análisis de riesgo, validación de identidad y gestión de ventas a cuotas en un solo lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/servicios"
                className="bg-[rgb(217,61,47)] hover:opacity-90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5"
              >
                Explorar Servicios
              </Link>
              <Link
                href="/nosotros"
                className="border border-white/20 text-white hover:border-white/40 hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
              >
                Conócenos
              </Link>
            </div>

            {/* Scroll pill indicators */}
            <div className="flex flex-wrap justify-center gap-3 mt-16">
              {["Bloqueo MDM", "Riesgo a cuotas", "KYC digital", "Gestión de ventas a cuotas"].map((item, i) => (
                <span key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgb(217,61,47)]" />
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </main>

        {/* ─── VALUE PROPOSITION STRIP ─── */}
        <section className="py-16 sm:py-24 bg-[rgb(217,61,47)] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-white/10 blur-[100px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
              {pillars.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <ScrollReveal delay={i * 0.1}>
                    <span className="text-5xl sm:text-6xl font-black text-white mb-2 drop-shadow-sm block">{p.val}</span>
                    <span className="text-zinc-900 font-extrabold text-xs uppercase tracking-[0.2em]">{p.label}</span>
                    <div className="h-1 w-8 bg-zinc-900/20 mx-auto mt-4 rounded-full" />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHO IS IT FOR ─── */}
        <section className="py-24 bg-[rgb(31,31,31)]/60 backdrop-blur-sm border-y border-white/5 overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <ScrollReveal direction="right">
                <div>
                  <span className="inline-block border border-white/20 text-white/50 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                    ¿Para quién es PAY&PLAY?
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight text-white mb-6">
                    Diseñado para<br />
                    <span className="text-[rgb(217,61,47)]">negocios que<br />venden a cuotas</span>
                  </h2>
                  <p className="text-zinc-100 text-lg font-light leading-relaxed">
                    Nuestra tecnología está pensada para tiendas de tecnología, distribuidores y empresas que quieren ofrecer financiamiento sin asumir el riesgo. Toda la infraestructura que necesitas, lista para usar.
                  </p>
                </div>
              </ScrollReveal>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Tiendas de tecnología", desc: "Vende más celulares y Smart TVs con financiamiento propio." },
                  { label: "Distribuidores", desc: "Amplía tu red de clientes con ventas a cuotas seguras y controladas." },
                  { label: "Empresas de venta a cuotas", desc: "Automatiza tu cartera y reduce la morosidad con tecnología." },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} direction="left">
                    <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-[rgb(217,61,47)]/50 transition-all duration-300 w-full">
                      <div className="w-6 h-6 rounded-full bg-[rgb(217,61,47)] flex items-center justify-center shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-black uppercase tracking-tight text-white text-sm mb-0.5">{item.label}</p>
                        <p className="text-zinc-450 text-sm font-light">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="py-24 bg-[rgb(31,31,31)]/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white leading-tight">
                    Nuestras<br /><span className="text-[rgb(217,61,47)]">soluciones</span>
                  </h2>
                  <div className="h-1.5 w-16 bg-[rgb(217,61,47)] mt-4 rounded-full" />
                </div>
                <Link href="/servicios" className="shrink-0 flex items-center gap-2 border border-white/20 text-white/60 hover:border-[rgb(217,61,47)] hover:text-[rgb(217,61,47)] text-sm font-bold uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 group">
                  Ver todos
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                  <Link key={i} href={s.href}
                    className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[rgb(217,61,47)]/60 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgb(217,61,47)]/10 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[rgb(217,61,47)]/15 rounded-xl flex items-center justify-center text-[rgb(217,61,47)] transition-all group-hover:bg-[rgb(217,61,47)] group-hover:text-white duration-300 shrink-0">{s.icon}</div>
                        <div>
                          <span className="inline-block border border-[rgb(217,61,47)]/40 text-[rgb(217,61,47)] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1">{s.tag}</span>
                          <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-white group-hover:text-[rgb(217,61,47)] transition-colors leading-tight">{s.title}</h3>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-4xl sm:text-5xl font-black text-[rgb(217,61,47)] leading-none">{s.stat}</p>
                        <p className="text-zinc-500 text-[10px] font-light uppercase tracking-widest">{s.statLabel}</p>
                      </div>
                    </div>
                    <p className="text-zinc-100 text-sm leading-relaxed mb-5 font-light">{s.desc}</p>
                    <span className="text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
                      Ver más
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT TEASER ─── */}
        <section className="py-24 bg-[rgb(31,31,31)]/60 backdrop-blur-sm border-t border-white/5 overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              {/* Logo */}
              <ScrollReveal direction="right">
                <div className="relative flex justify-center">
                  <div className="relative w-full max-w-xs aspect-square">
                    <Image
                      src="/image/PayPlayMascota.png"
                      alt="PAY&PLAY"
                      fill
                      className="object-contain drop-shadow-2xl transition duration-500"
                    />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left">
                <div>
                  <span className="inline-block border border-[rgb(217,61,47)] text-[rgb(217,61,47)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
                    Empresa ecuatoriana · Desde 2022
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-tight text-white mb-6">
                    Nacimos para<br />
                    <span className="text-[rgb(217,61,47)]">facilitar las ventas<br />a cuotas</span>
                  </h2>
                  <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8">
                    Después de la pandemia, entendimos que estar conectado ya no es un lujo. Por eso creamos modelos de financiamiento flexibles para personas sin historial crediticio o acceso a la banca tradicional.
                  </p>
                  <Link href="/nosotros"
                    className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-[rgb(217,61,47)] transition-colors duration-200 group w-fit"
                  >
                    Nuestra historia
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-28 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(31,31,31)] via-[rgb(31,31,31)]/60 to-transparent pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white leading-tight mb-6">
                ¿Listo para vender<br />
                <span className="text-[rgb(217,61,47)]">con seguridad?</span>
              </h2>
              <div className="h-1.5 w-20 bg-[rgb(217,61,47)] mx-auto mb-8 rounded-full" />
              <p className="text-zinc-300 mb-12 max-w-xl mx-auto font-light text-lg leading-relaxed">
                Únete a la comunidad de PAY&PLAY y accede a todas las herramientas para financiar, proteger y hacer crecer tu negocio.
              </p>
              <a
                href="https://wa.me/593959728822?text=Saludos%20estoy%20interesado%20en%20sus%20servicios,%20quiero%20mas%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(217,61,47)] hover:opacity-90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-red-900/40 hover:-translate-y-0.5 inline-block"
              >
                Hablar por WhatsApp
              </a>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </div>
  );
}
