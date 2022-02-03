import React, { Component } from 'react';
class ClassCounter extends Component {
    state = { 
        name:"",
        count:0,
     } 
     componentDidMount() {
         document.title= `clicked : ${this.state.count}`
     }
     componentDidUpdate(prevProps, prevState) {
         if(prevState.count !== this.state.count){
            // based on count state changes
            document.title= `clicked : ${this.state.count}`
            console.log("document title updating");
         }
     }
    render() { 
        return (
            <>
            <input type="text" onChange={(e)=> this.setState({name: e.target.value})} />
            <h1>{this.state.name}</h1>
            <button onClick={() =>this.setState({count : this.state.count+1})}>count : {this.state.count}</button>
            </>
        );
    }
}
 
export default ClassCounter;