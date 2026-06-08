const clients = Array.from({ length: 8 }, (_, i) => `Cliente ${i + 1}`)

export function ClientsSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-2xl font-medium italic text-muted-foreground">
          Algunos de nuestros clientes
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-24 items-center justify-center rounded-md border border-border bg-secondary/40 px-4 text-center"
            >
              <span className="font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground/60">
                Logo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
