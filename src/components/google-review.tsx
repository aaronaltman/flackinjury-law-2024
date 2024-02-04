"use client";

import React, { useEffect } from "react";

export default function GoogleReview() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.defer = true;
      document.body.appendChild(script);
    }, 5000); // 5-second delay

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="elfsight-app-7e3d0dcf-9704-4639-b8f4-2180c915739d"></div>
  );
}
