"use client";

import useCartStore from "@/store/cartStore";
import BasketCard from "./BasketCard";

const Basket = () => {
  const { products } = useCartStore((state) => state);
  
  return (
    <div className="my-6 sm:my-8 md:my-10 lg:my-12.5 container px-4 sm:px-6 md:px-8 lg:px-12.5 py-6 sm:py-8 md:py-10 lg:py-12.5 border border-black/20 rounded-[20px]">
      {products.length === 0 && (
        <div className="text-center text-gray-500 text-base sm:text-lg py-8">
          Your basket is empty
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12.5">
        {products.map((product, index) => (
          <BasketCard key={product._id || index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Basket;