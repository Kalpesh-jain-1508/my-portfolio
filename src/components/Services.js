import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Full Stack Development",
    img: "img/service/full-stack-developer.jpg",
    description: [
      "Offering end-to-end development services, combining frontend and backend technologies to deliver fully functional and scalable web applications.",
    ],
  },
  {
    name: "Frontend Development (React / Next.js)",
    img: "img/service/front-end-development.jpg",
    description: [
      "Building modern, responsive, and highly interactive user interfaces using React and Next.js. I specialize in creating Single Page Applications (SPAs) and ensuring seamless user experiences across all devices.",
    ],
  },
  {
    name: "Backend Development (Node.js / Laravel)",
    img: "img/service/back-end-development.jpg",
    description: [
      "Developing robust backend solutions with Node.js and Laravel. I provide custom API development, database management, and server-side logic implementation to power your web applications.",
    ],
  },
  {
    name: "Shopify Development",
    img: "img/service/shopify.jpg",
    description: [
      "Expert in Shopify Store Development, Custom Theme Development, and Shopify App Customization. I help businesses set up, customize, and optimize their Shopify stores to maximize sales and improve user experience.",
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Services
                  <br />I Provide
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
