"use client";

import { useInView } from "react-intersection-observer";

const AboutSection = () => {
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
      id="about"
      ref={ref}
      className="flex flex-col gap-4 mb-24 xl:flex-row xl:gap-8"
    >
      <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] text-justify">
        Full Stack Web Developer with a proven track record of building and
        maintaining modern web applications. Built and maintained full-stack web
        applications using widely adopted web technologies, contributing to
        projects from database design to user interface development. Passionate
        about writing clean, maintainable code and delivering scalable
        solutions. Adept at working in cross-functional teams, and contributing
        to realworld, production-ready systems.
      </p>

      {/* <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        repellat dolorum quis ea. Omnis vel blanditiis saepe enim labore,
        debitis magni unde ad sint facilis aut ab quo molestiae deserunt?
      </p> */}
    </section>
  );
};

export default AboutSection;
