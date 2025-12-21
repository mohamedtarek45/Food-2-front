import { outfit } from "@/fonts";
import Link from "next/link";

const LandingAdmin = () => {
  return (
    <div className="w-full h-[50vh]  relative flex items-center justify-center bg-linear-to-l from-red-900 to-black">
      <div className={`text-white ${outfit.className} text-center`}>
        <p className={` text-[50px]`}>Admin Dashboard</p>
        <p className={` text-[22px] mt-5 font-extralight`}>
          <Link href="/home">Home </Link>/ Admin
        </p>
      </div>
    </div>
  );
};

export default LandingAdmin;
