import Image from "next/image"

const logos = [
  ["Eurofarma", "/clients-eurofarma.png"],
  ["Knight", "/clients-knight.jpg"],
  ["Deltabiotech", "/logos/deltabiotech.jpg"],
  ["Savant", "/clients-savant.jpg"],
  ["Logindoor", "/clients-logindoor.png"],
  ["Elea", "/clients-elea.jpg"],
  ["Braun", "/clients-braun.png"],
  ["Tecnifios", "/clients-tecnifios.jpg"],
  ["LKM", "/clients-lkm.jpg"],
  ["Vannier", "/clients-vannier.jpg"],
  ["Richet", "/clients-richet.png"],
  ["Bausch + Lomb", "/logos/bausch-lomb.png"],
  ["SG", "/clients-sg.png"],
  ["Login", "/clients-login.png"],
  ["Techsphere", "/logos/techsphere.jpg"],
  ["Biogénesis Bagó", "/clients-bago.png"],
  ["IMA Laboratorios", "/logos/laboratorios-ima.jpg"],
  ["Aspen", "/logos/aspen.png"],
  ["PAT Group", "/logos/pat-group.webp"],
  ["UPL Farmacéutica", "/logos/upl-farmaceutica.jpg"],
  ["Febel", "/logos/febbel.jpg"],
  ["Braun Sharing Expertise", "/logos/braun.png"],
] as const

function LogoSet() {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
      {logos.map(([name, src]) => (
        <div key={name} className="flex h-[clamp(7rem,18vw,8rem)] w-[clamp(12rem,30vw,14rem)] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card px-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:px-5">
          <Image src={src} alt={`Logo de ${name}`} width={180} height={100} className="max-h-16 w-auto max-w-[92%] object-contain mix-blend-multiply dark:mix-blend-normal sm:max-h-20" style={{ transform: `scale(${name === "Braun Sharing Expertise" ? 0.78 : ["Deltabiotech", "LKM", "Techsphere", "Savant", "Bausch + Lomb", "Aspen"].includes(name) ? 1.75 : 1.12})` }} />
        </div>
      ))}
    </div>
  )
}

export function ClientsSection() {
  return (
    <section id="clientes" className="overflow-hidden bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Confían en nosotros</p>
        <h2 className="mt-3 font-heading text-4xl font-light text-foreground sm:text-5xl">
          Nuestros <span className="italic text-primary">clientes</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
          Acompañamos a organizaciones del sector farmacéutico, biotecnológico y de salud.
        </p>
      </div>
      <div className="relative mt-12 overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent">
        <div className="animate-marquee-infinite">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  )
}
