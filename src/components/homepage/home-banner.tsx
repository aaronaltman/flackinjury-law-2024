import React from "react";

export default function HomeBanner() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 py-3 shadow-lg bg-gradient-to-r from-rose-800 via-rose-600 to-rose-900 text-zinc-100 font-semibold">
      <button className="flex-1 justify-center items-center p-1 shadow-sm w-full md:text-center space-x-2 uppercase text-center  ">
        you Pay nothing unless we win -{" "}
        <span className="font-bold text-lg">&nbsp;Call Now: 678-653-0309</span>
      </button>
    </div>
  );
}
