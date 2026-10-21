import { FC } from "react";
import { IExperience } from "../static";
import SkillChip from "./SkillChip";

interface ExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  const { company, startYear, endYear, stacks, roles } = experience;
  const [singleRole] = roles;

  return (
    <div className="w-full">
      <div className="w-full flex flex-col xl:flex-row xl:gap-6">
        <p className="text-xs leading-6 font-semibold -tracking-tight text-[rgb(from_#e1ecf3_r_g_b_/_.5)] shrink-0 whitespace-nowrap xl:w-40">
          {startYear} — {endYear}
        </p>

        <div className="w-full xl:flex-1">
          {roles.length === 1 ? (
            <>
              <h4 className="text-[#e1ecf3] font-bold mb-2">
                {singleRole.role} @ {company}
              </h4>

              <p className="text-sm leading-6 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-4">
                {singleRole.description}
              </p>
            </>
          ) : (
            <>
              <h4 className="text-[#e1ecf3] font-bold mb-4">{company}</h4>

              <ol className="flex flex-col gap-5 pl-5 mb-4 border-l border-[rgb(from_#98b7d4_r_g_b_/_.25)]">
                {roles.map(({ role, startYear, endYear, description }) => (
                  <li key={role}>
                    <h5 className="text-sm font-semibold text-[#e1ecf3]">
                      {role}
                    </h5>

                    <p className="text-xs leading-6 font-semibold -tracking-tight text-[rgb(from_#e1ecf3_r_g_b_/_.5)] mb-1">
                      {startYear} — {endYear}
                    </p>

                    <p className="text-sm leading-6 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">
                      {description}
                    </p>
                  </li>
                ))}
              </ol>
            </>
          )}

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
