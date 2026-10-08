import Link from "next/link";
import { LegalText, LegalViewer } from "../components/LegalViewer";
import { treatmentPolicySections } from "../data/politica-tratamiento-content";

export default function PoliticaTratamientoDatosPersonalesPage() {
  return (
    <main className="min-h-screen bg-[rgb(18,18,18)] pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
          <Link href="/" className="transition hover:text-white">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-[rgb(217,61,47)]">
            Política de Tratamiento de Datos Personales
          </span>
        </div>
      </div>

      <LegalViewer
        title="Política de Tratamiento de Datos Personales"
        description="Consulta cómo PAY&PLAY recopila, utiliza, almacena y trata los datos personales."
        backHref="/"
        backLabel="Regresar"
      >
        <div className="space-y-8">
          {treatmentPolicySections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-white/10 bg-white/3 p-5 sm:p-6">
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight text-[rgb(217,61,47)] sm:text-xl">
                {section.title}
              </h3>
              <div className="space-y-4 text-sm leading-7 text-zinc-200 sm:text-base">
                {section.blocks.map((block, index) => {
                  if (block.type === "paragraph") {
                    return <LegalText key={`${block.type}-${index}`} text={block.text} />;
                  }

                  if (block.type === "heading") {
                    return (
                      <h4 key={`${block.type}-${index}`} className="ml-4 border-l-2 border-[rgb(217,61,47)] pl-4 font-bold text-white sm:ml-6 sm:pl-5">
                        {block.text}
                      </h4>
                    );
                  }

                  return (
                    <ul key={`${block.type}-${index}`} className="ml-4 space-y-3 border-l border-white/10 pl-4 sm:ml-6 sm:pl-5">
                      {block.items.map((item) => {
                        const hasLiteral = /^(\d+\.|[a-z]\))\s+/i.test(item.text);

                        return (
                          <li key={item.text}>
                            <div className={hasLiteral ? "" : "grid grid-cols-[0.5rem_minmax(0,1fr)] gap-x-3"}>
                              {!hasLiteral && (
                                <span className="mt-3 inline-block h-1.5 w-1.5 rounded-full bg-[rgb(217,61,47)]" />
                              )}
                              <LegalText text={item.text} />
                            </div>
                            {item.children && (
                              <ul className="ml-5 mt-2 space-y-2 border-l border-white/10 pl-4 text-zinc-300 sm:ml-7">
                                {item.children.map((child) => (
                                  <li key={child} className="flex gap-3">
                                    <span className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                                    <span>{child}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </LegalViewer>
    </main>
  );
}
