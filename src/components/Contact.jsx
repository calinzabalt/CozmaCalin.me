import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
      return (
        <div className="background">
        <div className="box1">
        <h2>I’m currently available for freelance work.</h2>
        <p>If you have a project that you want to get started, or if you want my help to accomplish something you can contact me on this platforms:</p>
        </div>

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
        </div>
      );
    }
  }
  
  export default Contact;