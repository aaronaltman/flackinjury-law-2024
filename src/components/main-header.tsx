import Image from "next/image";
import React from "react";

export default function MainHeader() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-10 px-6 bg-slate-900 max-w-6xl mx-auto">
      <Image
        src="https://wp.flackinjurylaw.com/wp-content/uploads/2023/12/flack-injury-law-logo-clearer-PNG.png"
        alt="flack injury law logo"
        width={220}
        height={79}
        className=""
      />
      <nav>
        <ul className="flex flex-wrap justify-center md:text-xl space-x-6 py-4 md:py-0 text-white">
          <li>Home</li>
          <li>Practice Areas</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
