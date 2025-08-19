import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import IconLink from "@/app/assets/IconLink";
import IconArrowUpRight from "@/app/assets/IconArrowUpRight";
import { IPersonalProject } from "../static";
import SkillChip from "./SkillChip";

interface PersonalProjectProps {
  personalProject: IPersonalProject;
}

const PersonalProject: FC<PersonalProjectProps> = ({ personalProject }) => {
  const { title, image, websiteURL, sourceCodeURL, description, stacks } =
    personalProject;

  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:gap-8">
      <div className="flex flex-col gap-4 order-1 xl:order-2">
        {websiteURL ? (
          <Link href={websiteURL} target="_blank">
            <div className="group flex flex-row items-center gap-1 cursor-pointer">
              <h3 className="text-xl leading-8 font-semibold transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]">
                {title}
              </h3>
              <div className="size-5 relative left-0 top-0 transition-[top,left] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4] group-hover:-top-1 group-hover:left-1">
                <IconArrowUpRight />
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex flex-row items-center gap-1">
            <h3 className="text-xl leading-8 font-semibold text-[#e1ecf3]">
              {title}
            </h3>
          </div>
        )}

        {sourceCodeURL && (
          <Link href={sourceCodeURL} target="_blank">
            <div className="group flex flex-row items-center gap-1 cursor-pointer">
              <div className="size-4 transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]">
                <IconLink />
              </div>

              <p className="transition-[color] duration-150 font-medium text-[#e1ecf3] group-hover:text-[#98b7d4]">
                Source Code
              </p>
            </div>
          </Link>
        )}

        <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">{description}</p>

        <div className="flex flex-row gap-1.5 items-center flex-wrap">
          {stacks.map((stack) => (
            <SkillChip key={stack} label={stack} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[300px] shrink-0 order-2 xl:order-1 xl:max-w-44">
        <div className="relative w-full aspect-[16_/_9] rounded-lg overflow-hidden mb-4">
          <Image
            alt={title}
            src={image || "/static/dummy-image.svg"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalProject;
