import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github } from "@/components/icons";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const clash = localFont({
  src: "../styles/ClashDisplay-Semibold.otf",
  variable: "--font-clash",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OctoArt",
  description:
    "Generate beautiful GitHub octocat art with one click. Promote open-source!",
  metadataBase: new URL("https://octoart.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrolled = false;
  return (
    <html lang="en">
      <body className={cn(clash.variable, inter.variable)}>
        <Toaster />
        <div className="fixed h-screen w-full bg-gradient-to-br from-purple-100 via-slate-50 to-violet-100" />
        <div
          className={`fixed top-0 w-full ${
            scrolled
              ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
              : "bg-white/0"
          } z-30 transition-all`}
        >
          <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
            <Link
              href="/"
              className="mt-8 flex items-center font-display text-2xl"
            >
              <Image
                src="/logo.png"
                alt="Logo image of OctoArt"
                width="100"
                height="100"
                className="mr-2 rounded-sm"
              ></Image>
              <p>OctoArt</p>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/gallery"
                className="text-violet-400 hover:text-violet-600"
              >
                Gallery
              </Link>
              <a
                href="https://github.com/garrrikkotua/octoart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <div className="absolute w-full py-5 text-center">
          <p className="text-gray-500">
            A project by{" "}
            <a
              className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
              href="https://twitter.com/garrrikkotua"
              target="_blank"
              rel="noopener noreferrer"
            >
              Igor Kotua
            </a>
          </p>
          <p>
            Subscribe to my{" "}
            <a
              className="font-semibold text-violet-500 underline-offset-4 transition-colors hover:underline"
              href="https://stargazerweekly.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              newsletter
            </a>
          </p>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
