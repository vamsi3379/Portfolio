import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/olx-clone image.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col xs={6} md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="UPSC Pre"
                description="Built an android learning platform application for students to prepare for the most competitive exams conducted by
                UPSC (Union Public Service Commission) of India while closely collaborating with 3 others. Ranked among top ten UPSC-related applications, the app is available on Playstore with a productivity boost of 20%
                and user engagement boost of 40% in the past year."
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>

            <Col xs={6} md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="PeekNshop"
                description="Brought together hundreds of nearby local stores that do not have proper online shopping facilities and displayed the
                local offers available by accessing the user location with an SDLC implementation using agile methodology. Designed a web application with three other teammates using Angular for the front end and GO language for the back
                end."
                ghLink="https://github.com/vamsi3379/peekNshop"
              />
            </Col>

            <Col xs={6} md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Hand-Written-Mathematical-Symbols-Classification"
                description="The project aims to build a machine-learning model that can recognize various mathematical symbols. We're using a large dataset created by the team, containing 10 symbol patterns. Each team member contributed around 100 symbols, resulting in a dataset of about 400 images. Each image is characterized by a Math Symbol, Label, and Integer Encoding. The Math Symbol is the pattern to be matched, Label is the character equivalent, and Integer Encoding is an integer digit ranging from 0 to 9."
                ghLink="https://github.com/vamsi3379/Hand-Written-Mathematical-Symbols-Classification"
              />
            </Col>

            <Col xs={6} md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Bitcoin Mining"
                description="Bitcoins are a type of cryptocurrency that use cryptographic hashing to limit their supply. The key component of a bitcoin is an input that, when hashed using SHA-256, produces an output smaller than a target value with a certain number of leading zeros. The goal of the project is to use Erlang and the Actor Model to build a solution that efficiently solves this problem on multi-core machines.."
                ghLink="https://github.com/vamsi3379/DOSP_Project1_Bitcoin_Mining"
              />
            </Col>

            <Col xs={6} md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Twitter Clone"
                description="Built a Twitter clone with a functional engine that supports registration, tweet sending with hashtags and mentions, tweet subscriptions, re-tweets, and live tweet delivery. Developed a tester/simulator to test the engine by simulating multiple users, live connections, and disconnections and implementing a Zipf distribution on subscriber numbers. The client and engine must be separate processes, with multiple independent client processes simulating thousands of clients and a single engine process."
                ghLink="https://github.com/vamsi3379/DOSP_Project4_TwitterSimulation_Part2"
              />
            </Col>

            <Col xs={6} md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="Gym Posture Correction"
                description="Gym Posture Corrector helps improve workout performance and posture without a personal trainer. It analyzes body posture and limb movements, comparing them with expert exercises to provide real-time feedback using advanced motion detection. Improve your body's health with our care."
                ghLink="https://github.com/vamsi3379/GymPostureCorrection"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist