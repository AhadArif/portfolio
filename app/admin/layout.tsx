"use client";

/**
 * /admin layout
 * - Wraps all admin pages with AdminAuthProvider
 * - Handles auth-guard redirects:
 *     unauthenticated → /admin/login
 *     non-admin       → /   (home)
 *     loading         → full-screen spinner
 */

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AdminAuthProvider, useAdminAuth } from "@/components/AdminAuthContext";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated" && !isLoginPage) {
      router.replace("/admin/login");
    }

    if ((status === "authenticated" || status === "non-admin") && isLoginPage) {
      if (status === "authenticated") {
        router.replace("/admin");
      } else {
        router.replace("/");
      }
    }

    if (status === "non-admin" && !isLoginPage) {
      router.replace("/");
    }
  }, [status, isLoginPage, router]);

  // Show spinner while resolving auth
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
          <p className="text-gray-400 text-sm tracking-wide">Verifying access…</p>
        </div>
      </div>
    );
  }

  // Block rendering of protected pages for unauthenticated / non-admin users
  if (!isLoginPage && (status === "unauthenticated" || status === "non-admin")) {
    return null;
  }

  // Block rendering of login page for already-authenticated admins
  if (isLoginPage && status === "authenticated") {
    return null;
  }

  return <>{children}</>;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <div className="admin-page">
        <AuthGuard>{children}</AuthGuard>
      </div>
    </AdminAuthProvider>
  );
}
