import React, {Component} from 'react';

class TextArea extends Component {
    state = {
        description: "Content of txt area",
    }


    handleChange = e =>{
        this.setState({description: e.target.value})
    }
    render (){
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.description} onChange={this.handleChange}/>
            </form>
        )
    }
}

export default TextArea;