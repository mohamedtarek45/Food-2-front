"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const InputFile = ({ formik }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  useEffect(() => {
    const test =()=>{
      if (typeof formik.values.image === "string") {
        setPreviewUrl(formik.values.image);
      }
    }
    test(); 
  }, [formik.values.image]);
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    formik.setFieldValue("image", file);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  };
  return (
    <div>
      {previewUrl && (
        <div className="size-22 relative rounded-sm overflow-hidden">
          <Image
            src={previewUrl}
            alt="Product Image"
            fill
            quality={40}
            className="object-cover"
          />
        </div>
      )}
      <label
        className="cursor-pointer inline-block mt-4 px-4 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
        htmlFor="image"
      >
        Add Image
      </label>
      <input
        name="image"
        type="file"
        id="image"
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />
      {formik.errors.image && formik.touched.image && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
      )}
    </div>
  );
};

export default InputFile;
