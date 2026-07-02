const panels = [
  { title: "Servicios", subtitle: "Analíticos", position: "0%", href: "#contacto" },
  { title: "Servicios", subtitle: "Regulatorios", position: "50%", href: "#contacto" },
  { title: "Servicios", subtitle: "Especiales", position: "100%", href: "#contacto" },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-foreground">
      <div className="bg-primary py-12 text-center">
        <h2 className="font-heading text-3xl font-semibold uppercase tracking-wide text-primary-foreground">
          Servicios
        </h2>
        <span className="mx-auto mt-4 block h-1 w-16 rounded bg-primary-foreground/70" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 md:grid-cols-3">
        {panels.map((panel) => (
          <a
            key={panel.subtitle}
            href={panel.href}
            className="group relative block aspect-[3/4] overflow-hidden rounded-sm"
            aria-label={`${panel.title} ${panel.subtitle}`}
          >
            <div
              className="absolute inset-0 bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('/servicios.jpeg')",
                backgroundSize: "300% 100%",
                backgroundPosition: `${panel.position} center`,
              }}
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
