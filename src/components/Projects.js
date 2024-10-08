import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projectImg1.png";
import projImg2 from "../assets/img/projectImg2.png";
import projImg3 from "../assets/img/projectImg3.png";
import projImg4 from "../assets/img/projectImg4.png";
import projImg5 from "../assets/img/projectImg5.png";
import projImg6 from "../assets/img/projectImg6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Visit website",
      alt: "image",
      link: "https://luxe-car.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Visit website",
      alt: "image",
      link: "https://roofy-website.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];
  const projects2 = [
    {
      title: "Visit website",
      alt: "image",
      link: "https://luxe-car.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Visit website",
      alt: "image",
      link: "https://luxe-car.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg4,
    },
  ];
  const projects3 = [
    {
      title: "Visit website",
      alt: "image",
      link: "https://luxe-car.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Visit website",
      alt: "image",
      link: "https://luxe-car.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg6,
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
                          I create responsive, modern websites using React and
                          TailwindCSS, ensuring a seamless user experience.
                        </p>
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          A sleek MERN stack dashboard offering real-time
                          analytics, user management, and intuitive data
                          visualization.
                        </p>
                        <Row>
                          {projects3.map((project, index) => {
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
