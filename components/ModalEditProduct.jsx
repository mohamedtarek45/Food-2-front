"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEditProduct } from "@/hooks/product"; // افترض عندك hook مشابه
import { queryClient } from "@/components/ClientWrapper";
import InputFile from "./InputFile";
import { uploadProfileAction } from "@/actions/uploadProfile";
import toast from "react-hot-toast";
import { useGetAllCategories } from "@/hooks/category";

const ModalEditProduct = ({ isOpen, onClose, product }) => {
  const { categories } = useGetAllCategories();
  const firstRun = useRef(true);
  const { mutateAsync, isPending } = useEditProduct();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: product?.name || "",
      numOfStars: product?.numOfStars || 0,
      type: product?.type || "",
      location: product?.location || "",
      price: product?.price || 0,
      category: product?.category || "",
      image: product?.image || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      numOfStars: Yup.number()
        .min(0, "Min 0")
        .max(5, "Max 5")
        .required("Number of stars is required"),
      type: Yup.string().required("Type is required"),
      location: Yup.string().required("Location is required"),
      price: Yup.number().required("Price is required"),
      category: Yup.string()
        .oneOf(
          categories.map((c) => c.id.toString()),
          "Select a valid category"
        )
        .required("Category is required"),
      image: Yup.mixed()
        .test(
          "fileSize",
          "Max file size is 4.5MB",
          (file) => !file || typeof file === "string" || (file instanceof File && file.size <= 4.5 * 1024 * 1024)
        )
        .test(
          "fileType",
          "Only images are allowed",
          (file) => !file ||typeof file === "string" || (file instanceof File && file.type.startsWith("image/"))
        ),
    }),
    onSubmit: async (values) => {
      try {
        let imageUrl = product.image;
        if (values.image && (values.image instanceof File) ) {
          const res = await uploadProfileAction(values.image);
          imageUrl = res.url;
        }
        await mutateAsync({
          id: product.id,
          ...values,
          image: imageUrl,
        });
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onClose();
      } catch (error) {
        toast.error("Error updating product");
      }
    },
  });

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl h-[90%] overflow-y-scroll no-scrollbar bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-gray-400 cursor-pointer hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Product Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Stars
            </label>
            <input
              name="numOfStars"
              type="number"
              value={formik.values.numOfStars}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.numOfStars && formik.errors.numOfStars
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <input
              name="type"
              type="text"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.type && formik.errors.type
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              name="location"
              type="text"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.location && formik.errors.location
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              name="price"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.price && formik.errors.price
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 rounded w-full"
            >
              <option value="" disabled>
                -- Select Category --
              </option>
              {categories.map((c) => (
                <option key={c.id} value={c.id.toString()}>
                  {c.name}
                </option>
              ))}
            </select>
            {formik.errors.category && formik.touched.category && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.category}
              </p>
            )}
          </div>

          <InputFile formik={formik} />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 cursor-pointer py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending || formik.isSubmitting}
              className="rounded-lg cursor-pointer bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isPending || formik.isSubmitting
                ? "Updating..."
                : "Update Product"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ModalEditProduct;
