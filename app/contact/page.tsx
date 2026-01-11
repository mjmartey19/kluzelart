import Link from "next/link"
import { Mail, Instagram, MapPin, Send } from "lucide-react"

export const metadata = {
  title: "Contact | Kluzel Art",
  description: "Get in touch with Kluzel Art for commissions, collaborations, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* Intro */}
        <div className="fade-up">

          <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-white font-sans leading-none mb-8">
            Let's Create <br /><span className="text-neutral-500">Together.</span>
          </h1>
          <p className="text-xl text-neutral-400 font-light mb-12 max-w-md leading-relaxed">
            Have a wall that needs life? A brand that needs a story? Reach out to us and let's discuss how we can
            collaborate on your next masterpiece.
          </p>

          <div className="space-y-8">
            <a href="mailto:kluzelart@gmail.com" className="group flex items-center gap-6 hover:text-primary transition-colors text-white">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:border-primary transition-colors border-white/10 bg-white/5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Email Us</span>
                <span className="text-xl font-medium">kluzelart.com</span>
              </div>
            </a>

            <a href="https://www.instagram.com/kluzel_art/" className="group flex items-center gap-6 hover:text-primary transition-colors text-white">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:border-primary transition-colors border-white/10 bg-white/5">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Instagram</span>
                <span className="text-xl font-medium">@kluzel_art</span>
              </div>
            </a>

            <div className="group flex items-center gap-6 text-white">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center border-primary/10 bg-white/5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Studio</span>
                <span className="text-xl font-medium">Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-10 border rounded-sm backdrop-blur-sm fade-up bg-neutral-900/30 border-white/10 h-fit">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative">
                <input
                  type="text"
                  id="name"
                  className="peer w-full bg-transparent border-b py-3 focus:outline-none focus:border-primary transition-colors placeholder-transparent border-neutral-700 text-white"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary"
                >
                  Name
                </label>
              </div>
              <div className="group relative">
                <input
                  type="email"
                  id="email"
                  className="peer w-full bg-transparent border-b py-3 focus:outline-none focus:border-primary transition-colors placeholder-transparent border-neutral-700 text-white"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="group relative">
              <input
                type="text"
                id="type"
                className="peer w-full bg-transparent border-b py-3 focus:outline-none focus:border-primary transition-colors placeholder-transparent border-neutral-700 text-white"
                placeholder="Project Type"
              />
              <label
                htmlFor="type"
                className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary"
              >
                Mural / Sketch / Other
              </label>
            </div>
            <div className="group relative">
              <textarea
                id="message"
                rows={4}
                className="peer w-full bg-transparent border-b py-3 focus:outline-none focus:border-primary transition-colors placeholder-transparent resize-none border-neutral-700 text-white"
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary"
              >
                Tell me about your vision
              </label>
            </div>
            <button className="w-full py-5 font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-3 group bg-primary text-white hover:bg-primary/80 cursor-pointer">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
