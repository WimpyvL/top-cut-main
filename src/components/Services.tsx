"use client";

import { Container } from "./Container";
import Link from "next/link";
import { IconTree, IconScissors, IconWood, IconAlertTriangle, IconPlant2, IconLeaf, IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "tree-felling",
    title: "Tree Felling",
    description: "Safe and professional tree felling services for trees of all sizes. We ensure minimal disruption to your property.",
    icon: IconTree,
    color: "bg-[var(--primary)]",
    benefits: ["Fully insured service", "Experienced team", "Property protection"]
  },
  {
    id: "tree-trimming",
    title: "Tree Trimming",
    description: "Expert tree trimming and pruning to maintain tree health, improve appearance, and prevent potential hazards.",
    icon: IconScissors,
    color: "bg-[var(--primary-light)]",
    benefits: ["Improves tree health", "Enhances appearance", "Prevents hazards"]
  },
  {
    id: "stump-removal",
    title: "Stump Removal",
    description: "Complete stump removal services to clear your property of unsightly tree stumps and prevent regrowth.",
    icon: IconWood,
    color: "bg-[var(--primary-dark)]",
    benefits: ["Prevents regrowth", "Improves aesthetics", "Eliminates pests"]
  },
  {
    id: "emergency-services",
    title: "Emergency Services",
    description: "24/7 emergency tree services for storm damage, fallen trees, or any urgent tree-related situations.",
    icon: IconAlertTriangle,
    color: "bg-[var(--accent)]",
    benefits: ["24/7 availability", "Rapid response", "Damage mitigation"]
  },
  {
    id: "palm-tree-maintenance",
    title: "Palm Tree Maintenance",
    description: "Specialized palm tree trimming, cleaning, and maintenance services to keep your palms healthy and beautiful.",
    icon: IconPlant2,
    color: "bg-[var(--accent-dark)]",
    benefits: ["Specialized equipment", "Expert knowledge", "Aesthetic enhancement"]
  },
  {
    id: "eco-friendly-practices",
    title: "Eco-Friendly Practices",
    description: "Environmentally conscious tree services with responsible disposal and recycling of all tree waste materials.",
    icon: IconLeaf,
    color: "bg-[var(--earth-brown)]",
    benefits: ["Waste recycling", "Sustainable methods", "Minimal footprint"]
  }
];

export function Services() {
  return (
    <section className="section-earth" id="services">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-[var(--primary)] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-dark)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Tree Services
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a comprehensive range of tree services to meet all your needs, 
            from routine maintenance to emergency situations. Our expert team ensures 
            quality work with safety as our top priority.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="card hover-grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`${service.color} p-6 flex justify-center items-center`}>
                <service.icon className="h-16 w-16 text-white" stroke={1.5} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[var(--primary-dark)]">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Benefits List */}
                <ul className="mb-6 space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <IconCheck className="h-5 w-5 text-[var(--success)] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/services#${service.id}`} 
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium inline-flex items-center focus-visible"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
          <p className="mt-4 text-sm text-gray-600">Free consultation and no-obligation quotes available</p>
        </motion.div>
      </Container>
    </section>
  );
} 