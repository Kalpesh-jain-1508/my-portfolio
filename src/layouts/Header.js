import { useEffect, useState } from "react";
import { BsBrightnessHigh, BsMoonStars } from "react-icons/bs";
import { useTheme } from "../components/ThemeContext";

const Header = ({ dark }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <a href="#">
            <img src={`img/logo/${isDarkMode ? "kj_white_logo" : "kj"}.png`} alt="logo" />
            {/* <img src="/img/logo/light.png" alt="logo" /> */}
          </a>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            {/* <li>
              <a href="#portfolio">Portfolio</a>
            </li> */}
            {/* <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button btn-toggle-wrapper">
           {/* { isDarkMode ? 
           <BsBrightnessHigh onClick={() => setIsDarkMode(!isDarkMode)} className="toggle-btn"/> 
           : 
           <BsMoonStars onClick={() => setIsDarkMode(!isDarkMode)} className="toggle-btn"/> } */}

      {/* <button onClick={toggleDarkMode}> */}
        {isDarkMode ?  
        <BsBrightnessHigh onClick={toggleDarkMode} className="toggle-btn"/> 
        : <BsMoonStars onClick={toggleDarkMode} className="toggle-btn"/>}
      {/* </button> */}
      
          {/* <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
          >
            Purchase Now
          </a> */}
        </div>
      
      </div>
    </div>
  );
};
export default Header;
