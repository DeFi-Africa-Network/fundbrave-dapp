"use client";

// imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { arbitrumSepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { configureChains, createConfig, WagmiConfig } from "wagmi";

// rainbow kit config
const { chains, publicClient } = configureChains(
  [arbitrumSepolia],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()]
);

// wagmi connectors
const { connectors } = getDefaultWallets({
  appName: process.env.APP_NAME!,
  projectId: process.env.WEB3_PROJECT_ID!,
  chains,
});

// wagmi config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// fonts
import { inter } from "@/common/fonts";

// styles
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* wagmi provider */}
        <WagmiConfig config={wagmiConfig}>
          {/* rainbow kit provider */}
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColorForeground: "#1c1b20",
              borderRadius: "small",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
