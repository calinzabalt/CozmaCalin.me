import React, { Component } from 'react';
import './Contact.css';
import { Container, Row, Col } from 'reactstrap';

class Contact extends Component {
    render() {
      return (
        <div className="background">
        <div className="box1">
        <h2>I’m currently available for freelance work.</h2>
        <p>If you have a project that you want to get started, or if you want my help to accomplish something you can contact me on this platform:</p>
        </div>


        <Container>
          <Row>
            <Col sm="12">
        
        <form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        
        </Col>
        </Row>
        </Container>
        </div>
      );
    }
  }
  
  export default Contact;