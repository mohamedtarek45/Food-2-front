import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import Stars from "./Stars";
import { outfit } from "@/fonts";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

const BasketCard = ({ product }) => {
  const { RemoveProduct } = useCartStore((state) => state);
  
  return (
    <div
      className={`w-full 2xl:max-w-150 mx-auto p-3 sm:p-4 md:p-5 lg:p-6 ${outfit.className} bg-white rounded-[20px] border border-black/20`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
        <div className="shrink-0 relative size-20 sm:size-22 md:size-24 lg:size-25 overflow-hidden rounded-full mx-auto sm:mx-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="grow w-full sm:w-auto">
          <Stars 
            numStars={product.numOfStars} 
            starClass="size-4 sm:size-5 md:size-6" 
            className="mx-auto sm:mx-0"
          />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold my-3 sm:my-4 md:my-5 text-center sm:text-left">
            {product.name}
          </p>
          <Link
            href={`/products/${product._id}`}
            className="text-[#FFBB15] text-base sm:text-lg md:text-[20px] font-medium underline block mb-4 sm:mb-6 md:mb-7.5 text-center sm:text-left hover:text-[#E5A712] transition-colors"
          >
            View Details
          </Link>

          <div className="space-y-1 sm:space-y-1.5 text-sm sm:text-base md:text-lg lg:text-[22px] mt-4 sm:mt-6 md:mt-7.5 flex flex-col items-start w-fit mx-auto">
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-gray-500 w-24 sm:w-28 md:w-32">Price</span>
              <span className="text-gray-500 mx-2 sm:mx-3 md:mx-4">:</span>
              <span className="text-gray-900 font-semibold">
                SAR {product.price}
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-gray-500 w-24 sm:w-28 md:w-32">Quantity</span>
              <span className="text-gray-500 mx-2 sm:mx-3 md:mx-4">:</span>
              <span className="text-gray-900 font-semibold">
                x {product.count}
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-gray-500 w-24 sm:w-28 md:w-32">Subtotal</span>
              <span className="text-gray-500 mx-2 sm:mx-3 md:mx-4">:</span>
              <span className="text-gray-900 font-bold text-base sm:text-lg md:text-xl">
                SAR {product.price * product.count}
              </span>
            </div>
          </div>
        </div>

        <button
          className="p-2 sm:p-2.5 md:p-3 hover:bg-red-50 rounded-lg transition-colors cursor-pointer mx-auto sm:mx-0 sm:self-start"
          onClick={() => RemoveProduct(product)}
          aria-label="Remove product"
        >
          <FaRegTrashAlt className="size-6 sm:size-7 md:size-8 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default BasketCard;