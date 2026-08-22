import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/serlab-logo.png"
      alt="Serlab Consultora"
      width={120}
      height={120}
      priority
      className={`h-14 w-auto ${className}`}
    />
  )
}
