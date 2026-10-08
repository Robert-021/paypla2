import Link from "next/link";
import { LegalText, LegalViewer } from "../components/LegalViewer";
import { termsSections } from "../data/legal-content";

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen bg-[rgb(18,18,18)] pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
          <Link href="/" className="transition hover:text-white">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[rgb(217,61,47)]">Términos y Condiciones</span>
        </div>
      </div>

      <LegalViewer
        title="Términos y Condiciones"
        description="Conoce las condiciones generales de uso, responsabilidades, servicios y políticas aplicables para el uso de PAY&PLAY."
        backHref="/"
        backLabel="Regresar"
      >
        <div className="space-y-8">
          {termsSections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-white/10 bg-white/3 p-5 sm:p-6">
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight text-[rgb(217,61,47)] sm:text-xl">
                {section.title}
              </h3>

              <div className="space-y-4 text-sm leading-7 text-zinc-200 sm:text-base">
                {section.itemsWithParagraphs?.map((item) => (
                  <LegalText key={item.title} text={item.title} as="heading" className="space-y-2">
                    <p>{item.paragraph}</p>
                  </LegalText>
                ))}

                {section.paragraphs.map((paragraph) => (
                  <LegalText key={paragraph} text={paragraph} />
                ))}

                {section.subitems && section.subitems.length > 0 && (
                  <ul className="space-y-3 text-zinc-200">
                    {section.subitems.map((item) => (
                      <li key={item}>
                        <LegalText text={item} />
                      </li>
                    ))}
                  </ul>
                )}

                {section.afterListText && (
                  <p className="text-zinc-200">{section.afterListText}</p>
                )}
              </div>
            </section>
          ))}
        </div>
      </LegalViewer>
    </main>
  );
}
