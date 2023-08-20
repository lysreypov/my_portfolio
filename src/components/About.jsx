import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BiSolidCloudDownload } from "react-icons/bi";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { aboutPicture1, myCV } from "../assets/index";

const About = ({ darkMode }) => {
  const handleOpenCV = (e) => {
    e.preventDefault();
    const cvURL = myCV;
    window.open(cvURL, "_blank");
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${darkMode ? "text-secondary" : "text-gray-600"} ${
            styles.sectionSubText
          }`}
        >
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-10"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <div className="flex flex-col gap-10 flex-1 w-full min-w-[40%]">
          <p
            className={`${
              darkMode ? "text-secondary" : "text-gray-600"
            } mt-4 text-[17px] max-w-3xl leading-[30px] `}
          >
            I'm a passionated web frontend developer with experience in
            TypeScript and JavaScript, React.js Framerwork and experience in
            Odoo as an ERP developer. I'm a quick learner and collaborate
            closely with clients to create efficient, scalable, and
            user-friendly solutions that solve real-world problems. Let's work
            together to bring your ideas to life!
          </p>
          <a
            href="#"
            className="w-fit flex gap-2 font-medium bg-purple p-3 rounded-xl hover:opacity-80"
            onClick={handleOpenCV}
          >
            <span>Download CV</span>
            <BiSolidCloudDownload className="w-6 h-6 text-white" />
          </a>
        </div>
        <div className="relative flex justify-end flex-1 w-full min-w-fit">
          <div className="w-full h-[30rem] xl:h-96 rounded-xl drop-shadow-xl">
            <img
              className="w-full h-full object-cover rounded-md"
              src={aboutPicture1}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
