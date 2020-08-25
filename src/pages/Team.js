import React, { Component } from 'react';
import axios from 'axios';
import luke from '../images/luke.jpg';
import leia from '../images/leia.jpg';
import mace from '../images/mace.jpg';

class Team extends Component {

render(){
  return(
    <React.Fragment>
      <div className="hero"></div>
        <div className="person">
          <div className="team2"></div>
          <p className="name">Daniela DeLeon</p>
          <p><a href="https://www.linkedin.com/in/daniela-deleon-989563a8/">linkedin.com/in/daniela-deleon-989563a8/</a></p>
        </div>
        <div className="person">
          <div className="team3"></div>
          <p className="name">Ayon Bhattacharya</p>
          <p><a href="https://ayontech.io/">ayontech.io</a></p>
        </div>
        <div className="people">
          <div className="person">
            <div className="team1"></div>
            <p className="name">Grant Wiersum</p>
            <p><a href="https://www.linkedin.com/in/gbwiersum/">linkedin.com/in/gbwiersum/</a></p>
          </div>
      </div>
    </React.Fragment>
  )
}

}

export default Team;
