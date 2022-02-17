import React, { Component } from 'react';

class ChildCounter extends Component {
    render() { 
        return (
            <div style={{margin:15}}>#{this.props.counter.value}
            <button onClick={()=> this.props.onIncrement(this.props.counter.id)}>+</button>
            <button onClick={() => this.props.onDecrement(this.props.counter.id)}>Delete</button>
            </div>
        );
    }
}
 
export default ChildCounter;