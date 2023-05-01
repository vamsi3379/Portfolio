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
import { motion } from "framer-motion";



const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: AboutPage, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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
                        <h3 className='aboutmetext' style={{fontFamily:"aveneir next"}}>About Me</h3>
                        <p className='aboutdetails' style={{fontFamily:"aveneir next"}}>As a passioante Web Developer, I am currently pursuing Masters in Computer Science at the University of Florida. I have application knowledge as well as advanced skillset ranging from programming languages and technologies such as Python, Java, NodeJS, Angular, React, Kubernetes, Docker and Django. As a graduate student assistant for the Malt Group at the UF, I was an integral part in design and development of a real-time traffic monitoring system using various technologies. Prior to this, I worked at Celebal Technologies as an Associate Node.js Developer, where I pioneered a Microsoft Teams Bot application using Node.js, Microsoft Bot Framework Composer, and Azure Cloud. During my internship as a full-stack web developer at Fintroops Fintech Solutions Pvt. Ltd., I coordinated the development of full-stack web applications for a car trading platform, improving user engagement and experience. In addition to my professional experience, I have worked on several projects that have utilized my skills in deep learning, natural language processing, and data science. I have a research paper published for Grain disease identification and classification using Machine Learning Algorithms in The Journal of Cardio Vascular Disease and Research in July 2021.
                        </p>
                        
                    </Col>
                    
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <h3 className='skillshead' style={{fontFamily:"aveneir next"}}>Languages</h3>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiPython />
                      <h5 style={{color:'black'}}>Python</h5>
                  </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <CgCPlusPlus />
                      <h5 style={{color:'black'}}>C++</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiJava />
                      <h5 style={{color:'black'}}>Java</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiJavascript1 />
                      <h5 style={{color:'black'}}>Java Script</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <TbBrandTypescript />
                      <h5 style={{color:'black'}}>Type Script</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiErlang />
                      <h5 style={{color:'black'}}>Erlang</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <TbBrandGolang />
                      <h5 style={{color:'black'}}>Go Lang</h5>
                    </motion.div>
                  </Col>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <h3 className='skillshead' style={{fontFamily:"aveneir next"}}>Technologies</h3>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiNodejs />
                      <h5 style={{color:'black'}}>Node.js</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiReact />
                      <h5 style={{color:'black'}}>React</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiMongodb />
                      <h5 style={{color:'black'}}>MongoDB</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiAngularSimple />
                      <h5 style={{color:'black'}}>Angular</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <SiDjango />
                      <h5 style={{color:'black'}}>Django</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <BsFiletypeCss />
                      <h5 style={{color:'black'}}>CSS</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <AiFillHtml5 />
                      <h5 style={{color:'black'}}>HTML 5</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiMysql />
                      <h5 style={{color:'black'}}>SQL</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <SiPostgresql />
                      <h5 style={{color:'black'}}>PostgreSQL</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <SiPostman />
                      <h5 style={{color:'black'}}>Postman</h5>
                    </motion.div>
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <DiGit />
                      <h5 style={{color:'black'}}>Git</h5>
                    </motion.div>
                  </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage