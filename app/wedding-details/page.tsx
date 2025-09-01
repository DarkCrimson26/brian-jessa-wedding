"use client"

import React from "react"
import { motion } from "framer-motion"
import { Gift, Camera, Users } from "lucide-react"

export default function WeddingDetailsPage() {

  return (
    <div className="min-h-screen bg-wedding-cream flex">
      {/* Main Content */}
      <div className="flex-1">
        {/* Wedding Details Section */}
        <section className="py-24 bg-dusty-pink-page relative dusty-pink-accent-top dusty-pink-accent-bottom min-h-screen">
          <div className="max-w-4xl mx-auto px-6 pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              {/* The Finer Details Title */}
              <div className="mb-8 w-full text-center -mt-4">
                <h1 className="font-alice text-dusty-pink text-6xl font-semibold mb-6">The Finer Details</h1>
              <div className="elegant-dusty-pink-divider">
                <div className="elegant-dusty-pink-divider-icon"></div>
                </div>
              </div>
            </motion.div>

            {/* Unified Content Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="elegant-card p-10 relative space-y-12 text-mauve"
            >
              {/* Finer Details Image */}
              <div className="mb-8 w-full flex justify-center">
                <img src="/ABCD1.jpg" alt="The Finer Details" className="w-full max-w-5xl h-auto shadow-lg rounded-lg" />
              </div>

              {/* Dress Code */}
              <div className="bg-pink-50 p-6 rounded-lg">
                <p className="font-alice text-center font-bold text-lg">
                  **STRICTLY NO WEARING OF WHITE DRESS OR CASUAL CLOTHES**
                </p>
              </div>

              {/* Divider */}
              <div className="elegant-dusty-pink-divider">
                <div className="elegant-dusty-pink-divider-icon"></div>
              </div>

              {/* Gift Guide */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Gift className="text-dusty-pink" size={24} />
                  <h3 className="font-alice text-2xl font-semibold text-mauve">Gift Guide</h3>
                </div>
                <p className="font-alice leading-relaxed">
                  With all that we have, we are truly blessed. Your presence meant the world to us. But if you are
                  thinking of giving a gift to help us on our way, a Monetary gift will be very much appreciated.
                </p>
                <div className="bg-white/80 p-6 rounded-lg">
                  <h4 className="font-alice text-lg font-semibold text-mauve mb-3">Gift Suggestions:</h4>
                  <ul className="space-y-2">
                    <li className="font-alice">• Monetary gifts (preferred)</li>
                    <li className="font-alice">• Home essentials</li>
                    <li className="font-alice">• Kitchen appliances</li>
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="elegant-dusty-pink-divider">
                <div className="elegant-dusty-pink-divider-icon"></div>
              </div>

              {/* Unplugged Ceremony */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Camera className="text-dusty-pink" size={24} />
                  <h3 className="font-alice text-2xl font-semibold text-mauve">Unplugged Ceremony</h3>
                </div>
                <p className="font-alice leading-relaxed mb-6">
                  We invite all our guests to be fully present and enjoy this special moments with us. Please turn off
                  all devices during wedding ceremony.
                </p>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-alice text-lg font-semibold text-mauve mb-3">Why Unplugged?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="font-alice">• Be fully present in the moment</li>
                    <li className="font-alice">• Allow our photographer to capture the best shots</li>
                    <li className="font-alice">• Create a more intimate atmosphere</li>
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="elegant-dusty-pink-divider">
                <div className="elegant-dusty-pink-divider-icon"></div>
              </div>

              {/* Help Us Capture */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="text-dusty-pink" size={24} />
                  <h3 className="font-alice text-2xl font-semibold text-mauve">Help Us Capture!</h3>
                </div>
                <p className="font-alice leading-relaxed">
                  Please share your photos and videos with us using our official hashtag:
                </p>
                <div className="bg-gradient-to-r from-dusty-pink/10 to-mauve/10 p-8 rounded-lg text-center focus:outline-none focus:shadow-none">
                  <p className="text-wedding-name-pink text-3xl mb-4" style={{ fontFamily: 'Alice, serif', fontWeight: 'normal' }}>#BRIANmadetherightJESSAcion</p>
                  <p className="text-mauve text-sm" style={{ fontFamily: 'Alice, serif', fontWeight: 'normal' }}>Tag us in your social media posts!</p>
                </div>
                <div className="bg-white/80 p-6 rounded-lg">
                  <h4 className="font-serif-elegant text-lg font-semibold text-mauve mb-3">Share Your Moments:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="font-body">• Reception photos and videos</li>
                    <li className="font-body">• Behind-the-scenes moments</li>
                    <li className="font-body">• Group photos with friends</li>
                  </ul>
                </div>
              </div>

            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
