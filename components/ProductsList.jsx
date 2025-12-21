"use client";
import { useGetAllProducts } from "@/hooks/product";
import ProductCard from "./ProductCard";
const ProductsList = () => {
  const { products, isPending, error } = useGetAllProducts();
  if (isPending)
    return (
      <div className="flex justify-center items-center h-full">
        <div className="size-9 border-b rounded-full animate-spin" />
      </div>
    );
  if (error) return null;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 md:gap-x-2 xl:gap-x-12.5 mt-12.5">
      {products.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <p className="text-center text-black/50">No Products Found</p>
        </div>
      )}
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
