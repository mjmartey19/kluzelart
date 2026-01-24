
import { Palette, PenTool, Store } from "lucide-react"
import Image from "next/image"

export default function ExpertiseSection() {
    return (
        <section className="py-32 relative overflow-hidden border-t bg-black border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Services */}
                    <div className="space-y-12">
                        <div className="fade-up">
                            <h2 className="text-4xl font-medium tracking-tighter text-white font-sans mb-6">Artistic Services</h2>
                            <p className="text-neutral-400 max-w-md leading-relaxed">
                                Bringing creative visions to life through diverse mediums and scalable applications.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Service 1 */}
                            <div className="group flex gap-6 fade-up" style={{ animationDelay: "200ms" }}>
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 rounded-sm flex items-center justify-center border transition-colors bg-neutral-900 border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10">
                                        <Store className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-white group-hover:text-primary transition-colors">Brand Activations</h3>
                                    <p className="text-sm leading-relaxed text-neutral-400">Live art performances and custom installations to elevate brand events and product launches.</p>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="group flex gap-6 fade-up" style={{ animationDelay: "100ms" }}>
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 rounded-sm flex items-center justify-center border transition-colors bg-neutral-900 border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10">
                                        <PenTool className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-white group-hover:text-primary transition-colors">Pencil Portraiture</h3>
                                    <p className="text-sm leading-relaxed text-neutral-400">Hyper-realistic commissioned portraits that capture not just the likeness, but the spirit of the subject.</p>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="group flex gap-6 fade-up">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 rounded-sm flex items-center justify-center border transition-colors bg-neutral-900 border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10">
                                        <Palette className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-white group-hover:text-primary transition-colors">Large Scale Murals</h3>
                                    <p className="text-sm leading-relaxed text-neutral-400">Transforming blank walls into massive storytelling devices for businesses, communities, and private homes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Showcase */}
                    <div className="fade-up relative" style={{ animationDelay: "300ms" }}>
                        {/* Art Frame Container */}
                        <div className="relative mx-auto w-full max-w-[600px]" style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))" }}>
                            {/* Frame Border */}
                            <div className="p-3 bg-neutral-900 ring-1 ring-white/10 shadow-2xl rounded-sm">
                                {/* Inner Mat/Canvas Area */}
                                <div className="bg-neutral-950 p-2 border border-white/5 relative overflow-hidden">
                                    {/* Images Grid */}
                                    <div className="grid grid-cols-2 gap-2 aspect-[4/5]">
                                        {/* Main Image: Murals (Top Half) */}
                                        <div className="col-span-2 relative h-full min-h-[240px] overflow-hidden bg-neutral-800">
                                            <Image
                                                src="/images/certified-foodie.jpg"

                                                alt="Large Scale Murals"
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                        </div>

                                        {/* Secondary 1: Portraiture (Bottom Left) */}
                                        <div className="relative h-full min-h-[200px] overflow-hidden bg-neutral-800">
                                            <Image
                                                src="/images/smile-each-other.jpg"
                                                alt="Pencil Portraiture"
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                        </div>

                                        {/* Secondary 2: Activations (Bottom Right) */}
                                        <div className="relative h-full min-h-[200px] overflow-hidden bg-neutral-800">
                                            <Image
                                                src="/images/hide-woman.jpg"
                                                alt="Brand Activations"
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -z-10 -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-20"></div>
                        <div className="absolute -z-10 -left-20 -top-20 w-72 h-72 bg-white/5 rounded-full blur-[80px] opacity-10"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
