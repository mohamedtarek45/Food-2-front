"use client";
import { useState } from "react";
import ModalAddCategory from "./ModalAddCategory";
const AddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-end">
      <ModalAddCategory  isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  my-2 py-2 px-4 rounded cursor-pointer"
      >
        Add Category
      </button>
    </div>
  );
};

export default AddCategory;
