import React from "react";
import HeadingStyle from "../ui/heading-style";
import { services } from "@/constants/services-section";

type Service = {
  title: string;
  description: string;
};

export default function HomeServicesSection() {
  return (
    <section className="services">
      <div className="">
        <div className="">
          <HeadingStyle>
            Atlanta, GA Personal Injury <br /> Law Services
          </HeadingStyle>
          <p className="px-4 md:text-center text-red-600 text-xl">
            Flack Injury <span className="font-bold">Law Practice Areas</span>
          </p>
          <div className="w-1/3 h-1 bg-red-600/10 ml-4 md:mx-auto my-6 rounded-full shadow-lg"></div>
          <p className="px-4 md:px-20 md:text-center pb-10 text-lg">
            The Flack Injury Blog contains information about personal injury law
            in Atlanta and the State of Georgia. We specialize in Truck
            Accidents, Slip and Falls, Medical Transport, and other cases
            throughout the City of Atlanta and state of Georgia.
          </p>
        </div>
        <div className="px-4">
          {services.map((service: Service) => (
            <section className="md:max-w-3xl md:mx-auto">
              <div className="flex flex-col justify-evenly bg-gradient-to-br from-stone-50 via-neutral-50 to-zinc-50 border border-black/10 p-4 my-3 shadow-md rounded-lg hover:scale-105 transition-all hover:shadow-xl">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
