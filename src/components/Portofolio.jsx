import React, { Component } from 'react';
import './Portofolio.css';
import { Jumbotron, Button } from 'reactstrap';
import { Grid, Row, Col, Image, } from 'react-bootstrap';


class Portofolio extends Component {
    render() {
      return (
        <div className="jumbotrons">
        <h1>Here are some of my latest projects</h1>

        <div className="change">
     <Jumbotron>
       <div className="box">
        <h2 className="display-3">Countdown-app!</h2>
        <p className="lead">This is a simple application that show how many days, hours, minutes and seconds are until your select date.</p>
        <hr className="my-2" />
        </div>
        <p className="lead">
        
        <a href="https://calinzabalt.github.io/count-down/" target="blank"> <Button color="primary">Try the app</Button></a>
        <a href="https://github.com/calinzabalt/CountDown-app" target="blank"> <Button color="primary">Source Code</Button></a>
                
        </p>
        
      </Jumbotron>
    </div>

     <div className="change1">
     <Jumbotron>
     <div className="box">
        <h2 className="display-3">Book-Explorer-App</h2>
        <p className="lead">This is an application where you can search for your favorite books.</p>
        <hr className="my-2" />
        </div>
        <p className="lead">
        <a href="https://calinzabalt.github.io/book-explorer/" target="blank"> <Button color="primary">Try the app</Button></a>
        <a href="https://github.com/calinzabalt/book-explorer/tree/master" target="blank"> <Button color="primary">Source Code</Button></a>
        </p>
      </Jumbotron>
    </div>

     <div className="change2">
     <Jumbotron>
     <div className="box">
        <h2 className="display-3">Website-Theme</h2>
        <p className="lead">This is a theme for a web shop with carousel, cards, responsive galery... </p>
        <hr className="my-2" />
        </div>
        <p className="lead">
        <a href="https://github.com/calinzabalt/Theme-clothes-website" target="blank"> <Button color="primary">Source Code</Button></a>
        </p>
      </Jumbotron>
    </div>
       <h1>Besides web development I have more skills . One of these are 3D designing and another one is animation maker</h1>     
    
       <Grid>
  <Row>
      
    <Col xs={12} md={6}>
    <div className="padding">
      <Image src="/imagini/web-design/0073.png" thumbnail />
      </div>
    </Col>
             
    <Col xs={12} md={6}>
    <div className="padding">
      <Image src="/imagini/web-design/grass.jpg" thumbnail />
      </div>
    </Col>
       
    <Col xs={12} md={6}>
    <div className="padding">
      <Image src="/imagini/web-design/planeta.jpg" thumbnail />
      </div>
    </Col>
       
     <Col xs={12} md={6}>
    <div className="padding">
      <Image src="/imagini/web-design/0071.jpg" thumbnail />
      </div>
    </Col>
   
    <Col xs={12} md={6}>
    <div className="padding">
      <Image src="/imagini/web-design/remastered zabalt.jpg" thumbnail />
      </div>
    </Col>

    <Col xs={12} md={6}>
    <div className="padding">
      <Image src="/imagini/web-design/league of zabalt.png" thumbnail />
      </div>
    </Col>

    <Col xs={12} md={6}>
    <div className="padding">
      <Image src="/imagini/web-design/mastercalin.png" thumbnail />
      </div>
    </Col>

    </Row>
</Grid>

<div className="container-fluid">
  <div className="align">
  <div className="row">
          <div className="col-sm-6 center">
          <div className="video-padding">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videos" src="https://www.youtube.com/embed/XZppMeWxCuk" frameBorder="0" allowFullScreen ></iframe>
            </div>
            </div>
          </div>

          <div className="col-sm-6 center">
          <div className="video-padding">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videos" src="https://www.youtube.com/embed/1qNz8LDjG_I" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
          </div>

          <div className="col-sm-6 center">
          <div className="video-padding">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videos" src="https://www.youtube.com/embed/srrh_u1nMG0" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
          </div>

          <div className="col-sm-6 center">
          <div className="video-padding">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="videos" src="https://www.youtube.com/embed/olyZHJrjrh8" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
          </div>
  </div>
  </div>
  </div>
    
    </div>

      );
    }
  }
  
  export default Portofolio;
