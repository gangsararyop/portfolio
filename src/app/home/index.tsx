"use client";

import { CSSProperties } from "react";
import Link from "next/link";
import scrollTo from "./helpers/scrollTo";
import { sections } from "./static";
import { ui } from "./static/ui";
import {
  WHATSAPP_URL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  CV_URL,
} from "./static/contact";
import useInViewport from "./hooks/useInViewport";
import { Icon } from "@iconify/react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ServicesSection from "./sections/ServicesSection";
import ExperienceSection from "./sections/ExperienceSection";
import WorkSection from "./sections/WorkSection";
import Reveal from "./components/Reveal";

const Homepage = () => {
  const activeSection = useInViewport({ sections });

  return (
    <div className="container">
      <div className="relative mt-16 mb-[96px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.5fr] md:gap-9 lg:gap-32">
          {/* ---- Left Content ---- */}
          <div className="h-full">
            <div className="md:sticky top-16">
              <Reveal>
                <h1 className="text-4xl md:text-5xl font-bold text-[#e1ecf3] mb-6">
                  Gangsar Aryo
                </h1>

                <h2 className="text-xl md:text-2xl text-[#e1ecf3] mb-6">
                  {ui.hero.buildPre}
                  <span className="font-semibold text-transparent bg-clip-text [background-image:linear-gradient(120deg,_#98b7d4,_#bb795a)]">
                    {ui.hero.buildHighlight}
                  </span>
                  {ui.hero.buildPost}
                </h2>

                <p className="text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] mb-8 max-w-[420px]">
                  {ui.hero.intro}
                </p>

                <div className="grid grid-cols-2 gap-3 max-w-[420px] md:mb-16">
                  <Link href={WHATSAPP_URL} target="_blank" className="col-span-2">
                    <div className="group flex flex-row items-center justify-center gap-2 rounded-full px-5 py-2.5 bg-[#98b7d4] transition-[opacity] duration-150 hover:opacity-90">
                      <Icon
                        icon="mdi:whatsapp"
                        className="size-5 text-[#030608]"
                      />
                      <p className="font-semibold text-[#030608]">
                        {ui.hero.whatsappCta}
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
                        {ui.hero.emailCta}
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

                <div className="flex flex-row items-center gap-4 mt-6 mb-8 md:mt-0 md:mb-16">
                  <Link
                    href={GITHUB_URL}
                    target="_blank"
                    className="transition-[color] duration-150 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] hover:text-[#98b7d4]"
                  >
                    <Icon icon="mdi:github" className="size-6" />
                  </Link>

                  <Link
                    href={LINKEDIN_URL}
                    target="_blank"
                    className="transition-[color] duration-150 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)] hover:text-[#98b7d4]"
                  >
                    <Icon icon="mdi:linkedin" className="size-6" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <nav className="hidden md:inline-block">
                  <ol className="flex flex-col list-none m-0 p-0 gap-5">
                    {sections.map((section, index) => (
                      <li
                        key={section.id}
                        className="group cursor-pointer"
                        onClick={() => scrollTo(section.id)}
                      >
                        <div className="flex flex-row items-center gap-4">
                          <p
                            style={
                              {
                                "--text-color":
                                  activeSection === section.id
                                    ? "#98b7d4"
                                    : "rgb(from #e1ecf3 r g b / .5)",
                                "--text-weight":
                                  activeSection === section.id ? "600" : "400",
                              } as CSSProperties
                            }
                            className="text-sm [font-weight:var(--text-weight)] leading-5 -tracking-tight [color:var(--text-color)] transition-[color,_font-weight] duration-150 group-hover:text-[#98b7d4]"
                          >
                            {index.toString().padStart(2, "0")}
                          </p>

                          <p
                            style={
                              {
                                "--text-color":
                                  activeSection === section.id
                                    ? "#98b7d4"
                                    : "rgb(from #e1ecf3 r g b / .5)",
                                "--text-weight":
                                  activeSection === section.id ? "600" : "400",
                              } as CSSProperties
                            }
                            className="text-sm [font-weight:var(--text-weight)] leading-5 -tracking-tight [color:var(--text-color)] transition-[color,_font-weight] duration-150 group-hover:text-[#98b7d4] uppercase"
                          >
                            {section.label}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>
              </Reveal>
            </div>
          </div>

          {/* ----- Right Content ---- */}
          <div>
            <AboutSection />
            <ServicesSection />
            <WorkSection />
            <ExperienceSection />
            <ContactSection />

            <footer>
              <p className="text-sm leading-6 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">
                &copy; 2025 Gangsar Aryo
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
