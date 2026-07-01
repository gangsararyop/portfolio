import { FC } from "react";
import { IService } from "../static";
import SkillChip from "./SkillChip";

interface ServiceCardProps {
  service: IService;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const { title, tagline, description, deliverables } = service;

  return (
    <div className="rounded-3xl p-6 bg-[rgb(from_#98b7d4_r_g_b_/_.06)] border border-[rgb(from_#98b7d4_r_g_b_/_.15)] transition-[border-color,background] duration-150 hover:border-[rgb(from_#98b7d4_r_g_b_/_.35)] hover:bg-[rgb(from_#98b7d4_r_g_b_/_.1)]">
      <h3 className="text-2xl leading-8 font-semibold text-[#e1ecf3] mb-1">
        {title}
      </h3>

      <p className="font-medium text-transparent bg-clip-text [background-image:linear-gradient(120deg,_#98b7d4,_#bb795a)] mb-3">
        {tagline}
      </p>

      <p className="text-sm leading-6 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-4">
        {description}
      </p>

      <div className="flex flex-row gap-1.5 items-center flex-wrap">
        {deliverables.map((item) => (
          <SkillChip key={item} label={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
