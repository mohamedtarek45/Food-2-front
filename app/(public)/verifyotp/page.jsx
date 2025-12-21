import Image from "next/image";
import { outfit } from "@/fonts.js";
import Otp from "@/components/Otp";

export const metadata = {
  title: "Verify OTP",
};
const page = () => {
  return (
    <div
      className={`${outfit.className} max-w-screen h-screen  grid grid-cols-1 md:grid-cols-2`}
    >
      <div className="h-full flex justify-center py-5">
        <div className="w-full max-w-83 sm:max-w-100 md:max-w-70 xl:max-w-100 2xl:max-w-125 3xl:max-w-150 flex flex-col">
          <div className="relative 3xl:size-35 2xl:size-25 xl:size-35 lg:size-30 md:size-25 sm:size-20 size-15">
            <Image
              src="/BUZZERlOGO.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className={`  mt-10 font-semibold text-[35px]`}>Login Code</p>
          <p className={` opacity-50 2xl:mt-3`}>
            Enter the authentication code we sent to your mobile number.
          </p>
          <Otp />
        </div>
      </div>
      <div className=" justify-center items-center h-full hidden md:flex 2xl:px-20 3xl:px-25 ">
        <Image src="/pana2.png" width={815} height={800} alt="Logo" />
      </div>
    </div>
  );
};

export default page;
