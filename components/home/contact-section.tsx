"use client"

import { Mail, Instagram, Send } from "lucide-react"

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 relative border-t overflow-hidden bg-neutral-950 border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
                <div className="fade-up">
                    <h2 className="text-6xl md:text-7xl font-medium tracking-tighter mb-8 text-white font-sans">
                        Let's color <br />
                        <span className="text-neutral-600 font-sans">the world.</span>
                    </h2>
                    <p className="text-lg font-light mb-12 max-w-md text-neutral-400">
                        Available for commissions and mural projects globally. Reach out to discuss your canvas.
                    </p>

                    <div className="space-y-8">
                        <a href="mailto:connect@kluzelart.com" className="group flex items-center gap-6 hover:text-amber-500 transition-colors text-white">
                            <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:border-amber-500 transition-colors border-white/10">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Email Us</span>
                                <span className="text-xl font-medium">connect@kluzelart.com</span>
                            </div>
                        </a>
                        <a href="#" className="group flex items-center gap-6 hover:text-amber-500 transition-colors text-white">
                            <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:border-amber-500 transition-colors border-white/10">
                                <Instagram className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Instagram</span>
                                <span className="text-xl font-medium">@kluzelart</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="p-10 border rounded-sm backdrop-blur-sm fade-up bg-neutral-900/30 border-white/10">
                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group relative">
                                <input
                                    type="text"
                                    id="name"
                                    className="peer w-full bg-transparent border-b py-3 focus:outline-none focus:border-amber-500 transition-colors placeholder-transparent border-neutral-700 text-white"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-500"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="group relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer w-full bg-transparent border-b py-3 focus:outline-none focus:border-amber-500 transition-colors placeholder-transparent border-neutral-700 text-white"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-500"
                                >
                                    Email
                                </label>
                            </div>
                        </div>
                        <div className="group relative">
                            <input
                                type="text"
                                id="type"
                                className="peer w-full bg-transparent border-b py-3 focus:outline-none focus:border-amber-500 transition-colors placeholder-transparent border-neutral-700 text-white"
                                placeholder="Project Type"
                            />
                            <label
                                htmlFor="type"
                                className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-500"
                            >
                                Mural / Sketch / Other
                            </label>
                        </div>
                        <div className="group relative">
                            <textarea
                                id="message"
                                rows={4}
                                className="peer w-full bg-transparent border-b py-3 focus:outline-none focus:border-amber-500 transition-colors placeholder-transparent resize-none border-neutral-700 text-white"
                                placeholder="Message"
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-amber-500"
                            >
                                Tell me about your vision
                            </label>
                        </div>
                        <button className="w-full py-5 font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-3 group bg-white text-black hover:bg-neutral-200">
                            Send Inquiry
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
