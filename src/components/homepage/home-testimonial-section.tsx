import { featuredTestimonial, testimonials } from "@/constants/testimonials";
import HeadingStyle from "../ui/heading-style";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeTestimonialsSection() {
  return (
    <div className="relative isolate bg-zinc-50 pb-20  pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-4">
        <HeadingStyle>
          Flack Personal Injury Law, <br /> Atlanta Client Testimonials
        </HeadingStyle>
        <p className="text-center  text-red-600 text-xl font-bold">Resources</p>
        <div className="w-1/3 h-1 bg-red-600/10 mx-auto my-6 rounded-full shadow-lg"></div>
        <p className="lg:px-20">
          The Flack Injury Blog contains information about personal injury law
          in Atlanta and the State of Georgia. We specialize in Truck Accidents,
          Slip and Falls, Medical Transport, and other cases throughout the City
          of Atlanta and state of Georgia.
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.name}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
