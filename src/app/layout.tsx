import "./globals.css"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"
import Navbar from "@/components/Navbar"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}
