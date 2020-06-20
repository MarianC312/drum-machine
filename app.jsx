import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text
    };
  }
  render(){
    return(
      <div id="" className="drum-pad">
        {this.state.text}
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
      <div id="drum-machine" className="container text-center">
        <div id="display">
        
        </div>
         <Button text="Q" />
      </div>
    )
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById('react-app')
);
