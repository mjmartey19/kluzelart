
export default function PhilosophySection() {
    return (
        <section id="philosophy" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 fade-up sticky top-32 self-start">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 leading-[1.1] text-white font-sans">
                            Every surface is a<br />
                            <span className="text-neutral-500 font-sans">potential canvas.</span>
                        </h2>
                        <p className="font-light leading-relaxed mb-8 text-neutral-400">
                            Born from the vibrant streets of Ghana, Kluzel Art is more than just a name. It is a belief that creativity is boundless. I have fun with pencil, paint, and any materials I come across, constructing feelings that stop traffic.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            <div>
                                <span className="block text-3xl font-bold mb-1 text-white font-sans">40+</span>
                                <span className="text-xs text-neutral-500 uppercase tracking-widest">Sketches Drawn</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold mb-1 text-white font-sans">80+</span>
                                <span className="text-xs text-neutral-500 uppercase tracking-widest">Murals Painted</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid gap-6 fade-up bg-black">
                        {/* Main feature image */}
                        <div className="relative aspect-video group overflow-hidden rounded-sm border border-white/5">
                            <img
                                src="/images/black-art-fest.jpg"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                alt="Mural Art"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-6 left-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 border rounded-full text-[10px] uppercase tracking-widest backdrop-blur-md border-white/20 text-white bg-white/5">
                                        Street Art
                                    </span>
                                </div>
                                <h3 className="text-xl font-medium tracking-tight text-white">Black Art Festival</h3>
                                <p className="text-sm mt-1 text-neutral-400">Mural on concrete, Accra.</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-white/5">
                                <img
                                    src="/images/artist-at-work.jpg"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                    alt="Hyper-Realism"
                                />
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-xl font-medium tracking-tight text-white">Artist at Work</h3>
                                </div>
                            </div>
                            <div className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-white/5">
                                <img
                                    src="/images/hand-rose.jpg"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    alt="Color Theory"
                                />
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-xl font-medium tracking-tight text-white">The Weight of Beauty</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
