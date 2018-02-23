import React from "react";
import "../stylesheets/main.scss";
//import Home from './Home';

// app component
export class App extends React.Component {
  // render
  render() {
    
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}


