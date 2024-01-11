import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeCarousel() {
  // Dummy testimonials data
  const testimonials = [
    "“I was rear-ended by a vehicle last year while pulling my work trailer. I had personal injury, personal and business property damage. Jonathan Flack and his team continued taking my calls and answering my questions over 6 months until the accident was settled. Because of his guidance, I was able to receive a larger amount of settlement. I can&#39;t say enough about how they always treated me like a person (not a number) and how they went the extra mile to take care of me and my situation. I would use them over and over again. It&#39;s hard to find a team like this that is personable, professional, knowledgeable and honest! Matt S.",
    "Absolutely fantastic! Highly recommend.",
    "Great experience from start to finish.",
    "Exceptional quality and outstanding customer service.",
    "I'm so happy with the product and service received!",
  ];

  return (
    <>
      <div className="text-center">
        <h2>Testimonials / Reviews</h2>
      </div>
      <section className="flex flex-col justify-center items-center py-20">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-3xl px-4"
        >
          <CarouselContent className="-mt-1 h-[300px]">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-md">{testimonial}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
