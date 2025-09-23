"use client";

import Link from "next/link";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

import { authClient } from "@/lib/auth-client";

import Spinner from "@/components/global/spinner";
import { ThemeSwitcher } from "@/components/global/theme-switcher";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Convex + Better Auth
        </Link>

        <div className="flex items-center gap-3">
          <AuthLoading>
            <span className="text-sm">Loading Auth</span>
            <Spinner />
          </AuthLoading>

          <Authenticated>
            <span className="text-sm">Authenticated</span>

            <Button asChild variant={"outline"}>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button
              className="cursor-pointer"
              onClick={() => authClient.signOut()}
            >
              Sign Out
            </Button>
          </Authenticated>

          <Unauthenticated>
            <span className="text-sm">Unauthenticated</span>

            <Button asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </Unauthenticated>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
