import WorkGallery from "@/components/work/work-gallery"

export const metadata = {
  title: "Portfolio | Kluzel Art",
  description: "Explore our diverse collection of murals, sketches, and mixed media art.",
}

export default function WorkPage() {
  return (
    <div className="min-h-screen pb-20 bg-[#050505] pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 fade-up">

          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white font-sans">
            Featured <span className="text-neutral-500">Works</span>
          </h1>
        </div>

        <WorkGallery />
      </div>
    </div>
  )
}
