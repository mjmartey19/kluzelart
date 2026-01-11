"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Project } from "@/components/ui/lightbox"

interface ProjectCardProps {
    project: Project
    onClick: () => void
    layoutId?: string
}

export function ProjectCard({ project, onClick, layoutId }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={onClick}
            className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border fade-up border-white/5"
        >
            <img
                src={project.image}
                className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 ${project.grayscale ? 'grayscale group-hover:grayscale-0' : ''}`}
                alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
                    <span className="px-3 py-1 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest border bg-white/10 text-white border-white/10">
                        {project.year}
                    </span>
                    <ArrowUpRight className="text-white w-5 h-5" />
                </div>
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-amber-500 text-xs font-mono uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-2xl font-medium tracking-tight text-white font-sans">{project.title}</h3>
                </div>
            </div>
        </motion.div>
    )
}
