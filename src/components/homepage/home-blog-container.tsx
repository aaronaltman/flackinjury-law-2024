import React from "react";
import HeadingStyle from "../ui/heading-style";
import HomeBlogList from "./home-blog-list";

export default function HomeBlogSection() {
  return (
    <section className="mt-10">
      <div className="">
        <HeadingStyle>
          Atlanta, GA Personal Injury <br /> Law Resources
        </HeadingStyle>
        <p className="text-center  text-red-600 text-xl font-bold">Resources</p>
        <div className="w-1/3 h-1 bg-red-600/10 mx-auto my-6 rounded-full shadow-lg"></div>
        <p className="px-20 text-center pb-10">
          The Flack Injury Blog contains information about personal injury law
          in Atlanta and the State of Georgia. We specialize in Truck Accidents,
          Slip and Falls, Medical Transport, and other cases throughout the City
          of Atlanta and state of Georgia.
        </p>
        <HomeBlogList />
      </div>
    </section>
  );
}
