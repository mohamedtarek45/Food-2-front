"use client";
import { auth } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
const ClientWrapper = ({ isProtected, children }) => {
  const [checkingAuth, setCheckingAuth] = useState(true);

  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (isProtected && !user) {
        router.replace("/login");
        return;
      }

      if (!isProtected && user) {
        router.replace("/home");
        return;
      }

      setCheckingAuth(false);
    });
  }, [router, isProtected]);
  if (checkingAuth) return null;
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientWrapper;
