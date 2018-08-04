import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router'
// import NavAppBar from './Appbar'
// import Grow from '@material-ui/core/Grow'
import NavAppBar from './Appbar'
class Product extends Component {

    componentDidMount(){
        this.props.getProducts()
    }
    renderProducts(){
        return(
            (this.props.products)?(this.props.products.map((product,index)=>{
                return(
                    <li key={index} className='product'>
                        <Link to={`product/${product._id}`} style={{'textDecoration':'none'}}>
                       <ProductCard product={product}/>
                        </Link>
                    {/*<li key={index}>{product.productName}</li>*/}
                    {/*{product.imageUrls.map((url,index)=>{*/}
                        {/*return(<img key={index} src={url} alt="not available" />)*/}
                    {/*})}*/}
                    </li>
                )

            })):(<div></div>)
        )
    }

    render() {

        return (
            <div className="App">

                <NavAppBar/>
                {/*{(this.state.products)?(this.state.products.imageUrls.map((a,index)=>{return(<img key={index} src={a}  width='200px' height='280px'/>)})):(<div></div>)}*/}
                {/*<ProductCard products={this.props.products}/>*/}d
               <ul className='productList'> {this.renderProducts()}</ul>
                </div>
        );
    }
}

export default Product;
