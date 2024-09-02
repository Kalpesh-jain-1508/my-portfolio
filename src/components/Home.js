import { useTheme } from "./ThemeContext";

const Home = ({ dark }) => {

  // const { isDarkMode } = useTheme();
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
    <div className={`orido_tm_hero orido_tm_section ${isDarkMode ? 'dark' : ''}`} id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                Kalpesh Jain <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">Full Stack Developer</span>
            </div>
            <div className="text">
              <p>
                {`I'm`} helping clients to build custom apps, single page applications, web app development, and working on existing web applications for adding new features or bug fixes, Shopify Store Development, Custom Theme Development, and Help In Customization.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            <li>
              <a href="https://linkedin.com/in/kalpesh-jain1508">
                <img className="svg" src="img/svg/social/linkedin.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Kalpesh-jain-1508">
                <img className="svg" src="img/svg/social/github.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kalpesh_jain15">
                <img
                  className="svg"
                  src="img/svg/social/instagarm.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          {/* <img
            className="svg"
            // src={`img/svg/${isDarkMode ? "down_button_light" : "down_button"}.svg`}
            src='img/svg/down_button_light.svg'
            alt=""
          /> */}

          { isDarkMode ? 
          <>
            <svg width="26px" height="100%" viewBox="0 0 247 390" version="1.1" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '1.5' }}>
            <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
            <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
            </svg>
          </>
         : 
         <>
          <svg width="26px" height="100%" viewBox="0 0 247 390" version="1.1" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '1.5' }}>
          <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#12141D', strokeWidth: '20px' }} />
          <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: '#12141D', strokeWidth: '20px' }} />
          </svg>
         </>
         }
        
        </a>


      </div>
      <div className="avatar">
        <div className="img">
          {/* <img src={`/img/hero/${dark ? 2 : 1}.jpg`} alt="" /> */}
         {/* { dark ? <img src='/img/hero/2.jpg' alt="" /> :   <img src='/img/hero/2.jpg' alt="" /> } */}

         <img src='/img/hero/kj.png' alt="kj" />
         
          <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=Iqr3XIhSnUQ"
            >
              <img className="anim_circle" src="/img/hero/welcome.png" alt="" />
              <img className="svg" src="img/svg/play.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Home;
