import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="container text-center">
        hello world
      </div>
    )
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById('react-app')
);
