"use client";

import { useConvexAuth } from "convex/react";

import { authClient } from "@/lib/auth-client";

import Spinner from "@/components/global/spinner";

export default function Home() {
  const { isAuthenticated, isLoading: isSessionPending } = useConvexAuth();

  // NOTE: You an use the better auth hook here. But better auth returns the session before convex. This might cause issues is some cases.
  const { data: sessionData } = authClient.useSession();
  const user = sessionData?.user;

  if (isSessionPending) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[40vh]">
      {!isAuthenticated ? (
        <p>You are not signed in. Try visiting "/dashboard".</p>
      ) : (
        <p>
          You are signed in as:
          <span className="text-rose-500 ml-2">{user?.email}</span>
        </p>
      )}
    </div>
  );
}
