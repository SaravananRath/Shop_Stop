import React, { Component } from 'react';
import ProductCard from './ProductCard';
class Product extends Component {

    componentDidMount(){
        this.props.getProducts()
    }
    renderProducts(){
        return(
            (this.props.products)?(this.props.products.map((product,index)=>{
                return(<div key={index}>
                    <li key={index}>{product.productName}</li>
                    {product.imageUrls.map((url,index)=>{
                        return(<img key={index} src={url} alt="not available"/>)
                    })}
                    </div>
                )

            })):(<div></div>)
        )
    }

    render() {

        return (
            <div className="App">
                <h1>Hello World</h1>
                {/*{(this.state.products)?(this.state.products.imageUrls.map((a,index)=>{return(<img key={index} src={a}  width='200px' height='280px'/>)})):(<div></div>)}*/}
                <ProductCard products={this.props.products}/>
               <ul> {this.renderProducts()}</ul>
                </div>
        );
    }
}

export default Product;
