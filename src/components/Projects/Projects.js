import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Wanderlust"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/sourabhmehra951/Wanderlust"
              demoLink="https://wanderlust-project-yu4j.onrender.com/listings"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cafe Nippon – Restaurant Management System "
              description="A comprehensive restaurant management system built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that streamlines operations and enhances customer experience. The system includes features such as menu management, order processing, table reservations, and real-time analytics. With a user-friendly interface and robust backend, Cafe Nippon helps restaurant owners efficiently manage their business while providing customers with a seamless dining experience."
              ghLink="https://github.com/Sourabh4017/cafe_managment"
              demoLink="https://cafe-sourabh2.vercel.app/"
            />
          </Col>
        </Row>
         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Colony_management"
              description=""
              ghLink="https://github.com/Sourabh4017/Colony_managemen"
              // demoLink="https://wanderlust-project-yu4j.onrender.com/listings"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
