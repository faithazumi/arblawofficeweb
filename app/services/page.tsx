
import Image from "next/image"
import service  from "./data"
import Contact from "../components/Contact"


export default function Home () {
  return (
      <main className="container mx-auto py-36 px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((service, index) => (
            <div 
              key={index} 
              className="shadow-lg rounded-lg overflow-hidden bg-zinc-800/50 hover:bg-zinc-800/70 transition-colors duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-md font-normal text-zinc-300">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
        <section id="contact" className="py-24">
              <div className="container mx-auto px-4">
                <Contact />
              </div>
            </section>
      </main>
  )
}