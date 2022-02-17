import React, { Component } from 'react';
import ChildCounter from './ChildCounter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
        ]
     } 

     handleIncrement = (id) =>{
        console.log(id);


        this.setState({
            counters:  this.state.counters.map((item)=>{
                return item.id === id ? {...item, value: item.value +1 } : item;
            }),
        });
    };

    deleteIncrement = (id)=>{
        this.setState((previousState) =>({
            counters: previousState.counters.filter((item) =>
            item.id !== id)
        }));}
    
    render() { 
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <ChildCounter key={counter.id} counter = {counter} onIncrement = {this.handleIncrement
                    } onDecrement={this.deleteIncrement}/>
                ))}
            </div>
        );
    }
}
 
export default Counters;