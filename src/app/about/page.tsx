"use client";

import { Container } from "@/components/Container";
import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";

export default function AboutPage() {
  return (
    <>
      <div className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Top Cut Tree Felling</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A owner-operated business with over 4 years of experience in professional tree services.
              </p>
            </div>
            
            <div className="mb-16">
              <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/Our Story.png"
                  alt="Our Story - Top Cut Tree Felling"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/30 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h2 className="text-white text-3xl md:text-4xl font-bold">Our Story</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Top Cut Tree Felling was founded in 2008 with a simple mission: to provide professional, reliable, and safe tree services to homeowners and businesses throughout South Africa. What started as a small family operation has grown into a trusted name in the industry, but we&apos;ve never lost our commitment to personalized service and quality workmanship.
                </p>
                
                <p>
                  As a family-owned business, we take great pride in our work and it shows in everything we do. From the initial consultation to the final cleanup, we approach each project with dedication, expertise, and attention to detail. Our owner is always on-site to ensure that every job meets our high standards.
                </p>
                
                <h3>Our Expertise</h3>
                
                <p>
                  With over 4 years of experience in the field, our team has developed specialized knowledge in all aspects of tree care, including:
                </p>
                
                <ul>
                  <li>Safe and efficient tree felling of all sizes</li>
                  <li>Expert tree trimming and pruning</li>
                  <li>Complete stump removal</li>
                  <li>Palm tree maintenance</li>
                  <li>Emergency tree services</li>
                </ul>
                
                <p>
                  We&apos;ve worked on properties of all sizes, from small residential yards to large commercial sites, and we bring the same level of professionalism and care to every project.
                </p>
                
                <h3>Our Commitment to Safety</h3>
                
                <p>
                  Tree work can be dangerous, which is why safety is our top priority. Our team is fully trained and equipped with the latest safety gear and equipment. We&apos;re also fully insured, providing peace of mind for our clients.
                </p>
                
                <p>
                  We take the time to assess each situation carefully, identifying potential hazards and developing a plan that ensures the safety of our team, our clients, and their property.
                </p>
                
                <h3>Environmental Responsibility</h3>
                
                <p>
                  As tree care professionals, we have a deep respect for the environment. We implement sustainable practices in all our operations, from proper disposal of tree waste to recommending tree care solutions that promote long-term health and growth.
                </p>
                
                <p>
                  When tree removal is necessary, we work with our clients to explore options for replacement plantings that will thrive in their specific environment.
                </p>
              </div>
            </div>
            
            <div className="bg-green-light p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-bold mb-4 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary)]"></div>
                  </div>
                  <h3 className="font-bold text-lg">John Rademeyer</h3>
                  <p className="text-gray-600">Founder & Lead Arborist</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary)]"></div>
                  </div>
                  <h3 className="font-bold text-lg">Sarah Rademeyer</h3>
                  <p className="text-gray-600">Operations Manager</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary)]"></div>
                  </div>
                  <h3 className="font-bold text-lg">Michael Johnson</h3>
                  <p className="text-gray-600">Senior Tree Specialist</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today to schedule a consultation or request a free quote for your tree service needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn-primary">
                  Contact Us
                </a>
                <a href="/quote" className="btn-secondary">
                  Get a Free Quote
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
