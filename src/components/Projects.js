import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import projImg1 from "../assets/img/landingCar.png";
import projImg2 from "../assets/img/roofingLan.png";
import projImg3 from "../assets/img/realET.png";
import projImg4 from "../assets/img/webCar.png";
import projImg6 from "../assets/img/clotheStore.png";
import projImg7 from "../assets/img/elctStore.png";
import projImg8 from "../assets/img/realWeb.png";
import projImg10 from "../assets/img/posSt.png";
import projImg11 from "../assets/img/carMa.png";
import projImg12 from "../assets/img/dashboard.png";
import projImg13 from "../assets/img/z.png";
import projImg14 from "../assets/img/ecommStore.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const projects = [
  {
    imgUrl: projImg1,
    linkWeb: "https://luxe-car.vercel.app/",
    linkCode: "https://github.com/idriss-elouiri/luxe_Car",
  },
  {
    imgUrl: projImg2,
    linkWeb: "https://roofy-website.vercel.app/",
    linkCode: "https://github.com/idriss-elouiri/roofy_website",
  },
  {
    imgUrl: projImg3,
    linkWeb: "https://idrisss-five-star-site-b590c7.webflow.io/",
  },
  { imgUrl: projImg4, linkWeb: "https://idrisss-car-site-87a306.webflow.io/" },
  {
    imgUrl: projImg6,
    linkWeb: "https://store-clothes-roan.vercel.app/",
    linkCode: "https://github.com/idriss-elouiri/store_clothes",
  },
  {
    imgUrl: projImg7,
    linkWeb: "https://ecommerce-store-taupe-five.vercel.app/",
    linkCode: "https://github.com/idriss-elouiri/ecommerce_store",
  },
  {
    imgUrl: projImg8,
    linkWeb: "https://realestate-n2sb.onrender.com",
    linkCode: "https://github.com/idriss-elouiri/mern-realEstate",
  },
  {
    imgUrl: projImg10,
    linkWeb: "https://pos-system-restaurent.vercel.app",
    linkCode: "https://github.com/idriss-elouiri/pos-system-restaurent",
  },
  {
    imgUrl: projImg11,
    linkWeb: "https://car-rental-system-jet.vercel.app",
    linkCode: "https://github.com/idriss-elouiri/Car-Rental-System-",
  },
  {
    imgUrl: projImg12,
    linkCode: "https://github.com/idriss-elouiri/mern-ecommerceWeb",
  },
  {
    imgUrl: projImg13,
    linkCode: "https://github.com/idriss-elouiri/mern-ecommerceWeb",
  },
  { imgUrl: projImg14 },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Row className="projects-container justify-content-center">
          {visibleProjects.map((project, index) => (
            <Col
              key={index}
              sm={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center"
            >
              <Card className="custom-card">
                <div className="project-image">
                  <Card.Img
                    variant="top"
                    src={project.imgUrl}
                    alt="Project Image"
                  />
                </div>
                <Card.Body>
                  <div className="button-group">
                    {project.linkWeb && (
                      <Button
                        href={project.linkWeb}
                        target="_blank"
                        className="visit-button"
                      >
                        Visit Website
                      </Button>
                    )}
                    {project.linkCode && (
                      <Button
                        href={project.linkCode}
                        target="_blank"
                        className="code-button"
                      >
                        View Code
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {!showAll && (
          <div className="show-more-container">
            <Button
              onClick={() => setShowAll(true)}
              className="show-more-button"
            >
              Show More
            </Button>
          </div>
        )}
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};

export default Projects;
