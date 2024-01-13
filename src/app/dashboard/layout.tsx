"use client";

// react
import { useEffect } from "react";
// next
import { useRouter } from "next/navigation";
// imports
import { useAccount, useNetwork } from "wagmi";

// layout
import AppLayout from "@/components/layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // router hooks
  const { replace } = useRouter();

  // wagmi hooks
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  // effects
  useEffect(() => {
    // redirect to auth if not connected or wrong network
    if (!isConnected || Boolean(chain && chain.unsupported)) {
      replace("/");
    }
  }, [isConnected]);

  return <AppLayout>{children}</AppLayout>;
}
