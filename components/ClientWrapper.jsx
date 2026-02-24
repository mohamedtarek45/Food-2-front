"use client";
import { auth } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import useUserStore from "@/store/userStore";
import axios from "axios";
export const queryClient = new QueryClient();
const ClientWrapper = ({ isProtected, children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const router = useRouter();
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/user/check`,
            { params: { email: user.email } }
          );

          if (res.data.message === "success") {
            setUser(res.data.user.fullName);
          }

          if (!isProtected) {
            router.replace("/home");
            return;
          }
        } else {
          if (isProtected) {
            router.replace("/login");
            return;
          }
        }
      } catch (error) {
        console.error("Auth error:", error);
      } finally {
        setCheckingAuth(false);
      }
    });

    return () => unsubscribe(); 
  }, [isProtected, router, setUser]);
  if (checkingAuth) return null;
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientWrapper;
