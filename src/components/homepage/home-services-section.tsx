import React from "react";
import HeadingStyle from "../ui/heading-style";

export default function HomeServicesSection() {
  return (
    <section className="services">
      <div className="">
        <div className="">
          <HeadingStyle>
            Atlanta, GA Personal Injury <br /> Law Services
          </HeadingStyle>
          <p className="text-center  text-red-600 text-xl">
            Flack Injury <span className="font-bold">Law Practice Areas</span>
          </p>
          <div className="w-1/3 h-1 bg-red-600/10 mx-auto my-6 rounded-full shadow-lg"></div>
          <p className="px-20 text-center pb-10">
            The Flack Injury Blog contains information about personal injury law
            in Atlanta and the State of Georgia. We specialize in Truck
            Accidents, Slip and Falls, Medical Transport, and other cases
            throughout the City of Atlanta and state of Georgia.
          </p>
        </div>
        <div className="grid md:grid-rows-2 md:grid-cols-3 gap-8 px-4">
          <div className="flex flex-col justify-evenly bg-gradient-to-r from-slate-50 via-gray-50 to-zinc-50  border border-black/10 p-4 shadow-md rounded-lg hover:scale-105 transition-all hover:shadow-xl">
            <h3 className="font-bold text-lg">
              Tractor Trailer Wrecks, Trucking Accidents, and Commercial Vehicle
              Collisions
            </h3>
            <p className="text-md">
              If you’ve been injured by a commercial motor vehicle, you need an
              attorney who understands the applicable federal regulations and
              unique complexities of these cases. Attorney Jonathan Flack has
              years of experience working on trucking cases, and he is ready to
              begin fighting for you!
            </p>
          </div>
          <div className="flex flex-col justify-evenly bg-gradient-to-br from-stone-50 via-neutral-50 to-zinc-50 border border-black/10 p-4 shadow-md rounded-lg hover:scale-105 transition-all hover:shadow-xl">
            <h3 className="font-bold text-xl">
              Non-Emergency Medical Transport Collisions and Injuries
            </h3>
            <p>
              If you’ve been injured in a non-emergency medical transport van,
              Flack Injury Law is here to help. Whether the injury arose from
              improper securing of a wheelchair, improper belting, or reckless
              driving, we know how to maximize your compensation.
            </p>
          </div>
          <div className="flex flex-col justify-evenly  border border-black/10 p-4 shadow-md rounded-lg hover:scale-105 transition-all hover:shadow-xl">
            <h3 className="font-bold text-xl">
              Inadequate Security, Premises Liability, and Crime Victims
            </h3>
            <p>
              If you’ve been a victim of a crime at a business establishment,
              you may be entitled to recover compensation from the property
              owner through a claim of inadequate or negligent security. Give us
              a call to discuss your case.
            </p>
          </div>
          <div className="border border-black/10 p-4 shadow-md rounded-lg hover:scale-105 transition-all hover:shadow-xl">
            <h3 className="font-bold text-lg">
              Tractor Trailer Wrecks, Trucking Accidents, and Commercial Vehicle
              Collisions
            </h3>
            <p className="text-md">
              If you’ve been injured by a commercial motor vehicle, you need an
              attorney who understands the applicable federal regulations and
              unique complexities of these cases. Attorney Jonathan Flack has
              years of experience working on trucking cases, and he is ready to
              begin fighting for you!
            </p>
          </div>
          <div className=" border border-black/10 p-4 shadow-md rounded-lg hover:scale-105 transition-all hover:shadow-xl">
            <h3 className="font-bold text-xl">
              Non-Emergency Medical Transport Collisions and Injuries
            </h3>
            <p>
              If you’ve been injured in a non-emergency medical transport van,
              Flack Injury Law is here to help. Whether the injury arose from
              improper securing of a wheelchair, improper belting, or reckless
              driving, we know how to maximize your compensation.
            </p>
          </div>
          <div className=" border border-black/10 p-4 shadow-md rounded-lg hover:scale-105 transition-all hover:shadow-xl">
            <h3 className="font-bold text-xl">
              Inadequate Security, Premises Liability, and Crime Victims
            </h3>
            <p>
              If you’ve been a victim of a crime at a business establishment,
              you may be entitled to recover compensation from the property
              owner through a claim of inadequate or negligent security. Give us
              a call to discuss your case.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
