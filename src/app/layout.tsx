// next
import type { Metadata } from 'next';

// fonts
import { inter } from "@/common/fonts";

// styles
import "@/styles/globals.css";

// meta data
export const metadata: Metadata = {
  title: 'Crowd Funding Demo',
  description: 'Frontend for de-fi africa demo crown funding application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
