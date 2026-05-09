import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import NarrativeSection from '@/components/narrative-section'
import PartnershipSection from '@/components/partnership-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <NarrativeSection />
      <PartnershipSection />
      <Footer />
    </main>
  )
}
