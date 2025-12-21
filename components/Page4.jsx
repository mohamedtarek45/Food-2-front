import { outfit } from "@/fonts";
import Decorate from "@/public/Decorate.svg";
import Image from "next/image";
const Page4 = () => {
  return (
    <div className="my-12.5 relative max-w-screen overflow-hidden">
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 md:-translate-x-3/4 3xl:-translate-x-1/2 -z-10">
        <div className="relative size-86.75">
          <Image src="/Burger.webp" alt="Logo" fill className="object-contain" />
        </div>
      </div>
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 md:translate-x-3/4 3xl:translate-x-1/2 -z-10">
        <div className="relative size-86.75">
          <Image src="/Burger.webp" alt="Logo" fill className="object-contain" />
        </div>
      </div>
      <div className="mx-auto w-fit text-center">
        <p className={`text-[28px] lg:text-[35px] font-medium ${outfit.className}`}>
          Our Services
        </p>
        <Decorate className="mx-auto mt-4" />
      </div>
      <div className="container gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12.5">
        <div className="2xl:w-77.5 3xl:w-85.5 h-70.25 border rounded-[20px] border-black/20 flex flex-col justify-center items-center ">
          <div className="h-25 w-25 relative">
            <Image
              src="/SpecialMenu.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <p
            className={`mt-12.5 text-center ${outfit.className} font-semibold text-[26px] `}
          >
            Special Menu
          </p>
        </div>
        <div className="2xl:w-77.5 3xl:w-85.5 h-70.25 border rounded-[20px] border-black/20 flex flex-col justify-center items-center ">
          <div className="h-25 w-25 relative">
            <Image
              src="/TastyFood.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <p
            className={`mt-12.5 text-center ${outfit.className} font-semibold text-[26px] `}
          >
            Tasty Food
          </p>
        </div>
        <div className="2xl:w-77.5 3xl:w-85.5 h-70.25 border rounded-[20px] border-black/20 flex flex-col justify-center items-center ">
          <div className="h-25 w-25 relative">
            <Image
              src="/FreeWifi.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <p
            className={`mt-12.5 text-center ${outfit.className} font-semibold text-[26px] `}
          >
            Free Wi-Fi
          </p>
        </div>
        <div className="2xl:w-77.5 3xl:w-85.5 h-70.25 border rounded-[20px] border-black/20 flex flex-col justify-center items-center ">
          <div className="h-25 w-25 relative">
            <Image
              src="/SpeicalOffer.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <p
            className={`mt-12.5 text-center ${outfit.className} font-semibold text-[26px] `}
          >
            Special Offer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
