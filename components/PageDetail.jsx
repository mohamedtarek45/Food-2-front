import { outfit } from "@/fonts";
import Image from "next/image";
import Stars from "./Stars";
import Location from "@/public/Location.svg";

const PageDetail = ({ product }) => {
  return (
    <div className={`container ${outfit.className} mb-8 sm:mb-10 md:mb-14 px-4`}>
      <p className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-[#EC362B] font-semibold">
        Supplier
      </p>
      
      <div className="mt-4 sm:mt-6 md:mt-7.5 flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12.5">
        <div className="relative w-full sm:w-60 md:w-64 lg:w-72.5 h-48 sm:h-44 md:h-48 lg:h-50 rounded-l-[10px] rounded-r-[100px] sm:rounded-r-[150px] md:rounded-r-full overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover" 
          />
        </div>
        
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          <Stars 
            numStars={product.numOfStars} 
            starClass="size-5 sm:size-6 md:size-7 lg:size-7.5" 
          />
          <p className="text-xl sm:text-2xl md:text-[24px] lg:text-[26px] font-semibold leading-tight">
            {product.name}
          </p>
          <p className="text-base sm:text-lg md:text-[18px] lg:text-[20px] font-medium text-[#EC362B]/50">
            {product.type}
          </p>
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Location className="w-5 h-7 sm:w-4.5 sm:h-6.25 md:w-5 md:h-7" />
            <p className="text-base sm:text-lg md:text-[18px] lg:text-[20px] font-medium text-black/50">
              {product.location}
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-[#EC362B] font-semibold mt-8 sm:mt-10 md:mt-12.5">
        Description
      </p>
      
      <p className="text-sm sm:text-base md:text-[16px] text-black/50 mt-4 sm:mt-6 md:mt-7.5 leading-relaxed">
        Hotel Booking System is complete Hotel Booking IT Solution comes with
        Hotel Quotation Booking System for travel agent, tour operator and hotel
        chains to collect the inventory of hotels from multiple sources to
        present their clients with the best prices including bedbanks and
        channel managers and direct contracts.Technoheaven is a leading Travel
        Software Development Company offers the best Hotel Booking Software with
        the key role of Hotel Extranet, OTH, Hotel XML IN, Hotel XML Out and
        Hotel Channel Manager for hotels to automate day-to-day hotel management
        operations and maximize revenues.Hotel Booking System is complete Hotel
        Booking IT Solution comes with Hotel Quotation Booking System for travel
        agent, tour operator and hotel chains to collect the inventory of hotels
        from multiple sources to present their clients with the best prices
        including bedbanks and channel managers and direct
        contracts.Technoheaven is a leading Travel Software Development Company
        offers the best Hotel Booking Software with the key role of Hotel
        Extranet, OTH, Hotel XML IN, Hotel XML Out and Hotel Channel Manager for
        hotels to automate day-to-day hotel management operations and maximize
        revenues.
      </p>
    </div>
  );
};

export default PageDetail;