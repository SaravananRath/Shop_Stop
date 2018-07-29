import React , { Component } from 'react'

class ProductPage extends Component{
    componentDidMount(){
        this.props.getProduct()
    }
    render(){
        var Carousel = require('react-responsive-carousel').Carousel;

        return(
            <div>
            <h1>Product Page</h1>
                {(this.props.product.imageUrls)?(<Carousel width='250px' autoPlay>{this.props.product.imageUrls.map((url,index)=>{
                    console.log('/'+url)
                    return(
                    <img src={'/'+url} key={index} alt='not available'/>
                )
                })}</Carousel>):(<div>No</div>)}
            </div>
        )
    }
}
export default ProductPage