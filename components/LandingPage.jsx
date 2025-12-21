import { outfit } from "@/fonts";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
const LandingPage = () => {
  return (
    <div className="min-h-screen max-w-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Landing.webp"
          alt="Background"
          className="object-cover"
          fill
          priority
        />
      </div>
      <div
        className={`w-full lg:w-1/2 min-h-screen flex justify-center items-center ${outfit.className} `}
      >
        <div className="flex flex-col  gap-8 xl:gap-11.5 ">
          <div className="relative">
            <p className="font-extrabold text-[75px] lg:text-[100px] 2xl:text-[140px] 3xl:text-[160px] 2xl:leading-35 3xl:leading-40 text-white">
              FOOD
            </p>
            <p className="font-extrabold text-[75px] lg:text-[100px] 2xl:text-[140px] 3xl:text-[160px] 2xl:leading-35 3xl:leading-40 text-white">
              MOOD
            </p>
            <div className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-30 -z-10 inset-0">
              <div className="relative w-full h-full">
                <Image
                  src="/canChange.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <p className="max-w-87.5 sm:max-w-125 md:max-w-150 lg:max-w-[calc(50vw-100px)] 2xl:text-[19px] 3xl:text-[22px] text-white font-normal leading-8">
            Welcome to our exquisite salon, where beauty meets expertise. Step
            into a world of luxury and indulgence, where we are dedicated to
            enhancing your natural beauty and leaving you feeling radiant.
          </p>
          <div className="max-w-145.5 max-h-15 rounded-full relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-6 py-4 rounded-full bg-white/30  border border-white/30 text-white placeholder-white/70 focus:outline-none transition-all "
            />
            <div className="absolute bg-[#FFBB15] rounded-full size-10 flex justify-center items-center top-1/2 -translate-y-1/2 right-2.5">
              <IoIosSearch color="white" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
