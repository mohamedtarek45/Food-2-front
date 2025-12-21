import { outfit } from "@/fonts";
import Decorate from "@/public/Decorate.svg";
import Image from "next/image";
const Page2 = () => {
  return (
    <div className="my-12.5 w-full flex">
      <div className="flex-1 relative hidden md:block">
        <Image src="/Frame5.png" alt="Logo" fill className="object-contain " />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div>
          <p
            className={`${outfit.className} max-w-77 text-[#181818] text-[28px] text-center lg:text-[38px] mx-auto  `}
          >
            Welcome TO Our Luxury Restaurant
          </p>
          <Decorate className="mt-4 mx-auto" />
          <p
            className={`${outfit.className} max-w-82.5 lg:max-w-100 xl:max-w-125 2xl:max-w-135 3xl:max-w-167.25  text-black/50 2xl:text[20px] 3xl:text-[22px] mt-12.5 text-center`}
          >
            Welcome to our exquisite salon, where beauty meets expertise. Step
            into a world of luxury and indulgence, where we are dedicated to
            enhancing your natural beauty and leaving you feeling radiant.
          </p>
          <div
            className="py-3.25 px-12.5 w-fit  border-3 mx-auto mt-12.5
           rounded-[10px] border-[#FFBB15] "
          >
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
