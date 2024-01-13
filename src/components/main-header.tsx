import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function MainHeader() {
  return (
    <header className="flex flex-col items-center py-8 px-4 md:flex-row md:justify-between bg-slate-900">
      <a href="/">
        <Image
          src="https://wp.flackinjurylaw.com/wp-content/uploads/2023/12/flack-injury-law-logo-clearer-PNG.png"
          alt="flack injury law logo"
          width={220}
          height={79}
          className="pb-6 md:pb-0"
        />
      </a>
      <nav>
        <ul className="flex flex-wrap justify-center items-center font-bold text-lg md:text-xl py-4 md:py-0 text-white gap-4">
          <li className="hidden md:block">Home</li>
          <li>About</li>
          <li>Practice Areas</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
