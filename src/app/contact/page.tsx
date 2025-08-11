"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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

    // Örnek: 2 saniye bekleyip başarılı mesaj gösteriyoruz.
    setTimeout(() => {
      setIsSubmitting(false);
      setResponseMessage("Mesajınız başarıyla gönderildi! Teşekkürler.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <main className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </Button>
        </form>

        {responseMessage && (
          <p className="mt-4 text-green-600 font-medium text-center">{responseMessage}</p>
        )}
      </main>
    </div>
  );
}
