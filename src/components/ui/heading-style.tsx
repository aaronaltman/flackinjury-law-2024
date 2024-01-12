import React from "react";

export default function HeadingStyle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-center font-bold text-xl md:text-5xl pt-14 pb-4">
      {children}
    </h2>
  );
}
