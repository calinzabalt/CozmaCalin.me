import React, { Component } from 'react';
import './Home.css';
import Cards from './Cards/Card';
import Jumbo from './Jumbotron/Jumbotron'

class Home extends Component {
    render() {
      return (
        
        <div>
        <div className="intro">
      <div className="overlay">
      <h2>Hi! my name is Călin and I'm a</h2>
      <h3>"front-end developer"</h3>
    </div>
  </div>

<Jumbo />
<Cards />

</div>
     
      );
    }
  }
  
  export default Home;