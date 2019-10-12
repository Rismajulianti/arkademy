import React, { component } from "react";

class App extends component{
	constructor(props) {
		super(props);
		this.state = {
			title: "halo",
			header:"text"
		}
	};


handleClik() {
	console.log("clik");
	console.log("clik");
	console.log("clik");
	console.log("clik");
}

render() {
	return (
		<div>
		<p>{this.state.title.text}</p>
		<p>{this.state.title.header}</p>
		<button onClik={()=> this.handleClik()}>Button</button>
		</div>
		);
}
	}
 export default App;