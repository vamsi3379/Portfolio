import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdOutlineWork} from "react-icons/md";
import { Container, Row } from 'react-bootstrap'

const Experience = () => (
    <>
    <Container>
      <Row style={{ justifyContent: "center" }}>
          <h3 className='skillshead' style={{fontFamily:"aveneir next", marginBottom:"20px"}}>Experience</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <VerticalTimeline>
              <style>{`
      .vertical-timeline::before {
        background-color: black;
      }
    `}</style>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    Jun 2023 - Present
                </span>}
                iconStyle={{ background: 'black', color: '#4158d0' }}
                icon={<MdOutlineWork />}
                >
                <h3 className="vertical-timeline-element-title" style={{color:"black", fontFamily:"aveneir next"}}>Graduate Research Assistant</h3>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"black", fontFamily:"aveneir next"}}>University of Florida</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}> Executed a seamless migration of a legacy Shark bite victims database from the 2000s to AWS server, while incorporating an admin dashboard for user submissions.</li>
                  <li style={{fontFamily:"aveneir next"}}> Enhanced optimization of storage capabilities and database performance by thorough column analysis and refinement.</li>
                  <li style={{fontFamily:"aveneir next"}}>Leveraged the extensive functionalities of the D3.js framework to create comprehensive data visualizations based on shark attacks and geolocations.</li>
                </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    Jan 2023 - May 2023
                </span>}
                iconStyle={{ background: 'black', color: '#4158d0' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"black", fontFamily:"aveneir next"}}>Graduate Student Assistant</h3>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"black", fontFamily:"aveneir next"}}>Malt Group</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}>Streamlined the sensor data for 100+ traffic intersections in large scale cities like Orlando for efficient real-time traffic monitoring.</li>
                  <li style={{fontFamily:"aveneir next"}}>Harnessed technologies like Node.js, React, Express.js, PostgreSQL, AWS Cloud and Auth0 to design and develop a fully functional web application.</li>
                  <li style={{fontFamily:"aveneir next"}}>Employed a high-availability deployment strategy using Kubernetes and Docker services on AWS, ensuring 0 downtime and seamless updates across multiple cluster nodes.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    Aug 2021 - Oct 2021
                </span>}
                iconStyle={{ background: 'black', color: '#4158d0' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"black", fontFamily:"aveneir next"}}>Associate Nodejs Developer</h3>
                <h5 className="vertical-timeline-element-subtitle"style={{color:"black", fontFamily:"aveneir next"}}>Celebal Technologies</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}>Developed and maintained a Microsoft Teams Bot application using Node.js and the Microsoft Bot Framework, streamlining HR processes and reducing manual workload by 30%, while ensuring smooth functionality and optimal performance.</li>
                  <li style={{fontFamily:"aveneir next"}}>Collaborated with cross-functional teams, including designers and product managers, to gather requirements and implement new features and enhancements in the chatbot.
</li>
                </ul>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </Row>
    </Container>
    

        
    </>
);

export default Experience;