import Link from "next/link"

interface CarProps {
  image: string
  name: string
  desc: string
  price: string
  slug: string
}

export default function CarCard({ image, name, desc, price, slug }: CarProps) {
  return (
    <Link href={`/cars/${slug}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{desc}</p>
          <p className="text-red-500 font-bold mt-2">{price}</p>
        </div>
      </div>
    </Link>
  )
}
