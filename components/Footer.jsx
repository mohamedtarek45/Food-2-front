import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { outfit } from "@/fonts";
import BuzzerFooter from "@/public/BuzzerFooter.svg";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`relative ${outfit.className}`} id="contactUs">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Footer.png"
          alt="Footer Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 ">
          <div className="flex flex-col gap-12.5">
            <BuzzerFooter className="size-20" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              These guys have been absolutely outstanding. When I needed them
              they came through in a big way! I know that if you buy this theme.
            </p>

            <div className="flex flex-col gap-12.5">
              <h3 className="text-lg font-semibold mb-4 text-white">
                CONTACT INFO
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+911234567891"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <span>📞 +91 1234567891 </span>
                </a>
                <a
                  href="mailto:munasbas007@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <span>✉️</span>
                  munasbas007@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12.5">
            <h3 className="text-lg font-semibold mb-4 text-white">ACCOUNT</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-12.5">
            <h3 className="text-lg font-semibold mb-4 text-white">LEGALS</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-12.5">
            <h3 className="text-lg font-semibold mb-4 text-white">SUBSCRIBE</h3>
            <div className="space-y-3">
              <div className="flex bg-linear-to-r from-white/80 to-white/0 rounded  items-center">
                <IoMail size={24} className="text-white mx-5" />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full py-3 text-sm text-white placeholder-gray-500 focus:outline-none "
                />
              </div>
              <div className="w-fit px-12.5 py-3.25 border-3 border-[#FFBB15] text-white rounded-[10px]  hover:bg-[#FFBB15] hover:text-black transition-all font-medium">
                Subscribe
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#F5F5F5]" />
        <div className="pt-12.5 flex justify-center gap-5 flex-wrap">
          <div
            className="size-15 rounded-full flex items-center justify-center bg-linear-to-r from-white/80 to-white/0 "
          >
            <FaTwitter size={30} className="text-white" />
          </div>
          <div
            className="size-15 rounded-full flex items-center justify-center bg-linear-to-r from-white/80 to-white/0 "
          >
            <FaFacebook size={30} className="text-white" />
          </div>
          <div
            className="size-15 rounded-full flex items-center justify-center bg-linear-to-r from-white/80 to-white/0 "
          >
            <FaYoutube size={30} className="text-white" />
          </div>
          <div
            className="size-15 rounded-full flex items-center justify-center bg-linear-to-r from-white/80 to-white/0 "
          >
            <FaInstagram size={30} className="text-white" />
          </div>
          <div
            className="size-15 rounded-full flex items-center justify-center bg-linear-to-r from-white/80 to-white/0 "
          >
            <FaLinkedin size={30} className="text-white" />
          </div>

          <p className="absolute bottom-0  right-1/2 translate-x-1/2  sm:right-0 sm:translate-x-0 text-white text-[10px] text-nowrap sm:text-[18px] ">
            ©2023 For Salone All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
