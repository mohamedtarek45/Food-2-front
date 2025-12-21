"use client";
import { outfit } from "@/fonts";
import Stars from "./Stars";
import useCartStore from "@/store/cartStore";
import toast from "react-hot-toast";

const CardDetail = ({ product }) => {
  const { AddProduct } = useCartStore((state) => state);

  if (!product) return null;

  return (
    <div className="mx-auto bg-white z-1 rounded-sm border border-black -translate-y-1/4 w-[90%] sm:w-fit px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 3xl:px-37.5 py-5 sm:py-6 md:py-8 lg:py-9 2xl:py-10 3xl:py-12.5 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7.5 text-center -mb-10">
      <Stars
        numStars={product.numOfStars}
        starClass="size-4 sm:size-5 md:size-6"
        className="mx-auto"
      />
      <p
        className={`${outfit.className} text-xl sm:text-2xl md:text-[28px] lg:text-[32px] xl:text-[35px] font-semibold text-[#181818] leading-tight`}
      >
        {product.name}
      </p>
      <p
        className={`${outfit.className} text-lg sm:text-xl md:text-[24px] lg:text-[27px] xl:text-[30px] font-bold text-[#181818]`}
      >
        SAR {product.price}
      </p>
      <button
        onClick={() => {
          AddProduct(product);
          toast.success("Product added to basket");
        }}
        className={`${outfit.className} cursor-pointer text-sm sm:text-base md:text-lg lg:text-[20px] font-medium px-6 sm:px-8 md:px-10 lg:px-12.5 py-2.5 sm:py-3 md:py-3.25 rounded-[10px] border border-[#FFBB15] hover:bg-[#FFBB15] hover:text-white transition-colors w-full sm:w-auto`}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default CardDetail;
