import Image from "next/image";
import Stars from "./Stars";
import { outfit } from "@/fonts";
import Link from "next/link";
import Location from "@/public/Location.svg";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="rounded-[20px] border overflow-hidden border-black/20 pb-3 sm:pb-5 hover:shadow-lg transition-shadow"
    >
      <div className="relative rounded-b-[100px] sm:rounded-b-[150px] md:rounded-b-[200px] rounded-t-[20px] w-full aspect-310/342 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rotate-90 object-cover scale-[1.25]"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 mt-2 sm:mt-2.5 px-2 sm:px-3">
        <Stars 
          numStars={product.numOfStars} 
          starClass="size-4 sm:size-5 md:size-6" 
          className="mx-auto" 
        /> 
        <p
          className={`${outfit.className} text-lg sm:text-xl md:text-[23px] lg:text-[26px] font-semibold text-center leading-tight`}
        >
          {product.name}
        </p>

        <p
          className={`${outfit.className} text-base sm:text-lg md:text-[18px] lg:text-[20px] font-medium text-center text-[#EC362B]`}
        >
          {product.type}
        </p>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 mx-auto px-2 sm:px-3">
          <Location className="size-5 sm:size-7"  />
          <p
            className={`${outfit.className} text-xs sm:text-sm md:text-base lg:text-[18px] font-medium text-center text-black/50`}
          >
            {product.location}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;