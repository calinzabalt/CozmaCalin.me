import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <Router>
      <div className="App">
      <Toolbar drawerClickHandler={this.drawerClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}   
          <Route exact path="/" component={Home} />
          <Route path="/Portofolio" component={Portofolio} />
          <Route path="/Contact" component={Contact} />
      <Footer />
       </div>
     </Router>
    );
  }
}

export default App;
