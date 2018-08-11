import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css';  

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">About me!</h1>
        <p className="lead">My name is Cozma Viorel Călin, I’m a highly motivated developer from Romania.
         I have a passion for web development and I love to create websites from scratch.

</p>
        <hr className="my-2" />
        <p>Down below you can see more information about how I work.</p>
        <p className="lead">
          <a href="/Contact"><Button color="primary">Contact</Button></a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;