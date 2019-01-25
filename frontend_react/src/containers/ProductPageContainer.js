import ProductPage from '../pages/Product'
import { connect } from 'react-redux'
import { getProduct,removeProduct,addToCart } from "../actions/action";

const props =(state)=> {
        return {
            product:state.productIdSearch,
            cartProducts:state.productsInCart
        }}
const dispatch = (dispatch,props)=>{
    return{
        getProduct:()=>dispatch(getProduct(props.params.id)),
        removeProduct:()=>dispatch(removeProduct()),
        addToCart: (product)=>dispatch(addToCart(product))
        }
}

export default connect(props,dispatch)(ProductPage)