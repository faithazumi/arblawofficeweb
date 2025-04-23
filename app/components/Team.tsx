"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CommunitySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-zinc-900 rounded-lg overflow-hidden w-fit max-w-md mx-auto"
      >
        <div className="relative w-full flex justify-center ">
          <Image src="/Profile1.jpg" alt="Community member" height={450} width={450} className="object-cover max-w-full" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif text-white mb-2">ADV Ari Wahyu Wicaksono. SH.MKN.CRA.CPCLE.CTA.</h3>
          <p className="text-zinc-400 mb-4">Founder, Managing Partner</p>
          <div className="flex items-center gap-4 text-zinc-500"></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-zinc-900 rounded-lg overflow-hidden w-fit mx-auto max-w-md"
      >
        <div className="relative w-full flex jusitfy-center">
          <Image src="/dummy.png" alt="Community member" height={550} width={550} className="object-cover max-w-full" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif text-white mb-2">ADV Agung Widyharto. SH.</h3>
          <p className="text-zinc-400 mb-4">Partner</p>
          <div className="flex items-center gap-4 text-zinc-500"></div>
        </div>
      </motion.div>
      {/* Add more community member cards */}
    </div>
  )
}