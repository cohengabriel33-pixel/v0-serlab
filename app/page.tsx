import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TeamSection } from "@/components/team-section"
import { ServicesSection } from "@/components/services-section"
import { CampusSection } from "@/components/campus-section"
import { ClientsSection } from "@/components/clients-section"
import { RecruitmentSection } from "@/components/recruitment-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <TeamSection />
      <ServicesSection />
      <CampusSection />
      <ClientsSection />
      <RecruitmentSection />
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}
