const panels = [
  { title: "Servicios", subtitle: "Analíticos", position: "5%", href: "#contacto" },
  { title: "Servicios", subtitle: "Regulatorios", position: "50%", href: "#contacto" },
  { title: "Servicios", subtitle: "Especiales", position: "95%", href: "#contacto" },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-foreground">
      <div className="py-14 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Lo que hacemos</p>
        <h2 className="mt-3 font-heading text-4xl font-light text-background sm:text-5xl">
          Nuestros <span className="italic text-accent">servicios</span>
        </h2>
        <span className="mx-auto mt-5 block h-px w-20 bg-background/40" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-2 md:grid-cols-3">
        {panels.map((panel) => (
          <a
            key={panel.subtitle}
            href={panel.href}
            className="group relative block aspect-[3/4] overflow-hidden rounded-3xl border-4 border-accent"
            aria-label={`${panel.title} ${panel.subtitle}`}
          >
            <div
              className="absolute inset-0 bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('/servicios.jpeg')",
                backgroundSize: "380% 118%",
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
