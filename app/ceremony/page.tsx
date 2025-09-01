"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Car, Menu, X } from "lucide-react"
import Link from "next/link"

export default function CeremonyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const venueAddress = "Christ the King Parish Greenmeadows, Greenmeadows Avenue, Quezon City, Metro Manila"
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
    <div className="min-h-screen bg-wedding-cream flex">
      {/* Main Content */}
      <div className="flex-1">
        {/* Ceremony Section */}
        <section className="py-24 bg-dusty-pink-page relative dusty-pink-accent-top dusty-pink-accent-bottom min-h-screen">
          <div className="max-w-6xl mx-auto px-6 pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h1 className="font-alice text-dusty-pink text-7xl mb-6">Ceremony</h1>
              <div className="elegant-dusty-pink-divider">
                <div className="elegant-dusty-pink-divider-icon"></div>
              </div>
            </motion.div>

            {/* Church Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/christ-the-king-church.jpg"
                  alt="Christ the King Parish Greenmeadows"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-alice text-2xl font-semibold drop-shadow-lg">
                    Christ the King Parish Greenmeadows
                  </h3>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-1 gap-12">
              {" "}
              {/* Changed to 1 column */}
              {/* Ceremony Details */}
              <Card className="elegant-card p-10 relative">
                <CardContent className="space-y-8 text-center">
                  <div className="space-y-6 text-mauve">
                    <div className="flex items-center justify-center space-x-3">
                      <Calendar size={20} className="text-dusty-pink" />
                      <span className="font-alice text-lg">Saturday, October 25th, 2025</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <Clock size={20} className="text-dusty-pink" />
                      <span className="font-alice text-lg">09:00 AM</span>
                    </div>
                    <div className="flex items-start justify-center space-x-3">
                      <MapPin size={20} className="text-dusty-pink mt-1" />
                      <div className="text-center">
                        <p className="font-alice font-semibold text-lg">Christ the King Parish Greenmeadows</p>
                        <p className="font-alice">Greenmeadows Avenue, Quezon City, Metro Manila</p>
                      </div>
                    </div>
                  </div>

                  {/* Directions with Map Embed */}
                  <div className="mt-10 p-8 bg-white/80 rounded-xl backdrop-blur-sm">
                    <h4 className="font-alice text-xl font-semibold text-mauve mb-6">
                      Directions & How to Get There
                    </h4>
                    <p className="font-alice text-mauve mb-6">
                      The church is easily accessible via major roads. Parking is available near the landmark areas.
                      Please arrive 30 minutes before the ceremony begins.
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
                        title="Christ the King Parish Greenmeadows Map"
                      ></iframe>
                    </div>

                    {/* Google Maps Buttons - Enhanced Visibility */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                      <button
                        onClick={openGoogleMaps}
                        className="inline-flex items-center justify-center px-8 py-4 bg-mauve hover:bg-mauve/90 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
                      >
                        <MapPin size={24} className="mr-3" />
                        <span className="font-alice">Open in Google Maps</span>
                      </button>
                      <button
                        onClick={getDirections}
                        className="inline-flex items-center justify-center px-8 py-4 bg-dusty-pink hover:bg-dusty-pink/90 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
                      >
                        <Car size={24} className="mr-3" />
                        <span className="font-alice">Get Directions</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
