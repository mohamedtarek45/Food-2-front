"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { outfit } from "@/fonts";
const Stars = dynamic(() => import("@/components/Stars"));
const DataPage3 = () => {
  return (
    <div className="mt-12.5 2xl:gap-10 3xl:gap-12.5 container grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="rounded-[20px] border overflow-hidden border-black/20 w-full pb-10">
        <div className="relative rounded-b-[200px] rounded-t-[20px] w-full max-h-85.5 aspect-310/342  overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dthnlbd9e/image/upload/v1771930936/pexels-pixabay-161018_atdf7g.jpg"
            alt="Logo"
            fill
            className="rotate-90 object-cover scale-[1.5] lg:scale-[1.25]"
          />
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          <Stars numStars={3} starClass="size-6" className="mx-auto" />
          <p
            className={`${outfit.className} text-[26px] font-semibold text-center`}
          >
            The Sky
          </p>

          <p
            className={`${outfit.className} text-[20px] font-medium text-center text-[#EC362B]`}
          >
            Restaurant
          </p>
          <p
            className={`${outfit.className} text-[18px] font-medium text-center text-black/50`}
          >
            Main Market Riyadh, KSA
          </p>
        </div>
      </div>
      <div className="rounded-[20px] border overflow-hidden border-black/20 w-full pb-10">
        <div className="relative rounded-b-[200px] rounded-t-[20px] w-full max-h-85.5 aspect-310/342  overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dthnlbd9e/image/upload/v1771930933/pexels-mat-brown-150387-1395967_fmbhda.jpg"
            alt="Logo"
            fill
            className="rotate-90 object-cover scale-[1.5] lg:scale-[1.25]"
          />
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          <Stars numStars={5} starClass="size-6" className="mx-auto" />
          <p
            className={`${outfit.className} text-[26px] font-semibold text-center`}
          >
            Maison Bleu
          </p>

          <p
            className={`${outfit.className} text-[20px] font-medium text-center text-[#EC362B]`}
          >
            Restaurant
          </p>
          <p
            className={`${outfit.className} text-[18px] font-medium text-center text-black/50`}
          >
            Main Market Riyadh, KSA
          </p>
        </div>
      </div>
      <div className="rounded-[20px] border overflow-hidden border-black/20 w-full pb-10">
        <div className="relative rounded-b-[200px] rounded-t-[20px] w-full max-h-85.5 aspect-310/342  overflow-hidden">
          <Image
            src="/test3.png"
            alt="Logo"
            fill
            className="rotate-90 object-cover scale-[1.5] lg:scale-[1.25]"
          />
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          <Stars numStars={3} starClass="size-6" className="mx-auto" />
          <p
            className={`${outfit.className} text-[26px] font-semibold text-center`}
          >
            Le Rêve
          </p>

          <p
            className={`${outfit.className} text-[20px] font-medium text-center text-[#EC362B]`}
          >
            Restaurant
          </p>
          <p
            className={`${outfit.className} text-[18px] font-medium text-center text-black/50`}
          >
            Main Market Riyadh, KSA
          </p>
        </div>
      </div>
      <div className="rounded-[20px] border overflow-hidden border-black/20 w-full pb-10">
        <div className="relative rounded-b-[200px] rounded-t-[20px] w-full max-h-85.5 aspect-310/342  overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dthnlbd9e/image/upload/v1771930935/pexels-solliefoto-299348_tnyhsj.jpg"
            alt="Logo"
            fill
            className="rotate-90 object-cover scale-[1.5] lg:scale-[1.25]"
          />
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          <Stars numStars={4} starClass="size-6" className="mx-auto" />
          <p
            className={`${outfit.className} text-[26px] font-semibold text-center`}
          >
            Marina Bay
          </p>

          <p
            className={`${outfit.className} text-[20px] font-medium text-center text-[#EC362B]`}
          >
            Restaurant
          </p>
          <p
            className={`${outfit.className} text-[18px] font-medium text-center text-black/50`}
          >
            Main Market Riyadh, KSA
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataPage3;
