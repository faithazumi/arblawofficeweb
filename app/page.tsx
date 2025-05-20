"use client"

import { motion } from "framer-motion"

import Link from "next/link"
import { Shield } from "lucide-react"
import CommunitySection from "./components/Team"
import { RiMoneyDollarBoxLine } from "react-icons/ri"
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";
import { CiWarning } from "react-icons/ci";
import Contact from "./components/Contact"
import AboutUs from "./components/AboutUs"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="bg.jpg" alt="law building" className="object-cover opacity-30"  />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto" 
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">Integritas, Profesionalisme, dan Kepastian Hukum.</h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            Tim pengacara kami berkomitmen untuk memberikan pendampingan hukum yang jujur, transparan, dan efektif dalam setiap kasus yang kami tangani.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-red-900  transition duration-300"
              >
                Hubungi Kami
              </Link>
              <Link
                href="#prArea"
                className="px-8 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition duration-300"
              >
                Pelajari Selengkapnya
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* practice area Section */}
      <section id="prArea" className="py-24 bg-zinc-800 ">
        <div className="container mx-auto px-4  ">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-15">Ruang Lingkup Jasa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <RiMoneyDollarBoxLine className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl  text-white mb-2">PKPU dan Kepailitan</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl  text-white mb-2">Penanangan Kasus Kriminal</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MdOutlineLibraryBooks className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl  text-white mb-2">Hukum Perdata</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaRegHandshake className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">ARBITASE</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <CiWarning className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Invetigasi Penipuan dan Forensik</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <LuBuilding2 className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Tata Kelola Perusahaan</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <LiaCoinsSolid className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Hak Kekayaan Intelektual</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaComputer className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Teknologi Informasi dan E-Commerce</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className=" col-span-full flex justify-center mt-10"
            >
            <Link
                href="/services"
                className="px-7 py-3.5 bg-rose-600 text-white rounded-full hover:bg-red-900 transition duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Techniques */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-12">Tentang Kami</h2>
          <AboutUs />
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-24 bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-12">Meet Our Team</h2>
          <CommunitySection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </section>
    </main>
  )
}