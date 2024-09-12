import React from "react";
import { Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export const ProjectCard = ({ title, alt, link, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={"Description of the image"} />
        <div className="proj-txtx">
          <Nav.Link href={link}>{title}</Nav.Link>
          <span>{description}</span>
      
        </div>
      </div>
    </Col>
  );
};
