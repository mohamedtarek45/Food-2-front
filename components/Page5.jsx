import { outfit } from "@/fonts";
import Decorate from "@/public/Decorate.svg";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import DataPage3 from "./DataPage3";
import Search from "./Search";
const Page5 = () => {
  return (
    <div className="my-12.5">
      <div className="mx-auto w-fit text-center">
        <p className={`text-[28px] lg:text-[35px] font-medium ${outfit.className}`}>
          Nearest Restaurants
        </p>
        <Decorate className="mx-auto mt-4" />
      </div>
      <div className="container">
        <div className="my-12.5">
          <Search />
        </div>
        <div className="relative w-full h-140.5 ">
          <Image src="/Map.webp" alt="Logo" fill className="object-cover " />
        </div>
        <DataPage3 />
      </div>
    </div>
  );
};

export default Page5;
