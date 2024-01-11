import React from "react";

export default function MainHeader() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-slate-800">
      <p className="text-white text-2xl py-6 md:py-0">Flack Injury Law</p>
      <nav>
        <ul className="flex justify-center flex-wrap space-x-6 py-4 md:py-0 text-white">
          <li>Home</li>
          <li>Practice Areas</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
