"use client";

import { useInView } from "react-intersection-observer";
import { ui } from "../static/ui";
import Reveal from "../components/Reveal";

const AboutSection = () => {
  const { ref } = useInView({
    threshold: 1,
  });

  return (
    <section id="about" ref={ref} className="mb-24">
      <Reveal className="flex flex-col gap-4">
        <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] text-justify">
          {ui.about.paragraph1}
        </p>

        <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] text-justify">
          {ui.about.paragraph2}
        </p>
      </Reveal>
    </section>
  );
};

export default AboutSection;
