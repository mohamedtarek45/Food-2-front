"use client";

import { outfit } from "@/fonts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
const Otp = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    const handlePhoneNumber = () => {
      setPhoneNumber(window.phoneNumber);
    };
    if (window.phoneNumber) {
      handlePhoneNumber();
    }
    if (!window.confirmationResult || !window.phoneNumber) {
      router.push("/login");
    }
  }, [router]);
  const checkOTP = async () => {
    setLoading(true);
    const confirmationResult = window.confirmationResult;
    try {
      const check = await confirmationResult.confirm(code);
      if (check.user) {
        const idToken = await check.user.getIdToken();
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (user) {
          await axios.post(
            "http://localhost:4000/user/add-user",
            { user },
            {
              headers: {
                Authorization: `Bearer ${idToken}`,
              },
            }
          );
          sessionStorage.removeItem("user");
        }
        window.phoneNumber = null;
        window.confirmationResult = null;
        router.replace("/home");
      }
    } catch (error) {
      setError("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 gap-2 mt-10 max-w-118.5">
      <input
        type="tel"
        disabled
        value={phoneNumber}
        className="w-full px-5 py-6 border border-black/20 rounded-sm disabled:opacity-50"
      />
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter Code"
        className="w-full px-5 py-6 border border-black/20 rounded-sm"
      />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <button
        disabled={!code}
        onClick={checkOTP}
        className={`cursor-pointer mt-auto disabled:opacity-50 w-full py-3.25 border-3 hover:border-[#FFBB15] rounded-[10px] ${outfit.className} font-medium text-[20px] `}
      >
        {loading ? (
          <div className="size-7 mx-auto rounded-full animate-spin border-black border-b"></div>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};

export default Otp;
