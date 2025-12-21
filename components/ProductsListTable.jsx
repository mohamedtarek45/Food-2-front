"use client";

import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { outfit } from "@/fonts";
import Image from "next/image";
import { useGetAllProducts, useDeleteProduct } from "@/hooks/product";
import { useGetAllCategories } from "@/hooks/category";
import AddProduct from "./AddProduct";
import { useState } from "react";
import { queryClient } from "./ClientWrapper";
import EditProductButton from "./EditProductButton";
const ProductsListTable = () => {
  const { products, isPending, error } = useGetAllProducts();
  const { categories } = useGetAllCategories();
  const { mutateAsync, isPending: isDeleting } = useDeleteProduct();
  const [deletingId, setDeletingId] = useState(null);

  if (isPending) {
    return (
      <div className="px-4 py-8 text-center text-gray-500">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-red-600">
        Error: {error.message}
      </div>
    );
  }
  const handleDelete = async (id) => {
    setDeletingId(id);
    await mutateAsync(id);
    queryClient.invalidateQueries({ queryKey: ["products"] });
    setDeletingId(null);
  };
  return (
    <div className={`max-w-5xl mx-auto px-4 py-8 ${outfit.className}`}>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>
      <AddProduct />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="hidden md:block">
          <table className="w-full text-center">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stars
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {product.id}
                  </td>

                  <td className=" px-4 py-2 text-sm font-medium text-gray-900 p-1">
                    <div className="size-20 relative rounded-sm">
                      <Image
                        src={product.image}
                        alt="Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {product.numOfStars}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {product.type}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {product.location}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    ${product.price}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {
                      categories.find(
                        (category) => category.id === product.category
                      )?.name
                    }
                  </td>
                  <td className="px-4 py-4 ">
                    <div className="flex items-center justify-center gap-2">
                      <EditProductButton product={product} />
                      <button
                        disabled={isDeleting}
                        onClick={() => handleDelete(product.id)}
                        className="cursor-pointer text-red-600 hover:text-red-900 p-2 rounded hover:bg-red-50 transition-colors"
                      >
                        {product.id === deletingId && isDeleting ? (
                          <div className="w-4 h-4 rounded-full animate-spin border-b-2 border-red-900" />
                        ) : (
                          <FaTrashAlt size={16} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden divide-y divide-gray-200">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 hover:bg-gray-50 transition-colors flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium text-gray-900">
                  {product.name}
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                    <FaEdit />
                  </button>
                  <button
                    disabled={isDeleting}
                    onClick={() => handleDelete(product.id)}
                    className="cursor-pointer text-red-600 hover:text-red-900 p-2 rounded hover:bg-red-50 transition-colors"
                  >
                    {product.id === deletingId && isDeleting ? (
                      <div className="w-4 h-4 rounded-full animate-spin border-b-2 border-red-900" />
                    ) : (
                      <FaTrashAlt size={16} />
                    )}
                  </button>
                </div>
              </div>
              <div className="text-xs text-gray-500">ID: {product.id}</div>
              <div className="text-xs text-gray-500">
                Stars: {product.numOfStars}
              </div>
              <div className="text-xs text-gray-500">Type: {product.type}</div>
              <div className="text-xs text-gray-500">
                Location: {product.location}
              </div>
              <div className="text-xs text-gray-500">
                Price: ${product.price}
              </div>
              <div className="text-xs text-gray-500">
                Category:{" "}
                {
                  categories.find(
                    (category) => category.id === product.category
                  )?.name
                }
              </div>
              <div className="size-15 relative rounded-sm">
                <Image
                  src={product.image}
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {(!products || products.length === 0) && (
          <div className="p-12 text-center text-gray-500">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsListTable;
