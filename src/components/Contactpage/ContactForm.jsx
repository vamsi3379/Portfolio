import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { Row } from 'react-bootstrap'

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
    {showSuccessMessage && (
        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
          Message sent successfully!
        </Alert>
      )}
    <div id="contact" className="contact-area section-padding">
  <div className="container">
    <div className="section-title text-center">
      <h1 style={{fontFamily:"aveneir next"}}>Get in Touch</h1>
      <p style={{fontFamily:"aveneir next"}}>I'm always open to hearing about exciting new opportunities in the software engineering field. If you're interested in working with a driven and knowledgeable developer, don't hesitate to get in touch.</p>
    </div>
    <Row>
      <div className="col-lg-7">
        <div className="contact">
        <Form onSubmit={handleSubmit}>
          <Row>
              <div className="form-group col-md-6">
                <input style={{fontFamily:"aveneir next"}} type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group col-md-6">
                <input style={{fontFamily:"aveneir next"}} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form-group col-md-12 contactmessage" style={{marginTop:"20px", marginBottom:"20px"}}>
                <textarea style={{fontFamily:"aveneir next"}} as="textarea" rows={5} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
              </div>
              </Row>
          </Form>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="single_address">
          <i className="fa fa-map-marker"></i>
          <h4 style={{fontFamily:"aveneir next"}}>Our Address</h4>
          <p style={{fontFamily:"aveneir next"}}>3800 SW 34th Street Gainesville, FL 32608</p>
        </div>
        <div className="single_address">
          <i className="fa fa-envelope"></i>
          <h4 style={{fontFamily:"aveneir next"}}>Send your message</h4>
          <p style={{fontFamily:"aveneir next"}}>vamsi.pachamatla@ufl.edu</p>
        </div>
        <div className="single_address">
          <i className="fa fa-phone"></i>
          <h4 style={{fontFamily:"aveneir next"}}>Call us on</h4>
          <p style={{fontFamily:"aveneir next"}}>(+1) 352 740 9879</p>
        </div>
      </div>
      </Row>
  </div>
</div>
<span></span>
<span></span>
<span></span>
  <div className="container p-4"></div>

  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontFamily:"aveneir next" }}>
   Thank You for visiting.
  </div>


    </>
  );
};

export default ContactForm;
