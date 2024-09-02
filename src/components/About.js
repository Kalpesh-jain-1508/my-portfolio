const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">4+ </h3>
              <span className="experience">Years of Experience</span>
              {/* <h3 className="name">Kalpesh Jain</h3> */}
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
               Software Engineer with a Bachelor's Degree in Computer Application.
               Building👷 complex solutions for clients from the USA, Australia, and the United Kingdom.
               New to this platform but not to the tech world
               An open-minded, goal-oriented individual with creative thinking, optimistic attitude, and problem-solving skills.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/kalpesh_jain_resume.pdf" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              <img src="img/kalpesh_signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
