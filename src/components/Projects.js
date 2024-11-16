import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/car-des.png";
import projImg2 from "../assets/img/roof-des.png";
import projImg3 from "../assets/img/car-web.png";
import projImg4 from "../assets/img/real-web.png";
import projImg5 from "../assets/img/ecom-web.png";
import projImg6 from "../assets/img/ecom-code.png";
import projImg7 from "../assets/img/real-code.png";
import projImg8 from "../assets/img/dashboard-ecom.png";
import projImg9 from "../assets/img/pos-system-restaurent.png";
import projImg10 from "../assets/img/car-rental-system.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      titleVistitWeb: "Visit website",
      titleVistitCode: "Visit code",
      alt: "image",
      linkWeb: "https://luxe-car.vercel.app/",
      linkCode: "https://luxe-car.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      titleVistitWeb: "Visit website",
      titleVistitCode: "Visit code",
      alt: "image",
      linkWeb: "https://luxe-car.vercel.app/",
      linkCode: "https://luxe-car.vercel.app/",
      description: "Design & Development",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];
  const projects2 = [
    {
      titleVistitWeb: "Visit website",
      alt: "image",
      linkWeb: "https://idrisss-five-star-site-b590c7.webflow.io/",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      titleVistitWeb: "Visit website",
      alt: "image",
      linkWeb: "https://idrisss-car-site-87a306.webflow.io/",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      titleVistitWeb: "Visit website",
      alt: "image",
      linkWeb: "https://idrisss-car-site-87a306.webflow.io/",
      description: "Design & Development",
      imgUrl: projImg5,
    },
  ];
  const projects3 = [
    {
      titleVistitWeb: "Visit website",
      titleVistitCode: "Visit code",
      alt: "image",
      linkWeb: "https://mern-ecommerceweb.onrender.com",
      linkCode: "https://github.com/idriss-elouiri/mern-ecommerceWeb",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      titleVistitWeb: "Visit website",
      titleVistitCode: "Visit code",
      alt: "image",
      linkWeb: "https://realestate-n2sb.onrender.com",
      linkCode: "https://github.com/idriss-elouiri/mern-realEstate",
      description: "Design & Development",
      imgUrl: projImg7,
    },
  ];
  const projects4 = [
    {
      titleVistitCode: "Visit code",
      alt: "image",
      linkWeb: "https://mern-ecommerceweb.onrender.com",
      linkCode: "https://github.com/idriss-elouiri/mern-ecommerceWeb",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      titleVistitCode: "Visit code",
      alt: "image",
      linkWeb: "https://pos-system-restaurent.vercel.app",
      linkCode: "https://github.com/idriss-elouiri/pos-system-restaurent",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      titleVistitCode: "Visit code",
      alt: "image",
      linkWeb: "https://car-rental-system-8lek.vercel.app",
      linkCode: "https://github.com/idriss-elouiri/Car-Rental-System-",
      description: "Design & Development",
      imgUrl: projImg10,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="for">Tab 4</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          I design sleek, responsive websites using HTML, CSS,
                          and JavaScript, ensuring a seamless user experience
                          across devices.
                        </p>
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          I specialize in creating responsive, visually engaging
                          websites using Webflow's visual editor and CMS. My
                          skills include template customization, animations, and
                          mobile optimization for a user-friendly experience.
                        </p>
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I create responsive, modern websites using React and
                          TailwindCSS, ensuring a seamless user experience.
                        </p>
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="for">
                        <p>
                          A sleek Full stack dashboard offering real-time
                          analytics, user management, and intuitive data
                          visualization.
                        </p>
                        <Row>
                          {projects4.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
