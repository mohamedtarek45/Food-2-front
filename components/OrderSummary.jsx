"use client";
import { outfit } from "@/fonts";
import useCartStore from "@/store/cartStore";

const OrderSummary = () => {
  const { totalPrice } = useCartStore((state) => state);
  
  return (
    <div
      className={`${outfit.className} my-6 sm:my-8 md:my-10 lg:my-12.5 py-4 sm:py-5 md:py-6 lg:py-6.75 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12.5 border border-black/20 rounded-[20px] w-[95%] mx-auto max-w-100 `}
    >
      <p className="text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] font-semibold text-center">
        Order Summary
      </p>
      
      <hr className="border-black/20 mt-4 sm:mt-5 md:mt-6 lg:mt-6.75" />
      
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12.5 space-y-3 sm:space-y-3.5 md:space-y-4 w-full">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
          <span className="text-gray-400 text-sm sm:text-base md:text-lg">
            Subtotal
          </span>
          <span className="text-gray-400 px-2 sm:px-4 md:px-6 text-sm sm:text-base md:text-lg">
            :
          </span>
          <span className="text-right text-sm sm:text-base md:text-lg">
            SAR {totalPrice ? totalPrice : "--"}
          </span>
        </div>
        
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
          <span className="text-gray-400 text-sm sm:text-base md:text-lg">
            VAT
          </span>
          <span className="text-gray-400 px-2 sm:px-4 md:px-6 text-sm sm:text-base md:text-lg">
            :
          </span>
          <span className="text-right text-sm sm:text-base md:text-lg">
            SAR {totalPrice ? "20" : "--"}
          </span>
        </div>
        
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
          <span className="text-gray-400 text-sm sm:text-base md:text-lg">
            Total
          </span>
          <span className="text-gray-400 px-2 sm:px-4 md:px-6 text-sm sm:text-base md:text-lg">
            :
          </span>
          <span className="text-right font-bold text-[#EC362B] text-sm sm:text-base md:text-lg">
            SAR {totalPrice ? totalPrice + 20 : "--"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;