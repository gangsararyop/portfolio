"use client";

import { useInView } from "react-intersection-observer";
import PersonalProject from "../components/PersonalProject";
import { personalProjects } from "../static";

const PersonalProjectSection = () => {
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
      id="personal-project"
      ref={ref}
      className="flex flex-col gap-10 mb-24"
    >
      {personalProjects.map((personalProject) => (
        <PersonalProject
          key={personalProject.id}
          personalProject={personalProject}
        />
      ))}
    </section>
  );
};

export default PersonalProjectSection;
