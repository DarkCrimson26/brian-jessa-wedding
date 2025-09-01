"use client"

import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="min-h-screen bg-wedding-cream relative"></div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Simplified Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
          {/* Simplified Hero Content - Only Essential Text */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Together with their families */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16"
            >
              <p className="font-serif-elegant text-gray-700 text-lg md:text-xl tracking-[0.2em] uppercase">
                BY THE GRACE OF GOD AND TOGETHER WITH THEIR FAMILIES
              </p>
            </motion.div>

            {/* Names - Only Jessa & Brian */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-16"
            >
              <h1 className="font-tan-aegean text-wedding-name-pink text-8xl md:text-9xl lg:text-[10rem] leading-tight text-center">
                Jessa & Brian
              </h1>
            </motion.div>

            {/* Moved and Enlarged Date Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-16"
            >
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  
                  <p className="font-serif-elegant text-gray-700 text-xl tracking-widest uppercase">SATURDAY</p>
                </div>

                <div className="text-center">
                  <p className="font-serif-elegant text-dusty-pink text-2xl tracking-widest uppercase mb-1">October</p>
                  <p className="font-serif-elegant text-dusty-pink text-7xl font-bold leading-none">25</p>
                  <p className="font-serif-elegant text-dusty-pink text-2xl tracking-[0.3em] mt-1">2025</p>
                </div>

                <div className="text-center">
                  
                  <p className="font-serif-elegant text-gray-700 text-xl tracking-widest uppercase">AT 09:00 AM</p>
                </div>
              </div>
            </motion.div>

            {/* Prenup Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="font-alice text-dusty-pink text-3xl font-semibold mb-6">OUR PRE-NUP VIDEO</h3>
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    poster="/prenup-thumbnail (2).jpg"
                  >
                    <source src="/videos/prenup-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="elegant-dusty-pink-divider mt-6">
                  <div className="elegant-dusty-pink-divider-icon"></div>
                </div>
                
                {/* Prenup Photo Section */}
                <div className="mt-12">
                  <h3 className="font-alice text-dusty-pink text-3xl font-semibold mb-6 text-center">OUR PRENUP PHOTO</h3>
                  <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      poster="/PRENUP photo.jpg"
                    >
                      <source src="/videos/prenup-photo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </div>
  )
}
