import React from 'react';
import ReactDOM from 'react-dom';

const sound = [{
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

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      audio: sound.filter(obj => obj.trigger == this.props.text.toLowerCase())
    };
  }
  render(){
    //console.log(this.state.audio[0]);
    return(
      <div id={"sound-" + this.state.audio[0].trigger} onClick={this.props.action} className="drum-pad btn btn-outline-primary rounded-0 p-3">
        <audio className='clip' id={this.state.audio[0].trigger.toUpperCase()} name={this.state.audio[0].name} src={this.state.audio[0].url}></audio>
        {this.state.audio[0].trigger.toUpperCase()}
      </div>
    )
  }
}

class Drum extends React.Component{
  constructor (props){
    super(props);
    this.playSound = this.playSound.bind(this);
  }
  
  componentDidMount(){
    document.addEventListener("keydown", this.playSound);
  }
  
  playSound(e){
    if(e.key != undefined){
      const sound = document.getElementById("sound-" + e.key).querySelector('audio');
    }else{
      const sound = e.target.querySelector('audio');
    }
    document.getElementById("display").innerHTML = sound.getAttribute("name");
    sound.play();
  }
  
  render(){
    return(
      <div id="drum-machine" className="container text-center p-2">
              <div id="display" className="p-3 text-center"></div>
              <div className="d-flex flex-column">
                <div className="col-md-4 d-flex">
                  <Button text="Q" action={this.playSound} />
                  <Button text="W" action={this.playSound} />
                  <Button text="E" action={this.playSound} />
                </div>
                <div className="col-md-4 d-flex">
                  <Button text="A" action={this.playSound} />
                  <Button text="S" action={this.playSound} />
                  <Button text="D" action={this.playSound} />
                </div>
                <div className="col-md-4 d-flex">
                  <Button text="Z" action={this.playSound} />
                  <Button text="X" action={this.playSound} />
                  <Button text="C" action={this.playSound} />
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
