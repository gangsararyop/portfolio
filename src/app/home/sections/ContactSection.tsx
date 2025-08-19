"use client";

import { useInView } from "react-intersection-observer";
import IconEnvelope from "@/app/assets/IconEnvelope";

const ContactSection = () => {
  const { ref } = useInView({
    threshold: 1,
    onChange(inView, entry) {
      if (inView) {
        console.log(entry.target.id);
      }
    },
  });

  return (
    <section id="contact" ref={ref} className="mb-24">
      <h2 className="text-[32px] text-[#e1ecf3] font-bold mb-8">
        Get in Touch
      </h2>

      <div className="w-full max-w-full md:max-w-[500px] mb-6">
        <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">
          Feel free to reach out if you’d like to collaborate, have a project in
          mind, or just want to say hello. I’m always open to new opportunities
          and conversations.
        </p>
      </div>

      <div className="group flex flex-row items-center gap-1 cursor-pointer mb-4">
        <div className="size-4 transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]">
          <IconEnvelope />
        </div>

        <p className="transition-[color] duration-150 font-medium text-[#e1ecf3] group-hover:text-[#98b7d4]">
          gangsararyo@gmail.com
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
