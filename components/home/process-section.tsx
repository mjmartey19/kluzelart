"use client"

import Link from "next/link"
import { PencilLine, PaintRoller, Building2 } from "lucide-react"

export default function ProcessSection() {
    return (
        <section id="process" className="py-32 relative overflow-hidden bg-neutral-950">
            {/* Subtle Background Element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none bg-amber-900/5" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Content Side */}
                    <div className="fade-up order-2 lg:order-1">

                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 leading-[1.1] text-white font-sans">
                            The Art of <br />
                            <span className="text-neutral-500 font-sans">Hybrid Media</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-2">
                                    <h3 className="text-xl font-medium text-white">Graphite Foundations</h3>
                                </div>
                                <p className="font-light text-neutral-400">It begins with the pencil. Detailed, hyper-realistic sketches that capture the soul of the subject before a single drop of paint touches the surface.</p>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-4 mb-2">
                                    <h3 className="text-xl font-medium text-white">Explosive Color</h3>
                                </div>
                                <p className="font-light text-neutral-400">We layer vibrant acrylics and spray paint, bringing the streets of Ghana to life through bold contrasts and meaningful symbolism.</p>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-4 mb-2">
                                    <h3 className="text-xl font-medium text-white">Environment Interaction</h3>
                                </div>
                                <p className="font-light text-neutral-400">The wall texture, the lighting, the surroundings—every element is incorporated. The art doesn't just sit on the wall; it lives in the space.</p>
                            </div>
                        </div>

                        <div className="mt-10 ">
                            <Link href="/contact" className="border-b border-primary pb-1 text-sm font-medium hover:text-primary transition-colors text-white">
                                Start a Collaboration
                            </Link>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="fade-up order-1 lg:order-2 relative">
                        <div className="relative aspect-square rounded-sm overflow-hidden border border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2942&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-100"
                                alt="Tools of Trade"
                            />

                            {/* Overlay Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <p className="text-amber-500 font-mono text-xs mb-2">Tools of Trade</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Pencil', 'Charcoal', 'Spray Paint', 'Acrylic', 'Pastel'].map((tool) => (
                                        <span key={tool} className="px-2 py-1 border rounded-sm text-[10px] uppercase bg-white/10 border-white/10 text-white">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute -top-4 -right-4 w-full h-full border -z-10 rounded-sm border-white/5" />
                    </div>
                </div>
            </div>
        </section>
    )
}
