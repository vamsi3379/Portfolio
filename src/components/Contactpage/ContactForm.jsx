import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

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
    <div className="container">
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>Vamsi Pachamatla</span></p> */}
    </div>
  );
};

export default ContactForm;
