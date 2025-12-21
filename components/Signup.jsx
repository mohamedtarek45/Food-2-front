"use client";
import { outfit } from "@/fonts.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/firebase.js";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  }, []);

  const formik = useFormik({
    initialValues: {
      type: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      type: Yup.string().required("Required"),
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phoneNumber: Yup.string().required("Required").length(13),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const appVerifier = window.recaptchaVerifier;
      if (appVerifier) {
      }
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/user/check",
          {
            params: {
              phoneNumber: values.phoneNumber,
            },
          }
        );
        if (res.data.message === "success") {
          return toast.error("phone number already exist");
        }
        const confirmationResult = await signInWithPhoneNumber(
          auth,
          "+201203013442",
          appVerifier
        );
        window.confirmationResult = confirmationResult;
        sessionStorage.setItem("user", JSON.stringify(values));
        window.phoneNumber = values.phoneNumber;
        router.push("/verifyotp");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        resetForm();
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-full gap-2 mt-10 flex-1"
    >
      <div id="recaptcha-container"></div>

      <input
        name="type"
        type="text"
        placeholder="Type"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.type}
        className={`w-full px-5 py-4 border  rounded-sm ${
          formik.touched.type && formik.errors.type
            ? "border-red-500"
            : "border-black/20"
        } `}
      />
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fullName}
        className={`w-full px-5 py-4 border  rounded-sm ${
          formik.touched.fullName && formik.errors.fullName
            ? "border-red-500"
            : "border-black/20"
        } `}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={`w-full px-5 py-4 border  rounded-sm ${
          formik.touched.email && formik.errors.email
            ? "border-red-500"
            : "border-black/20"
        } `}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number e.g. +201xxxxxxxxx"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
        className={`w-full px-5 py-4 border  rounded-sm ${
          formik.touched.phoneNumber && formik.errors.phoneNumber
            ? "border-red-500"
            : "border-black/20"
        } `}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className={`w-full px-5 py-4 border  rounded-sm ${
          formik.touched.password && formik.errors.password
            ? "border-red-500"
            : "border-black/20"
        } `}
      />
      <button
        disabled={loading}
        className={`mt-auto  cursor-pointer disabled:opacity-50 w-full py-3.25 border-3 hover:border-[#FFBB15] rounded-[10px] ${outfit.className} font-medium text-[20px] `}
      >
        {loading ? (
          <div className="size-7 mx-auto rounded-full animate-spin border-black border-b"></div>
        ) : (
          "Next"
        )}
      </button>
    </form>
  );
};
