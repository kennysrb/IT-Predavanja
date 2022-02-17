import './App.css';
// import Form from './components/Form';
// import Inputs from './components/Inputs';
// import Textarea from './components/Textarea';
// import Select from './components/Select';


// function App() {
//   return (
//     <div className="App">
//       {/* <Form /> */}
//       {/* <Inputs/> */}
//       {/* <Textarea/> */}
//       <Select/>
//     </div>
//   );
// }

// export default App;

import React, {Component} from 'react';
import ChildComponent1 from './components/ChildComponent';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "This name will change in 3 sec"
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({name: "The name was changed"})
    }, 3000);
  }

  render(){
    return (
    // <div>
    //   <p>{this.state.name}</p>
    // </div>
    <ChildComponent1/>
    )
  }
}

