"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20 max-w-4xl mx-auto">
      <h1
        className={`${poppins.className} text-5xl font-extrabold mb-8`}
        style={{ letterSpacing: "0.05em", textShadow: "0 2px 8px rgba(255,255,255,0.15)" }}
      >
        Hakkımızda
      </h1>

      <section className="space-y-6 text-lg text-white/80 leading-relaxed">
        <p>
          Bircan Galeri olarak lüks ve performans araçları güvenle sunuyoruz. Müşteri memnuniyetini ön planda tutarak, geniş araç
          yelpazemizle hayallerinizdeki arabayı bulmanızı sağlıyoruz.
        </p>

        <p>
          2005 yılından beri sektörde olan firmamız, deneyimli kadrosu ve uzman teknik ekibi ile her zaman yanınızda. Satış sonrası
          destek ve bakım hizmetlerimizle güveninizi kazanmayı hedefliyoruz.
        </p>

        <p>
          Teknolojiyi yakından takip eden anlayışımızla, en güncel modelleri sizlere sunuyoruz. Bize ulaşmak için iletişim sayfamızı
          ziyaret edebilirsiniz.
        </p>
      </section>
    </main>
  );
}
