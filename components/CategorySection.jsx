"use client";
import { useGetAllCategories } from "@/hooks/category";
import { outfit } from "@/fonts";
const CategorySection = () => {
  
  const { categories , isPending, error } = useGetAllCategories();
  if (isPending) return null;
  if (error) return null;
  return (
    <div className="mt-7.5">
      <h2 className={`${outfit.className} text-[20px] font-semibold`}>
        Category
      </h2>
      <div className="space-y-3 mt-5">
        {categories.map((category) => (
          <label
            key={category.id}
            className="flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-1">
              <p className="text-black/50">{category.name}</p>
            </div>
            <input
              name="category"
              value={category.id}
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
