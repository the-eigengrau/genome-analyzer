import React, { Component } from 'react';
import axios from 'axios';
import GLB from '../images/GLB.png';
import AFR from '../images/AFR.png';
import ASIA from '../images/ASIA.png';
import AMR from '../images/AMR.png';
import EU from '../images/EU.png';
import barplot from '../images/barplot(1).png';

class Data extends Component {

render(){
  return(
    <React.Fragment>
      <div className="hero"></div>
      <div className="explore">
        <div className="column">
          <div className="intro">
            <p className="name">Exploratory Data Analysis</p>
            <p>We used the NCBI Coronaviridae family genomic dataset to build our model. These are some additional insights and characterizations we derived from that data.</p>
          </div>
          <img src={ASIA}/>
          <img className="barplot" src={barplot}/>
        </div>
        <div className="column">
          <img src={GLB}/>
          <img src={EU}/>
        </div>
        <div className="column">
          <img src={AMR}/>
          <img src={AFR}/>
        </div>
        <div className="column">

        </div>
      </div>
    </React.Fragment>
  )
}

}

export default Data;
