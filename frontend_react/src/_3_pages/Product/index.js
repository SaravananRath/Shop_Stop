import React , { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Paper from'@material-ui/core/Paper'
import NavAppBar from '../../components/Navbar'
class Product extends Component{
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
            return(<div>
               <b> <h2>{product.productName}</h2></b>
                <span className="price">Rs {product.productPrice}</span>
                <span className='discount'>{product.productDiscount}% OFF</span>
               <p> <span className='discountedPrice'><b>Rs {product.discountedPrice}</b></span></p>
                <hr/>
                <p>{product.description}</p>
                <p>Remaining:{product.productCount}</p>
                <hr/>
                <b><h4>Reviews</h4></b>
                {/*{(product.reviews)?(console.log(product.reviews)):(<div>loading</div>)}*/}
                {(product.reviews)?(product.reviews.map((review,index)=>{
                    return (
                    <p key={index}>{review}</p>
                )
                })):(<div>loading</div>)}

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
                <Grid container >
                    <Grid item xs={12} sm={4}>{this.renderCarousel()}</Grid>
                <Grid item xs={12} sm={8}>{this.renderDetails()}</Grid>
                </Grid>
            </div>

        )
    }
}
export default Product