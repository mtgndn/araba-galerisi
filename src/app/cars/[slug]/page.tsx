import { Button } from "@/components/ui/button"
import Link from "next/link"

const cars = [
  { image: "/bmw.jpg", name: "BMW M4", desc: "2023 Model, 450 HP", price: "₺4.500.000", slug: "bmw-m4", details: "BMW M4, 450 beygir gücünde, çift turbo motor ve lüks iç tasarımıyla piste ve yola hazır." },
  { image: "/audi.jpg", name: "Audi RS7", desc: "2023 Model, 600 HP", price: "₺6.200.000", slug: "audi-rs7", details: "Audi RS7, 600 beygir gücü, quattro çekiş sistemi ve yüksek teknoloji kokpitiyle performans severler için üretildi." },
  { image: "/mercedes.jpg", name: "Mercedes AMG GT", desc: "2022 Model, 530 HP", price: "₺5.800.000", slug: "mercedes-amg-gt", details: "Mercedes AMG GT, 530 HP V8 motoru ve kusursuz yol tutuşuyla hem pist hem şehir sürüşünde fark yaratır." },
]

export default function CarDetail({ params }: { params: { slug: string } }) {
  const car = cars.find(c => c.slug === params.slug)

  if (!car) {
    return <div className="p-10 text-center">Araç bulunamadı.</div>
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <img src={car.image} alt={car.name} className="w-full h-[500px] object-cover rounded-xl mb-6" />
      <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{car.desc}</p>
      <p className="text-gray-600 mb-4">{car.details}</p>
      <p className="text-red-500 font-bold text-2xl mb-6">{car.price}</p>

      <Link href="/">
        <Button>Geri Dön</Button>
      </Link>
    </div>
  )
}
