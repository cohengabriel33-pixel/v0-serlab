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

      </div>
    </section>
  )
}
