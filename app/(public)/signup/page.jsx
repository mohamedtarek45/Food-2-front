import Image from "next/image";
import { outfit } from "@/fonts.js";
import { Signup } from "@/components/Signup";

export const metadata = {
  title: "Signup",
};
const page = async () => {
  return (
    <div className="max-w-screen h-screen  grid grid-cols-1 md:grid-cols-2">
      <div className="h-full flex justify-center py-5">
        <div className="min-w-83 sm:min-w-100 md:min-w-70 xl:min-w-100 2xl:min-w-125 3xl:min-w-150 flex flex-col">
          <div className="relative 3xl:size-35 2xl:size-25 xl:size-35 lg:size-30 md:size-25 sm:size-20 size-15">
            <Image
              src="/BUZZERlOGO.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <p
            className={`${outfit.className}  mt-10 font-semibold 2xl:text-[20px] xl:text-[25px] lg:text-[20px] md:text-[15px] sm:text-[10px]`}
          >
            Register As Cafe/Restaurant
          </p>
          <p className={`${outfit.className} opacity-50 2xl:mt-3`}>
            Register Now!
          </p>
          <Signup />
        </div>
      </div>
      <div className=" justify-center items-center h-full hidden md:flex 2xl:px-17 3xl:px-18 ">
        <Image src="/pana.png" width={815} height={800} alt="Logo" />
      </div>
    </div>
  );
};

export default page;
