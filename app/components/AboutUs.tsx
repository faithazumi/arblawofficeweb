"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import about from './../../public/about.jpg'

export default function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative aspect-video rounded-lg overflow-hidden"
      >
        <Image
          src={about}
          alt="Law"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent flex items-end p-6">
        </div>
      </motion.div>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif text-white max-w-2xl leading-relaxed mb-5">❝ Intergritas dan Profesionalisme merupakan landasan utama dalam setiap aspek pekerjaan Kami. Hal ini dilandasi oleh pemahaman mendalam atas hukum Indonesia dan ditunjang dengan pengalaman serta keahlian Kami dengan standar layanan yang tinggi dalam memberikan solusi yang tepat guna kepada Klien ❞</h2>
        </motion.div>
      </div>
    </div>
  )
}

