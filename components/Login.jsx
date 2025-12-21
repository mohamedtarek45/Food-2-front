"use client";
import { outfit } from "@/fonts.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/firebase.js";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string().required("Required").length(13),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const appVerifier = window.recaptchaVerifier;

      
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/user/check", {
          params: {
            phoneNumber: values.phoneNumber,
          },
        });
        if(res.data.message==="user not found"){
          setError("Invalid Phone Number");
          return;
        }
        const confirmationResult = await signInWithPhoneNumber(
          auth,
          "+201203013442",
          appVerifier
        );
        window.confirmationResult = confirmationResult;
        window.phoneNumber  = values.phoneNumber;
        router.push("/verifyotp");
      } catch (error) {
        setError(error.message);
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
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="mt-auto text-center">
        <button
          disabled={loading}
          id="sign-in-button"
          className={`  cursor-pointer disabled:opacity-50 w-full py-3.25 border-3 hover:border-[#FFBB15] rounded-[10px] ${outfit.className} font-medium text-[20px] `}
        >
          {loading ? (
            <div className="size-7 mx-auto rounded-full animate-spin border-black border-b"></div>
          ) : (
            "Next"
          )}
        </button>
        <p className="text-[15px] text-black/50 mt-2">
          Don’t have an Account?{" "}
          <Link href="/signup" className="text-[#EC362B]">
            Register
          </Link>
        </p>
      </div>
      <div id="recaptcha-container"></div>
    </form>
  );
};

export default Login;
