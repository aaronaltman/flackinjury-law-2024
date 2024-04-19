import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flack Injury Law | Atlanta, GA Personal Injury Attorney",
  description:
    "Flack Injury Law specializes in personal injury cases in Georgia. Get fast settlements and speak directly to your attorney. Expertise in auto accidents, slip and falls, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto">{children}</div>;
}
