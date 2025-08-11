import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const cars = [
  { 
    name: "BMW 320i",
    desc: "2004 Model, 450 HP",
    price: "₺4.500.000",
    slug: "bmw-320",
    images: [
      "/bmw/bmw1.jpg", 
      "/bmw/bmw2.jpg", 
      "/bmw/bmw3.jpg", 
      "/bmw/bmw4.jpg", 
      "/bmw/bmw5.jpg"
    ],
    details: "Boyasız değişensiz 2004 model 350 bin km tramer yok otomatik vites N47 motor swap."
  },
  { 
    name: "Audi RS7",
    desc: "2023 Model, 600 HP",
    price: "₺6.200.000",
    slug: "audi-rs7",
    images: ["/audi1.jpg", "/audi2.jpg", "/audi3.jpg"],
    details: "Audi RS7, 600 beygir gücü, quattro çekiş sistemi ve yüksek teknoloji kokpitiyle performans severler için üretildi."
  },
  { 
    name: "Mercedes AMG GT",
    desc: "2022 Model, 530 HP",
    price: "₺5.800.000",
    slug: "mercedes-amg-gt",
    images: ["/merc1.jpg", "/merc2.jpg", "/merc3.jpg"],
    details: "Mercedes AMG GT, 530 HP V8 motoru ve kusursuz yol tutuşuyla hem pist hem şehir sürüşünde fark yaratır."
  }
]


export default function CarDetail({ params }: { params: { slug: string } }) {
  const car = cars.find(c => c.slug === params.slug)

  if (!car) {
    return <div className="p-10 text-center">Araç bulunamadı.</div>
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      {/* Carousel */}
      <Carousel className="w-full mb-6">
        <CarouselContent>
          {car.images.map((img, index) => (
            <CarouselItem key={index}>
              <img
                src={img}
                alt={`${car.name} ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Araç Bilgileri */}
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