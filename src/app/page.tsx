"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [showIntro, setShowIntro] = useState<null | boolean>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const introDone = localStorage.getItem("introDone");
    setShowIntro(introDone === "true" ? false : true);
  }, []);

  const handleStart = () => {
    setShowIntro(false);
    localStorage.setItem("introDone", "true");
  };

  if (!isMounted || showIntro === null) {
    return null;
  }

  const cars = [
    { image: "cover/bmw.jpg", name: "BMW 320i", desc: "2004 Model, 450 HP", price: "₺4.500.000", slug: "bmw-320" },
    { image: "cover/audi.jpg", name: "Audi RS7", desc: "2023 Model, 600 HP", price: "₺6.200.000", slug: "audi-rs7" },
    { image: "cover/mercedes.jpg", name: "Mercedes AMG GT", desc: "2022 Model, 530 HP", price: "₺5.800.000", slug: "mercedes-amg-gt" },
    { image: "cover/porsche.jpg", name: "Porsche 911 Carrera", desc: "2023 Model, 450 HP", price: "₺7.200.000", slug: "porsche-911" },
    { image: "cover/tesla.jpg", name: "Tesla Model S", desc: "2023 Model, Elektrikli", price: "₺8.500.000", slug: "tesla-model-s" },
    { image: "cover/ferrari.jpg", name: "Ferrari F8 Tributo", desc: "2022 Model, 710 HP", price: "₺15.000.000", slug: "ferrari-f8" },
    { image: "cover/lamborghini.jpg", name: "Lamborghini Huracán", desc: "2023 Model, 610 HP", price: "₺14.000.000", slug: "lamborghini-huracan" },
    { image: "cover/audi-r8.jpg", name: "Audi R8", desc: "2022 Model, 562 HP", price: "₺10.000.000", slug: "audi-r8" },
  ];

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <motion.div
        animate={{ filter: showIntro ? "blur(14px)" : "blur(0px)", scale: showIntro ? 1.05 : 1 }}
        transition={{ duration: 1 }}
        className="relative z-0"
      >
        <Navbar />

        {/* Modern Hero Section */}
        <section className="bg-black text-white py-20 text-center relative z-10 px-4">
          <h1
            className={`${poppins.className} text-5xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto`}
            style={{
              textShadow: "0 2px 8px rgba(255, 255, 255, 0.15)",
              letterSpacing: "0.05em",
            }}
          >
            Hayalindeki arabayı
            <br />
            <span className="text-white/80">güvenle keşfet</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 drop-shadow-sm">
            En iyi performanslı ve lüks araçlarla, hayallerini gerçeğe dönüştür.
          </p>
          <Button
            variant="default"
            className="bg-white text-black font-semibold px-14 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            Araçlarımızı İncele
          </Button>
        </section>

        {/* Araç Listesi */}
        <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </section>
      </motion.div>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-50 px-4"
          >
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`${poppins.className} text-4xl md:text-6xl mb-8 text-white drop-shadow-lg text-center leading-tight`}
            >
              <span>Hayalindeki arabayı</span> <br />
              <span>bulmaya hazır mısın?</span>
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="bg-white text-black px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Başla
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
