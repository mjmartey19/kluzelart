"use client"

import { useState } from "react"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

const categories = ["All", "Murals", "Street Art", "Portraits"]

const works = [
  {
    id: 1,
    title: "The Barber's Touch",
    category: "Murals",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7645931e-7863-4466-a488-dc1c2e7c74c7_800w.jpg",
    year: "2023"
  },
  {
    id: 2,
    title: "Black Art Fest Entry",
    category: "Street Art",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95eec833-a319-494b-bedb-ee56119c3dfb_1600w.jpg",
    year: "2024"
  },
  {
    id: 3,
    title: "Divine Guidance",
    category: "Portraits",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13898e82-811b-46ce-8ad7-918e7d532b56_800w.jpg",
    year: "2023"
  },
  {
    id: 4,
    title: "Blooming Hope",
    category: "Murals",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6aa1f80-d8be-401f-9803-b67fa8d9e2ca_1600w.jpg",
    year: "2022"
  },
  {
    id: 5,
    title: "Creative Process",
    category: "Street Art",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ccaffe3-e575-4516-8c7f-dec3746a67dd_1600w.jpg",
    year: "2024"
  },
]

export default function WorkGallery() {
  const [filter, setFilter] = useState("All")

  const filteredWorks = works.filter((work) => (filter === "All" ? true : work.category === filter))

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-6 mb-12 fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-sm font-medium transition-colors pb-1 ${filter === cat
              ? "text-white border-b border-primary"
              : "text-neutral-500 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <GalleryGrid projects={filteredWorks} />
    </div>
  )
}
