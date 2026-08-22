"use client"

import { useState } from "react"

const panels = [
  {
    title: "Servicios",
    subtitle: "Analíticos",
    image: "/service-lab.jpeg",
    description: [
      "Control de calidad de materias primas.",
      "Control de calidad de productos terminados.",
      "Estabilidades según normas ICH.",
      "Análisis de residuos e impurezas orgánicas e inorgánicas.",
    ],
  },
  {
    title: "Servicios",
    subtitle: "Regulatorios",
    image: "/service-writing.jpeg",
    description: [
      "Desarrollo de técnicas analíticas de macrocomponentes en laboratorios calificados.",
      "Residuos e impurezas orgánicas e inorgánicas.",
    ],
  },
  {
    title: "Servicios",
    subtitle: "Especiales",
    image: "/service-plans.jpeg",
    description: [
      "Validaciones analíticas de macrocomponentes e impurezas.",
      "Validaciones de limpieza.",
      "Transferencias analíticas.",
    ],
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const activePanel = panels[activeService]

  return (
    <section id="servicios" className="bg-foreground">
      <div className="py-14 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Lo que hacemos</p>
        <h2 className="mt-3 font-heading text-4xl font-light text-background sm:text-5xl text-balance">
          Servicios
        </h2>
        <span className="mx-auto mt-5 block h-px w-20 bg-background/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-3" role="tablist" aria-label="Servicios de SERLAB">
          {panels.map((panel, index) => {
            const isActive = activeService === index
            return (
              <button
                key={panel.subtitle}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`service-panel-${index}`}
                onClick={() => setActiveService(index)}
                className={`group relative block aspect-[3/4] overflow-hidden rounded-3xl border-4 text-left transition-all duration-500 ${
                  isActive ? "border-primary shadow-2xl shadow-primary/20" : "border-accent/70"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-no-repeat transition-all duration-700 ${
                    isActive ? "scale-105 opacity-35" : "opacity-70 group-hover:scale-105 group-hover:opacity-45"
                  }`}
                  style={{
                    backgroundImage: `url('${panel.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-heading text-2xl font-medium text-background">
                    {panel.title} <span className="italic text-accent">{panel.subtitle}</span>
                  </p>
                  <span className={`mt-3 block h-1 rounded-full bg-primary transition-all duration-500 ${isActive ? "w-16" : "w-8"}`} />
                </div>
              </button>
            )
          })}
        </div>

        <div
          id={`service-panel-${activeService}`}
          role="tabpanel"
          aria-live="polite"
          className="mt-6 overflow-hidden rounded-3xl border border-accent/40 bg-background/95 p-6 text-foreground shadow-xl sm:p-8"
        >
          <div key={activeService} className="animate-service-detail grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Servicio seleccionado</p>
              <h3 className="mt-2 font-heading text-3xl font-medium text-foreground sm:text-4xl">
                {activePanel.title} <span className="italic text-primary">{activePanel.subtitle}</span>
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Soluciones técnicas pensadas para acompañar cada etapa del desarrollo y la fabricación farmacéutica.
              </p>
            </div>
            <ul className="grid gap-3 text-sm leading-relaxed text-foreground sm:grid-cols-2">
              {activePanel.description.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-border bg-muted/45 p-4">
                  <span className="mt-1 text-lg leading-none text-primary" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
