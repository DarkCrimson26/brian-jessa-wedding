"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Send } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

// RSVP Form Validation Schema
const rsvpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contactNumber: z.string().min(10, "Please enter a valid contact number"),
  email: z.string().email("Please enter a valid email address"),
  attending: z.enum(["yes", "no"], {
    required_error: "Please select if you're attending",
  }),
  numberOfGuests: z.string().min(1, "Please select number of guests"),
  message: z.string().optional(),
})

type RSVPFormData = z.infer<typeof rsvpSchema>

export default function RSVPPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
  })

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true)
    try {
      // Use Netlify Forms for form submissions
      const formData = new FormData()
      formData.append('form-name', 'rsvp')
      formData.append('name', data.name)
      formData.append('contactNumber', data.contactNumber)
      formData.append('email', data.email)
      formData.append('attending', data.attending)
      formData.append('numberOfGuests', data.numberOfGuests)
      formData.append('message', data.message || '')
      
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
      } else {
        let errorData
        try {
          errorData = await response.json()
        } catch (jsonError) {
          console.error('Invalid JSON response:', jsonError)
          throw new Error(`Server error (${response.status}): ${response.statusText}`)
        }
        console.error('API Error:', errorData)
        throw new Error(errorData.details || errorData.error || 'Failed to submit RSVP')
      }
    } catch (error) {
      console.error('RSVP submission error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      alert(`Sorry, there was an error submitting your RSVP: ${errorMessage}. Please try again.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {" "}
      {/* Removed bg-white */}
      {/* Elegant Left Sidebar Navigation */}
      {/* Remove the sidebar and sidebar header navigation code */}
      {/* Main Content */}
      <div className="flex-1">
        {/* RSVP Section */}
        <section className="py-24 relative min-h-screen bg-wedding-cream">
          <div className="max-w-4xl mx-auto px-6 pt-16 lg:pt-0">
            <div className="text-center mb-12">
              <h1 className="font-tan-aegean text-7xl mb-8 text-dusty-pink">Will You Be Joining Us?</h1>
              <div className="elegant-dusty-pink-divider">
                <div className="elegant-dusty-pink-divider-icon"></div>
              </div>
            </div>

            <div className="mb-10 text-center font-elegant-serif text-lg space-y-2">
                     <div className="text-dusty-pink">The Ceremony starts at 09AM</div>
       <div className="text-dusty-pink">Your response is requested before July 15th.</div>
            </div>

            <Card className="elegant-card p-10 relative">
              <CardContent>
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <h3 className="font-alice text-3xl text-dusty-pink mb-6">Thank You!</h3>
                    <p className="font-alice text-lg text-mauve mb-4">
                      Your RSVP has been received successfully.
                    </p>
                    <p className="font-alice text-lg text-mauve">
                      We'll send you a confirmation shortly!
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 bg-dusty-pink hover:bg-dusty-pink/90 text-white font-alice py-2 px-6 rounded-lg"
                    >
                      Submit Another RSVP
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="font-alice text-3xl text-dusty-pink mb-6">RSVP Form</h3>
                    <p className="font-alice text-lg text-mauve mb-8">
                      Please click the button below to submit your RSVP
                    </p>
                    <a 
                      href="https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-mauve hover:bg-mauve/90 text-white font-alice font-semibold py-4 px-8 rounded-lg tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none"
                    >
                      <Send size={20} />
                      <span>SUBMIT RSVP</span>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
