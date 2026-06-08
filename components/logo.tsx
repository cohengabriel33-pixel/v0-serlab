export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <div className="flex items-center gap-1">
        <span className="font-heading text-3xl font-bold tracking-tight text-primary">S</span>
        <div className="relative h-7 w-7">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
          <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-primary/70" />
          <span className="absolute right-0 top-2 h-1.5 w-1.5 rounded-full bg-primary/70" />
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary/50" />
          <svg viewBox="0 0 40 40" className="h-full w-full text-primary/40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="20" y1="6" x2="6" y2="18" />
            <line x1="20" y1="6" x2="34" y2="16" />
            <line x1="6" y1="18" x2="20" y2="34" />
            <line x1="34" y1="16" x2="20" y2="34" />
          </svg>
        </div>
        <span className="font-heading text-3xl font-bold tracking-tight text-primary">L</span>
      </div>
      <span className="mt-0.5 font-heading text-sm font-semibold tracking-[0.35em] text-foreground">SERLAB</span>
    </div>
  )
}
