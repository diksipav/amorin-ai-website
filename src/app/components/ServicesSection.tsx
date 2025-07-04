import React from "react";
import ScrollRevealText from "./ScrollRevealText";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "AI Chatbots",
      description:
        "Smart conversational agents that handle customer support, lead generation, and user engagement with natural language processing and contextual understanding.",
    },
    {
      number: "02",
      title: "Voice Agents",
      description:
        "Advanced voice-powered assistants for phone support, appointment scheduling, and interactive voice response systems that sound natural and helpful.",
    },
    {
      number: "03",
      title: "Workflow Automation",
      description:
        "Intelligent process automation that streamlines repetitive tasks, manages data flows, and optimizes business operations with AI-driven decision making.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-text" id="works">
      <div className="max-w-7xl mx-auto">
        <ScrollRevealText className="text-center mb-20">
          <p className="text-base tracking-[0.2em] text-gray700 mb-8">
            [OUR SERVICES]
          </p>
        </ScrollRevealText>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
