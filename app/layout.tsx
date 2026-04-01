import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Bilal | Web Developer",
  description: "Portfolio of Muhammad Bilal, an Web Developer  scalable solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            {/* Global background glow */}
            <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
              <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
              <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-purple-500/10 blur-[120px] rounded-full" />
              <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-emerald-500/10 blur-[120px] rounded-full" />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

