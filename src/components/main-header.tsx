import Image from "next/image";
import React from "react";

export default function MainHeader() {
  return (
    <header className="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-center md:justify-between items-center py-10 px-6 bg-slate-900 mx-auto">
      <Image
        src="https://wp.flackinjurylaw.com/wp-content/uploads/2023/12/flack-injury-law-logo-clearer-PNG.png"
        alt="flack injury law logo"
        width={220}
        height={79}
        className=""
      />
      <nav>
        <ul className="flex flex-wrap justify-center font-bold text-lg md:text-xl space-x-6 py-4 md:py-0 text-white">
          <li className="hidden md:block">Home</li>
          <li>About</li>
          <li>Practice Areas</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
