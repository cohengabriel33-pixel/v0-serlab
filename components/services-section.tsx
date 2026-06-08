const services = [
  {
    title: "Servicios analíticos",
    image: "/service-analytics.png",
    items: [
      "Control de calidad de materias primas.",
      "Control de calidad de productos terminados.",
      "Estabilidades según normas ICH.",
      "Análisis de residuos e impurezas orgánicas e inorgánicas.",
    ],
  },
  {
    title: "Desarrollo analítico",
    image: "/service-development.png",
    items: [
      "Desarrollo de técnicas analíticas de macrocomponentes en laboratorios calificados.",
      "Residuos e impurezas orgánicas e inorgánicas.",
    ],
  },
  {
    title: "Servicios regulatorios",
    image: "/service-validation.png",
    items: [
      "Validaciones analíticas de macrocomponentes e impurezas.",
      "Validaciones de limpieza.",
      "Transferencias analíticas.",
    ],
  },
]

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ServicesSection() {
  return (
    <section id="servicios">
      <div className="bg-primary py-12 text-center">
        <h2 className="font-heading text-3xl font-semibold uppercase tracking-wide text-primary-foreground">
          Servicios
        </h2>
        <span className="mx-auto mt-4 block h-1 w-16 rounded bg-primary-foreground/70" />
      </div>

      {services.map((service, idx) => (
        <div key={service.title} className="relative min-h-[420px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[420px] max-w-6xl items-center px-4 py-16">
            <div
              className={`w-full max-w-lg ${idx % 2 === 1 ? "md:ml-auto" : ""}`}
            >
              <div className="rounded-md bg-background/95 p-8 shadow-xl">
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-primary">
                  {service.title}
                </h3>
                <span className="mt-3 block h-1 w-12 rounded bg-primary" />
                <ul className="mt-6 space-y-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
