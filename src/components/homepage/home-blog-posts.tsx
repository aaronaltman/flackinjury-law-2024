import React from "react";

export default function HomeBlogPosts() {
  return (
    <section className="max-w-6xl mx-auto py-10">
      <div className="">
        <h2 className="text-center font-bold text-xl md:text-5xl pt-14 pb-4">
          Atlanta, GA Personal Injury
          <br /> Law Resources
        </h2>
        <p className="text-center  text-red-600 text-xl font-bold">Resources</p>
        <div className="w-1/3 h-1 bg-red-600/10 mx-auto my-6 rounded-full shadow-lg"></div>
        <p className="px-20 text-center pb-10">
          The Flack Injury Blog contains information about personal injury law
          in Atlanta and the State of Georgia. We specialize in Truck Accidents,
          Slip and Falls, Medical Transport, and other cases throughout the City
          of Atlanta and state of Georgia.
        </p>
      </div>

      <div className="flex flex-col px-20 space-y-10">
        <div className="flex flex-col justify-around md:flex-row flex-wrap space-y-6 md:space-y-0">
          <p className="border border-black/10 p-4 rounded-lg">Blog post 1</p>
          <p className="border border-black/10 p-4 rounded-lg">Blog post 1</p>
          <p className="border border-black/10 p-4 rounded-lg">Blog post 1</p>
        </div>
        <div className="flex flex-col justify-around md:flex-row flex-wrap">
          <p className="border border-black/10 p-4 rounded-lg">Blog post 1</p>
          <p className="border border-black/10 p-4">Blog post 1</p>
          <p className="border border-black/10 p-4">Blog post 1</p>
        </div>
      </div>
    </section>
  );
}
