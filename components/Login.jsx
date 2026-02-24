"use client";
import { outfit } from "@/fonts.js";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.js";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {  useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";


const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Email: Yup.string().email("Invalid Email").required("Required"),
      Password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/user/check", {
          params: {
            email: values.Email,
          },
        });
        const singIn = await signInWithEmailAndPassword(
          auth,
          values.Email,
          values.Password
        );

        if (res.data.message === "success" && singIn.user) {
          toast.success("Login Successful");
          router.push("/home");
          return;
        }
    
      } catch (error) {
        toast.error("Invalid Email or Password");
        
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
        type="email"
        name="Email"
        placeholder="Type your Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Email}
        className={`w-full px-5 py-4 border  rounded-sm ${
          formik.touched.Email && formik.errors.Email
            ? "border-red-500"
            : "border-black/20"
        } `}
      />
      
      <input
        type="password"
        name="Password"
        placeholder="Enter your Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Password}
        className={`w-full px-5 py-4 border  rounded-sm ${
          formik.touched.Password && formik.errors.Password
            ? "border-red-500"
            : "border-black/20"
        } `}
      />

      <div className="mt-auto text-center">
        <button
          disabled={loading}
          id="sign-in-button"
          className={`  cursor-pointer disabled:opacity-50 w-full py-3.25 border-3 hover:border-[#FFBB15] rounded-[10px] ${outfit.className} font-medium text-[20px] `}
        >
          {loading ? (
            <div className="size-7 mx-auto rounded-full animate-spin border-black border-b"></div>
          ) : (
            "Login"
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
