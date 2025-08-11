"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setResponseMessage("Mesajınız başarıyla gönderildi! Teşekkürler.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <main className="max-w-7xl w-full bg-white rounded-xl shadow-xl flex flex-col md:flex-row gap-16 p-12">
        {/* Sol - Form */}
        <section className="flex-1 max-w-lg">
          <motion.h1
            className={`${poppins.className} text-4xl font-extrabold mb-10 text-gray-900`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bizimle İletişime Geçin
          </motion.h1>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="name" className="block mb-3 font-semibold text-gray-800">
                İsim
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm transition-shadow duration-300"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Adınızı yazınız"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-3 font-semibold text-gray-800">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm transition-shadow duration-300"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="E-posta adresinizi yazınız"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-3 font-semibold text-gray-800">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-md border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none shadow-sm transition-shadow duration-300"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Mesajınızı buraya yazınız"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {isSubmitting ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </form>

          {responseMessage && (
            <motion.p
              className="mt-8 text-green-600 font-semibold text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {responseMessage}
            </motion.p>
          )}
        </section>

        {/* Sağ - İletişim Bilgileri */}
        <section className="flex-1 max-w-md bg-gray-50 rounded-xl p-10 shadow-inner flex flex-col justify-center gap-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">İletişim Bilgilerimiz</h2>
          <ul className="space-y-8 text-gray-700 text-lg">
            <li className="flex items-center gap-4">
              <Phone className="text-indigo-600" size={28} />
              <div>
                <p className="font-semibold text-gray-900">Telefon</p>
                <a href="tel:+905551234567" className="text-indigo-600 hover:underline">
                  +90 555 123 45 67
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-indigo-600" size={28} />
              <div>
                <p className="font-semibold text-gray-900">E-posta</p>
                <a href="mailto:info@bircangaleri.com" className="text-indigo-600 hover:underline">
                  info@bircangaleri.com
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <Instagram className="text-indigo-600" size={28} />
              <div>
                <p className="font-semibold text-gray-900">Instagram</p>
                <a
                  href="https://instagram.com/bircangaleri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  @bircangaleri
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="text-indigo-600" size={28} />
              <div>
                <p className="font-semibold text-gray-900">Adres</p>
                <p>Maslak, İstanbul, Türkiye</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
