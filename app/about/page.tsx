import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "About | Kluzel Art",
  description: "Learn about the artist behind Kluzel Art and our mission to bring walls to life.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32 fade-up">
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/5">
            <Image
              src="/images/artist-at-work.jpg"
              alt="Kluzel Art Artist"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-8 sticky top-32">
            <div>

              <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-white font-sans leading-none">
                We Live <br /><span className="text-neutral-500">To Create.</span>
              </h1>
            </div>

            <p className="text-xl text-neutral-400 font-light leading-relaxed">
              Kluzel Art is more than just a name; it's a philosophy. Born from the vibrant streets of Ghana, we believe
              that every surface is a potential canvas and every material is a tool for expression.
            </p>

            <p className="text-lg text-neutral-500 font-light leading-relaxed">
              "I have fun with pencil, paint, and any materials I come across." This simple approach allows for
              boundless creativity, moving seamlessly between hyper-realistic pencil sketches to massive, colorful
              street murals that stop traffic.
            </p>

            <div className="pt-8 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors uppercase tracking-widest text-sm"
              >
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Vision", desc: "To transform ordinary spaces into extraordinary experiences through the power of visual storytelling." },
            { title: "Mission", desc: "To create art that resonates, inspires, and adds color to the world, one wall at a time." },
            { title: "Process", desc: "Collaboration is key. We listen, we sketch, and then we execute with passion and precision." }
          ].map((item, i) => (
            <div key={i} className="group p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <h3 className="text-2xl font-medium text-white mb-4 font-sans">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
