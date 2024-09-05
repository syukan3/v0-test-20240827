'use client'

import { useSession } from "next-auth/react";
import ClientLayout from "@/components/ClientLayout";
import { GaugenixLoginDynamic } from "@/components/GaugenixLogin";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <GaugenixLoginDynamic />;
  }

  return <ClientLayout>{children}</ClientLayout>;
}