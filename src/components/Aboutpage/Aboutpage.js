import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>As a graduate student assistant at the Malt Group at the University of Florida, I have contributed to the development of a real-time traffic monitoring system and designed and developed a fully functional web application using various technologies. Prior to this, I worked as an Associate Nodejs Developer at Celebal Technologies, where I pioneered a Microsoft Teams Bot application using Node.js, Microsoft Bot Framework Composer, and Azure cloud. During my internship as a Full Stack Web Developer at Fintroops Fintech Solutions PVT LTD, I developed full-stack web applications for a car trading platform, enhancing user experience and engagement. In addition to my professional experience, I have also worked on several projects that have leveraged my skills in deep learning, natural language processing, and data science.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage