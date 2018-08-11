import React, { Component } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

class Footer extends Component {
    render() {
      return (
        <footer>
          
        
        <Container>
          <Row>
            <Col sm="4">
            <div className="container1">
            <h3>Social Media Links:</h3>
        <a href="https://web.facebook.com/calinviorel.cozma" target="blank"><i className="fab fa-facebook-f fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/cozma-viorel-calin-947658145/" target="blank"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="https://www.youtube.com/channel/UCQ2N3yvA9bq0ZgXEK2m8pwA?view_as=subscriber" target="blank"><i className="fab fa-youtube fa-2x"></i></a>
        <a href="https://plus.google.com/u/0/112508366335698318230" target="blank"><i className="fab fa-google-plus fa-2x"></i></a>
           </div>
           </Col>

             <Col sm="4">
               <div className="copy">    
              <h3>Available for work</h3>
              <h6>Email: calinzabalt@gmail.com</h6>
              <div className="text-center"><a href="/Contact"><Button color="success">Message me</Button></a></div>
              <p>© 2018 All rights reserved</p>
              </div>
            </Col>

           <Col sm="4">
           <div className="footer-menu">
        <ul>
              
              <h3>Usefull links:</h3>
              <li><a href="/">Home</a></li>
              <li><a href="/Portofolio">Work</a></li>
              <li><a href="/Contact">Contact</a></li>
              <p>© 2018 All rights reserved</p>
              
        </ul>
        </div>
            </Col>
            </Row>
        </Container>      
         
        </footer>
      );
    }
  }
  
  export default Footer;