"use client"

import Link from "next/link"

export default function Contact() {

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">You dont have to fight it alone</h2>
      <p className="text-zinc-400 mb-8">
      Hubungi kami untuk konsultasi dengan advokat berpengalaman. Klik tombol di bawah untuk mengakses kontak lengkap kami.
      </p>
        <Link href={'https://linktr.ee/ARB.LawOffice'} className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-400 transition duration-300">Hubungi Sekarang</Link>
    </div>
  )
}

