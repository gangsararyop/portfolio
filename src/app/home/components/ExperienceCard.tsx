import { FC } from "react";
import { IExperience } from "../static";
import SkillChip from "./SkillChip";

interface ExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  const { role, company, startYear, endYear, description, stacks } = experience;
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap xl:flex-row xl:gap-20 xl:justify-between">
        <p className="text-xs leading-6 font-semibold -tracking-tight text-[rgb(from_#e1ecf3_r_g_b_/_.5)] shrink-0">
          {startYear} — {endYear}
        </p>

        <div className="w-full xl:max-w-[450px]">
          <h4 className="text-[#e1ecf3] font-bold mb-2">
            {role} @ {company}
          </h4>

          <p className="text-sm leading-6 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-4">
            {description}
          </p>

          <div className="flex flex-row gap-1.5 items-center flex-wrap">
            {stacks.map((stack) => (
              <SkillChip key={stack} label={stack} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
