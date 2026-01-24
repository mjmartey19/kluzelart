
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="overflow-hidden text-white bg-[#050505] border-white/5 border-t pt-24 pb-12">

      {/* Giant Brand Text */}
      <div className="text-center w-full mb-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10 h-full w-full pointer-events-none" />
        <h1 className="text-[18vw] leading-[0.7] select-none font-bold text-[#141414] tracking-tighter mix-blend-screen scale-y-110 font-sans">
          KLUZEL
        </h1>
      </div>

      {/* Links Grid */}
      <div className="border-t border-white/5 grid lg:grid-cols-2">

        {/* Left Side: Navigation Links */}
        <div className="p-8 md:p-16 grid grid-cols-2 gap-12 border-r border-white/5">
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-medium text-primary uppercase tracking-widest mb-2">Explore</h4>
            <Link href="/about" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">About Us</Link>
            <Link href="/work" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Portfolio</Link>
            <Link href="/#process" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Process</Link>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-medium text-primary uppercase tracking-widest mb-2">Connect</h4>
            <Link href="/contact" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Contact Us</Link>
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Twitter/X</a>
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Right Side: Wireframe Illustration (Art Tools) */}
        <div className="relative h-64 lg:h-auto border-t lg:border-t-0 border-white/5 flex items-center justify-center overflow-hidden bg-[#080808] group">

          <svg
            viewBox="0 0 600 200"
            className="w-full max-w-[680px] opacity-30"
            fill="none"
          >

            {/* PIPE SYSTEM */}
            <path
              d="M40 100 H220 V60 H380 V120 H540"
              className="stroke-white stroke-[1] opacity-70"
            />

            {/* DASHED CONSTRUCTION LINE */}
            <path
              d="M40 140 H540"
              className="stroke-white stroke-[1] opacity-30 [stroke-dasharray:6_8]"
            />

            {/* NODES */}
            <circle
              cx="220"
              cy="100"
              r="4"
              className="fill-white opacity-80 group-hover:animate-pulse"
            />
            <circle
              cx="380"
              cy="60"
              r="4"
              className="fill-white opacity-80 group-hover:animate-pulse"
            />
            <circle
              cx="380"
              cy="120"
              r="4"
              className="fill-white opacity-80 group-hover:animate-pulse"
            />

            {/* RED FLOW PARTICLE */}
            <circle
              cx="40"
              cy="100"
              r="3"
              className="fill-[#d22730] opacity-90 group-hover:animate-flow"
            />

            {/* BRUSH MECHANISM */}
            <g transform="translate(570,55) rotate(30)">
              <rect
                x="0"
                y="0"
                width="8"
                height="50"
                className="stroke-white stroke-[1]"
              />
              <rect
                x="0"
                y="50"
                width="8"
                height="14"
                className="stroke-white stroke-[1]"
              />
              <path
                d="M0 64 Q4 76 8 64"
                className="stroke-white stroke-[1]"
              />
            </g>

          </svg>

        </div>

      </div>

      {/* Copyright Row */}
      <div className="border-t border-white/5 px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-600 font-medium tracking-wide">
        <div>
          &copy; {new Date().getFullYear()} Scholar. All rights reserved.
        </div>
      </div>


    </footer>
  )
}
