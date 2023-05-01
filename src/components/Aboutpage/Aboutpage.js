import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Lottie from 'react-lottie';
import AboutPage from '../../Assets/AboutPageDeveloper.json';


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
            </Container>
        </div>
    )
}

export default Aboutpage