import React , { Component } from 'react'
import NavAppBar from './Navbar'
import MediaControlCard from './CartProduct'
import Button from '@material-ui/core/Button'
import {Paper} from '@material-ui/core'
class Cart extends Component{

    renderCartProducts(){
        const { cartProducts,removeFromCart } = this.props
        return(
            (cartProducts)?(Object.values(cartProducts).map((product,index)=>{
                return (
                <div className='cartMedia' key={index}>
                    <MediaControlCard cartProduct={product} removeProduct={removeFromCart} />
                </div>
                )
            })):(<div>No data</div>)
        )
    }
    renderPricing(){
        const { cartProducts } = this.props
        return(
            (cartProducts)?(Object.values(cartProducts).map((product,index)=>{
                return(
                    <div key={index}>
                       <p>{product.discountedPrice} * {product.quantity} = {product.discountedPrice*product.quantity}</p>
                    </div>
                )
                })
        ):(<div>No data</div>))
    }
    renderTotal(){
        const { cartProducts,buyProducts } = this.props
        let price,totalprice=0
        let arr = Object.values(cartProducts)
        if(cartProducts){
            for(let i=0;i<arr.length;i++){
                price=arr[i].discountedPrice*arr[i].quantity
                totalprice+=price
            }
                 }
        return(<div><h3><b>Total Price</b></h3><p>Total = {totalprice}</p>
             <Button variant='text' color='secondary' onClick={()=> {
                 // console.log(Object.values(cartProducts).length===0)
                 if(Object.values(cartProducts).length!==0) {
                     buyProducts(Object.values(cartProducts))
                 }

             }
                }>BUY</Button>
        </div>)

    }
    render(){
        return(
            <div>
            <NavAppBar/>
            <div className='cartContainer'>
                <h1>Cart Page</h1>
                <div className='cartProducts'>
                {this.renderCartProducts()}
                </div>
                <div className='pricing'>

                {this.renderPricing()}
                {this.renderTotal()}

                </div>
            </div>
            </div>

        )
    }
}
export default Cart