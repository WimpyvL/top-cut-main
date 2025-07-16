"use client";

import { Container } from "@/components/Container";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { IconTree, IconScissors, IconWood, IconAlertTriangle, IconPlant2, IconTruck } from "@tabler/icons-react";

const services = [
  {
    id: "tree-felling",
    title: "Tree Felling",
    description: "Safe and professional tree felling services for trees of all sizes. We ensure minimal disruption to your property and complete cleanup after the job is done.",
    icon: IconTree,
    color: "bg-[var(--primary-dark)]",
    features: [
      "Complete tree removal",
      "Sectional dismantling for confined spaces",
      "Hazardous tree removal",
      "Cleanup and waste removal",
      "Site restoration"
    ]
  },
  {
    id: "tree-trimming",
    title: "Tree Trimming & Pruning",
    description: "Expert tree trimming and pruning to maintain tree health, improve appearance, and prevent potential hazards. Our skilled arborists know exactly how to shape your trees for optimal growth.",
    icon: IconScissors,
    color: "bg-[var(--primary)]",
    features: [
      "Crown thinning and reduction",
      "Deadwood removal",
      "Vista pruning",
      "Structural pruning",
      "Fruit tree pruning"
    ]
  },
  {
    id: "high-risk-tree-felling",
    title: "High Risk Tree Felling",
    description: "Specialized removal of dangerous or hard-to-access trees near structures, power lines, or confined spaces. Our team uses advanced techniques and equipment to ensure safety and precision.",
    icon: IconWood,
    color: "bg-[var(--primary-light)]",
    features: [
      "Removal of hazardous trees",
      "Work near power lines or buildings",
      "Advanced rigging and climbing",
      "Confined space removals",
      "Safety-focused operations"
    ]
  },
  {
    id: "emergency-services",
    title: "Emergency Tree Services",
    description: "24/7 emergency tree services for storm damage, fallen trees, or any urgent tree-related situations. We respond quickly to minimize damage and ensure safety.",
    icon: IconAlertTriangle,
    color: "bg-[var(--accent)]",
    features: [
      "Rapid response team",
      "Fallen tree removal",
      "Storm damage cleanup",
      "Hazard assessment",
      "Insurance claim assistance"
    ]
  },
  {
    id: "palm-tree-maintenance",
    title: "Palm Tree Maintenance",
    description: "Specialized palm tree trimming, cleaning, and maintenance services to keep your palms healthy and beautiful. Our team has specific expertise in palm tree care.",
    icon: IconPlant2,
    color: "bg-[var(--accent-dark)]",
    features: [
      "Palm trimming and skinning",
      "Dead frond removal",
      "Disease treatment",
      "Fertilization",
      "Palm tree removal"
    ]
  },
  {
    id: "waste-removal",
    title: "Green Waste Removal",
    description: "Efficient removal and responsible disposal of all tree-related waste. We ensure your property is left clean and tidy after any tree service.",
    icon: IconTruck,
    color: "bg-[var(--primary)]",
    features: [
      "Branch and log removal",
      "Mulching services",
      "Eco-friendly disposal",
      "Recycling of wood waste",
      "Site cleanup"
    ]
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Tree Services</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of tree services to meet all your needs. Our experienced team ensures safe, efficient, and professional service every time.
              </p>
            </div>
            
            <div className="space-y-16">
              {services.map((service) => (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className={`${service.color} p-6`}>
                      <div className="flex items-center">
                        <service.icon size={48} className="text-white mr-4" />
                        <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <h3 className="font-bold text-lg mb-4">What We Offer:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/quote" className="btn-primary">
                          Get a Quote
                        </Link>
                        <Link href="/contact" className="btn-secondary">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-green-light p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Custom Tree Services</h2>
              <p className="text-gray-600 text-center mb-6">
                Don&apos;t see exactly what you need? We offer customized tree services tailored to your specific requirements. Contact us to discuss your project.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="btn-primary">
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <CallToAction />
    </>
  );
} 