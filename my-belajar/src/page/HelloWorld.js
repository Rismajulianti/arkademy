import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        nama: 'code',
        age : '16',
        gender: 'male',
    }
    componentDidMount(){
        this.setState({
            nama: 'HALLOOOOOOO',
            age: '25',
            gender: 'famale',
            number: 0
        })
    }

    handleAddvalue() {
        if(this.state.number < 10)
        {
        this.setState({
            number:this.state.number +1
        })
    }
}
      handleMinvalue() {
        if(this.state.number > 0)
        {
            this.setState({
        number: this.state.number - 1
        })
      }
    }

    handleResetvalue(){
        this.setState({
            number:0
        })
    }
    
    render(){
        return(
            <div>
                <h1>Rismajulianti{this.state.nama} my age is: {this.state.age} this gender:{this.state.gender}</h1>
            <div>
              <h1><b>{this.state.number}</b></h1>
              <button onClick={() => this.handleAddvalue()}>+</button>
              <button onClick={() => this.handleMinvalue()}>-</button>
              <button onClick={() => this.handleResetvalue()}>0</button>

            </div>
            </div>

        )
    }
}

export default HelloWorld;