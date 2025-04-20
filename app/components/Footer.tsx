import Link from "next/link"
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif text-white mb-4">ARB Law Office</h3>
            <p className="mb-4">Kepercayaan & Integritas dalam Setiap Langkah Hukum.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-600 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-serif text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="hover:text-rose-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/prArea" className="hover:text-rose-600 transition">
                  Practice Area
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-rose-600 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-rose-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Jl. Benteng Betawi No.35, RT.001/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15141</li>
              <li>Phone: +62 812 3368 901</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ARB Law Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

