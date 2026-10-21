"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import SkillChip from "./SkillChip";
import { IClientProject, IClientWork } from "../static";
import { ui } from "../static/ui";
import { FC, useState } from "react";
import Link from "next/link";

const VISIBLE_PROJECTS = 2;

interface ProjectCardProps {
  work: IClientWork;
}

const ProjectItem: FC<{ project: IClientProject }> = ({ project }) => {
  const { title, description, websiteURL } = project;

  return (
    <li className="py-4">
      <div className="flex flex-row items-center gap-2 mb-1">
        {websiteURL ? (
          <Link
            href={websiteURL}
            target="_blank"
            className="group flex flex-row items-center gap-1"
          >
            <h4 className="text-lg leading-7 font-semibold transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]">
              {title}
            </h4>
            <Icon
              icon="heroicons:arrow-up-right-20-solid"
              className="size-5 relative left-0 top-0 transition-[top,left] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4] group-hover:-top-0.5 group-hover:left-0.5"
            />
          </Link>
        ) : (
          <h4 className="text-lg leading-7 font-semibold text-[#e1ecf3]">
            {title}
          </h4>
        )}
      </div>

      <p className="text-sm leading-6 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">
        {description}
      </p>
    </li>
  );
};

const ProjectCard: FC<ProjectCardProps> = ({ work }) => {
  const { id, client, image, stacks, projects } = work;
  const [expanded, setExpanded] = useState(false);
  const visible = projects.slice(0, VISIBLE_PROJECTS);
  const hidden = projects.slice(VISIBLE_PROJECTS);
  const hiddenId = `client-projects-${id}`;

  return (
    <div>
      <div className="flex flex-row items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl leading-tight font-semibold text-[#e1ecf3] mb-4">
            {client}
          </h3>

          <div className="flex flex-row gap-1.5 items-center flex-wrap">
            {stacks.map((stack) => (
              <SkillChip key={stack} label={stack} />
            ))}
          </div>
        </div>

        {image && (
          <div className="relative w-28 sm:w-40 lg:w-48 shrink-0 aspect-[16_/_9] rounded-2xl overflow-hidden border border-[rgb(from_#98b7d4_r_g_b_/_.15)]">
            <Image
              alt={client}
              src={image}
              fill
              sizes="(min-width: 1024px) 192px, (min-width: 640px) 160px, 112px"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>

      <ul className="divide-y divide-[rgb(from_#98b7d4_r_g_b_/_.15)]">
        {visible.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>

      {hidden.length > 0 && (
        <>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={hiddenId}
                key="hidden-projects"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <ul className="border-t divide-y border-[rgb(from_#98b7d4_r_g_b_/_.15)] divide-[rgb(from_#98b7d4_r_g_b_/_.15)]">
                  {hidden.map((project) => (
                    <ProjectItem key={project.title} project={project} />
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={hiddenId}
            onClick={() => setExpanded(!expanded)}
            className="flex flex-row items-center gap-1 mt-2 text-sm font-medium cursor-pointer rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#98b7d4] transition-[color] duration-150 text-[#98b7d4] hover:text-[#e1ecf3]"
          >
            {expanded
              ? ui.projectCard.viewLess
              : `${ui.projectCard.viewMore} (+${hidden.length})`}
            <Icon
              icon="heroicons:chevron-down-20-solid"
              className={`size-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
