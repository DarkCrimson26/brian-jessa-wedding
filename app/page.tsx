"use client"

import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Hidden form for Netlify Forms detection */}
      <form name="rsvp" data-netlify="true" data-netlify-honeypot="bot-field" style={{display: 'none'}}>
        <input type="hidden" name="form-name" value="rsvp" />
        <input type="hidden" name="bot-field" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="contactNumber" />
        <select name="attending">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select name="numberOfGuests">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>
        <textarea name="message"></textarea>
      </form>
      {/* Background */}
      <div className="min-h-screen bg-wedding-cream relative"></div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Simplified Hero Section */}
        <section className="relative flex items-start justify-center pt-0 pb-8 px-4" style={{marginTop: '-20px', position: 'absolute', top: '100px', left: '0', right: '0', zIndex: '10'}}>
          {/* Simplified Hero Content - Only Essential Text */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Together with their families */}
            <div className="mb-1">
              <p className="font-serif-elegant text-gray-700 text-lg md:text-xl tracking-[0.2em] uppercase">
                BY THE GRACE OF GOD AND TOGETHER WITH THEIR FAMILIES
              </p>
            </div>

            {/* Names - Only Jessa & Brian */}
            <div className="mb-1">
              <h1 className="font-tan-aegean text-wedding-name-pink text-8xl md:text-9xl lg:text-[10rem] leading-tight text-center">
                Jessa & Brian
              </h1>
            </div>

            {/* Moved and Enlarged Date Section */}
            <div className="mb-1">
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
            </div>

            {/* Prenup Video Section */}
            <div className="mb-1">
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
                      poster="/PRENUP PHOTO.jpg"
                    >
                      <source src="/videos/prenup-photo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}
