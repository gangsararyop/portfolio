"use client";

import { useInView } from "react-intersection-observer";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import { services } from "../static";
import { ui } from "../static/ui";

const ServicesSection = () => {
  const { ref } = useInView({
    threshold: 1,
  });

  return (
    <section id="services" ref={ref} className="mb-24">
      <Reveal>
        <h2 className="text-2xl md:text-[32px] text-[#e1ecf3] font-bold mb-2">
          {ui.services.heading}
        </h2>

        <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-8 max-w-[560px]">
          {ui.services.subheading}
        </p>
      </Reveal>

      <div className="flex flex-col gap-5">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.08}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
