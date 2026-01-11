"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export default function GallerySection() {
    const projects = [
        {
            id: 1,
            title: "The Prayer",
            year: "2023",
            category: "Street Art",
            image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7645931e-7863-4466-a488-dc1c2e7c74c7_800w.jpg",
            grayscale: false
        },
        {
            id: 2,
            title: "Silent Gaze",
            year: "2024",
            category: "Charcoal & Graphite",
            image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13898e82-811b-46ce-8ad7-918e7d532b56_800w.jpg",
            grayscale: true
        },
        {
            id: 3,
            title: "Afro-Vibrant",
            year: "2023",
            category: "Commission",
            image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6aa1f80-d8be-401f-9803-b67fa8d9e2ca_1600w.jpg",
            grayscale: false
        },
        {
            id: 4,
            title: "Raw Emotion",
            year: "2022",
            category: "Graphite",
            image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06715118-71ed-4b62-b1b2-521534b040d7_800w.jpg",
            grayscale: false
        },
        {
            id: 5,
            title: "Community Walls",
            year: "2024",
            category: "Mural",
            image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ccaffe3-e575-4516-8c7f-dec3746a67dd_1600w.jpg",
            grayscale: false
        },
        {
            id: 6,
            title: "Abstract Flow",
            year: "2023",
            category: "Mixed Media",
            image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9eccebdf-f463-4c78-9d09-2aa8662071e2_800w.jpg",
            grayscale: false
        }
    ]

    return (
        <section id="gallery" className="py-32 bg-[#080808] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 fade-up">
                    <h2 className="text-4xl font-medium tracking-tighter text-white font-sans">Latest Works</h2>
                </div>

                <GalleryGrid projects={projects} />

                <div className="mt-16 text-center fade-up">
                    <Link href="/work" className="inline-flex items-center justify-center gap-2 text-sm transition-colors uppercase tracking-widest group text-neutral-400 hover:text-white">
                        View Full Portfolio
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
