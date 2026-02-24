"use client";
import { outfit } from "@/fonts";

import CategorySection from "./CategorySection";
import  useProductFilterStore  from "@/store/productFilterStore";
const FilterSection = () => {
  const { setCtegory } = useProductFilterStore(state => state);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const category = formData.getAll("category").join(",");
    setCtegory(category);
  };
  return (
    <form
      className="rounded-sm border border-black/20 p-7.5"
      onSubmit={handleSubmit}
    >

      <CategorySection />
      <div className="text-right">
        <button
          type="submit"
          className={`${outfit.className} cursor-pointer mt-5 text-[13px] px-7.75 py-3.5 font-semibold bg-[#410C0C] rounded-full text-white
          tracking-[1.6px]
          `}
        >
          FILTER
        </button>
      </div>
    </form>
  );
};

export default FilterSection;
