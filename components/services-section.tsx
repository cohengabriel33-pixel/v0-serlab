"use client"

import { useState } from "react"

type ServiceGroup = {
  title: string
  items: string[]
}

type ServicePanel = {
  title: string
  subtitle: string
  image: string
  groups: ServiceGroup[]
}

const panels: ServicePanel[] = [
  {
    title: "Servicios",
    subtitle: "Analíticos",
    image: "/service-lab.jpeg",
    groups: [
      { title: "Control de calidad", items: ["Control de calidad de materias primas.", "Control de calidad de productos terminados.", "Estabilidades según normas ICH.", "Análisis de residuos e impurezas orgánicas e inorgánicas."] },
      { title: "Desarrollo Analítico", items: ["Desarrollo de técnicas analíticas de macrocomponentes en laboratorios calificados.", "Residuos e impurezas orgánicas e inorgánicas."] },
      { title: "Validaciones Analíticas", items: ["Validaciones analíticas de macrocomponentes e impurezas.", "Validaciones de limpieza.", "Transferencias analíticas."] },
    ],
  },
  {
    title: "Servicios",
    subtitle: "Regulatorios",
    image: "/service-writing.jpeg",
    groups: [
      { title: "Management de documentos regulatorios", items: ["Generación de Archivo Maestro de Productos comercializados y no comercializados.", "Ordenamiento de documentación de productos registrados.", "Preparación de archivos digitalizados para Sistemas de Gestión Electrónica."] },
      { title: "Asuntos regulatorios", items: ["Asistencia con la preparación y el ingreso de documentos a los Sistemas de Gestión Electrónica.", "Asistencia con la revisión y preparación de documentación legal y técnica para realizar presentaciones o ingresos a los Sistemas de Gestión Electrónicas.", "Traducciones científicas y legales.", "Legalizaciones de documentos ante Escribano.", "Rotulado de productos para la Salud.", "Asistencia con las gestiones de Habilitación de empresas ante la autoridad sanitaria."] },
      { title: "Legales", items: ["Asistencia legal con la constitución de una sociedad en Argentina.", "Desarrollo del vínculo entre los actores intervinientes en la cadena de comercialización (representante local, distribuidor, licenciatario, franquiciado, consumidor).", "Publicidad y promoción de productos para la salud: engaño y confusión al consumidor-Publicidad desleal.", "Redacción y revisión de contratos de distribución, representación, tercerización de productos, locación de laboratorio de control de calidad, depósito.", "Interposición de recursos administrativos ante las autoridades.", "Asesoramiento y asistencia en negociaciones con las autoridades.", "Gestiones ante diferentes autoridades gubernamentales (Judiciales, Registro Público de Comercio, Oficinas de Marcas y Patentes, Autoridades Aduaneras, Ministerio de Ambiente y Desarrollo Sustentable, Comisión Nacional de Energía Atómica).", "Registro de contratos de transferencia de tecnología.", "Confección de acuerdos de partes, con alcance local en internacional."] },
      { title: "Marcas para tecnologías sanitarias / Pharma in use", items: ["Autorización de nombre comercial ante la Autoridad sanitaria.", "Planificación de estrategias de protección marcaria sanitaria.", "Búsquedas marcarias e Investigación de uso de la marca farma y de tecnologías sanitarias novedosas."] },
    ],
  },
  {
    title: "Servicios",
    subtitle: "Especiales",
    image: "/service-plans.jpeg",
    groups: [
      { title: "Diseño de áreas", items: ["Diseño y start ups de Laboratorios: Fisicoquímicos, Galénicos, Microbiológicos."] },
      { title: "Calificación de plantas", items: ["Calificación de Áreas y Servicios con proveedores calificados.", "Calificación de Instrumentos de medición y Equipamientos con proveedores calificados.", "Confección y Seguimiento de Planes para mantenimiento preventivo y calibraciones."] },
      { title: "Validaciones especiales", items: ["Validación de sistemas informáticos, cursos.", "Asesoría y armado de plan de validaciones de procesos.", "Validaciones de procesos, con mediciones analíticas en laboratorios calificados."] },
      { title: "Sistemas de gestión de calidad", items: ["Diseño, commissioning y compliance de Sistemas de Gestión de Calidad GMP-ISO (9001-14001-45001-22000).", "Auditorías GLP / GMP e ISO 9001 – ISO 17025 – ISO 14001.", "Análisis de Riesgos de Procesos."] },
      { title: "Recursos humanos", items: ["Selección de personal técnico y profesional calificado.", "Personal calificado temporal por y/o para proyectos según necesidades de los clientes.", "Armado de programa de capacitación de personal.", "Calificación de personal.", "Capacitaciones a medida en company.", "Capacitación corporativos (calidad-liderazgo).", "Cursos de buenas prácticas de elaboración y control a medida de los clientes."] },
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
        <h2 className="mt-3 font-heading text-4xl font-light text-background sm:text-5xl text-balance">Servicios</h2>
        <span className="mx-auto mt-5 block h-px w-20 bg-background/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-3" role="tablist" aria-label="Servicios de Serlab">
          {panels.map((panel, index) => {
            const isActive = activeService === index
            return (
              <button key={panel.subtitle} type="button" role="tab" aria-selected={isActive} aria-controls={`service-panel-${index}`} onClick={() => setActiveService(index)} className={`group relative block aspect-[3/4] overflow-hidden rounded-3xl border-4 text-left transition-all duration-500 ${isActive ? "border-primary shadow-2xl shadow-primary/20" : "border-accent/70"}`}>
                <div className={`absolute inset-0 bg-no-repeat transition-all duration-700 ${isActive ? "scale-105 opacity-35" : "opacity-70 group-hover:scale-105 group-hover:opacity-45"}`} style={{ backgroundImage: `url('${panel.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-heading text-2xl font-medium text-background">{panel.title} <span className="italic text-accent">{panel.subtitle}</span></p>
                  <span className={`mt-3 block h-1 rounded-full bg-primary transition-all duration-500 ${isActive ? "w-16" : "w-8"}`} />
                </div>
              </button>
            )
          })}
        </div>

        <div id={`service-panel-${activeService}`} role="tabpanel" aria-live="polite" className="mt-6 overflow-hidden rounded-3xl border border-accent/40 bg-background/95 p-6 text-foreground shadow-xl sm:p-8">
          <div key={activeService} className="animate-service-detail">
            <div className="mb-7 border-b border-border pb-6">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Servicio seleccionado</p>
              <h3 className="mt-2 font-heading text-3xl font-medium text-foreground sm:text-4xl">{activePanel.title} <span className="italic text-primary">{activePanel.subtitle}</span></h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Soluciones técnicas pensadas para acompañar cada etapa del desarrollo y la fabricación farmacéutica.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {activePanel.groups.map((group) => (
                <article key={group.title} className="rounded-2xl border border-border bg-muted/35 p-5">
                  <h4 className="font-heading text-lg font-bold text-foreground">{group.title}</h4>
                  <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-foreground">
                    {group.items.map((item) => <li key={item} className="flex gap-3"><span className="mt-0.5 text-lg leading-none text-primary" aria-hidden="true">✓</span><span>{item}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
