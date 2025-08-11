'use client'
import React, { useState, useEffect, use } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
];

export default function CarDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const car = cars.find(c => c.slug === resolvedParams.slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!car) {
    return <div className="p-10 text-center">Araç bulunamadı.</div>;
  }

  const shareText = encodeURIComponent(`Harika bir araç! ${car.name} - Detaylar için tıkla.`);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${shareText}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(currentUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      {/* Carousel */}
      <Carousel className="w-full mb-6">
        <CarouselContent>
          {car.images.map((img, index) => (
            <CarouselItem key={index}>
              <img
                src={img}
                alt={`${car.name} ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-xl cursor-pointer"
                onClick={() => openLightbox(index)}
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

      {/* Butonlar ve Sosyal Medya Yan Yana */}
      <div className="flex items-center justify-between max-w-md">
        <Link href="/">
          <Button>Geri Dön</Button>
        </Link>

        <div className="flex space-x-4">
          {currentUrl && (
            <>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                aria-label="Facebook'ta Paylaş"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
                aria-label="Twitter'da Paylaş"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                aria-label="WhatsApp'ta Paylaş"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
                aria-label="LinkedIn'de Paylaş"
              >
                <FaLinkedinIn size={20} />
              </a>
            </>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-60"
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl p-2 hover:text-gray-400 transition"
              aria-label="Kapat"
            >
              <FaTimes />
            </button>

            <img
              src={car.images[currentIndex]}
              alt={`${car.name} ${currentIndex + 1}`}
              className="max-h-[85vh] rounded-lg mx-auto"
            />

            {/* Navigasyon Okları */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl p-2 hover:text-gray-400 transition"
              aria-label="Önceki"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl p-2 hover:text-gray-400 transition"
              aria-label="Sonraki"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
