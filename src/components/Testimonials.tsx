"use client";

import { Container } from "./Container";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight, IconQuote, IconStar, IconStarFilled } from "@tabler/icons-react";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/constants/urls";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    location: "Johannesburg",
    quote: "Top Cut Tree Felling did an amazing job removing a large oak tree from my property. The team was professional, efficient, and left my yard cleaner than when they arrived. Highly recommended!",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    service: "Tree Removal"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Pretoria",
    quote: "I&apos;ve used Top Cut for tree trimming services multiple times, and they never disappoint. Their attention to detail and knowledge about tree care is impressive. The owner is always on-site to ensure quality work.",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    service: "Tree Trimming"
  },
  {
    id: 3,
    name: "Michael Brown",
    location: "Cape Town",
    quote: "After a storm damaged several trees on my property, Top Cut came to the rescue with their emergency services. They responded quickly, worked safely, and their prices were very reasonable.",
    image: "/images/testimonial-3.jpg",
    rating: 5,
    service: "Emergency Services"
  },
  {
    id: 4,
    name: "Emily Davis",
    location: "Durban",
    quote: "The team at Top Cut Tree Felling are true professionals. They removed a difficult tree that was dangerously close to my house with precision and care. I couldn&apos;t be happier with their service.",
    image: "/images/testimonial-4.jpg",
    rating: 5,
    service: "Tree Felling"
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      i < rating 
        ? <IconStarFilled key={i} className="text-[var(--accent)] w-5 h-5" /> 
        : <IconStar key={i} className="text-gray-300 w-5 h-5" />
    ));
  };
  
  return (
    <section className="section bg-green-light">
      <Container>
        <div className="text-center mb-12">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-[var(--accent)] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Testimonials</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-dark)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our tree services.
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    className="testimonial-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-[var(--accent)]">
                        <IconQuote size={48} stroke={1} />
                      </div>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-lg text-[var(--primary-dark)]">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="bg-[var(--primary-light)] bg-opacity-20 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-[var(--primary-dark)]">{testimonial.service}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none z-10 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-all focus-visible"
            aria-label="Previous testimonial"
          >
            <IconChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white p-3 rounded-full shadow-md hover:shadow-lg focus:outline-none z-10 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-all focus-visible"
            aria-label="Next testimonial"
          >
            <IconChevronRight size={24} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all focus-visible ${
                  index === activeIndex ? 'bg-[var(--primary)] w-8' : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Read More Reviews
          </a>
        </motion.div>
      </Container>
    </section>
  );
} 