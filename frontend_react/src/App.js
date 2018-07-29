import React, { Component } from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Product from './containers/ProductContainer'
class App extends Component {

    render() {
    return (

          // {(this.state.products)?(this.state.products.imageUrls.map((a,index)=>{return(<img key={index} src={a}  width='200px' height='280px'/>)})):(<div></div>)}
      <div>
        <Product/>
      </div>
    );
  }
}

export default App;
