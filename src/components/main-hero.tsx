import Image from "next/image";
import React from "react";

export default function MainHero() {
  return (
    <section className="flex flex-col md:flex-row flex-wrap justify-between max-w-8xl">
      <div className="md:w-2/3 py-4 px-4">
        <h1>Logo Goes Here</h1>
        <p>Button Pill with Number Goes Here</p>
        <h2 className="text-8xl">Atlanta, Georgia Personal Injury Law Firm</h2>
        <button>Click Me</button>
      </div>
      <div className="md:w-1/3">
        <Image
          alt="flack injury hero"
          src="/hero.jpeg"
          width={500}
          height={500}
          className="object-cover h-[100vh]"
        />
      </div>
    </section>
  );
}
