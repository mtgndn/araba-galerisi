"use client"

import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Şirket Bilgisi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">🚗 AutoGallery</h3>
          <p className="text-gray-300 text-sm">
            Türkiye'nin en güvenilir araç galerisi.  
            Satış, takas ve ekspertiz hizmetleri.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h3 className="text-lg font-semibold mb-3">📞 İletişim</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +90 555 555 55 55
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@autogallery.com
            </li>
          </ul>
        </div>

        {/* Harita */}
        <div>
          <h3 className="text-lg font-semibold mb-3">📍 Konum</h3>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127646.89105882353!2d34.49331386785795!3d36.80087733802785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d46eef14036aaf%3A0x20a060f2026dbda3!2sMersin%2C%20Turkey!5e0!3m2!1str!2str!4v1691736421739!5m2!1str!2str"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>

      <Separator className="bg-gray-700" />
      <div className="text-center text-gray-400 text-sm py-4">
        © {new Date().getFullYear()} AutoGallery. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}
