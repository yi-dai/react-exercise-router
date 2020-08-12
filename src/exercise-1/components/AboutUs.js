import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <p style={{paddingLeft:'20px'}}>Company: ThoughtWorks Local</p>
        <p style={{paddingLeft:'20px'}}>Location: Xi'an</p>
        <br />
        <p style={{paddingLeft:'20px'}}>For more information, please</p>
        <p style={{paddingLeft:'20px'}}>view our <Link to='/'>website</Link>. </p>
      </div>
    );
  }
}

export default AboutUs;
