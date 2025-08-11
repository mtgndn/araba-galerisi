"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.35, type: "spring", stiffness: 60 },
  }),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col px-6 md:px-20 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Sol Metin Kısmı */}
        <div className="flex-1">
          <motion.h1
            className={`${poppins.className} text-5xl md:text-6xl font-extrabold mb-6 text-black relative`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textShadow: "0 0 15px rgba(0,0,0,0.2), 0 0 30px rgba(0,0,0,0.1)",
              letterSpacing: "0.1em",
              maxWidth: "400px",
            }}
          >
            Hakkımızda
            <span className="block mt-2 w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
          </motion.h1>

          <div className="max-w-xl text-left space-y-8 mt-6">
            {[
              "Bircan Galeri olarak lüks ve performans araçları güvenle sunuyoruz. Müşteri memnuniyetini her zaman ön planda tutuyoruz.",
              "2005 yılından beri sektörde deneyimli kadromuz ve uzman teknik ekibimizle yanınızdayız. Satış sonrası destek ve bakım hizmetlerimizle güveninizi kazanmayı hedefliyoruz.",
              "Teknolojiyi yakından takip ederek en güncel modelleri sizlere sunuyoruz. Bize ulaşmak için iletişim sayfamızı ziyaret edebilirsiniz.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="relative pl-6 text-gray-800 text-lg leading-relaxed font-medium before:absolute before:left-0 before:top-2 before:h-6 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-indigo-600 before:to-purple-600"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Sağ Resim Kısmı */}
        <motion.div
          className="flex-1 max-w-md w-full rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/kurucu.JPEG"
            alt="Kurucu Fotoğrafı"
            className="w-full h-auto object-cover rounded-xl"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900">Sadık Bircan Şenol</h3>
            <p className="text-gray-600 italic">Kurucu & CEO</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
