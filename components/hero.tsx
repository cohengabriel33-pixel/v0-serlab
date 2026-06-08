export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[560px] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-lab.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center text-primary-foreground">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/90">
          Bienvenidos a SERLAB CONSULTORA
        </p>
        <span className="mx-auto mt-5 block h-px w-24 bg-primary-foreground/60" />
        <h1 className="mt-6 text-balance font-heading text-3xl font-semibold uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl">
          Servicio Integral de Consultoría para la Industria
        </h1>
        <a
          href="#contacto"
          className="mt-8 inline-block rounded-sm bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
        >
          Contacto
        </a>
      </div>
    </section>
  )
}
