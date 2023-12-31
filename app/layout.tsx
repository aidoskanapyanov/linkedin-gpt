import BackgroundGradient from "@/components/shared/background-gradient";
import Nav from "@/components/shared/nav";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "@/styles/globals.css";
import cx from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "@/app/provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const clash = localFont({
  src: "../styles/ClashDisplay-Semibold.otf",
  variable: "--font-clash",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkedInGPT",
  description: "Generate LinkedIn posts with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="overflow-y-scroll">
        <head />
        <body className={cx(clash.variable, inter.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
              <Nav />
              <BackgroundGradient />
              <Toaster />
              {children}
              <Analytics />
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
