import "./globals.css"
import Footer from "@/components/Footer"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        
        {children}
        <Footer />
      </body>
    </html>
  )
}
