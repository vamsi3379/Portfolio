import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
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


function Skills() {
    return (
            <Container>
                <Row style={{ justifyContent: "center"}}>
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
                    <h3 className='skillshead' style={{fontFamily:"aveneir next", paddingTop:"60px"}}>Technologies</h3>
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
    )
}

export default Skills