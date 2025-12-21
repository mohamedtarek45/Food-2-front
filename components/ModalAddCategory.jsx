import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddCategory } from "@/hooks/category";
import { queryClient } from "@/components/ClientWrapper";
const ModalAddCategory = ({ isOpen, onClose }) => {
  const firstRun = useRef(true);
  const { mutateAsync, isPending, error } = useAddCategory();

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
      categoryName: "",
    },
    validationSchema: Yup.object({
      categoryName: Yup.string().required("Category name is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await mutateAsync({ categoryName: values.categoryName });
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        resetForm();
        onClose();
      } catch (error) {
        toast.error("Error");
      }
    },
  });

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Add New Category
          </h2>
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
              Category Name
            </label>
            <input
              name="categoryName"
              type="text"
              placeholder="e.g. Healty Food"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryName}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
                formik.touched.categoryName && formik.errors.categoryName
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
          </div>

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
              disabled={isPending}
              className="rounded-lg cursor-pointer bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isPending ? "Adding..." : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ModalAddCategory;
