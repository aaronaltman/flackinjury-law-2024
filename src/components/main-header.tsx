import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SheetDemo } from "./sheet";

export default function MainHeader() {
  return (
    <header className="z-0 flex flex-col items-center py-8 px-4 md:flex-row md:justify-between bg-slate-900 ">
      <Link href="/">
        <Image
          src="https://wp.flackinjurylaw.com/wp-content/uploads/2023/12/flack-injury-law-logo-clearer-PNG.png"
          alt="flack injury law logo"
          width={220}
          height={79}
          className="pb-6 md:pb-0 rounded-sm"
        />
      </Link>
      <nav>
        <ul className="flex flex-wrap justify-center items-center font-bold text-lg md:text-xl py-4 md:py-0 text-white gap-4">
          <li className="hidden md:block">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pages/about-flack-injury-law">About</Link>
          </li>
          <li>
            <Link href="/blog">Resources</Link>
          </li>
          <li>
            <SheetDemo />
          </li>
        </ul>
      </nav>
    </header>
  );
}
