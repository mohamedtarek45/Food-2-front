"use client";
import { outfit } from "@/fonts.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.js";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required").min(6),
      retypePassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        let res = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/user/check",
          { params: { email: values.email } },
        );
        if (res.data.message === "success") {
          toast.error("Email already exists");
          return;
        }
        const SignUp = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password,
        );
        const user = SignUp.user;

        if (user) {
          const token = await user.getIdToken();

          try {
            await axios.post(
              process.env.NEXT_PUBLIC_API_URL + "/user/add-user",
              {
                fullName: values.fullName,
                email: values.email,
              },
              {
                headers: { Authorization: `Bearer ${token}` },
              },
            );

            toast.success("Account created successfully");
            router.push("/home");
          } catch (backendError) {
            await user.delete();
            toast.error("Failed to save data. Signup canceled.");
            console.log("Backend failed:", backendError);
          }
        }
      } catch (firebaseError) {
        console.log("Firebase error:", firebaseError);
        toast.error("Failed to create account.");
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
        name="fullName"
        type="text"
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
      {formik.errors.fullName && (
        <p className="text-red-500">{formik.errors.fullName}</p>
      )}
      <input
        name="email"
        type="text"
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
      {formik.errors.email && (
        <p className="text-red-500">{formik.errors.email}</p>
      )}
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
      {formik.errors.password && (
        <p className="text-red-500">{formik.errors.password}</p>
      )}
      <input
        type="password"
        name="retypePassword"
        placeholder=" Retype Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.retypePassword}
        className={`w-full px-5 py-4 border  rounded-sm ${
          formik.touched.retypePassword && formik.errors.retypePassword
            ? "border-red-500"
            : "border-black/20"
        } `}
      />
      {formik.errors.retypePassword && (
        <p className="text-red-500">{formik.errors.retypePassword}</p>
      )}
      <button
        disabled={loading}
        className={`mt-auto  cursor-pointer disabled:opacity-50 w-full py-3.25 border-3 hover:border-[#FFBB15] rounded-[10px] ${outfit.className} font-medium text-[20px] `}
      >
        {loading ? (
          <div className="size-7 mx-auto rounded-full animate-spin border-black border-b"></div>
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
};
