"use client";

import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/ProjectCard";
import { professionalProjects } from "../static";

const ProfessionalProjectSection = () => {
  const { ref } = useInView({
    threshold: 1,
    onChange(inView, entry) {
      if (inView) {
        console.log(entry.target.id);
      }
    },
  });

  return (
    <section
      id="professional-project"
      ref={ref}
      className="flex flex-col gap-20 mb-24"
    >
      {professionalProjects.map((professionalProject) => (
        <ProjectCard
          key={professionalProject.id}
          professionalProject={professionalProject}
        />
      ))}
    </section>
  );
};

export default ProfessionalProjectSection;
