import Footer from "@/components/main-footer";
import MainHeader from "@/components/main-header";
import React from "react";

export default function BlogPagaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainHeader />
      {children}
      <Footer />
    </div>
  );
}
