"use client"

import { GraduationCap, BookOpen, MonitorPlay, ArrowRight } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Cursos y capacitaciones",
    description: "Formación especializada para la industria farmacéutica y laboratorios.",
  },
  {
    icon: MonitorPlay,
    title: "Aula virtual",
    description: "Contenido disponible online, a tu ritmo y desde cualquier lugar.",
  },
  {
    icon: GraduationCap,
    title: "Certificaciones",
    description: "Programas alineados a normativas GMP e ISO 9001.",
  },
]

export function CampusSection() {
  return (
    <section id="campus" className="relative overflow-hidden bg-secondary/40 py-20">
      {/* animated background accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-campus-drift absolute -left-16 top-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="animate-campus-drift absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <GraduationCap className="h-4 w-4" />
              Servicios educativos
            </span>
            <h2 className="mt-5 font-heading text-4xl font-light text-foreground text-balance sm:text-5xl">
              Campus <span className="italic text-primary">Virtual</span> SERLAB
            </h2>
            <span className="mt-5 block h-px w-20 bg-primary/50" />
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Accedé a nuestra plataforma educativa con cursos, capacitaciones y material especializado para
              profesionales de laboratorio. Formación continua orientada a la calidad y al cumplimiento normativo.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://serlab.educativa.org/acceso.cgi"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Ingresar al Campus
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: animated card */}
          <div className="flex justify-center">
            <a
              href="https://serlab.educativa.org/acceso.cgi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ingresar al Campus Virtual SERLAB"
              className="animate-campus-float group relative block w-full max-w-sm"
            >
              {/* pulse rings */}
              <span className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 [animation:campus-pulse-ring_3s_ease-out_infinite]" />
              <span className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 [animation:campus-pulse-ring_3s_ease-out_infinite] [animation-delay:1.5s]" />

              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                {/* shine sweep */}
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent [animation:campus-shine_4s_ease-in-out_infinite]" />

                <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <GraduationCap className="h-12 w-12" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-semibold uppercase tracking-wide text-foreground">
                  serlab.educativa.org
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Plataforma educativa oficial de SERLAB
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                  Acceder ahora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
