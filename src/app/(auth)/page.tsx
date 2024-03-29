"use client";

// react
import { useEffect } from "react";
// next
import { useRouter } from "next/navigation";
// imports
import { useAccount, useNetwork } from "wagmi";

// shared components
import { CustomConnectButton } from "@/components/shared";

export default function Auth() {
  // router hooks
  const { replace } = useRouter();

  // wagmi hooks
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  // effects
  useEffect(() => {
    // redirect to dashboard if connected and right network
    if (isConnected && Boolean(chain && !chain.unsupported)) {
      replace("/dashboard");
    }
  }, [isConnected]);

  return (
    <div className="container min-h-svh flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="auth-banner relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900/80" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Project Pilot
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Navigating Dreams into Reality" - Empowering Innovations through
              Community Support.
            </p>
            <footer className="text-sm">Defi Africa</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Connect your wallet
            </h1>
            <p className="text-sm text-muted-foreground">
              To start a project or support a project.
            </p>
          </div>
          <CustomConnectButton className="w-full" />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By connecting your wallet, you agree to our terms of use.
          </p>
        </div>
      </div>
    </div>
  );
}
