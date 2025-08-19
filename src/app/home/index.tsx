"use client";

import { CSSProperties } from "react";
import scrollTo from "./helpers/scrollTo";
import { sections } from "./static";
import useInViewport from "./hooks/useInViewport";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import PersonalProjectSection from "./sections/PersonalProjectSection";
import ProfessionalProjectSection from "./sections/ProfessionalProjectSection";

const Homepage = () => {
  const activeSection = useInViewport({ sections });

  return (
    <div className="container">
      <div className="relative mt-16 mb-[96px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.5fr] md:gap-9 lg:gap-32">
          {/* ---- Left Content ---- */}
          <div className="h-full">
            <div className="sticky top-16">
              <h1 className="text-5xl font-bold text-[#e1ecf3] mb-8">
                Gangsar Aryo
              </h1>

              <h2 className="text-2xl text-[#e1ecf3] mb-16">
                A{" "}
                <span className="font-semibold text-transparent bg-clip-text [background-image:linear-gradient(120deg,_#98b7d4,_#bb795a)]">
                  Fullstack Web Developer
                </span>{" "}
                based in Indonesia
              </h2>
              <ol className="flex flex-col gap-8 mb-16">
                <li className="gap-0.5">
                  <h3 className="font-semibold text-transparent bg-clip-text [background-image:linear-gradient(10deg,_#e1ecf3,_#bb795a)]">
                    Currently Working as
                  </h3>

                  <p className="text-[#e1ecf3]">
                    Fullstack Web Developer @ Purwadhika
                  </p>
                </li>

                <li className="gap-0.5">
                  <h3 className="font-semibold text-transparent bg-clip-text [background-image:linear-gradient(10deg,_#e1ecf3,_#7e344d)]">
                    Get in touch
                  </h3>

                  <p className="text-[#e1ecf3]">gangsararyo@gmail.com</p>
                </li>
              </ol>
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
            </div>
          </div>

          {/* ----- Right Content ---- */}
          <div>
            <AboutSection />
            <ExperienceSection />
            <ProfessionalProjectSection />
            <PersonalProjectSection />
            <ContactSection />

            <footer>
              <p className="text-sm leading-6 text-[rgb(from_#e1ecf3_r_g_b_/_.6875)]">
                &copy; 2025
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
