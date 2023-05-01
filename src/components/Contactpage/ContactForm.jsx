import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };
    emailjs.send(process.env.REACT_APP_ServiceId, process.env.REACT_APP_TemplateID, templateParams, process.env.REACT_APP_API_Key)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000); // hide success message after 5 seconds
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <>
    {/* <div className="container">
        {showSuccessMessage && (
        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
          Message sent successfully!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </Form.Group>
        <div style={{textAlign: "center"}}>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </div>
      </Form>
    </div> */}
    <div id="contact" className="contact-area section-padding">
  <div className="container">
    <div className="section-title text-center">
      <h1>Get in Touch</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
    </div>
    <Row>
      <div className="col-lg-7">
        <div className="contact">
          <form className="form" name="enq" method="post">
          <Row>
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Name" required/>
              </div>
              <div className="form-group col-md-6">
                <input type="email" name="email" className="form-control" placeholder="Email" required/>
              </div>
              <div className="form-group col-md-12 contactmessage" style={{marginTop:"20px", marginBottom:"20px"}}>
                <textarea rows="6" name="message" className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
              </div>
              </Row>
          </form>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="single_address">
          <i className="fa fa-map-marker"></i>
          <h4>Our Address</h4>
          <p>3800 SW 34th Street Gainesville, FL 32608</p>
        </div>
        <div className="single_address">
          <i className="fa fa-envelope"></i>
          <h4>Send your message</h4>
          <p>vamsi.pachamatla@ufl.edu</p>
        </div>
        <div className="single_address">
          <i className="fa fa-phone"></i>
          <h4>Call us on</h4>
          <p>(+1) 352 740 9879</p>
        </div>
      </div>
      </Row>
  </div>
</div>
<span></span>
<span></span>
<span></span>
  <div class="container p-4"></div>
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a class="text-white" href="https://vamsipachamatla.com">vamsipachamatla.com</a>
  </div>

    </>
  );
};

export default ContactForm;
