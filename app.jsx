import React from 'react';
import ReactDOM from 'react-dom';


class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text,
      id: this.props.text
    };
  }
  render(){
    return(
      <div id={this.state.id} className="drum-pad btn btn-outline-primary m-1 rounded-0 p-3">
        {this.state.text}
      </div>
    )
  }
}

const sounds = [{
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater-1",
    trigger: "q"
  },{
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2",
    trigger: "w"
  },{
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater-3",
    trigger: "e"
  },{
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater-4_1",
    trigger: "a"
  },{
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Heater-6",
    trigger: "s"
  },{
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Dsc_Oh",
    trigger: "d"
  },{
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick_n_Hat",
    trigger: "z"
  },{
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "RP4_KICK_1",
    trigger: "x"
  },{
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Cev_H2",
    trigger: "c"
  }];

class Drum extends React.Component{
  constructor (props){
    super(props);
  }
  
  render(){
    return(
      <div id="drum-machine" className="container text-center">
              <div id="display p-3 text-center">
              
              </div>
              <div className="d-flex flex-column">
                <div className="col-md-4 d-flex">
                  <Button text="Q" />
                  <Button text="W" />
                  <Button text="E" />
                </div>
                <div className="col-md-4 d-flex">
                  <Button text="A" />
                  <Button text="S" />
                  <Button text="D" />
                </div>
                <div className="col-md-4 d-flex">
                  <Button text="Z" />
                  <Button text="X" />
                  <Button text="C" />
                </div>
              </div>
               
            </div>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="border border-secondary">
                <div>
                  <Drum />
                </div>
              </div>
            </div>
      
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('drum-app')
);
