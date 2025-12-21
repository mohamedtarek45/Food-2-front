"use client";

import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { outfit } from "@/fonts";
import AddCategory from "./AddCategory";
import { useGetAllCategories, useDeleteCategory } from "@/hooks/category";
import { queryClient } from "./ClientWrapper";
import EditCategoryButton from "./EditCategoryButton";

const CategoryList = () => {
  const { categories, isPending, error } = useGetAllCategories();
  const { mutateAsync, isPending: isDeleting } = useDeleteCategory();
  const [deletingId, setDeletingId] = useState(null);
  const handleDelete = async (id) => {
    setDeletingId(id);
    await mutateAsync(id);
    await queryClient.invalidateQueries({ queryKey: ["categories"] });
    await queryClient.invalidateQueries({ queryKey: ["products"] });
    setDeletingId(null);
  };

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

  return (
    <div className={`max-w-2xl mx-auto px-4 py-8 ${outfit.className}`}>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Categories</h1>
      <AddCategory />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mt-4">
        <div className="hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories?.map((category) => (
                <tr
                  key={category.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm flex justify-end gap-2">
                    <EditCategoryButton category={category} />
                    <button
                      onClick={() => handleDelete(category.id)}
                      disabled={isDeleting}
                      className="inline-flex cursor-pointer items-center gap-2 text-red-600 hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed px-2 py-1"
                    >
                      {category.id === deletingId && isDeleting ? (
                        <div className="w-4 h-4 rounded-full animate-spin border-b-2 border-red-900" />
                      ) : (
                        <FaTrashAlt size={14} />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Table */}
        <div className="md:hidden divide-y divide-gray-200">
          {categories?.map((category) => (
            <div
              key={category.id}
              className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center"
            >
              <div>
                <div className="text-xs text-gray-500 mb-1">
                  ID: {category.id}
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {category.name}
                </div>
              </div>

              <div className="flex gap-2">
                <EditCategoryButton category={category} />

                <button
                  onClick={() => handleDelete(category.id)}
                  disabled={isDeleting}
                  className="text-red-600 hover:text-red-900 disabled:opacity-50 p-2 rounded border border-red-200"
                >
                  {category.id === deletingId && isDeleting ? (
                    <div className="w-4 h-4 rounded-full animate-spin border-b-2 border-red-900" />
                  ) : (
                    <FaTrashAlt size={16} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {(!categories || categories.length === 0) && (
          <div className="p-12 text-center text-gray-500">
            No categories found
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
