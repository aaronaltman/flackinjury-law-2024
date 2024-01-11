import React from "react";

export default function HomeBanner() {
  return (
    <div className="flex justify-center items-center">
      <button className="flex justify-center items-center p-1 shadow-sm w-full text-left space-x-2 uppercase bg-gradient-to-r from-rose-800 via-rose-600 to-rose-900 text-zinc-100">
        you Pay nothing unless we win -{" "}
        <span className="font-bold">&nbsp;Call Now: 678-653-0309</span>
      </button>
    </div>
  );
}
