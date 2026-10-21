"use client";

import { FC } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { IService } from "../static";
import SkillChip from "./SkillChip";

interface ServiceCardProps {
  service: IService;
  open: boolean;
  onToggle: () => void;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, open, onToggle }) => {
  const { id, title, tagline, description, deliverables } = service;
  const panelId = `service-panel-${id}`;

  return (
    <div>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#98b7d4] transition-colors duration-150 hover:bg-[rgb(from_#98b7d4_r_g_b_/_.06)]"
        >
          <span>
            <span className="block text-xl leading-7 font-semibold text-[#e1ecf3] mb-1">
              {title}
            </span>

            <span className="block font-medium text-transparent bg-clip-text [background-image:linear-gradient(120deg,_#98b7d4,_#bb795a)]">
              {tagline}
            </span>
          </span>

          <Icon
            icon="heroicons:chevron-down-20-solid"
            className={`size-6 shrink-0 mt-0.5 text-[#98b7d4] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-sm leading-6 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-4">
                {description}
              </p>

              <div className="flex flex-row gap-1.5 items-center flex-wrap">
                {deliverables.map((item) => (
                  <SkillChip key={item} label={item} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceCard;
