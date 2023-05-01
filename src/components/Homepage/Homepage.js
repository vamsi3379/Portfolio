import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Lottie from 'react-lottie';
import HomeImage from '../../Assets/RJPmpgB4oS.json';
import Aboutpage from '../Aboutpage/Aboutpage';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: HomeImage, 
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext' style={{fontFamily:"aveneir next"}}>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext' style={{fontFamily:"aveneir next"}}>I'm Vamsi Pachamatla</h2>
            <span></span>
            <Text /> 
            <button onClick={() => {
              window.open("https://github.com/vamsi3379");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/vamsi-pachamatla-0b268b196/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            {/* <button onClick={() => {
              window.open("https://twitter.com/rahulvijay8156");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button> */}
            <button onClick={() => {
              window.open("https://instagram.com/vamsi_pachamatla?igshid=YmMyMTA2M2Y=");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"> 
              <Lottie
                  options={defaultOptions}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home