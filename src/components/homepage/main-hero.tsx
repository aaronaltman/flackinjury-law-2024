import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function MainHero() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
      <div className="flex flex-col justify-center  px-4 basis-2/3 space-y-6 md:pr-12 md:my-14">
        <h1 className="font-bold tracking-widest text-lg">Flack Injury Law</h1>
        <div className="border border-black/10 border-x-0 border-y-0 border-b-2 md:w-1/4 shadow-lg bg-red-600"></div>

        <h2 className="text-5xl font-bold tracking-widest leading-tightest">
          Atlanta, Georgia Personal Injury <br /> Law Firm
        </h2>
        <p className="leading-6">
          Flack Injury Law specializes in maximizing financial compensation for
          injured individuals in Georgia. We are experts in obtaining the
          largest settlements and verdicts as fast as possible for our clients.
          We are responsive — our clients can actually call and speak to their
          attorney on the phone. And we are hardworking: we work tirelessly to
          get our clients the compensation they deserve!
        </p>
        <div className="space-x-4">
          <Button className="shrink bg-red-600 text-white rounded-lg py-2 px-4">
            Free Case Evaluation
          </Button>
          <Button className="bg-slate-900 text-white rounded-lg py-2 px-4">
            Personal Attention, Maximum Compensation →
          </Button>
        </div>
      </div>
      <div className="flex basis-1/4 md:basis-1/2 h-stretch">
        <Image
          alt="flack injury hero"
          src="/hero.jpeg"
          width={1000}
          height={1600}
          className="object-cover max-h-[660px]"
        />
      </div>
    </section>
  );
}
