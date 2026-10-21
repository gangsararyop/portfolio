"use client";

import { useInView } from "react-intersection-observer";
import ExperienceCard from "../components/ExperienceCard";
import Reveal from "../components/Reveal";
import { experiences } from "../static";
import { ui } from "../static/ui";

const ExperienceSection = () => {
  const { ref } = useInView({
    threshold: 1,
    onChange(inView, entry) {
      if (inView) {
        console.log(entry.target.id);
      }
    },
  });

  return (
    <section id="experience" ref={ref} className="mb-24">
      <Reveal>
        <h2 className="text-2xl md:text-[32px] text-[#e1ecf3] font-bold mb-2">
          {ui.experience.heading}
        </h2>

        <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-12 max-w-[560px]">
          {ui.experience.subheading}
        </p>
      </Reveal>

      <div className="flex flex-col gap-8 mb-12">
        {experiences.map((experience, index) => (
          <Reveal key={experience.id} delay={index * 0.08}>
            <ExperienceCard experience={experience} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
