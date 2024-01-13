"use client";

// imports
import { ConnectButton } from '@rainbow-me/rainbowkit';

// components
import { MainNav } from "./main-nav";

const Navigation = () => {
  return (
    <div className="border-b">
      <div className="container flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Navigation;