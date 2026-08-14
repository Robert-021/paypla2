"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

interface LegalViewerProps {
  title: string;
  description?: string;
  isModal?: boolean;
  onClose?: () => void;
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
}

export function LegalViewer({
  title,
  description = "Consulta el contenido completo del documento legal con el mismo estilo de la marca.",
  isModal = false,
  onClose,
  backHref = "/",
  backLabel = "Volver al inicio",
  children,
}: LegalViewerProps) {
  const content = (
    <div className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-[rgb(31,31,31)] text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,61,47,0.18),transparent_56%)]" />

      <div className="relative flex flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/20 px-5 py-4 sm:px-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[rgb(217,61,47)]">
              Documentación legal
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
              {title}
            </h2>
          </div>

          {isModal && onClose ? (
            <button
              type="button"
              aria-label="Cerrar documento legal"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-zinc-300 transition hover:border-[rgb(217,61,47)] hover:text-white"
            >
              ×
            </button>
          ) : (
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 transition hover:border-[rgb(217,61,47)] hover:text-white"
            >
              {backLabel}
            </Link>
          )}
        </div>

        <div className="border-b border-white/10 bg-white/5 px-5 py-4 sm:px-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">{description}</p>

            {!isModal && (
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-white/30 hover:text-white"
              >
                Inicio
              </Link>
            )}
          </div>
        </div>

        <div className="px-5 py-6 sm:px-7">{children}</div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full max-w-5xl"
          >
            {content}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {content}
    </motion.div>
  );
}
