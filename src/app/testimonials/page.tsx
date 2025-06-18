"use client";

import { Container } from "@/components/Container";
import { CallToAction } from "@/components/CallToAction";
import { IconQuote, IconStar, IconStarFilled } from "@tabler/icons-react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    location: "Johannesburg",
    rating: 5,
    date: "March 15, 2023",
    quote: "Top Cut Tree Felling did an amazing job removing a large oak tree from my property. The team was professional, efficient, and left my yard cleaner than when they arrived. I was particularly impressed with how they handled the safety aspects of the job. Highly recommended!",
    service: "Tree Removal",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Pretoria",
    rating: 5,
    date: "February 3, 2023",
    quote: "I&apos;ve used Top Cut for tree trimming services multiple times, and they never disappoint. Their attention to detail and knowledge about tree care is impressive. The owner is always on-site to ensure quality work, which makes a big difference. My garden looks fantastic after their visit.",
    service: "Tree Trimming",
  },
  {
    id: 3,
    name: "Michael Brown",
    location: "Cape Town",
    rating: 5,
    date: "April 22, 2023",
    quote: "After a storm damaged several trees on my property, Top Cut came to the rescue with their emergency services. They responded quickly, worked safely, and their prices were very reasonable. They even helped with the insurance paperwork. I couldn&apos;t ask for better service.",
    service: "Emergency Tree Services",
  },
  {
    id: 4,
    name: "Emily Davis",
    location: "Durban",
    rating: 5,
    date: "January 17, 2023",
    quote: "The team at Top Cut Tree Felling are true professionals. They removed a difficult tree that was dangerously close to my house with precision and care. I couldn&apos;t be happier with their service. They took the time to explain the process and answered all my questions.",
    service: "Tree Felling",
  },
  {
    id: 5,
    name: "David Wilson",
    location: "Bloemfontein",
    rating: 4,
    date: "May 9, 2023",
    quote: "I hired Top Cut to remove several stumps from my garden. They were prompt, professional, and did a thorough job. The only reason I&apos;m giving 4 stars instead of 5 is that they had to reschedule once, but they communicated well about it. Would definitely use their services again.",
    service: "Stump Removal",
  },
  {
    id: 6,
    name: "Linda Thompson",
    location: "Port Elizabeth",
    rating: 5,
    date: "June 14, 2023",
    quote: "I was very impressed with the palm tree maintenance service from Top Cut. They cleaned up all the dead fronds and shaped the trees beautifully. The crew was friendly and knowledgeable, and they worked efficiently. My palm trees have never looked better!",
    service: "Palm Tree Maintenance",
  },
  {
    id: 7,
    name: "Robert Anderson",
    location: "Johannesburg",
    rating: 5,
    date: "July 2, 2023",
    quote: "Top Cut provided excellent service from start to finish. They gave me a fair quote, arrived on time, and completed the job with great skill. They removed three large trees that were threatening my roof, and I was amazed at how carefully they worked to avoid any damage to my property.",
    service: "Tree Removal",
  },
  {
    id: 8,
    name: "Jennifer Clark",
    location: "Pretoria",
    rating: 5,
    date: "August 11, 2023",
    quote: "I&apos;ve been using Top Cut for all my tree care needs for the past three years, and I&apos;ve always been completely satisfied. They&apos;re reliable, professional, and their prices are fair. The owner&apos;s presence on every job ensures quality work. I wouldn&apos;t trust anyone else with my trees.",
    service: "Regular Tree Maintenance",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <div className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our tree services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        i < testimonial.rating ? (
                          <IconStarFilled key={i} size={18} className="text-yellow-500" />
                        ) : (
                          <IconStar key={i} size={18} className="text-gray-300" />
                        )
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <IconQuote size={24} className="text-primary/20 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                    <span>Service: {testimonial.service}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-green-light p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Experience Our Service?</h2>
              <p className="text-gray-600 mb-6">
                Join our growing list of satisfied customers. Contact us today for a free quote on your tree service needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/quote" className="btn-primary">
                  Get a Free Quote
                </a>
                <a href="/contact" className="btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <CallToAction />
    </>
  );
} 