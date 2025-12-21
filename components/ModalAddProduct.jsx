import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddProduct } from "@/hooks/product";
import { queryClient } from "@/components/ClientWrapper";
import InputFile from "./InputFile";
import { uploadProfileAction } from "@/actions/uploadProfile";
import toast from "react-hot-toast";
import { useGetAllCategories } from "@/hooks/category";

const ModalAddProduct = ({ isOpen, onClose }) => {
  const { categories } = useGetAllCategories();
  const firstRun = useRef(true);
  const { mutateAsync, isPending, error } = useAddProduct();

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
      document.documentElement.style.scrollBehavior = "auto"; //
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.documentElement.style.scrollBehavior = "smooth"; //
    }
  }, [isOpen]);

  const formik = useFormik({
    initialValues: {
      name: "",
      numOfStars: 0,
      type: "",
      location: "",
      price: 0,
      category: "",
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      numOfStars: Yup.number().max(5).min(0).required(),
      type: Yup.string().required(),
      location: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.number()
        .oneOf(categories.map((category) => category.id))
        .required(),
      image: Yup.mixed()
        .required()
        .test(
          "fileSize",
          "Max file size is 4.5MB",
          (file) => file && file.size <= 4.5 * 1024 * 1024
        )
        .test(
          "fileType",
          "Only images are allowed",
          (file) => file && file.type.startsWith("image/")
        ),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await uploadProfileAction(values.image);
        await mutateAsync({
          ...values,
          image: res.url,
        });
        queryClient.invalidateQueries({ queryKey: ["products"] });
        resetForm();
        onClose();
      } catch (error) {
        toast.error("Error");
      }
    },
  });

  if (!isOpen) return null;
  
  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm"
   
    >
      <div
        className="w-full max-w-md rounded-xl h-[90%] no-scrollbar bg-white p-6 shadow-xl overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Add New Product
          </h2>
          <button
            onClick={() => {
              formik.resetForm();
              onClose();
            }}
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
              placeholder=" Enter Product Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
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
              placeholder=" Enter Number of Stars"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numOfStars}
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
              placeholder=" Enter Type"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.type}
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
              placeholder=" Enter Location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
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
              placeholder=" Enter Price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
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
              className="border p-2 rounded  w-full"
            >
              <option value="" disabled>
                -- Select Category --
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
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
              onClick={() => {
                formik.resetForm();
                onClose();
              }}
              className="rounded-lg px-4 cursor-pointer py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending || formik.isSubmitting}
              className="rounded-lg cursor-pointer bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isPending || formik.isSubmitting ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ModalAddProduct;
