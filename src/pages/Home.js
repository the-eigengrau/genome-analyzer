import React, { Component } from 'react';
import axios from 'axios';
import {Ripple} from 'react-spinners-css';
import { MdHelp } from "react-icons/md";
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      prediction:0,
      predicted:false,
      virusName:'',
      loading:false,
      info:false
    };
  }

  inputMethod = () => {
    let i = !this.state.input;
    this.setState({input:i});
  }

  getData = async (file) => {
    this.setState({predicted:false})
    this.setState({loading:true})
    console.log('About to send POST')
    await axios.post("https://genomeanalyzer.wl.r.appspot.com/predict_upload", file, {
    }).then(response =>
      this.setState({prediction:response.data})
    )
    this.setState({loading:false})
    this.setState({predicted:true})
    console.log(this.state.prediction)
    console.log('Data POSTed')
  }

  sampleUploadHandler =  async (event) => {
     this.setState({loading:true})
     await axios.get("http://localhost:5000/sample").then(response =>
       this.setState({prediction:response.data})
     )
     this.setState({loading:false})
     this.setState({predicted:true})
     console.log(this.state.prediction)
     console.log('Data POSTed')
 }



 uploadHandler =  async (event) => {
    this.setState({loading:true})
    console.log(event.target.files[0])
    const data = new FormData()
    data.append('file', event.target.files[0])
    console.log(data)
    this.getData(data)
}

infoToggle = () => {
  this.setState({info:!this.state.info});
}

render(){
  return(
    <React.Fragment>
      <div className="hero"></div>
      <div className="float">
        <h1>Classify viral genomes with machine learning.</h1>
        {this.state.isPredicted ? <p class="Alert">{this.state.stopSignPrediction}</p> : null}

        {this.state.loading ? null:
        <div className="inputSection">
        <div className="inputButton">
        <div className="magicConchShell">
        <label className="custom-file-upload">

          <input className="Input" type="file" name="file" onChange={this.uploadHandler}/>
            Upload file
        </label>
        <label className="custom-file-upload">
          <button className="sample" onClick={()=>this.sampleUploadHandler()}>Use sample genome </button>
        </label>

        </div>
        <button className='help' onClick={() => this.infoToggle()}><MdHelp/></button>
        </div>

        {this.state.info ? <p>Upload a .txt file containing a viral genome segment in FASTA format.</p>: null}
        </div>
        }

        {this.state.loading ?
          <div className="loadingSection">
            <Ripple className='loading' color='white'/>
            <p>This can take several minutes. Great time to make a coffee.</p>
          </div> : null}

          {this.state.predicted ?
            <div className="predictionSection">
              <p>This virus is genetically closest to {this.state.prediction}.</p>
            </div> : null}

      </div>
    </React.Fragment>
  )
}

}

export default Home;
