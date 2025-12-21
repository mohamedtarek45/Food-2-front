import { outfit } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

const LandingProudts = () => {
  return (
    <div className="w-full h-[50vh]  relative flex items-center justify-center">
      <div className="absolute inset-0 bg-black/75 -z-1" />
      <Image
        src="/Resturant.webp"
        alt="Logo"
        fill
        className="object-cover object-[0%_30%] -z-2"
      />
      <div className={`text-white ${outfit.className} text-center`}>
        <p className={` text-[50px]`}>Resturant</p>
        <p className={` text-[22px] mt-5 font-extralight`}>
          <Link href="/home">Home </Link>/ Products
        </p>
      </div>
    </div>
  );
};

export default LandingProudts;
