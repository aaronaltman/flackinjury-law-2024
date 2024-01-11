import Image from "next/image";
import React from "react";

export default function HomeLogosSection() {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="bg-slate-900">
        <div className="">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-around items-center text-white text-xl py-20">
            <Image
              src="https://wp.flackinjurylaw.com/wp-content/uploads/2024/01/state-bar-of-georgia.png"
              width={220}
              height={60}
              alt="Georgia Super Lawyer"
              className="rounded-md p-2 bg-white"
            />
            <Image
              src="https://wp.flackinjurylaw.com/wp-content/uploads/2024/01/unnamed.jpg"
              width={220}
              height={60}
              alt="Georgia Super Lawyer"
              className="rounded-md p-2 bg-white"
            />
            <Image
              src="https://wp.flackinjurylaw.com/wp-content/uploads/2024/01/gtla.png"
              width={204}
              height={60}
              alt="Georgia Super Lawyer"
              className="rounded-md p-2 bg-white h-[90px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
