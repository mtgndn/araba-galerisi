import "./globals.css"
import Footer from "@/components/Footer"
import ChatWidget from "@/components/ChatWidget"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}
