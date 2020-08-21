import React, { Component } from 'react';
import axios from 'axios';
import {Ripple} from 'react-spinners-css';
import { MdHelp } from "react-icons/md";
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      prediction:'',
      predicted:false,
      virusName:'',
      loading:false,
      info:false
    };
  }

  coronaDictionary = {
    0:'Bovine Coronaviruus, Mebus - U00735 ',
    1:'SARS-CoV2 Embecoviruus - NC_048217',
    2:'NL63-Related Bat Coronavirus - NC_048216',
    3:'Duck Coronavirus - NC_048214',
    4:'Infectious Bronchitis Virus - NC_048213',
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
      this.setState({prediction:this.coronaDictionary[response.data]})
    )
    this.setState({loading:false})
    this.setState({predicted:true})
    console.log(this.state.prediction)
    console.log('Data POSTed')
  }

  sampleUploadHandler =  async (event) => {
     this.setState({loading:true})
     await axios.get("https://genomeanalyzer.wl.r.appspot.com/sample").then(response =>
       this.setState({prediction:this.coronaDictionary[response.data]})
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
        <h1>Classify coronavirus genomes with machine learning.</h1>
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
              <p><strong>This virus is genetically closest to {this.state.prediction}.</strong></p>
              <p><a href="https://www.ncbi.nlm.nih.gov/genomes/GenomesGroup.cgi">Click here</a> for more information on Coronaviridae genomes.</p>
            </div> : null}

      </div>
    </React.Fragment>
  )
}

}

export default Home;
