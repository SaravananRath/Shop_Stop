import React, { Component } from "react";
import ProductCard from "../../_2_components/ProductCard";
import { Link } from "react-router";
import NavAppBar from "../../_2_components/Navbar";
class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
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
    return (
      <div className="App">
        <NavAppBar />
        <ul className="productList"> {this.renderProducts()}</ul>
      </div>
    );
  }
}

export default Home;