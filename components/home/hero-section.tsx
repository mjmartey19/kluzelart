"use client"

import Link from "next/link"
import { ArrowRight, GalleryHorizontal } from "lucide-react"

export default function HeroSection() {
  return (
    <header className="relative w-full h-[110vh] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/027daffb-4cf0-4ded-b1ab-d8daac43bd94_800w.jpg"
          className="filter opacity-60 w-full h-full object-cover scale-105"
          alt="Background Art"
        />
        <div className="bg-gradient-to-t from-[#050505] via-[#050505]/50 absolute top-0 right-0 bottom-0 left-0 to-black/30" />
        <div className="absolute top-0 right-0 bottom-0 left-0" />
      </div>

      <div className="text-center max-w-5xl z-20 mt-20 mx-auto px-6 relative">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] mb-8 fade-up text-white visible font-sans">
          Every wall <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b to-neutral-500 from-white font-sans">
            tells a story.
          </span>
        </h1>

        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10 fade-up text-neutral-400 visible delay-100">
          Transforming spaces with pencil, paint, and creativity. Moving seamlessly between hyper-realistic sketches and massive street murals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 fade-up gap-x-8 gap-y-8 items-center justify-center delay-200">
          <Link
            href="#gallery"
            className="group relative cursor-pointer inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white tracking-wide bg-black rounded-sm overflow-visible transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            {/* Custom Border Gradient Effect */}
            <div className="pointer-events-none absolute inset-[-2px] border-2 border-transparent" style={{ background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.5)) border-box', mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />

            <span className="relative z-10 flex items-center gap-2">
              View Work <GalleryHorizontal className="w-4 h-4" />
            </span>
          </Link>

          <Link
            href="#contact"
            className="group relative cursor-pointer inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white tracking-wide bg-black rounded-sm overflow-visible transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 border border-white/20 hover:border-white/50"
          >
            <span className="relative z-10">Commission Art</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-transparent via-white animate-pulse" />
      </div>
    </header>
  )
}
