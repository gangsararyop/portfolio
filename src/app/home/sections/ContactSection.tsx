"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { CV_URL, EMAIL, EMAIL_URL, WHATSAPP_URL } from "../static/contact";
import { ui } from "../static/ui";
import Reveal from "../components/Reveal";

const ContactSection = () => {
  const { ref } = useInView({
    threshold: 1,
  });

  return (
    <section id="contact" ref={ref} className="mb-24">
      <Reveal>
        <h2 className="text-2xl md:text-[32px] text-[#e1ecf3] font-bold mb-8">
          {ui.contact.heading}
        </h2>

        <div className="w-full max-w-full md:max-w-[500px] mb-6">
          <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">
            {ui.contact.body}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-[420px] mb-6">
          <Link href={WHATSAPP_URL} target="_blank" className="col-span-2">
            <div className="group flex flex-row items-center justify-center gap-2 rounded-full px-5 py-2.5 bg-[#98b7d4] transition-[opacity] duration-150 hover:opacity-90">
              <Icon icon="mdi:whatsapp" className="size-5 text-[#030608]" />
              <p className="font-semibold text-[#030608]">
                {ui.contact.whatsappCta}
              </p>
            </div>
          </Link>

          <Link href={EMAIL_URL}>
            <div className="group flex flex-row items-center justify-center gap-2 rounded-full px-5 py-2.5 border border-[rgb(from_#98b7d4_r_g_b_/_.4)] transition-[border-color] duration-150 hover:border-[#98b7d4]">
              <Icon
                icon="heroicons:envelope-20-solid"
                className="size-5 text-[#e1ecf3]"
              />
              <p className="font-semibold text-[#e1ecf3]">
                {ui.contact.emailCta}
              </p>
            </div>
          </Link>

          <a href={CV_URL} target="_blank">
            <div className="group flex flex-row items-center justify-center gap-2 rounded-full px-5 py-2.5 border border-[rgb(from_#98b7d4_r_g_b_/_.4)] transition-[border-color] duration-150 hover:border-[#98b7d4]">
              <Icon
                icon="heroicons:document-text-20-solid"
                className="size-5 text-[#e1ecf3]"
              />
              <p className="font-semibold text-[#e1ecf3]">
                {ui.hero.viewCv}
              </p>
            </div>
          </a>
        </div>

        <Link href={EMAIL_URL}>
          <div className="group flex flex-row items-center gap-1 cursor-pointer w-fit">
            <Icon
              icon="heroicons:envelope-20-solid"
              className="size-4 transition-[color] duration-150 text-[#e1ecf3] group-hover:text-[#98b7d4]"
            />

            <p className="transition-[color] duration-150 font-medium text-[#e1ecf3] group-hover:text-[#98b7d4]">
              {EMAIL}
            </p>
          </div>
        </Link>
      </Reveal>
    </section>
  );
};

export default ContactSection;
