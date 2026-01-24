
import HeroSection from '@/components/home/hero-section'
import PhilosophySection from '@/components/home/philosophy-section'
import GallerySection from '@/components/home/gallery-section'
import ProcessSection from '@/components/home/process-section'
import ExpertiseSection from '@/components/home/expertise-section'

export default function Home() {
  return (
    <div className="flex flex-col bg-[#050505] min-h-screen">
      <HeroSection />

      <PhilosophySection />

      <ExpertiseSection />

      <GallerySection />

      <ProcessSection />
    </div>
  )
}
