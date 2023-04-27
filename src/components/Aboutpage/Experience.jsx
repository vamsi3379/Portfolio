import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import starbucks from '../../Assets/starbucks.png'
import tesla from '../../Assets/tesla.png'
import shopify from '../../Assets/shopify.png'
import meta from '../../Assets/meta.png'
import "react-vertical-timeline-component/style.min.css";
import UF from '../../Assets/UF_Image.png'
import { styles } from './Style';
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "./motion";
import {BsFiletypeCss} from "react-icons/bs";
import {MdOutlineWork} from "react-icons/md";
const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
      {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
    ];
    
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={
        <span style={{ color: "#fff" }}>
          {experience.date}
        </span>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => (
    <>
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
                    2023 - present
                </span>}
                iconStyle={{ background: 'black', color: '#4158d0' }}
                icon={<MdOutlineWork />}
                >
                <h3 className="vertical-timeline-element-title">Graduate Student Assistant</h3>
                <h5 className="vertical-timeline-element-subtitle">Malt Group</h5>

                <p>
                    Streamlined the sensor data for 100+ traffic intersections in large scale cities like Orlando for efficient real-time traffic monitoring.
                </p>
                <p>
                    Harnessed technologies like Node.js, React, Express.js, PostgreSQL, AWS Cloud and Auth0 to design and develop a fully functional web application.
                </p>
                <p>
                    Implemented a high-availability deployment strategy using Kubernetes and Docker services on AWS, ensuring 0 downtime and seamless updates across multiple cluster nodes.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    2022 - 2022
                </span>}
                iconStyle={{ background: 'black', color: '#fff' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title">Celebal Technologies</h3>
                <h5 className="vertical-timeline-element-subtitle">Associate Nodejs Developer</h5>
                <p>
                    Developed a Microsoft Teams Bot application utilizing Node.js, Microsoft Bot Framework Composer, and Azure cloud technologies, trimming the HR processing manual load by 30%.
                </p>
                <p>
                    Collaborated with a team of 9 interns and 2 senior developers for successful application deployment, enabling easier time off or vacation requests directly through Teams, streamlining HR processes and reducing response times for leave requests.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4158d0', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #4158d0' }}
                date={<span style={{ color: "black" }}>
                    2022 - 2022
                </span>}
                iconStyle={{ background: 'black', color: '#fff' }}
                icon={<MdOutlineWork />}
            >
                <h3 className="vertical-timeline-element-title">Fintroops Fintech Solutions PVT LTD</h3>
                <h5 className="vertical-timeline-element-subtitle">Full Stack Web Developer Intern</h5>
                <p>
                    Designed a full-stack web application for a car trading platform using technologies including Express, Bootstrap, JavaScript, and Node.js with an active role in all stages of the software development life cycle.
                </p>
                <p>
                    Improved user experience by 20% and increased engagement by 15% through contributions to development of useful packages and features, leading to an increase in audience capture.
                </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<iconWork />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<iconWork />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<iconWork />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<iconWork />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<iconWork />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<iconWork />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<iconWork />}
        /> */}
        </VerticalTimeline>
    </>
);

export default SectionWrapper(Experience, "work");