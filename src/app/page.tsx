import Navbar from "@/components/Navbar"
import CarCard from "@/components/CarCard"
import { Button } from "@/components/ui/button"

export default function Home() {
  const cars = [
  { image: "/bmw.jpg", name: "BMW M4", desc: "2023 Model, 450 HP", price: "₺4.500.000", slug: "bmw-m4" },
  { image: "/audi.jpg", name: "Audi RS7", desc: "2023 Model, 600 HP", price: "₺6.200.000", slug: "audi-rs7" },
  { image: "/mercedes.jpg", name: "Mercedes AMG GT", desc: "2022 Model, 530 HP", price: "₺5.800.000", slug: "mercedes-amg-gt" },
]


  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Lüks & Güvenilir Araçlar</h1>
        <p className="text-lg mb-6">Hayalinizdeki arabayı bugün keşfedin</p>
        <Button variant="default">Araçlarımızı Gör</Button>
      </section>

      {/* Araç Listesi */}
      <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </section>
    </main>
  )
}
