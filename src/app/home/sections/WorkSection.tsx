"use client";

import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { professionalProjects } from "../static";
import { ui } from "../static/ui";

const WorkSection = () => {
  const { ref } = useInView({
    threshold: 1,
  });

  return (
    <section id="work" ref={ref} className="mb-24">
      <Reveal>
        <h2 className="text-2xl md:text-[32px] text-[#e1ecf3] font-bold mb-2">
          {ui.work.heading}
        </h2>

        <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-12 max-w-[560px]">
          {ui.work.subheading}
        </p>
      </Reveal>

      <div className="flex flex-col gap-20">
        {professionalProjects.map((professionalProject) => (
          <Reveal key={professionalProject.id}>
            <ProjectCard professionalProject={professionalProject} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
