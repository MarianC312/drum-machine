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

class Drum extends React.Component{
  constructor (props){
    super(props);
  }
  
  render(){
    return(
      <div id="drum-machine" className="container text-center">
              <div id="display">
              
              </div>
              <div className="row">
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
  document.getElementById('react-app')
);
