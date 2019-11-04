import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
  };

  handleAdd() {
    if (this.state.count < 10){
    this.setState({ count: this.state.count + 1});
  }
}
  handleMin() {
    if(this.state.count > 0){
      this.setState({ count: this.state.count - 1});
    }
  }
  handleReset() {
    this.setState({ count: 0});
  }

    render(){
      return(
        <div className="body" >
          <p>{this.state.count}</p>
          <button onClick={() => this.handleAdd()}>+</button>
          <button onClick={() => this.handleMin()}>-</button>
          <button onClick={() => this.handleReset()}>0</button>
        </div>
      );
    }
}

export default App;