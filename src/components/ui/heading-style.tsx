import React from "react";

export default function HeadingStyle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-left md:text-center px-4 font-bold text-2xl md:text-5xl pt-14 pb-4">
      {children}
    </h2>
  );
}
