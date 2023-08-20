import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin, BsGithub, BsArrowDownCircle } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { profile } from "../assets/index";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import ParticlesContainer from "./canvas/ParticlesContainer";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = ({ darkMode }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
      }}
      variants={fadeInVariants}
      className="relative z-20 flex justify-center items-center w-full h-screen"
    >
      {/* Particle */}
      <ParticlesContainer />

      <div
        className={`${styles.paddingX} flex flex-col sm:flex-row w-full  items-center max-w-6xl mx-auto`}
      >
        <div className="flex flex-row flex-1 w-full justify-start items-center mt-[50px] sm:mt-0 ">
          <div className="flex flex-col grow-[4] gap-6">
            <a href="https://twitter.com/LySreypov19" target="_blank">
              <AiFillTwitterCircle className="text-purple w-7 h-7 hover:opacity-80" />
            </a>
            <a
              href="https://www.linkedin.com/in/ly-sreypov-600945200/"
              target="_blank"
            >
              <BsLinkedin className="text-purple w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://github.com/lysreypov" target="_blank">
              <BsGithub className="text-purple w-6 h-6 hover:opacity-80" />
            </a>
          </div>
          <div className="grow-[5] flex justify-center drop-shadow-xl">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-purple border-l-2 p-2">
              <img
                className=" w-full h-full object-cover rounded-full"
                src={profile}
                alt="Sreypov Profile"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <h1
            className={`${styles.heroHeadText} ${
              darkMode ? "text-gray-100" : "text-black-100"
            }`}
          >
            Hi, I'm <span className="text-purple">Sreypov</span>
            👋
          </h1>
          <h2
            className={`${styles.heroSubText} ${
              darkMode ? "text-secondary" : "text-gray-600"
            } `}
          >
            Frontend and ERP Developer
          </h2>
          <p className={`${darkMode ? "text-secondary" : "text-gray-600"}`}>
            I love putting things together with creativity and interactivity.
          </p>

          <a
            href="#contact"
            className="w-fit flex gap-2 font-medium bg-purple mt-6 p-3 rounded-xl hover:opacity-80"
          >
            <span>Contact Me</span>
            <TbSend className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      <div className="absolute xs:bottom-20 bottom-32 w-full hidden sm:flex justify-center items-center text-black hover:font-medium">
        <a href="#about" className="flex items-center gap-2">
          <div className="w-[32px] h-[45px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
          <span className={`${darkMode ? "text-secondary" : "text-gray-600"} `}>
            Scrol Down
          </span>
          <BsArrowDownCircle
            className={`${
              darkMode ? "text-secondary" : "text-gray-600"
            } w-5 h-5`}
          />
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
