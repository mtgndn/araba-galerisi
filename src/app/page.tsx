"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const cars = [
    { image: "/bmw.jpg", name: "BMW M4", desc: "2023 Model, 450 HP", price: "₺4.500.000", slug: "bmw-m4" },
    { image: "/audi.jpg", name: "Audi RS7", desc: "2023 Model, 600 HP", price: "₺6.200.000", slug: "audi-rs7" },
    { image: "/mercedes.jpg", name: "Mercedes AMG GT", desc: "2022 Model, 530 HP", price: "₺5.800.000", slug: "mercedes-amg-gt" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Sayfa İçeriği */}
      <motion.div
        animate={{ filter: showIntro ? "blur(14px)" : "blur(0px)", scale: showIntro ? 1.05 : 1 }}
        transition={{ duration: 1 }}
        className="relative z-0"
      >
        <Navbar />

        {/* Hero */}
        <section className="bg-black text-white py-20 text-center">
          <h1 className={`${poppins.className} text-5xl mb-4`}>Lüks & Güvenilir Araçlar</h1>
          <p className="text-lg mb-6">Hayalinizdeki arabayı bugün keşfedin</p>
          <Button variant="default">Araçlarımızı Gör</Button>
        </section>

        {/* Araç Listesi */}
        <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </section>

        {/* Footer */}
        <Footer />
      </motion.div>

      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black/70 z-50 px-4"
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
              onClick={() => setShowIntro(false)}
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
