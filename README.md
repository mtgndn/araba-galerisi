
# Araba Galerisi

Modern, kullanıcı dostu bir araç galeri web uygulaması. Next.js, React ve Tailwind CSS kullanılarak geliştirildi.

---

##  Özellikler

- **Dinamik Araç Detay Sayfası**  
  - Carousel ile araç görselleri  
  - Fotoğraf üzerinde tıklama ile büyüme — **Lightbox efekti**  

- **Sosyal Medya Paylaşımı**  
  Araçları Facebook, Twitter, WhatsApp ve LinkedIn'de paylaşılabilir yapar.

- **Chatbot Desteği**  
  Canlı destek/chatbot entegrasyonu, kullanıcıların bilgi almasını kolaylaştırır.

- **Modern ve Temiz Arayüz**  
  Siyah-beyaz/monokrom tema, estetik buton ve animasyonlar ile sade ve şık bir kullanıcı deneyimi.

- **Teknolojiler**  
  - Next.js (App Router)  
  - React  
  - Tailwind CSS  
  - Framer Motion (animasyonlar)  
  - react-icons (ikonlar)

---

##  Kurulum ve Çalıştırma

```bash
git clone https://github.com/mtgndn/araba-galerisi.git
cd araba-galerisi
npm install
npm run dev
````

Tarayıcıda `http://localhost:3000` adresine giderek çalışır hale getirebilirsin.

---

## Proje Yapısı

```
src/
 ├── components/
 │    ├── Navbar.tsx
 │    ├── CarCard.tsx
 │    └── Footer.tsx
 ├── app/
 │    ├── page.tsx
 │    ├── about.tsx
 │    └── cars/[slug]/page.tsx (detay sayfası)
public/
 │    ├── cover/
 │    └── bmw/, audi/, ...
```

---

## Özelleştirme

* **Araç eklemek için**
  `cars` array’ine yeni bir obje ekleyebilir ya da harici bir API bağlayabilirsin.

* **Chatbot eklemesi**
  `app/layout.tsx` veya ilgili component’e chatbot SDK script’i eklenebilir.

* **Tema değiştirme**
  Tailwind yapılandırmasına ileride **dark mode** veya renk paleti ekleyebilirsin.

---

