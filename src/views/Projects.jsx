import { ProjectsData } from "../components/ProjectsData";
import { motion } from "framer-motion";
import { topToBottom, leftToRight, rightToLeft } from "../utils/motion";

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="w-full lg:w-[1100px] pt-[3rem] md:pt-[0px] lg:mx-auto h-full my-[2rem] py-[1rem] flex flex-col gap-[10px]"
      >
        <motion.div
          variants={topToBottom}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="self-center md:self-start md:ml-[2rem] lg:ml-[0px] lg:self-center"
        >
          <h1 className="text-[25px] md:text-[30px] text-[--textWhite] font-bold border-b-[1px] border-[--lightPurple] fontFira mt-[4rem] lg:mt-[6rem] ">
            Projects
          </h1>
        </motion.div>
        <div className="lg:w-full lg:flex lg:flex-col lg:items-end">
          {ProjectsData.map((projEl, index) => (
            <div key={index} className="relative my-[2rem] lg:w-[1000px] ">
              <motion.div
                variants={rightToLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full h-[230px] md:w-[700px] md:h-[418px] mx-auto"
              >
                <img
                  className="opacity-[0.1] blur-[2px] w-full h-full object-cover lg:blur-[0px] lg:hover:opacity-[0.8] lg:duration-[200ms]"
                  src={projEl.image}
                  alt="organick"
                />
              </motion.div>
              <motion.div
                variants={leftToRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-full h-full px-[20px] md:pl-[4rem] flex flex-col justify-center gap-[10px] md:w-[700px] md:h-[418px] lg:w-[250px] lg:pl-[0px] lg:items-start"
              >
                <h2 className="text-[20px] md:text-[25px] font-bold text-[--textWhite]">
                  {projEl.websiteTitle}
                </h2>
                <p className="text-[--textLight] md:text-[20px] h-[80px] md:h-[200px] lg:bg-[--lightNavy] lg:p-[2rem] lg:h-auto lg:rounded-[5px] lg:w-[600px]">
                  {projEl.siteInfo}
                </p>
                <ul className="flex items-center my-[10px] text-[14px] text-[--textLight] fontFira md:text-[20px] lg:text-[16px]">
                  <li>{projEl.buildIn}</li>
                </ul>
                <div className="flex items-center gap-[20px] text-[20px] lg:text-[22px] md:text-[25px] text-[--bgGray]">
                  <a href={projEl.liveLink} target="_blank">
                    <p className="lg:hover:text-[--lightPurple] lg:duration-[200ms] lg:cursor-pointer">
                      {projEl.liveSite}
                    </p>
                  </a>
                  {projEl.githubCode && (
                    <a href={projEl.githubCode} target="_blank">
                      <p className="lg:hover:text-[--lightPurple] lg:duration-[200ms] lg:cursor-pointer ">
                        {projEl.github}
                      </p>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
