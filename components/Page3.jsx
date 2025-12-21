import { outfit } from "@/fonts";
import Decorate from "@/public/Decorate.svg";
import DataPage3 from "./DataPage3";
import Link from "next/link";

const Page3 = () => {
  return (
    <div className="min-h-screen my-12.5">
      <div className="mx-auto w-fit text-center">
        <p className={`text-[28px] lg:text-[35px] font-medium ${outfit.className}`}>
          Our Restaurants
        </p>
        <Decorate className="mx-auto mt-4" />
      </div>
      <DataPage3 />

      <div className="w-fit  mx-auto mt-12.5">
        <Link
          href="/products"
          className="py-3.25 px-12.5   border-3
           rounded-[10px] border-[#FFBB15] "
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Page3;
