"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface Project {
    id: number | string
    title: string
    category: string
    year: string
    image: string
    grayscale?: boolean
}

interface LightboxProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
    onNext: () => void
    onPrev: () => void
    hasNext?: boolean
    hasPrev?: boolean
}

export function Lightbox({
    project,
    isOpen,
    onClose,
    onNext,
    onPrev
}: LightboxProps) {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return

            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') onNext()
            if (e.key === 'ArrowLeft') onPrev()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose, onNext, onPrev])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen || !project) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-[60]"
            >
                <X className="w-8 h-8" />
            </button>

            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-[60] hidden md:block"
            >
                <ChevronLeft className="w-10 h-10" />
            </button>

            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-[60] hidden md:block"
            >
                <ChevronRight className="w-10 h-10" />
            </button>

            <div
                className="relative w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-12 gap-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image Container */}
                <div className="relative w-full h-full max-h-[70vh] md:max-h-[85vh] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            src={project.image}
                            alt={project.title}
                            className={`max-w-full max-h-full object-contain ${project.grayscale ? 'grayscale' : ''}`}
                        />
                    </AnimatePresence>
                </div>

                {/* Project Info */}
                <div className="absolute bottom-8 left-8 right-8 md:static md:w-80 bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-lg md:rounded-none border border-white/10 md:border-none">
                    <div className="space-y-4">
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-primary text-xs font-mono uppercase tracking-widest">
                                {project.category}
                            </span>
                            <h2 className="text-3xl font-medium text-white mt-1 mb-2 font-sans">
                                {project.title}
                            </h2>
                            <p className="text-neutral-400 text-sm">
                                {project.year}
                            </p>
                        </motion.div>
                        <div className="h-px bg-white/10 w-full" />
                        <div className="flex gap-4">
                            <button
                                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                                className="p-2 border border-white/10 rounded-full text-white hover:bg-white/10 md:hidden"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); onNext(); }}
                                className="p-2 border border-white/10 rounded-full text-white hover:bg-white/10 md:hidden"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
