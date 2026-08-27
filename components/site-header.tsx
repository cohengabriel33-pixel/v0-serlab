"use client"

import { useState } from "react"
import { Logo } from "./logo"
import { Mail, ChevronDown, Menu, X } from "lucide-react"

const nav = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  {
    label: "Servicios",
    href: "#servicios",
    children: [
      { label: "Servicios analíticos", href: "#servicio-analitico" },
      { label: "Servicios regulatorios", href: "#servicio-regulatorio" },
      { label: "Servicios especiales", href: "#servicio-especial" },
    ],
  },
  {
    label: "Reclutamiento",
    href: "#reclutamiento",
    children: [
      { label: "Para empresas", href: "#servicio-empresas" },
      { label: "Base de CV", href: "#base-de-cv" },
    ],
  },
]

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <a href="#inicio" className="shrink-0" aria-label="Serlab inicio">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </a>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-52 rounded-md border border-border bg-background py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:administración@serlabgroup.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/5491150078219"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
          >
            <WhatsappIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/serlabsl/home/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Móvil">
          {nav.map((item) => (
            <div key={item.label} className="py-1">
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-foreground"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="ml-4 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}
