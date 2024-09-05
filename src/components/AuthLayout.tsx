'use client'

import { useSession } from "next-auth/react";
import ClientLayout from "@/components/ClientLayout";
import { GaugenixLoginDynamic } from "@/components/GaugenixLogin";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <GaugenixLoginDynamic />;
  }

  return <ClientLayout>{children}</ClientLayout>;
}