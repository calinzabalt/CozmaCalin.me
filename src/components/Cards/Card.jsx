import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import './Card.css';  
import { Container, Row, Col } from 'reactstrap';

  const Cards = (props) => {
    return (
      <div>
<Container>          
  <Row>        
    <Col sm="4">
        <Card>
          <CardImg top width="100%" src="/imagini/responsive-2044932_1280.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Responsive Design</CardTitle>
            <CardText>My goals are to focus on aspect, content, speed and a fully responsive website that run on every device. </CardText>
            <a href="/Portofolio"><Button color="success">Portofolio</Button></a>
          </CardBody>
        </Card>
        
        </Col> 

        <Col sm="4">
        <Card>
          <CardImg top width="100%" src="/imagini/analysis-blackboard-board-355952.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Solutions</CardTitle>
            <CardText>I will try to resolve your problems and provide new solutions for a better and competitive website. </CardText>
            <a href="/Portofolio"><Button color="info">Portofolio</Button></a>
          </CardBody>
        </Card>
        </Col> 

        <Col sm="4">
        <Card>
          <CardImg top width="100%" style={{height:270}} src="/imagini/react-seeklogo.com.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>How I do the work</CardTitle>
            <CardText>For a front-end website I use programming languages like: Javascript (React.js, Vue.js).</CardText>
            <a href="/Portofolio"><Button color="danger">Portofolio</Button></a>
          </CardBody>
        </Card>
        </Col> 
    </Row>  
</Container>      
      </div>
      
    );
  };
  
  export default Cards;