import Image from "next/image";
import React from "react";

export default function MainHero() {
  return (
    <section className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto ">
      <div className="flex flex-col justify-center py-4 px-4 basis-2/3 space-y-3 md:pr-12">
        <h1 className="font-bold tracking-wide">Flack Injury Law</h1>
        <button className="bg-slate-100 w-3/4 rounded-xl p-2">
          <span className="text-xl"> You Pay Nothing Unless We Win</span>
          <br />
          <span className="font-bold">Call Now: 678-653-0309</span>
        </button>
        <h2 className="text-5xl font-bold tracking-wide">
          Atlanta, Georgia Personal Injury <br /> Law Firm
        </h2>
        <p className="">
          Flack Injury Law specializes in maximizing financial compensation for
          injured individuals in Georgia. We are experts in obtaining the
          largest settlements and verdicts as fast as possible for our clients.
          We are responsive — our clients can actually call and speak to their
          attorney on the phone. And we are hardworking: we work tirelessly to
          get our clients the compensation they deserve!
        </p>
        <div className="flex basis-1/4 gap-8 flex-wrap">
          <button className="shrink bg-red-600 text-white rounded-lg py-2 px-4">
            Free Case Evaluation
          </button>
          <button className="bg-slate-900 text-white rounded-lg py-2 px-4">
            Personal Attention, Maximum Compensation →
          </button>
        </div>
      </div>
      <div className="flex basis-1/4 md:basis-1/2">
        <Image
          alt="flack injury hero"
          src="/hero.jpeg"
          width={1066}
          height={1600}
          className="object-cover"
        />
      </div>
    </section>
  );
}
