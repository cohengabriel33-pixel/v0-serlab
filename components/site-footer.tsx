export function SiteFooter() {
  return (
    <footer className="bg-foreground py-6 text-sm text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:text-left">
        <p className="text-background/80">
          {"Copyright © "}
          {new Date().getFullYear()}
          {"  |  "}
          <a href="#" className="underline-offset-2 hover:underline">
            Aviso legal
          </a>
        </p>
        <p className="text-background/60">Serlab Consultora</p>
      </div>
    </footer>
  )
}
