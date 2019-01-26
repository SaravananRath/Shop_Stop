import React, { Component } from "react";
import ProductCard from "../../_2_components/ProductCard";
import { Link } from "react-router";
import NavAppBar from "../../_2_components/Navbar";
import Loader from '../../_2_components/Loader'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    this.props.getProducts();
    setTimeout(() => {
      this.setState({ isLoading:false })
    }, 800);
  }
  renderProducts() {
    return this.props.products ? (
      this.props.products.map((product, index) => {
        return (
          <li key={index} className="product">
            <Link
              to={`product/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductCard product={product} />
            </Link>
          </li>
        );
      })
    ) : (
      <div />
    );
  }

  render() {
    const { isLoading } = this.state
    return (
       <div className="App">
        <NavAppBar />
          {isLoading ? <Loader/> :  <ul className="productList"> {this.renderProducts()}</ul>}
       </div>
      

    );
  }
}

export default Home;
