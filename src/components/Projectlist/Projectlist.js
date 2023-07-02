import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import UPSCPre from '../../Assets/UPSC Pre.png'
import PeekNshop from '../../Assets/PeekNshop.png';
import HandwrittenSymbols from '../../Assets/Hand-Written-Mathematical-Symbols-Classification.png'
import Bitcoin from '../../Assets/Bitcoin.svg'
import Twitter from '../../Assets/Twitter.png'
import BookWise from '../../Assets/BookWise.png'
import RiceDisease from '../../Assets/RiceDisease.jpg'
import BlockChain from '../../Assets/BlockChain.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
        <Row style={{ justifyContent: "center" }}>
            <h3 className='skillshead' style={{fontFamily:"aveneir next"}}>Projects</h3>
        </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={UPSCPre}
                isBlog={true}
                paper={true}
                title="UPSC Pre"
                description="Built an android learning platform application for students to prepare for the most competitive exams conducted by
                UPSC (Union Public Service Commission) of India while closely collaborating with 3 others. Ranked among top ten UPSC-related applications, the app is available on Playstore with a productivity boost of 20%
                and user engagement boost of 40% in the past year."
                demoLink="https://play.google.com/store/apps/details?id=com.upscpre.iasprep&hl=en&gl=US"
                tags={["Next.js", "Node.js", "MongoDB", "Express", "AWS", "Elasticsearch", "Django", "Python"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={PeekNshop}
                isBlog={false}
                paper={false}
                title="PeekNshop"
                description="Brought together hundreds of nearby local stores that do not have proper online shopping facilities and displayed the
                local offers available by accessing the user location with an SDLC implementation using agile methodology. Designed a web application with three other teammates using Angular for the front end and GO language for the back
                end."
                ghLink="https://github.com/vamsi3379/peekNshop"
                tags={["Angular", "Bootstrap", "GO", "SQL", "Cypress", "FDigma"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={BookWise}
                isBlog={true}
                paper={false}
                title="Book Wise"
                description="Built an android learning platform application for students to prepare for the most competitive exams conducted by
                UPSC (Union Public Service Commission) of India while closely collaborating with 3 others. Ranked among top ten UPSC-related applications, the app is available on Playstore with a productivity boost of 20%
                and user engagement boost of 40% in the past year."
                ghLink="https://github.com/vamsi3379/Book_Wise"
                demoLink="https://ec2-18-189-18-248.us-east-2.compute.amazonaws.com/home"
                tags={["SpringBoot", "React", "MySQL", "Java", "TypeScript", "Okta", "Docker", "Microservices", "Kafka", "Stripe"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={HandwrittenSymbols}
                isBlog={false}
                paper={false}
                title="Hand-Written-Mathematical-Symbols-Classification"
                description="The project aims to build a machine-learning model that can recognize various mathematical symbols. We're using a large dataset created by the team, containing 10 symbol patterns. Each team member contributed around 100 symbols, resulting in a dataset of about 400 images. Each image is characterized by a Math Symbol, Label, and Integer Encoding. The Math Symbol is the pattern to be matched, Label is the character equivalent, and Integer Encoding is an integer digit ranging from 0 to 9."
                ghLink="https://github.com/vamsi3379/Hand-Written-Mathematical-Symbols-Classification"
                tags={["Python", "Tensorflow", "CNN", "SVM"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={Bitcoin}
                isBlog={false}
                paper={false}
                title="Bitcoin Mining"
                description="Bitcoins are a type of cryptocurrency that use cryptographic hashing to limit their supply. The key component of a bitcoin is an input that, when hashed using SHA-256, produces an output smaller than a target value with a certain number of leading zeros. The goal of the project is to use Erlang and the Actor Model to build a solution that efficiently solves this problem on multi-core machines."
                ghLink="https://github.com/vamsi3379/DOSP_Project1_Bitcoin_Mining"
                tags={["Erlang"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={Twitter}
                isBlog={false}
                paper={false}
                title="Twitter Clone"
                description="Built a Twitter clone with a functional engine that supports registration, tweet sending with hashtags and mentions, tweet subscriptions, re-tweets, and live tweet delivery. Developed a tester/simulator to test the engine by simulating multiple users, live connections, and disconnections and implementing a Zipf distribution on subscriber numbers. The client and engine must be separate processes, with multiple independent client processes simulating thousands of clients and a single engine process."
                ghLink="https://github.com/vamsi3379/DOSP_Project4_TwitterSimulation_Part2"
                tags={["Erlang"]}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={RiceDisease}
                isBlog={false}
                paper={true}
                title="Disease Identification and Grain Classification of Rice"
                description="This project develops an ML-based app to detect rice crop diseases from images with high accuracy (97.17% to 99.45%). It also classifies rice grains based on shape, size, and color with 91.30% accuracy. The automated system saves time and labor for farmers, promoting better agricultural production and economic growth in rice-producing regions."
                paperLink="http://jcdronline.org/admin/Uploads/Files/6246bd8e709364.92076684.pdf"
                tags={["Python", "CNN"]}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={BlockChain}
                isBlog={false}
                paper={true}
                title="Digital Voting Platform"
                description="This project creates a decentralized e-voting system using Ethereum Blockchain and cryptographic techniques for transparent and private voting. It eliminates the need for a third party, ensuring accurate results and cost reduction. Citizens can legally change their vote anytime, benefiting regions with limited infrastructure and high population density."
                paperLink="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003193425-10/lightweight-digital-voting-platform-using-blockchain-technology-nithin-kamineni-veera-nitish-mattaparthi-mona-reddy-mahalakshmi-vamsi-pachamatla-kuldeep-chaurasia-tanmay-bhowmik"
                tags={["HTML", "CSS", "Blockchain"]}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist