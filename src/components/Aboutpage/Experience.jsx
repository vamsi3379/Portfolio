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
                  <li style={{fontFamily:"aveneir next"}}> Led the migration of a legacy Shark bite victim's database to a .NET-based framework on AWS, achieving a 33% performance increase through column analysis and optimization. Developed a robust .NET admin dashboard to streamline database management tasks.</li>
                  <li style={{fontFamily:"aveneir next"}}> Efficiently resolved numerous deployment complexities by integrating Nginx and significantly enhanced the performance of .NET APIs through meticulous debugging and systematic code refinement processes.</li>
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
                <h5 className="vertical-timeline-element-subtitle" style={{color:"black", fontFamily:"aveneir next"}}>University of Florida (Malt Group)</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}>Crafted a dynamic .NET web dashboard interfacing with Kafka data streams and AWS S3 storage solutions, ensuring real-time data accessibility and management.</li>
                  <li style={{fontFamily:"aveneir next"}}>Engineered a .NET and React based real-time traffic monitoring platform, processing and analyzing sensor data across over 100 intersections in major urban hubs like Orlando, featuring Auth0 security integration and live data visualization.</li>
                  <li style={{fontFamily:"aveneir next"}}>Developed and maintained a robust CI/CD pipeline utilizing Jenkins and Docker within the .NET framework, achieving a 90% reduction in deployment downtime and enhancing operational efficiency.</li>
                   <li style={{fontFamily:"aveneir next"}}>Guaranteed continuous service availability and eliminated downtime by implementing a strategic .NET deployment strategy with Nginx and Docker on AWS, enabling fluid updates across a distributed network infrastructure.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    Jan 2022 - Dec 2022
                </span>}
                iconStyle={{ background: 'black', color: '#4158d0' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title" style={{color:"black", fontFamily:"aveneir next"}}>Backend Developert</h3>
                <h5 className="vertical-timeline-element-subtitle" style={{color:"black", fontFamily:"aveneir next"}}>UPSC Pre</h5>
                <ul>
                  <li style={{fontFamily:"aveneir next"}}>Created an android learning platform application for students to prepare for the most competitive exams conducted by UPSC (Union Public Service Commission) of India while closely collaborating with 3 others.</li>
                  <li style={{fontFamily:"aveneir next"}}>Achieved top ten ranking among UPSC-related applications on the Play Store. Currently, overseeing the expansion of the existing android app by introducing a web application component.</li>
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