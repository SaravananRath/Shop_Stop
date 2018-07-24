import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state={
            imageUrl:''
        }
    }
    componentDidMount(){
         axios.get('/products')
             .then(res=>{
                 console.log(res.data)
                 this.setState({imageUrl:res.data})
             })
             .catch(error=>{
                 console.log("Error"+error)
             })
        // this.setState({imageUrl:})
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

            {/*<img src="http://localhost:3001/image-1532425576487.jpg" alt=""/>*/}
            {/*<img src={require("../../backend_express_mongo/app/public/uploads/image-1532425576487.jpg")} alt="Not availables"/>*/}
            {/*<img src="../../backend_express_mongo/app/public/uploads/image-1532425576487.jpg" alt="No image"/>*/}
        </p>
          <img src={this.state.imageUrl} width='300px' alt="Not available"/>
      </div>
    );
  }
}

export default App;
