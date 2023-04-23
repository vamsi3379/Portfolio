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
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import PyImage from '../../Assets/70163-python-logo.json';
import CImage from '../../Assets/17288-c-programming-animation.json';
import JavaScriptImage from '../../Assets/111794-javascript.json';
import JavaImage from '../../Assets/JavaImage.json';
import SwiftImage from '../../Assets/99073-swift-logo.json';
import MysqlImage from '../../Assets/112194-mysql.json';
import ReactImage from '../../Assets/React_Image.json';
import HTMLImage from '../../Assets/111797-html5.json';
import AngularImage from '../../Assets/121147-angular.json';
import MongoImage from '../../Assets/63210-mongo.json';
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: AboutPage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const PythonOptions = {
    loop: true,
    autoplay: true, 
    animationData: PyImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const COptions = {
    loop: true,
    autoplay: true, 
    animationData: CImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const JavaOptions = {
    loop: true,
    speed: 2.5,
    autoplay: true, 
    animationData: JavaImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    
  };
  const SwiftOptions = {
    loop: true,
    autoplay: true, 
    animationData: SwiftImage, 
    speed:0.1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const MysqlOptions = {
    loop: true,
    autoplay: true, 
    animationData: MysqlImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const ReactOptions = {
    loop: true,
    autoplay: true, 
    animationData: ReactImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const JavaScriptOptions = {
    loop: true,
    autoplay: true, 
    animationData: JavaScriptImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const HTMLOptions = {
    loop: true,
    autoplay: true, 
    animationData: HTMLImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    speed: 1.5 // Add the speed property here
  };
  
  const AngularOptions = {
    loop: true,
    autoplay: true, 
    animationData: AngularImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const MongoOptions = {
    loop: true,
    autoplay: true, 
    animationData: MongoImage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>As a graduate student assistant at the Malt Group at the University of Florida, I have contributed to the development of a real-time traffic monitoring system and designed and developed a fully functional web application using various technologies. Prior to this, I worked as an Associate Nodejs Developer at Celebal Technologies, where I pioneered a Microsoft Teams Bot application using Node.js, Microsoft Bot Framework Composer, and Azure cloud. During my internship as a Full Stack Web Developer at Fintroops Fintech Solutions PVT LTD, I developed full-stack web applications for a car trading platform, enhancing user experience and engagement. In addition to my professional experience, I have also worked on several projects that have leveraged my skills in deep learning, natural language processing, and data science.
                        </p>
                        
                    </Col>
                    <Col md={5}>
                        <div className="webimage">
                            <Lottie
                                options={defaultOptions}
                            />
                        </div>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <h2 className='skillshead'>Skills</h2>
                </Row>

                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage