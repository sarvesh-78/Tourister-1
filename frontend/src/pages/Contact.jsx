import React, {useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button, Alert } from "reactstrap";
import emailjs from "emailjs-com"; // Import EmailJS
import "../styles/Contact.css";
import Subtitle from "../shared/Subtitle";

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState(''); // State to hold success or error message
  const [alertType, setAlertType] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId='service_lngyo77';
    const templateId='template_cjn4qgi';
    const publicKey='zmZyM4KyA42FfauM-'

    const templateParams={
        from_name:name,
        from_email:email,
        to_name:'web wizard',
        phone:phone,
        message:message,
    }

    emailjs
        .send(serviceId, templateId,templateParams,publicKey)
        .then((response) => {
            setStatusMessage('Email sent successfully!');
            setAlertType('success');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        })
        .catch((error) => {
            setStatusMessage('Failed to send email. Please try again later.');
            setAlertType('danger');
            console.error('Error sending mail:',error);
        });
    };
  return (
    <section>
      <Container>
        <Row>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            <Subtitle subtitle={"Contact Us"} />
            {statusMessage && (
              <Alert color={alertType} className="mt-3">
                {statusMessage}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}> {/* Attach onSubmit to Form */}
              <FormGroup className="form__group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  required
                />
              </FormGroup>
              <Button type="submit" className="btn primary__btn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;