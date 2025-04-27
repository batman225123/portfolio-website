import { projects } from "../../data/projects";
import { SkillsIcons } from "../../data/SkillsIcons";
import { carouselItems } from "../../data/carouselItems";
import Image from "next/image";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import InfiniteCarousel from "../../components/common/InfiniteCarousel";
export default function HeroSection() {
  return (
    <section className="hero-section mt-6 md:mt-10">
      <div className="rounded-2xl w-full bg-[#101010] pb-6 md:pb-8">
        {/* Top Box - Responsive Flex */}
        <div className="bg-[#121A15] w-full px-4 sm:px-6 md:px-10 pt-6 md:pt-10 pb-8 md:pb-14 rounded-t-3xl flex flex-col md:flex-row justify-between gap-4">
          {/* Left Side */}
          <div className="top-box-left-side">
            <span className="flex gap-3 md:gap-5 items-baseline">
              <h2 className="text-sm md:text-md text-gray-400 font-extralight">
                Hi, I am
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-foreground font-bold">
                Syed Abu-Talib 👋
              </h3>
            </span>
            <p className="font-thin mt-2 md:mt-3 text-gray-400 text-xs sm:text-sm">
              Full Stack Developer crafting exceptional digital experiences...
            </p>
          </div>
          {/* Right Side */}
          <div className="top-box-right-side flex items-center gap-2 md:gap-4">
            <div className="border-r w-4 md:w-6 border-gray-600 h-6"></div>
            <button className="rounded-4xl relative font-thin border border-gray-800 text-gray-400 text-xs sm:text-sm bg-[#101010] px-4 sm:px-6 md:px-10 py-1 md:py-2">
              <span className="bg-lime-400 rounded-full w-1.5 h-1.5 md:w-2 md:h-2 absolute left-3 md:left-6 top-3 md:top-4 animate-pulse"></span>
              Open for collaboration
            </button>
          </div>
        </div>
        <div className="main-box w-full mt-4 md:mt-6">
          <div className="px-2 sm:px-4 md:px-6 flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="left-main-box mt-3 md:mt-5 w-full">
              <div className="left-image-box relative overflow-hidden group">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  width={300}
                  height={300}
                  className="bg-gray-200 hover:bg-gray-950 transition-all rounded-xl w-full object-cover"
                />

                <div className="absolute top-0 right-0 w-18 h-16 z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-[#101010]">
                    <svg
                      className="absolute left-0 top-0 w-6 h-full"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="none"
                    >
                      <path d="M24 0C24 0 0 12 0 24H24V0Z" fill="#101010" />
                    </svg>
                  </div>

                  <div className="absolute -top-2 right-0 w-16 h-4 bg-[#101010]">
                    <svg
                      className="absolute left-0 bottom-0 w-full h-2"
                      viewBox="0 0 80 20"
                      preserveAspectRatio="none"
                    >
                      <path d="M0 20C20 20 40 0 80 0V20H0Z" fill="#101010" />
                    </svg>
                  </div>

                  <div className="absolute top-2 left-0 w-4 h-20 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="left-main-box-bottom mt-3 md:mt-5 space-y-2 md:space-y-3">
                <HoverBorderGradient
                  containerClassName="rounded-lg py-1 md:py-2 mb-4 uppercase w-full font-medium text-xs md:text-sm"
                  as="button"
                  className="text-white flex items-center justify-center space-x-2 bg-[#18181B]"
                >
                  <span>Let's Work Together</span>
                </HoverBorderGradient>
                <HoverBorderGradient
                  containerClassName="rounded-lg py-1 md:py-2 uppercase mb-4 w-full font-medium text-xs md:text-sm"
                  as="div"
                  className="text-white flex items-center justify-center space-x-2 bg-[#18181B] hover:bg-[#18181B]/90 transition-colors"
                >
                  <a
                    href="/mine-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    Get my CV
                  </a>
                </HoverBorderGradient>
              </div>
            </div>
            <div className="right-main-box bg-[#18181B] rounded-2xl px-4 md:px-6 py-4 md:py-6 text-sm md:text-base lg:text-lg xl:text-xl">
              <div className="text-about-me">
                <p className="text-md leading-12 text-foreground">
                  <span className="not-italic">A</span>{" "}
                  <span className="bg-blue-400 px-2 rounded text-black not-italic font-bold py-2">
                    Software Developer
                  </span>{" "}
                  who creates seamless, scalable, and visually stunning web and
                  mobile applications. With expertise in{" "}
                  <span className="border border-lime-400 px-2 rounded text-green-400 not-italic font-bold py-2">
                    React.js
                  </span>
                  <span className="text-2xl text-white px-3">,</span>{" "}
                  <span className="border border-lime-400 px-2 rounded text-green-400 not-italic font-bold py-2">
                    Next.js
                  </span>
                  <span className="text-2xl text-white px-3">,</span>{" "}
                  <span className="border border-red-400 px-2 rounded text-red-400 not-italic font-bold py-2">
                    Laravel
                  </span>{" "}
                  and alot{" "}
                  <span className="border-b not-italic border-lime-400 px-1 text-green-400">
                    more
                  </span>{" "}
                  <span className="text-2xl text-white px-1">,</span> I blend
                  functionality with aesthetics to deliver impactful solutions.
                  Known for my creative{" "}
                  <span className="border-b border-blue-400 px-1 not-italic pb-1 text-blue-400">
                    problem-solving
                  </span>
                  <span className="text-2xl text-white px-1"> ,</span> I bridge
                  the gap between frontend and backend with precision, ensuring
                  every detail contributes to an exceptional user experience.
                  who crafts seamless, scalable web and mobile applications.
                </p>
              </div>
              <div className="right-main-three-boxes mt-4">
                <HoverEffect items={projects} />
              </div>
              <div className="right-main-last leading-8 sm:leading-10 text-xs md:text-base text-foreground mt-3 w-full bg-[#000] px-3 py-2 rounded-lg">
                <p>
                  " P.S. I'm not really{" "}
                  <span className="bg-orange-400 px-2 rounded text-black not-italic font-bold py-1">
                    Batman
                  </span>{" "}
                  <span className="text-2xl text-white px-1">,</span> but I
                  might be the{" "}
                  <span className="bg-blue-400 px-2 rounded text-black not-italic font-bold py-1">
                    Hero
                  </span>{" "}
                  your project needs! 🦸‍♂️ "
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 sm:px-4 md:px-6 mt-4 md:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col md:flex-row items-center gap-3 bg-[#18181B] rounded-lg p-3 md:p-4 lg:p-6">
                <div className="hidden lg:block text-lg md:text-xl lg:text-2xl text-white font-extrabold whitespace-nowrap">
                  Frontend <br />
                  Skills
                </div>
                <div className="skills-logo w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
                  {SkillsIcons[0].frontendIcon.map((icon, index) => (
                    <span
                      key={`frontend-${index}`}
                      className="border border-neutral-600/40 p-2 rounded-lg flex justify-center"
                    >
                      <Image
                        src={icon}
                        alt=""
                        className="w-5 h-5 md:w-full md:h-full"
                        width={24}
                        height={24}
                      />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-4 bg-[#18181B] rounded-lg p-3 md:p-4 lg:p-6">
                <div className="hidden lg:block text-lg md:text-xl lg:text-2xl text-white font-extrabold whitespace-nowrap">
                  Backend <br /> Skills
                </div>
                <div className="skills-logo w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
                  {SkillsIcons[0].backendIcon.map((icon, index) => (
                    <span
                      key={`backend-${index}`}
                      className="border border-neutral-600/40 p-2 rounded-lg flex justify-center"
                    >
                      <Image
                        src={icon}
                        alt=""
                        className="w-5 h-5 md:w-full md:h-full"
                        width={24}
                        height={24}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 md:mt-4">
              <div className="infinite-carousel bg-[#18181B] rounded-md p-3 md:p-4 lg:p-6">
                <InfiniteCarousel
                  items={carouselItems}
                  speed={2.5}
                  itemWidth={200}
                  pauseOnHover={true}
                  scaleOnHover={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
