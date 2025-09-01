"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Calendar, Clock, MapPin, Car } from "lucide-react"
import Link from "next/link"

export default function ReceptionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const venueAddress = "Glass Garden Events, 257 Evangelista Ave. Santolan, Pasig City"
  const encodedAddress = encodeURIComponent(venueAddress)

  // Google Maps embed URL
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  const getDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}&travelmode=driving`, "_blank")
  }

  return (
    <div className="min-h-screen flex">
      {" "}
      {/* Removed bg-white */}
      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        {/* Reception Section */}
        <section className="py-24 bg-dusty-pink-page relative min-h-screen">
          <div className="max-w-6xl mx-auto px-6 pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h1 className="font-script text-dusty-pink text-7xl mb-6">Reception</h1>
              <div className="elegant-dusty-pink-divider">
                <div className="elegant-dusty-pink-divider-icon"></div>
              </div>
            </motion.div>

            {/* Glass Garden Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/glass-garden-venue.png" alt="Glass Garden Events" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-serif-elegant text-2xl font-semibold drop-shadow-lg">Glass Garden Events</h3>
                </div>
              </div>
            </motion.div>

            <Card className="elegant-card p-10 relative max-w-4xl mx-auto">
              <CardContent className="space-y-8 text-center">
                <div className="space-y-6 text-mauve">
                  <div className="flex items-center justify-center space-x-3">
                    <Calendar size={20} className="text-dusty-pink" />
                    <span className="font-body text-lg">Following the ceremony</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Clock size={20} className="text-dusty-pink" />
                    <span className="font-body text-lg">12:00 PM onwards</span>
                  </div>
                  <div className="flex items-start justify-center space-x-3">
                    <MapPin size={20} className="text-dusty-pink mt-1" />
                    <div className="text-center">
                      <p className="font-serif-elegant font-semibold text-lg">Glass Garden Events</p>
                      <p className="font-body">257 Evangelista Ave. Santolan, Pasig City</p>
                    </div>
                  </div>
                </div>

                {/* Reception Details with Map Embed */}
                <div className="mt-10 p-8 bg-white/80 rounded-xl backdrop-blur-sm">
                  <h4 className="font-serif-elegant text-xl font-semibold text-mauve mb-6">Reception Details</h4>
                  <p className="font-body text-mauve mb-6">
                    Join us for an elegant celebration following the ceremony. The Glass Garden Events provides a
                    beautiful setting with its stunning glass architecture and lush garden atmosphere.
                  </p>

                  {/* Interactive Map Embed */}
                  <div className="mt-6 mb-6 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={googleMapsEmbedUrl}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Glass Garden Events Map"
                    ></iframe>
                  </div>

                  {/* Google Maps Buttons - Enhanced Visibility */}
                  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={openGoogleMaps}
                      className="inline-flex items-center justify-center px-8 py-4 bg-mauve hover:bg-mauve/90 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
                    >
                      <MapPin size={24} className="mr-3" />
                      <span>Open in Google Maps</span>
                    </button>
                    <button
                      onClick={getDirections}
                      className="inline-flex items-center justify-center px-8 py-4 bg-dusty-pink hover:bg-dusty-pink/90 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
                    >
                      <Car size={24} className="mr-3" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>

                {/* Theme & Gifts */}
                <div className="mt-10 p-8 bg-pink-50/50 rounded-xl backdrop-blur-sm">
                  <h4 className="font-serif-elegant text-xl font-semibold text-mauve mb-6">Theme & Gifts</h4>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-soft-mauve">Colors to Wear:</span>
                      <p className="font-body text-mauve">Dark gray, silver, burgundy, or dusty pink tones</p>
                    </div>
                    <div>
                      <span className="font-semibold text-soft-mauve">Gift Suggestions:</span>
                      <p className="font-body text-mauve">
                        Your presence is our greatest gift, but if you wish to give something, monetary gifts are
                        greatly appreciated.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
