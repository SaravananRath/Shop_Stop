import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state={
            products:''
        }
    }
    componentDidMount(){
         axios.get('/products')
             .then(res=>{
                 console.log(res.data[0])
                 this.setState({products:res.data[0]})
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
        </p>
          {(this.state.products)?(this.state.products.imageUrls.map((a,index)=>{return(<img key={index} src={a}  width='200px' height='280px'/>)})):(<div></div>)}
      </div>
    );
  }
}

export default App;
