"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle success state here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium ml-1">
            First Name
          </label>
          <Input
            id="firstName"
            placeholder="Jane"
            className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium ml-1">
            Last Name
          </label>
          <Input
            id="lastName"
            placeholder="Doe"
            className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium ml-1">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="jane@example.com"
          className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium ml-1">
          Project Type
        </label>
        <select
          id="subject"
          className="flex h-12 w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option>Mural Commission</option>
          <option>Portrait Request</option>
          <option>Collaboration</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium ml-1">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your vision..."
          className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:border-primary/50 focus:ring-primary/20 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
