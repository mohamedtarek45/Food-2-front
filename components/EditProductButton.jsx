"use client";
import { useState } from "react";
import ModalEditProduct from "./ModalEditProduct";
const EditProductButton = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ModalEditProduct
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={product}
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
export default EditProductButton;
