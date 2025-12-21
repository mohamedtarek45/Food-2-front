import Login from "@/components/Login";
import { outfit } from "@/fonts";
import Image from "next/image";
export const metadata = {
  title: "Login",
};
const page = () => {
  return (
    <div className={`${outfit.className} max-w-screen h-screen  grid grid-cols-1 md:grid-cols-2`}>
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
          <p className={`  mt-10 font-semibold text-[35px]`}>
            Welcome!
          </p>
          <p className={` opacity-50 2xl:mt-3`}>
            Enter your number and we will send you a verification code.
          </p>
          <Login />
        </div>
      </div>
      <div className=" justify-center items-center h-full hidden md:flex 2xl:px-30 3xl:px-35 ">
        <Image src="/login.png" width={815} height={800} alt="Logo" />
      </div>
    </div>
  );
};

export default page;
