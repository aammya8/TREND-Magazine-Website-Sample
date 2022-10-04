import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ssImg1 from "../assets/img/ss-22.png";
import ssImg2 from "../assets/img/ss-21.png";
import ssImg3 from "../assets/img/ss-19.png";
import fwImg1 from "../assets/img/fw-22.png";
import fwImg2 from "../assets/img/fw-21.png";
import fwImg3 from "../assets/img/fw-20.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const fw_projects = [
    {
      title: "Revival",
      description: "TREND F/W 22",
      imgUrl: fwImg1,
    },
    {
      title: "Dream Theory",
      description: "TREND F/W 21",
      imgUrl: fwImg2,
    },
    {
      title: "Duality",
      description: "TREND F/W 20",
      imgUrl: fwImg3,
    },
  ]; 

  const ss_projects = [
    {
      title: "Tide",
      description: "TREND S/S 22",
      imgUrl: ssImg1,
    },
    {
      title: "Unveiled",
      description: "TREND S/S 21",
      imgUrl: ssImg2,
    },
    {
      title: "The Shift",
      description: "TREND S/S 19",
      imgUrl: ssImg3,
    },
  ];

  return (
    // <section className="project" id="project">
    <section className="project" id="projects">

      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Published Issues</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">S/S</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">F/W</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                          {
                            ss_projects.map((ss_project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...ss_project}
                                  />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          fw_projects.map((fw_project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...fw_project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
