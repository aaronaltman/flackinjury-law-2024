import Footer from "@/components/main-footer";
import MainHeader from "@/components/main-header";
import React from "react";

export default function BlogPage() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <MainHeader />
      <div className="h-[36dvh]">Posts go Here</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
