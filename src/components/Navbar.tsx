import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🚗 AutoGallery</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Ana Sayfa</Link></li>
          <li><Link href="/cars">Araçlar</Link></li>
          <li><Link href="/about">Hakkımızda</Link></li>
          <li><Link href="/contact">İletişim</Link></li>
        </ul>
      </div>
    </nav>
  )
}
