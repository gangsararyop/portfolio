"use client";

// import Link from "next/link";
import { useInView } from "react-intersection-observer";
// import { Icon } from "@iconify/react";
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

      {/* <Link href="/static/cv_gangsar_aryo.pdf" download="CV Gangsar Aryo.pdf">
        <div className="group flex flex-row items-center gap-1 cursor-pointer">
          <p className="text-lg font-medium transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]">
            View Resume
          </p>

          <Icon
            icon="heroicons:arrow-up-right-20-solid"
            className="size-4 relative left-0 top-0 transition-[top,left] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4] group-hover:-top-1 group-hover:left-1"
          />
        </div>
      </Link> */}
    </section>
  );
};

export default ExperienceSection;
