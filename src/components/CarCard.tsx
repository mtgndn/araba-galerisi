import Link from "next/link";

interface CarProps {
  image: string;
  name: string;
  desc: string;
  price: string;
  slug: string;
}

export default function CarCard({ image, name, desc, price, slug }: CarProps) {
  return (
    <Link href={`/cars/${slug}`}>
      <div className="
      bg-white/20 
      backdrop-blur-md 
      rounded-xl 
      shadow-lg 
      border border-white/30 
      p-4 
      transition-transform 
      duration-300 
      hover:scale-105 
      hover:shadow-2xl 
      hover:bg-white/30
      cursor-pointer
      flex
      flex-col
      "
    >
      <img
        src={image}
        alt={name}
        className="rounded-lg object-cover w-full h-48 mb-4"
      />
      <h2 className="text-xl font-semibold text-black mb-1 drop-shadow-md">{name}</h2>
      <p className="text-black/80 mb-2">{desc}</p>
      <p className="text-black font-bold text-lg drop-shadow-md">{price}</p>
    </div>
    </Link>
  );
}
