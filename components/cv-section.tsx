export function CvSection() {
  return (
    <section id="cv" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl rounded-md bg-background p-8 shadow-xl">
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-primary">Oportunidades laborales</p>
          <h2 className="mt-3 text-center font-heading text-3xl font-semibold text-foreground">Sumá tu CV a nuestra base</h2>
          <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">¿Buscás oportunidades laborales en la industria? Dejanos tu CV y te tenemos en cuenta para futuras búsquedas.</p>
          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="rec-nombre" className="mb-1 block text-sm font-medium text-foreground">Nombre y apellido</label><input id="rec-nombre" type="text" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Tu nombre" /></div>
              <div><label htmlFor="rec-email" className="mb-1 block text-sm font-medium text-foreground">Email</label><input id="rec-email" type="email" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="tu@email.com" /></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="rec-telefono" className="mb-1 block text-sm font-medium text-foreground">Teléfono</label><input id="rec-telefono" type="tel" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="+54 9 11 ..." /></div>
              <div><label htmlFor="rec-area" className="mb-1 block text-sm font-medium text-foreground">Área de interés</label><select id="rec-area" defaultValue="" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"><option value="" disabled>Seleccioná un área</option><option>Servicios analíticos</option><option>Servicios regulatorios</option><option>Servicios especiales</option><option>Aseguramiento de calidad</option><option>Otra</option></select></div>
            </div>
            <div><label htmlFor="rec-cv" className="mb-1 block text-sm font-medium text-foreground">Curriculum Vitae (PDF)</label><input id="rec-cv" type="file" accept=".pdf,.doc,.docx" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none file:mr-3 file:rounded-sm file:border-0 file:bg-primary file:px-3 file:py-1 file:text-primary-foreground focus:border-primary focus:ring-1 focus:ring-primary" /></div>
            <div><label htmlFor="rec-mensaje" className="mb-1 block text-sm font-medium text-foreground">Mensaje</label><textarea id="rec-mensaje" rows={4} className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Contanos sobre tu experiencia" /></div>
            <button type="submit" className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90">Enviar postulación</button>
          </form>
        </div>
      </div>
    </section>
  )
}
