import { outfit } from "@/fonts";
import Decorate from "@/public/Decorate.svg";
import Image from "next/image";

const gallery = [
  {
    src: "/Gallery/Gallery1.png",
    alt: "Logo",
  },
  {
    src: "/Gallery/Gallery2.png",
    alt: "Logo",
  },
  {
    src: "/Gallery/Gallery3.png",
    alt: "Logo",
  },
  {
    src: "/Gallery/Gallery4.png",
    alt: "Logo",
  },
];

const Page6 = () => {
  return (
    <div className="my-12.5">
      <div className="mx-auto w-fit text-center">
        <p className={`text-[28px] lg:text-[35px] font-medium ${outfit.className}`}>Gallery</p>
        <Decorate className="mx-auto mt-4" />
      </div>
      <div className=" mt-12.5 container gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="relative 2xl:w-77.5 3xl:w-85.5 h-99.75 "
          >
            <Image src={item.src} alt={item.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page6;
