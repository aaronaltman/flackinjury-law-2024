import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import GoogleReview from "@/components/google-review";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flack Injury Law | Atlanta, GA Personal Injury Attorney",
  description:
    "Flack Injury Law specializes in personal injury cases in Georgia. Get fast settlements and speak directly to your attorney. Expertise in auto accidents, slip and falls, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-stone-100 via-slate-200 to-zinc-50`}
      >
        {children}
        <GoogleReview />
      </body>
    </html>
  );
}
