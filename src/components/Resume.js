import { Container, Row, Col } from "react-bootstrap";

export const Resume = () => {
  return (
    <section className="resume">
      <Container>
        <Row>
          <Col size={12}>
            <div className="resume-content">
              <h2>Resume</h2>
              <p>
                As a self-taught <strong>Full-Stack Developer</strong>, I embarked on my journey from home, 
                leveraging free resources, online tutorials, and open-source projects to hone my skills. 
                My passion for learning and dedication to mastering the latest technologies have 
                allowed me to build scalable, responsive, and dynamic web applications.
              </p>
              <ul className="resume-list">
                <li>
                  <strong>Frontend Development:</strong> Gained proficiency in React, HTML, CSS, and JavaScript by building practical projects.
                </li>
                <li>
                  <strong>Backend Development:</strong> Mastered Node.js, Express.js, and MongoDB, creating RESTful APIs and server-side logic.
                </li>
                <li>
                  <strong>Continuous Learning:</strong> Regularly follow free courses on platforms like <i>freeCodeCamp</i>, <i>Coursera</i>, and <i>Udemy</i>.
                </li>
                <li>
                  <strong>Git & GitHub:</strong> Contributed to open-source projects, collaborating with developers worldwide.
                </li>
              </ul>
              <p>
                This journey has instilled in me a problem-solving mindset and a commitment to continuous improvement, 
                enabling me to tackle real-world challenges with confidence.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
