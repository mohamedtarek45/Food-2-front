"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";

import Bar from "@/public/bar.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import useCartStore from "@/store/cartStore";
import BuzzerAppSidebar from "./BuzzerAppSidebar";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useCartStore((state) => state);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setMounted(true);
      setScrolled(window.scrollY > 450);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!mounted) return null;
  return (
    <div className="container h-11 py-4 3xl:py-5 fixed top-0 left-1/2 -translate-x-1/2 z-100">
      <div className="flex justify-between items-center relative">
        <div className="w-16.5 h-14.5 3xl:w-17.5 3xl:h-15 relative">
          <Image src="/BUZZERlOGO.png" alt="Logo" fill />
        </div>
        <div
          className={`hidden lg:flex gap-10 ${
            scrolled ? "text-black" : "text-white"
          }
            absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
            `}
        >
          <Link
            href="/home"
            className={` hover:text-[#FFBB15]
             ${
               pathname.startsWith("/home")
                 ? "text-[#FFBB15] border-b border-[#FFBB15] pb-1.5 "
                 : ""
             }  `}
          >
            Home
          </Link>
          <Link
            className={` hover:text-[#FFBB15]
             ${
               pathname.startsWith("/products")
                 ? "text-[#FFBB15] border-b border-[#FFBB15] pb-1.5 "
                 : ""
             }  `}
            href="/products"
          >
            Products
          </Link>
          <Link className={`hover:text-[#FFBB15] `} href="#about">
            About Us
          </Link>
          <Link className={`hover:text-[#FFBB15] `} href="#contactUs">
            Contact Us
          </Link>
        </div>
        <div
          className={`flex gap-9 ${scrolled ? "text-black" : "text-white"} `}
        >
          <FaUser size={20} />
          <Link href="/products/basket" className="relative">
            {products.length > 0 && (
              <span className="absolute -top-2 z-5 -right-2 size-2.5 rounded-full bg-[#FF0000]" />
            )}
            <BsCart4 size={24} className="-translate-y-1" />
          </Link>
          <Bar
            className={`${
              scrolled ? "fill-black" : "fill-white"
            } cursor-pointer`}
            onClick={() => setIsOpen(true)}
          />
          <BuzzerAppSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
