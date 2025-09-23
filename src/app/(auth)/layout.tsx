"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useConvexAuth } from "convex/react";

import Spinner from "@/components/global/spinner";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.replace("/sign-in");
      }
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Prevents flash before redirect
  }

  return (
    <div className="flex justify-center items-center h-[40vh]">{children}</div>
  );
}
