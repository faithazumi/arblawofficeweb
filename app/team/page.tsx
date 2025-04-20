
import { motion } from "motion/react"
import team  from "./data"
import Link from "next/link"
import bg from "../../public/bg.jpg"
import Contact from "../components/Contact"


export default function Home () {
  return (
<main className="container mx-auto py-36 px-4 md:px-8">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {team.map((team, i) => (
      <div
        key={i}
        className="bg-zinc-900/80 rounded-2xl shadow-xl overflow-hidden border border-zinc-700"
      >
        {/* Gambar proporsional */}
        <img
          className="w-full object-contain"
          src={team.img}
          alt={team.name}
        />
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-2">{team.name}</h3>
          <p className="text-sm font-medium text-zinc-300 mb-3">
            <span className="font-semibold text-white">Spesialis:</span> {team.speciality}
          </p>

          {typeof team.description === "object" ? (
            <div className="space-y-4 text-sm">
              {/* Formal Education */}
              {team.description.formal && (
                <div>
                  <h4 className="font-semibold text-white mb-1">{team.description.formal.title}</h4>
                  <ul className="list-disc list-inside text-zinc-300 space-y-1">
                    {team.description.formal.list.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nonformal Education */}
              {team.description.nonformal && (
                <div>
                  <h4 className="font-semibold text-white mb-1">{team.description.nonformal.title}</h4>
                  <ul className="list-disc list-inside text-zinc-300 space-y-1">
                    {team.description.nonformal.list.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-zinc-300">{team.description}</p>
          )}
        </div>
      </div>
    ))}
  </div>

  <section id="contact" className="py-24 mt-20">
    <div className="container mx-auto px-4">
      <Contact />
    </div>
  </section>
</main>


  )
}