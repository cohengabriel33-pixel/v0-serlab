import { Briefcase, GraduationCap, TrendingUp, Users } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Búsqueda especializada",
    text: "Reclutamos perfiles técnicos de la industria farmacéutica: producción, calidad, asuntos regulatorios, microbiología.",
  },
  {
    icon: GraduationCap,
    title: "Eventual o permanente",
    text: "Cubrimos una vacante puntual o una búsqueda para incorporación definitiva, según lo que necesite tu empresa.",
  },
  {
    icon: Users,
    title: "Evaluación técnica real",
    text: "Los candidatos pasan por profesionales con trayectoria en la industria, no solo por un filtro de RRHH genérico.",
  },
  {
    icon: Briefcase,
    title: "Proceso ágil",
    text: "Aceleramos los tiempos de búsqueda con una base de contactos ya calificada en el sector.",
  },
]

export function RecruitmentSection() {
  return (
    <section id="reclutamiento" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Servicio para empresas</p>
          <h2 className="mt-3 font-heading text-4xl font-light text-foreground sm:text-5xl text-balance">
            <span className="italic text-primary">¿Tu empresa necesita cubrir una posición?</span>
          </h2>
          <span className="mx-auto mt-5 block h-px w-20 bg-primary/50" />
          <p className="mx-auto mt-6 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            En SERLAB ofrecemos servicios de búsqueda y selección de personal para la industria farmacéutica, tanto para
            necesidades eventuales como para incorporaciones permanentes.
          </p>
        </div>

        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-md border border-border bg-background p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl rounded-md bg-background p-8 shadow-xl">
          <h3 className="text-center font-heading text-2xl font-semibold text-foreground">Sumá tu CV a nuestra base</h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            ¿Buscás oportunidades laborales en la industria? Dejanos tu CV y te tenemos en cuenta para futuras búsquedas.
          </p>
          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="rec-nombre" className="mb-1 block text-sm font-medium text-foreground">
                  Nombre y apellido
                </label>
                <input
                  id="rec-nombre"
                  type="text"
                  className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="rec-email" className="mb-1 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="rec-email"
                  type="email"
                  className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="rec-telefono" className="mb-1 block text-sm font-medium text-foreground">
                  Teléfono
                </label>
                <input
                  id="rec-telefono"
                  type="tel"
                  className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="+54 9 11 ..."
                />
              </div>
              <div>
                <label htmlFor="rec-area" className="mb-1 block text-sm font-medium text-foreground">
                  Área de interés
                </label>
                <select
                  id="rec-area"
                  className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccioná un área
                  </option>
                  <option>Servicios analíticos</option>
                  <option>Servicios regulatorios</option>
                  <option>Servicios especiales</option>
                  <option>Aseguramiento de calidad</option>
                  <option>Otra</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="rec-cv" className="mb-1 block text-sm font-medium text-foreground">
                Curriculum Vitae (PDF)
              </label>
              <input
                id="rec-cv"
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none file:mr-3 file:rounded-sm file:border-0 file:bg-primary file:px-3 file:py-1 file:text-primary-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="rec-mensaje" className="mb-1 block text-sm font-medium text-foreground">
                Mensaje
              </label>
              <textarea
                id="rec-mensaje"
                rows={4}
                className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Contanos sobre tu experiencia"
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enviar postulación
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
