"use client";
import { useState } from "react";
import ModalAddProduct from "./ModalAddProduct";
const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-end">
      <ModalAddProduct  isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  my-2 py-2 px-4 rounded cursor-pointer"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
