import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";
import { MdHttp } from "react-icons/md";


function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontFamily:"avenir next" }}>{props.title}</Card.Title>
        <Card.Text style={{ fontFamily:"avenir next" }}>
          {props.description}
        </Card.Text>
        
        {/* {"\n"}
        {"\n"} */}


{props.isBlog && (
      <div className="button-container">
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          className="demobtn"
        >
          {"Demo"}
          <MdHttp></MdHttp>
        </Button>
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          className="demobtn"
        >
          {"GitHub"}
          <AiFillGithub></AiFillGithub>
        </Button>
      </div>
    )}



        {!props.isBlog && (
          <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
          {"GitHub"}
          <AiFillGithub></AiFillGithub>
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;