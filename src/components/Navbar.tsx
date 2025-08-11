"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Araçlar", href: "/cars" },
    { label: "Hakkımızda", href: "/about" },
    { label: "İletişim", href: "/contact" },
  ];

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-center">
        <ul className="flex gap-8">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative group">
                <Link
  href={href}
  className={`
    text-gray-500
    font-medium
    px-1
    py-1
    transition-all
    duration-300
    transform
    ${isActive ? "text-white -translate-y-1" : "hover:text-white hover:-translate-y-1"}
    hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]
    group-hover:text-white
  `}
>
  {label}
</Link>
                {/* Alt çizgi */}
                <span
                  className={`
                    absolute left-0 bottom-0 w-full h-[2px] bg-white
                    transition-all duration-300
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                  `}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
