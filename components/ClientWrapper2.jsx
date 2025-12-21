"use client";
import { auth } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ClientWrapper2 = ({ children }) => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.uid === "KIxEUrASTJg76Et4YHlwWQfwa9x2") {
        setCheckingAuth(false);
      } else {
        return router.replace("/home");
      }
    });
  }, [router]);
  if (checkingAuth) return null;
  return (
    <>{children}</>
  );
};

export default ClientWrapper2;
