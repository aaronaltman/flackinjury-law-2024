import React from "react";

export default function Cover({ children, background }: any) {
  return (
    <div className="h-screen bg-red-500">
      <img src={background} />

      {children}
    </div>
  );
}
