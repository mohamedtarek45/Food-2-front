"use client";
import { useState } from "react";
import ModalEditCategory from "./ModalEditCategory";
const EditCategoryButton = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ModalEditCategory
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        category={category}
      />
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="text-blue-600 cursor-pointer hover:text-blue-900 px-2 py-1 text-sm rounded border border-blue-200"
      >
        Edit
      </button>
    </>
  );
};

export default EditCategoryButton;
