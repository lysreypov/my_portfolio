import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Skills,
  Projects,
  Footer,
} from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "bg-primary" : "bg-gray"} relative z-0`}>
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Home darkMode={darkMode} />
        </div>
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
