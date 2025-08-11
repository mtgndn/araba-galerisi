"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <main className="max-w-xl w-full bg-white p-10 rounded-xl shadow-xl">
        <motion.h1
          className={`${poppins.className} text-4xl font-extrabold text-center mb-8 text-gray-900`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bizimle İletişime Geçin
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-shadow duration-300"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Adınızı yazınız"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-shadow duration-300"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="E-posta adresinizi yazınız"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-800">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none shadow-sm transition-shadow duration-300"
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </Button>
        </form>

        {responseMessage && (
          <motion.p
            className="mt-6 text-center text-green-600 font-semibold text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {responseMessage}
          </motion.p>
        )}
      </main>
    </div>
  );
}
