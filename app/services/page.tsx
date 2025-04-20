

import service  from "./data"
import Contact from "../components/Contact"


export default function Home () {
  return (
      <main className="container mx-auto py-36 px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {service.map((service) => (
            <div className="shadow-lg rouded-lg">
              <img className="rounded-t-lg" src={service.img} alt="" />
            <div className="p-5">
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