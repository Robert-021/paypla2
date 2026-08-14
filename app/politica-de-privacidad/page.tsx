import Link from "next/link";
import { LegalViewer } from "../components/LegalViewer";
import { privacySections } from "../data/legal-content";

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-[rgb(18,18,18)] pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
          <Link href="/" className="transition hover:text-white">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[rgb(217,61,47)]">Política de Privacidad</span>
        </div>
      </div>

      <LegalViewer
        title="Política de Privacidad"
        description="Consulta cómo protegemos, usamos y tratamos la información personal y empresarial que recopilamos en PAY&PLAY."
        backHref="/"
        backLabel="Regresar"
      >
        <div className="space-y-8">
          {privacySections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-white/10 bg-white/3 p-5 sm:p-6">
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight text-[rgb(217,61,47)] sm:text-xl">
                {section.title}
              </h3>

              <div className="space-y-4 text-sm leading-7 text-zinc-200 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </LegalViewer>
    </main>
  );
}
