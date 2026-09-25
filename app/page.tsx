import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main id="contenido" className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
