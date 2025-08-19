import Image from "next/image";
import IconLink from "@/app/assets/IconLink";
import IconArrowUpRight from "@/app/assets/IconArrowUpRight";
import SkillChip from "./SkillChip";
import { IProfessionalProject } from "../static";
import { FC } from "react";
import Link from "next/link";

interface ProjectCardProps {
  professionalProject: IProfessionalProject;
}

const ProjectCard: FC<ProjectCardProps> = ({ professionalProject }) => {
  const {
    title,
    image,
    stacks,
    websiteURL,
    sourceCodeURL,
    subtitle,
    description,
  } = professionalProject || {};

  return (
    <div>
      <div className="mb-2">
        {websiteURL ? (
          <Link href={websiteURL} target="_blank">
            <div className="group flex flex-row items-center gap-1 cursor-pointer">
              <h3 className="text-[32px] leading-8 font-semibold transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]">
                {title}
              </h3>
              <div className="size-6 relative left-0 top-0 transition-[top,left] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4] group-hover:-top-1 group-hover:left-1">
                <IconArrowUpRight />
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex flex-row items-center gap-1">
            <h3 className="text-[32px] leading-8 font-semibold text-[#e1ecf3]">
              {title}
            </h3>
          </div>
        )}
      </div>

      <h4 className="text-2xl leading-8 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-4">
        {subtitle}
      </h4>

      {sourceCodeURL && (
        <Link href={sourceCodeURL} target="_blank">
          <div className="group flex flex-row items-center gap-1 cursor-pointer mb-4">
            <div className="size-4 transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]">
              <IconLink />
            </div>
            <p className="transition-[color] duration-150 font-medium text-[#e1ecf3] group-hover:text-[#98b7d4]">
              Source Code
            </p>
          </div>
        </Link>
      )}

      <div className="flex flex-row gap-1.5 items-center flex-wrap mb-4">
        {stacks.map((stack) => (
          <SkillChip key={stack} label={stack} />
        ))}
      </div>

      <div className="relative w-full max-w-[600px] mx-auto aspect-[16_/_9] rounded-3xl overflow-hidden mb-4">
        <Image
          alt={title}
          src={image || "/static/dummy-image.svg"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col gap-4 xl:flex-row xl:gap-8">
        <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] text-justify">
          {description}
        </p>

        {/* <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          architecto porro, cum a iusto recusandae corporis dignissimos optio
          quod explicabo blanditiis quidem sit facere ratione atque quasi
          adipisci! Odit, aliquam? A asperiores nam molestias modi quam
          consectetur distinctio fugiat suscipit, mollitia facilis veritatis
          odio error enim? Architecto odio minus dolorum!
        </p> */}
      </div>
    </div>
  );
};

export default ProjectCard;
