import React, { Component } from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Product from './_4_pages_containers/ProductContainer'
class App extends Component {

    render() {
    return (
      <div>
        <Product/>
      </div>
    );
  }
}

export default App;
