"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

type Member = {
  name: string
  image: string
  roles: string[]
  bio: string[]
}

const members: Member[] = [
  {
    name: "Juan Carlos Farrán",
    image: "/member-farran.png",
    roles: ["Farmacéutico", "Director y Fundador de SerLAB"],
    bio: [
      "Profesional farmacéutico orientado a resultados con más de 25 años de experiencia y aumento de responsabilidades en áreas de Control de Calidad, Desarrollo Analítico, Aseguramiento de Calidad en la industria farmacéutica y afines. Amplio conocimiento técnico y experiencia dirigiendo áreas técnicas complejas y diversas, orientado a la calidad y mejora continua.",
    ],
  },
  {
    name: "Alejandro Leonel Cavassa",
    image: "/member-cavassa-new.png",
    roles: ["Director de Calidad"],
    bio: [
      "Químico especializado en Gestión de Calidad. Amplios conocimientos en diseño de estrategias para implementar y mejorar de forma continua sistemas de calidad bajo lineamientos de normativas GMP e ISO 9001.",
      "Capacitador con posgrado docente y amplia experiencia en el rubro para formación en distintos niveles.",
    ],
  },
  {
    name: "Gonzalo X. Quesada",
    image: "/member-quesada-new.png",
    roles: ["Profesional farmacéutico"],
    bio: [
      "Formado y egresado de la Universidad Nacional de La Plata, con experiencia en sistemas de gestión de calidad mediante el ejercicio de direcciones técnicas de diversos ámbitos privados y en el sector de desarrollo de nuevos productos con especialización en el área analítica desarrollo, validaciones y estabilidades.",
    ],
  },
]

function Hexagon({ image, name }: { image: string; name: string }) {
  return (
    <div
      className="relative h-36 w-32 bg-primary p-1"
      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={`Foto de ${name}`}
        className={`h-full w-full object-cover ${name === "Alejandro Leonel Cavassa" ? "grayscale contrast-[0.96]" : ""}`}
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      />
    </div>
  )
}

function MemberCard({ member }: { member: Member }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col items-center">
      <Hexagon image={member.image} name={member.name} />

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 flex w-full max-w-xs items-center justify-between rounded-sm bg-primary px-4 py-2.5 text-left text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        aria-expanded={open}
      >
        <span>{member.name}</span>
        {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      </button>

      <a
        href="https://www.linkedin.com/in/servicios-a-laboratorios-serlab-sl/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`LinkedIn de ${member.name}`}
        className="mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
      >
        <LinkedinIcon className="h-4 w-4" />
      </a>

      {open && (
        <div className="mt-4 w-full max-w-xs rounded-md border border-border bg-background p-4 text-center shadow-sm">
          {member.roles.map((role) => (
            <p key={role} className="font-semibold text-foreground">
              {role}
            </p>
          ))}
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {member.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function TeamSection() {
  return (
    <section
      id="quienes-somos"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/team-bg.png')" }}
    >
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Nuestro equipo</p>
          <h2 className="mt-3 font-heading text-4xl font-light text-foreground sm:text-5xl">
            Quiénes <span className="italic text-primary">somos</span>
          </h2>
          <span className="mx-auto mt-5 block h-px w-20 bg-primary/50" />
          <p className="mx-auto mt-6 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            SERLAB, consultora integral dedicada al servicio de laboratorios, enfocada en la calidad y el cumplimiento
            de las normas vigentes, brindando asesoramiento en diversas áreas con excelencia, calidad y satisfacción al
            cliente.
          </p>
        </div>
        <div className="grid items-start gap-10 md:grid-cols-3">
          {members.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
