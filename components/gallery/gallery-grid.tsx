"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Project, Lightbox } from "@/components/ui/lightbox"
import { ProjectCard } from "@/components/gallery/project-card"

interface GalleryGridProps {
    projects: Project[]
}

export function GalleryGrid({ projects }: GalleryGridProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index)
    }

    const closeLightbox = useCallback(() => {
        setSelectedImageIndex(null)
    }, [])

    const nextImage = useCallback(() => {
        setSelectedImageIndex((prev) =>
            prev === null ? null : (prev + 1) % projects.length
        )
    }, [projects.length])

    const prevImage = useCallback(() => {
        setSelectedImageIndex((prev) =>
            prev === null ? null : (prev - 1 + projects.length) % projects.length
        )
    }, [projects.length])

    const selectedProject = selectedImageIndex !== null ? projects[selectedImageIndex] : null

    return (
        <>
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => openLightbox(index)}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

            <Lightbox
                project={selectedProject}
                isOpen={selectedImageIndex !== null}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    )
}
