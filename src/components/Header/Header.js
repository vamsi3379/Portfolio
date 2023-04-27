import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../pages/style.css';

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [homeSelected, setHomeSelected] = useState(false);
  // const [aboutSelected, setAboutSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  useEffect(() => {
    if (window.location.href === "https://vamsipachamatla.com/"){
      setHomeSelected(true)
    // }else if (window.location.href === "https://vamsipachamatla.com/about"){
    //   setAboutSelected(true)
    }else if (window.location.href === "https://vamsipachamatla.com/project"){
      setProjectsSelected(true)
    }else if (window.location.href === "https://vamsipachamatla.com/contact"){
      setContactSelected(true)
    }
    
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}>


      <Navbar.Brand className='logotext' as={Link} to='/'>
        {/* <Nav.Link as={Link} to="/" onClick={() => {updateExpanded(false);}}> Vamsi Pachamatla</Nav.Link> */}
        <div className='logo'></div>
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
          {homeSelected&&(
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {updateExpanded(false);}}
                className='selected-nav-item rounded' 
              >
                Home
              </Nav.Link>
            </Nav.Item>
          )}
          {!homeSelected&&(
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {updateExpanded(false);}}
              >
                Home
              </Nav.Link>
            </Nav.Item>
          )}

          {/* {aboutSelected&&(
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {updateExpanded(false);}}
                className='selected-nav-item rounded' 
              >
                About
              </Nav.Link>
            </Nav.Item>
          )}
          {!aboutSelected&&(
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {updateExpanded(false);}}
              >
                About
              </Nav.Link>
            </Nav.Item>
          )} */}
          {projectsSelected&&(
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => {updateExpanded(false);}}
                className='selected-nav-item rounded' 
              >
                Projects
              </Nav.Link>
            </Nav.Item>
          )}
          {!projectsSelected&&(
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => {updateExpanded(false);}}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
          )}

          {contactSelected&&(
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => {updateExpanded(false);}}
                className='selected-nav-item rounded' 
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          )}
          {!contactSelected&&(
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => {updateExpanded(false);}}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          )}
          <Button
            onClick={() => {
              window.open("https://drive.google.com/file/d/1cWQ2i2s7s4LAi7Fz7RTsPpNGAEwIkUi_/view?usp=sharing");
            }}
            className='resumebtn'><span>Resume</span>
          </Button>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
