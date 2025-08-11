"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

type Message = {
  text: string;
  from: "user" | "bot";
};

const faqAnswers: Record<string, string> = {
  "merhaba": "Merhaba! Size nasıl yardımcı olabilirim?",
  "çalışma saatleriniz nedir?": "Çalışma saatlerimiz 09:00 - 18:00 arasındadır.",
  "fiyatlarınız nedir?": "Araç fiyatlarımız model ve donanıma göre değişmektedir. Detaylı bilgi için lütfen satış ekibimizle iletişime geçin.",
  "iletişim": "Bize 0123 456 7890 numarasından veya info@ornek.com adresinden ulaşabilirsiniz.",
  "teşekkürler": "Rica ederim! Başka bir sorunuz olursa buradayım.",
};

const presetQuestions = [
  "Merhaba",
  "Çalışma saatleriniz nedir?",
  "Fiyatlarınız nedir?",
  "iletişim",
  "Teşekkürler",
];

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text:
        "Merhaba! Size nasıl yardımcı olabilirim? Sorabileceğiniz örnek sorular aşağıdadır.",
      from: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { text: trimmed, from: "user" }]);
    setInput("");

    const lowerNormalized = trimmed.toLowerCase().replace(/\s+/g, " ").trim();

    const botResponse =
      faqAnswers[lowerNormalized] ??
      "Üzgünüm, bunu anlayamadım. Lütfen başka bir soru sorun.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, from: "bot" }]);
    }, 700);
  };

  // Ön tanımlı soru butonuna basınca inputa ekle
  const onSelectQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Aç/Kapa butonu */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-indigo-600 p-4 text-white shadow-lg hover:bg-indigo-700 transition"
        aria-label="Canlı Destek"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat penceresi */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 flex flex-col w-96 max-w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Başlık */}
          <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Canlı Destek</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Kapat"
              className="font-bold text-xl leading-none hover:text-gray-300"
            >
              &times;
            </button>
          </div>

          {/* Mesaj alanı */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 flex flex-col">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] p-2 rounded-md ${
                  msg.from === "bot"
                    ? "bg-indigo-100 text-indigo-900 self-start"
                    : "bg-indigo-600 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Önceden tanımlı soru butonları */}
            <div className="mt-auto pt-4 border-t border-gray-300 flex flex-wrap gap-2">
              {presetQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => onSelectQuestion(q)}
                  className="bg-indigo-200 text-indigo-800 rounded-full px-3 py-1 text-sm hover:bg-indigo-300 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Mesaj gönderme alanı */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="p-4 bg-white flex gap-2 border-t border-gray-200"
          >
            <input
              type="text"
              placeholder="Mesajınızı yazın..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Mesajınız"
            />
            <Button type="submit" disabled={!input.trim()}>
              Gönder
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
