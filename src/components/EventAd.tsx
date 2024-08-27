'use client';


import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock } from 'lucide-react'

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full max-w-md overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-6 text-white shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-yellow-300 opacity-10"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 90 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-pink-400 opacity-10"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? -90 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <h1 className="mb-2 text-3xl font-bold">Tech Innovation Summit 2023</h1>
      <p className="mb-4 text-lg font-light">Shaping the Future of Technology</p>

      <div className="mb-6 flex flex-col space-y-2">
        <div className="flex items-center">
          <Calendar className="mr-2 h-5 w-5" />
          <span>September 15-17, 2023</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 h-5 w-5" />
          <span>Tokyo International Forum</span>
        </div>
        <div className="flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          <span>9:00 AM - 6:00 PM</span>
        </div>
      </div>

      <p className="mb-6 text-sm">
        Join industry leaders and innovators for three days of inspiring talks, workshops, and networking
        opportunities. Discover the latest trends and technologies shaping our digital future.
      </p>

      <motion.button
        className="w-full rounded-full bg-white px-6 py-2 font-semibold text-indigo-700 transition-colors hover:bg-indigo-100"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Register Now
      </motion.button>

      <div className="mt-4 text-center text-xs">
        <a href="#" className="underline">
          Learn More
        </a>
        {' | '}
        <a href="#" className="underline">
          View Schedule
        </a>
      </div>
    </motion.div>
  )
}
