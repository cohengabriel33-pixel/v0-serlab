import Image from "next/image"

const logos = [
  ["Eurofarma", "/clients-eurofarma.png"],
  ["Knight", "/clients-knight.jpg"],
  ["Deltabiotech", "/clients-deltabiotech.jpg"],
  ["Savant", "/clients-savant.jpg"],
  ["Logindoor", "/clients-logindoor.png"],
  ["Elea", "/clients-elea.jpg"],
  ["Braun", "/clients-braun.png"],
  ["Tecnifios", "/clients-tecnifios.jpg"],
  ["LKM", "/clients-lkm.jpg"],
  ["Vannier", "/clients-vannier.jpg"],
  ["Febel", "/clients-febel.jpg"],
  ["Richet", "/clients-richet.png"],
  ["Bausch + Lomb", "/clients-bausch.png"],
  ["SG", "/clients-sg.png"],
  ["Manufacturas Febel", "/clients-febbel.jpg"],
  ["Login", "/clients-login.png"],
  ["Techsphere", "/clients-techsphere.jpg"],
  ["Biogénesis Bagó", "/clients-bago.png"],
] as const

function LogoSet() {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
      {logos.map(([name, src]) => (
        <div key={name} className="flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
          <Image src={src} alt={`Logo de ${name}`} width={180} height={100} className="max-h-20 w-auto max-w-full object-contain mix-blend-multiply dark:mix-blend-normal" />
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
