"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import BuzzerFooter from "@/public/BuzzerFooter.svg";
import { IoIosArrowForward } from "react-icons/io";
import { outfit } from "@/fonts";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";
const menuItems = [
  "Offers",
  "Featured Products",
  "Suppliers",
  "Articles",
  "Image Gallery",
  "FAQs",
  "Settings",
  "About Us",
  "Mission & Vision",
  "Contact Us",
  "Privacy Policy",
  "Terms & Conditions",
];

const BuzzerAppSidebar = ({ isOpen, onClose }) => {
  const router = useRouter();
  const firstRun = useRef(true);
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const handleLogOut = async () => {
    await signOut(auth);
    onClose();
    router.push("/login");
  };
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-100 bg-black/50 flex justify-center items-center retaltive"
      onClick={handleOverlayClick}
    >
      <div
        className=" overflow-y-auto min-h-screen h-screen no-scrollbar rounded bg-linear-to-b from-[#750605] to-[#320202]  w-[80%] sm:w-100 top-0 right-0 absolute py-12.5 px-7.5"
        onClick={(e) => e.stopPropagation()}
      >
        <BuzzerFooter className="size-50 mx-auto" />
        <p className="text-white text-[20px] font-semibold  text-center">
          Hello {user}
        </p>
        <hr className="border-white/50 mt-7.5 mb-7.5" />
        <div className={`space-y-3 ${outfit.className} overflow-auto`}>
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-xl text-white">{item}</p>
              <IoIosArrowForward color="white" size={20} />
            </div>
          ))}
        </div>
        <button
          onClick={handleLogOut}
          className="py-4 w-full cursor-pointer text-[20px] text-white rounded-[10px] border-white/50 border-3 mt-12.5 hover:bg-white hover:text-[#750605] hover:border-white transition-all duration-150"
        >
          Logout
        </button>
      </div>
    </div>,
    document.body
  );
};

export default BuzzerAppSidebar;
