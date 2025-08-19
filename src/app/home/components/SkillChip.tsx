import { FC } from "react";

interface SkillChipProps {
  label: string;
}

const SkillChip: FC<SkillChipProps> = ({ label }) => (
  <div className="px-3 py-1 bg-[rgb(from_#98b7d4_r_g_b_/_.125)] rounded-[64px] shadow-[0_4px_8px_-2px_rgba(0,0,0,.2)] ">
    <p className="text-sm leading-6 text-[#98b7d4]">{label}</p>
  </div>
);

export default SkillChip;
