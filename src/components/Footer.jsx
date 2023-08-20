import React from "react";

import { styles } from "../styles";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col justify-center py-10 gap-5 items-center text-center`}
    >
      <div className="flex flex-row grow-[4] gap-6">
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
      <div>
        <p className="text-gray-600">
          Copyright © 2023 Ly Sreypov. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
