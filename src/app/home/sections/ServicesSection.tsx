"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import { services } from "../static";
import { ui } from "../static/ui";

const ServicesSection = () => {
  const { ref } = useInView({
    threshold: 1,
  });
  const [openId, setOpenId] = useState<number | null>(services[0].id);

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

      <div className="rounded-3xl overflow-hidden border border-[rgb(from_#98b7d4_r_g_b_/_.15)] bg-[rgb(from_#98b7d4_r_g_b_/_.04)] divide-y divide-[rgb(from_#98b7d4_r_g_b_/_.15)]">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.08}>
            <ServiceCard
              service={service}
              open={openId === service.id}
              onToggle={() =>
                setOpenId(openId === service.id ? null : service.id)
              }
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
