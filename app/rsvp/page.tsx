"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Send } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from '@emailjs/browser'

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
      // Initialize EmailJS
      emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')
      
      // Email template parameters
      const templateParams = {
        to_email: 'briantams31@gmail.com', // Groom's email
        from_name: data.name,
        from_email: data.email,
        contact_number: data.contactNumber,
        attending: data.attending,
        number_of_guests: data.numberOfGuests,
        message: data.message || 'No message',
        submission_date: new Date().toLocaleString()
      }

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      )
      
      // Show success message
      setSubmitSuccess(true)
      reset()
      
    } catch (error) {
      console.error('RSVP submission error:', error)
      alert('Sorry, there was an error. Please try again.')
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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" name="rsvp-form" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="rsvp-form" />
                    <div style={{display: 'none'}}>
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-mauve font-alice text-lg mb-2">Name:</label>
                        <input
                          {...register("name")}
                          type="text"
                          className={`w-full border rounded-lg px-4 py-3 font-alice focus:outline-none focus:border-transparent transition-all bg-white/90 text-black ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1 font-alice">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-mauve font-alice text-lg mb-2">Contact Number:</label>
                        <input
                          {...register("contactNumber")}
                          type="text"
                          className={`w-full border rounded-lg px-4 py-3 font-alice focus:outline-none focus:border-transparent transition-all bg-white/90 text-black ${
                            errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your phone number"
                        />
                        {errors.contactNumber && (
                          <p className="text-red-500 text-sm mt-1 font-alice">{errors.contactNumber.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-mauve font-alice text-lg mb-2">Email:</label>
                      <input
                        {...register("email")}
                        type="email"
                        className={`w-full border rounded-lg px-4 py-3 font-alice focus:outline-none focus:border-transparent transition-all bg-white/90 text-black ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 font-alice">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-mauve font-alice text-lg mb-4">
                        Are you attending the wedding?
                      </label>
                      <div className="flex items-center space-x-6">
                        <label className="flex items-center font-alice text-lg cursor-pointer">
                          <input
                            {...register("attending")}
                            type="radio"
                            value="yes"
                            className="mr-3 w-4 h-4 text-dusty-pink focus:outline-none"
                          />
                          <span className="text-mauve">Yes</span>
                        </label>
                        <label className="flex items-center font-alice text-lg cursor-pointer">
                          <input
                            {...register("attending")}
                            type="radio"
                            value="no"
                            className="mr-3 w-4 h-4 text-dusty-pink focus:outline-none"
                          />
                          <span className="text-mauve">No</span>
                        </label>
                      </div>
                      {errors.attending && (
                        <p className="text-red-500 text-sm mt-1 font-alice">{errors.attending.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-mauve font-alice text-lg mb-2">Number of Guests:</label>
                      <select
                        {...register("numberOfGuests")}
                        className={`w-full border rounded-lg px-4 py-3 font-alice focus:outline-none focus:border-transparent transition-all bg-white/90 text-black ${
                          errors.numberOfGuests ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select number of guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                      {errors.numberOfGuests && (
                        <p className="text-red-500 text-sm mt-1 font-alice">{errors.numberOfGuests.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-mauve font-alice text-lg mb-2">
                        Special Request(s) / Message:
                      </label>
                      <textarea
                        {...register("message")}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 font-alice h-32 resize-none focus:outline-none focus:border-transparent transition-all bg-white/90 text-black"
                        placeholder="Any dietary restrictions, special requests, or messages for the couple..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-mauve hover:bg-mauve/90 disabled:bg-gray-400 text-white font-alice font-semibold py-4 rounded-lg mt-6 tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none"
                    >
                      <Send size={20} />
                      <span>{isSubmitting ? 'SENDING...' : 'SEND RSVP'}</span>
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
