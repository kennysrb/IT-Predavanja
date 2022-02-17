import React, {Component} from 'react';

class Inputs extends Component {
    state = {
        name: "",
        age: "",
        errorMessage: "",
    }

    handleChange = e =>{
        let name = e.target.name;
        let value = e.target.value;

        this.setState( {  } )
        console.log('hangleChange', name, value)

        let errorMsg = "";
        if(name === "age"){
            if(value !== "" && !Number(value)){
                errorMsg = "You must enter a number."
            }
        }
        this.setState({ [name]: value });
        this.setState({ errorMessage: errorMsg });
    };

    render (){
        return(
            <form>
                <h1>Hello {this.state.name}</h1>
                <p>Your age is: {this.state.age}</p>

                <p>Enter your name</p>
                <input type="text" name='name' onChange={this.handleChange}/>

                <p>Enter your age</p>
                <input type="text" name='age' onChange={this.handleChange}/>
               <strong style={{color: "red"}}>{this.state.errorMessage}</strong>
            </form>
        )
    }
}

export default Inputs;