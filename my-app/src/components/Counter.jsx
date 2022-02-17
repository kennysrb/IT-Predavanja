import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    imgURL: `https://i.picsum.photos/id/130/200/200.jpg?hmac=pMGv0FZ4yiuwOp40JbbSUg8DSKRdq2Rx70VXtqMrbjI`,
    tags: ["tag1", "tag2", "tag3"]
  }

  // constructor(){
  //   super();
  //   console.log('Constructor', this)
  //   this.formatCount = this.formatCount.bind(this)
  // }

  handleIncrement = ()=>{
    console.log('handleIncrement');
    this.setState({counter: this.state.counter + 1})
  }

  handleDecrement = () =>{
    this.setState({counter: this.state.counter - 1})
  }
  styles = {
    fontSize: "10px",
    fontWeight: 'bold'
  }

  // formatCount() {
  //   //destructuring
  //   const { counter }= this.state;
  //   console.log(counter);

  // }

  formatCount = () =>{
    const {counter} = this.state;
    return counter === 0 ? "Zero" : counter
  }

  addClass = () =>{
    const {counter} = this.state;
    return counter <= 0 ? "warning" : "successful" 
  }

  render() {
    return (
      <div>
        <h2 style={this.styles}>Pozdrav iz Child komponente</h2>
        <p style={{fontSize: 30}}>Ja sam paragraf</p>
        <img src={this.state.imgURL} alt="" />
        <br />
        {/* <p>Count: {this.state.counter}</p>*/}
        <button onClick={this.handleIncrement}>+</button>
        <p className={this.addClass()}>Count: {this.formatCount()}</p>
        <button onClick={this.handleDecrement}>-</button>

        <h1>Tagovi</h1>

        {/* .map je isto sto i  forEach samo sa obicnim zagradama */}
        {
          this.state.tags.map((tag, index) =>(
            <p  key={index}># {tag}</p>
          ))
          }
      </div>
    );
  }
}

export default Counter;