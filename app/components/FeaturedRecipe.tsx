interface FeaturedRecipeProps {
    title: string
    chef: string
    image: string
    cuisine: string
    difficulty: string
  }
  
  export default function FeaturedRecipe({ title, chef, image, cuisine, difficulty }: FeaturedRecipeProps) {
    return (
      <div className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
        <div className="relative aspect-video">
          <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
          <p className="text-zinc-400 mb-4">By {chef}</p>
          <div className="flex justify-between text-sm">
            <span className="text-amber-500">{cuisine}</span>
            <span className="text-zinc-500">{difficulty}</span>
          </div>
        </div>
      </div>
    )
  }
  
  