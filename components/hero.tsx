import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[640px] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-lab.png')" }}
        aria-hidden="true"
      />
      {/* warm gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 lg:px-6">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-background backdrop-blur">
            Bienvenidos a SERLAB Consultora
          </p>
          <h1 className="mt-7 text-balance font-heading text-4xl font-light leading-[1.05] text-background sm:text-5xl md:text-6xl">
            Servicio integral de <span className="italic text-accent">consultoría</span> para la industria
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            Calidad, cumplimiento normativo y excelencia analítica para laboratorios farmacéuticos y afines.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#servicios"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Nuestros servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#reclutamiento"
              className="inline-flex items-center gap-2 rounded-full border border-background/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-background transition-colors hover:bg-background/10"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
