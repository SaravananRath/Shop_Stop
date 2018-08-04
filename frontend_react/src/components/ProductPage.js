import React , { Component } from 'react'
import Button from '@material-ui/core/Button'
import NavAppBar from './Appbar'
class ProductPage extends Component{
    componentDidMount(){
        this.props.getProduct()
    }
    componentWillUnmount(){
        this.props.removeProduct()

    }
    handleClick(product){
        if(this.props.addToCart) {
            this.props.addToCart(product)
        }
    }
    renderCarousel() {
        var Carousel = require('react-responsive-carousel').Carousel;
       return ((this.props.product.imageUrls)?(<div className='bigcarousel'><Carousel  axis='vertical' autoPlay  width='400px'>{this.props.product.imageUrls.map((url,index)=>{
            return(
                <img src={'/'+url} key={index} alt='not available'/>
            )
        })}</Carousel></div>):(<div>No</div>))
    }
    renderDetails(){
        let { product,cartProducts} = this.props


        if(product){
            // if(cartProducts && product)console.log(cartProducts[product._id])
            // var arr = Object.values(cartProducts)
            // if(cartProducts)console.log(arr[0])
            // // var cartProduct = cartProducts[product._id]
            // // console.log(cartProduct)
            return(<div>
               <b> <h2>{product.productName}</h2></b>
                <span className="price">Rs {product.productPrice}</span>
                <span className='discount'>{product.productDiscount}% OFF</span>
               <p> <span className='discountedPrice'><b>Rs {product.discountedPrice}</b></span></p>
                <hr/>
                <p>{product.description}</p>
                <p>Remaining:{product.productCount}</p>
                <hr/>
                {(product.productCount > 0)?(<Button variant="contained" color="primary" onClick={()=>this.handleClick({product})}>
                    Add To Cart
                </Button>):(<div>Coming soon</div>) }




            </div>)
        }
        return(<div>No Props</div>)
    }

    render(){
        return(
            <div>
                <NavAppBar/>

                {/*{(this.props.product.imageUrls)?(this.props.product.imageUrls.map((url,index)=>{*/}
                    {/*console.log('/'+url)*/}
                    {/*return(*/}
                        {/*<img src={'/'+url} key={index} alt='not available'/>*/}
                    {/*)*/}
                {/*})):(<div>No</div>)}*/}
                {this.renderCarousel()}
                {this.renderDetails()}
            </div>

        )
    }
}
export default ProductPage