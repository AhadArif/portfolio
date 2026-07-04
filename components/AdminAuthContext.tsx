"use client";

/**
 * AdminAuthContext
 * Provides auth state + admin-role verification across the /admin route group.
 * Wraps Firebase onAuthStateChanged and checks users/{uid}.role === "admin".
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { verifyAdminRole } from "@/lib/adminService";

// ─── Types ────────────────────────────────────────────────────────────────────

type AuthStatus = "loading" | "unauthenticated" | "authenticated" | "non-admin";

interface AdminAuthContextValue {
  user: User | null;
  status: AuthStatus;
  signOutAdmin: () => Promise<void>;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setStatus("unauthenticated");
        return;
      }

      // Verify admin role in Firestore
      const isAdmin = await verifyAdminRole(firebaseUser.uid);
      setUser(firebaseUser);
      setStatus(isAdmin ? "authenticated" : "non-admin");
    });

    return unsub;
  }, []);

  const signOutAdmin = async () => {
    await signOut(auth);
    setUser(null);
    setStatus("unauthenticated");
  };

  return (
    <AdminAuthContext.Provider value={{ user, status, signOutAdmin }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth(): AdminAuthContextValue {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  return ctx;
}
