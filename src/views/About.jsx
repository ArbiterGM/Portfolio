import PortfolioImage from "../assets/PortfolioImage.jpeg";
import { BsPlay } from "react-icons/bs";
import { motion } from "framer-motion";
import { topToBottom } from "../utils/motion";

export default function About() {
  return (
    <>
      <motion.div
        variants={topToBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        id="about"
        className="w-full h-full my-[2rem] pt-[7rem] md:pt-[0px] px-[1rem] flex flex-col justify-center items-center gap-[10px] lg:w-[1000px] lg:mx-auto lg:flex-row lg:my-[10rem] lg:justify-between"
      >
        <div>
          <h1 className="w-[136px] md:w-[145px] mx-auto text-[25px] md:text-[30px] text-[--textWhite] font-bold border-b-[1px] border-[--lightPurple] mb-[1rem] fontFira md:self-start md:ml-[1rem] lg:mx-[0px]">
            About Me
          </h1>
          <p className="px-[20px] rounded-[20px] text-[--textLight] leading-[30px] text-[18px] md:text-[20px] lg:px-[0px] lg:w-[600px] mb-[10px]">
            Hello, I'm a passionate MERN stack developer with a strong
            foundation in building responsive and dynamic web applications. I
            love turning ideas into reality using the latest technologies. I'm
            eager to learn and grow in the field, always looking for
            opportunities to enhance my skills and contribute to exciting
            projects.
          </p>
          <p className="px-[20px] self-start text-[--textLight] md:text-[20px] lg:px-[0px]">
            Here are a few technologies I've been working with recently:
          </p>
          <div className="w-[300px] md:w-[400px] lg:w-[300px] lg:text-[16px] text-[--textLight] flex justify-between gap-[2rem] self-start my-[1rem] ml-[1rem] md:text-[20px] lg:ml-[0px]">
            <div className="flex flex-col gap-[10px] fontFira">
              <div className="flex items-center gap-[5px]">
                <p>
                  <BsPlay color="#ba67d6" />
                </p>
                <p>JavaScript</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <p>
                  <BsPlay color="#ba67d6" />
                </p>
                <p>TypeScript</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <p>
                  <BsPlay color="#ba67d6" />
                </p>
                <p>React</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <p>
                  <BsPlay color="#ba67d6" />
                </p>
                <p>Express JS</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] fontFira">
              <div className="flex items-center gap-[5px]">
                <p>
                  <BsPlay color="#ba67d6" />
                </p>
                <p>Node JS</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <p>
                  <BsPlay color="#ba67d6" />
                </p>
                <p>MongoDB</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <p>
                  <BsPlay color="#ba67d6" />
                </p>
                <p>Tailwind CSS</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <p>
                  <BsPlay color="#ba67d6" />
                </p>
                <p>Git</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[270px] md:w-[320px] bg-[--bgColor] relative rounded-[10px] my-[1rem] md:mt-[4rem]">
          <span className="w-[270px] md:w-[320px] translate-x-[20px] translate-y-[20px] h-full border-[2px] absolute top-0 left-0 z-[-1] border-[--green] rounded-[10px]"></span>
          <img
            className="rounded-[10px]"
            src={PortfolioImage}
            alt="portfolio image"
          />
        </div>
      </motion.div>
    </>
  );
}
