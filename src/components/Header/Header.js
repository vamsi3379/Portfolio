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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    if (home && home.getBoundingClientRect().top <= 0) {
      setCurrentSection("home");
    } else if (about && about.getBoundingClientRect().top <= 0) {
      setCurrentSection("about");
    } else if (projects && projects.getBoundingClientRect().top <= 0) {
      setCurrentSection("projects");
    } else if (contact && contact.getBoundingClientRect().top <= 0) {
      setCurrentSection("contact");
    }

  };

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
              className='rounded' 
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(aboutRef)}
              className='rounded' 
            >
                About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(experienceRef)}
              className='rounded' 
            >
                Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(projectRef)}
              className='rounded' 
            >
                Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick(contactRef)}
              className='rounded' 
            >
                Conact
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
    <div ref={homeRef}>
      <Homepage/>
    </div>

    <div ref={aboutRef}>
      <Aboutpage/>
    </div>
    <div ref={experienceRef}>
      <Experience/>
    </div>
    <div ref={projectRef}>
      <Projectlist/>
    </div>
    <div ref={contactRef}>
      <Contact/>
    </div>
    </>
  );
}

export default Header;
