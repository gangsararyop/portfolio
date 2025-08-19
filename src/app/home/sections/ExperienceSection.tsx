"use client";

// import Link from "next/link";
import { useInView } from "react-intersection-observer";
// import IconArrowUpRight from "@/app/assets/IconArrowUpRight";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../static";

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
      <div className="flex flex-col gap-8 mb-12">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>

      {/* <Link href="/static/cv_gangsar_aryo.pdf" download="CV Gangsar Aryo.pdf">
        <div className="group flex flex-row items-center gap-1 cursor-pointer">
          <p className="text-lg font-medium transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]">
            View Resume
          </p>

          <div className="size-4 relative left-0 top-0 transition-[top,left] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4] group-hover:-top-1 group-hover:left-1">
            <IconArrowUpRight />
          </div>
        </div>
      </Link> */}
    </section>
  );
};

export default ExperienceSection;
