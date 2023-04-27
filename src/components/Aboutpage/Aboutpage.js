import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Lottie from 'react-lottie';
import AboutPage from '../../Assets/AboutPageDeveloper.json'
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiErlang,
  DiAngularSimple,
  DiMysql,
} from "react-icons/di";
import {
  SiDjango,
  SiPostman,
  SiPostgresql,
} from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandGolang,
} from "react-icons/tb";
import {
  AiFillHtml5
} from "react-icons/ai";
import {
  BsFiletypeCss
} from "react-icons/bs";
// import PyImage from '../../Assets/70163-python-logo.json';
// import CImage from '../../Assets/17288-c-programming-animation.json';
// import JavaScriptImage from '../../Assets/111794-javascript.json';
// import JavaImage from '../../Assets/JavaImage.json';
// import SwiftImage from '../../Assets/99073-swift-logo.json';
// import MysqlImage from '../../Assets/112194-mysql.json';
// import ReactImage from '../../Assets/React_Image.json';
// import HTMLImage from '../../Assets/111797-html5.json';
// import AngularImage from '../../Assets/121147-angular.json';
// import MongoImage from '../../Assets/63210-mongo.json';
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: AboutPage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  // const COptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: CImage, 
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };
  // const JavaOptions = {
  //   loop: true,
  //   speed: 2.5,
  //   autoplay: true, 
  //   animationData: JavaImage, 
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   },
    
  // };
  // const SwiftOptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: SwiftImage, 
  //   speed:0.1,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };
  // const MysqlOptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: MysqlImage, 
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };
  // const ReactOptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: ReactImage, 
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };
  // const JavaScriptOptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: JavaScriptImage, 
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };
  // const HTMLOptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: HTMLImage, 
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   },
  //   speed: 1.5 // Add the speed property here
  // };
  
  // const AngularOptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: AngularImage, 
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };
  // const MongoOptions = {
  //   loop: true,
  //   autoplay: true, 
  //   animationData: MongoImage, 
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                <Col md={5}>
                        <div className="webimage">
                            <Lottie
                                options={defaultOptions}
                            />
                        </div>
                    </Col>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About Me</h3>
                        <p className='aboutdetails'>As a graduate student assistant for the Malt Group at the University of Florida, I helped to develop a real-time traffic monitoring system and designed and developed a fully functional web application using a variety of technologies. Prior to this, I worked at Celebal Technologies as an Associate Node.js Developer, where I pioneered a Microsoft Teams Bot application using Node.js, Microsoft Bot Framework Composer, and Azure Cloud. During my internship as a full-stack web developer at Fintroops Fintech Solutions Pvt. Ltd., I created full-stack web applications for a car trading platform, improving user engagement and experience. In addition to my professional experience, I have worked on several projects that have put my deep learning, natural language processing, and data science skills to use.
                        </p>
                        
                    </Col>
                    
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <h2 className='skillshead'>Languages</h2>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiPython />
                    <h5>Python</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <CgCPlusPlus />
                    <h5>C++</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiJava />
                    <h5>Java</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                    <h5>Jav Script</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <TbBrandTypescript />
                    <h5>Type Script</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiErlang />
                    <h5>Erlang</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <TbBrandGolang />
                    <h5>Go Lang</h5>
                  </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <h2 className='skillshead'>Technologies</h2>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiNodejs />
                    <h5>Node.js</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiReact />
                    <h5>React</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiMongodb />
                    <h5>MongoDB</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiAngularSimple />
                    <h5>Angular</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <SiDjango />
                    <h5>Django</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <BsFiletypeCss />
                    <h5>CSS</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <AiFillHtml5 />
                    <h5>HTML 5</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiMysql />
                    <h5>SQL</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <SiPostgresql />
                    <h5>PostgreSQL</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <SiPostman />
                    <h5>Postman</h5>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <DiGit />
                    <h5>Git</h5>
                  </Col>
                </Row>
                {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={PythonOptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={MysqlOptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={JavaScriptOptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={ReactOptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={HTMLOptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={AngularOptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={MongoOptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={COptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={JavaOptions}
                        />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <Lottie
                            options={SwiftOptions}
                        />
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

export default Aboutpage