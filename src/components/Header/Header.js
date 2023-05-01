import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../pages/style.css';
import Homepage from '../Homepage/Homepage'
import Aboutpage from '../Aboutpage/Aboutpage';
import Projectlist from '../Projectlist/Projectlist';
import Contact from '../Contactpage/Contactpage';
import Experience from '../Aboutpage/Experience';

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const experience = document.getElementById("experience");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");
      console.log("home",home.getBoundingClientRect().top)
      console.log("about",about.getBoundingClientRect().top)
      console.log("experience",experience.getBoundingClientRect().top)
      console.log("projects",projects.getBoundingClientRect().top)
      console.log("contact",contact.getBoundingClientRect().top)
      
      if (contact && contact.getBoundingClientRect().top <= 0) {
        setCurrentSection("contact");
      }else if (projects && projects.getBoundingClientRect().top <= 0) {
        setCurrentSection("projects");
      }else if (experience && experience.getBoundingClientRect().top <= 0) {
        setCurrentSection("experience");
      } else if (about && about.getBoundingClientRect().top <= 0) {
        setCurrentSection("about");
      } else if (home && home.getBoundingClientRect().top <= 0) {
        setCurrentSection("home");
      } 
      console.log(currentSection)
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);



  

  
  const print = () => {
    console.log(currentSection);
  }
  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    updateExpanded(false);
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <>
    <Navbar expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : `navbar ${currentSection}`}
      >


      <Navbar.Brand className='logotext'>
        {/* <Nav.Link as={Link} to="/" onClick={() => {updateExpanded(false);}}> Vamsi Pachamatla</Nav.Link> */}
        <div className='navbar-toggle'>
          <h5 style={{color:"#4158d0"}}>Vamsi</h5>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded")}}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>

        <Nav className="ms-auto" defaultActiveKey="#home">
         <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(homeRef)}
              className={`rounded ${currentSection === "home" ? "selected-nav-item" : ""}`}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(aboutRef)}
              className={`rounded ${currentSection === "about" ? "selected-nav-item" : ""}`}
            >
                About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(experienceRef)}
              className={`rounded ${currentSection === "experience" ? "selected-nav-item" : ""}`}
            >
                Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(projectRef)}
              className={`rounded ${currentSection === "projects" ? "selected-nav-item" : ""}`}
            >
                Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(contactRef)}
              className={`rounded ${currentSection === "contact" ? "selected-nav-item" : ""}`}
            >
                Contact
            </Nav.Link>
          </Nav.Item>
          <Button
            onClick={() => {
              window.open("https://drive.google.com/file/d/1cWQ2i2s7s4LAi7Fz7RTsPpNGAEwIkUi_/view?usp=sharing");
            }}
            className='resumebtn'><span>Resume</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div id="home" ref={homeRef}>
      <Homepage/>
    </div>

    <div id="about" ref={aboutRef} onClick={print}>
      <Aboutpage/>
    </div>
    <div id="experience" ref={experienceRef} onClick={print} style={{paddingTop:"50px"}}>
      <Experience/>
    </div>
    <div id="projects" ref={projectRef} onClick={print} style={{paddingTop:"50px"}}>
      <Projectlist/>
    </div>
    <div id="contact" ref={contactRef} onClick={print} style={{paddingTop:"50px"}}>
      <Contact/>
    </div>
    </>
  );
}

export default Header;
