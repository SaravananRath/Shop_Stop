import { connect } from 'react-redux'
import Cart from '../_3_pages/Cart'
import { buyProduct,removeFromCart} from "../_0_actions";

const props = (state) =>{
    return{
        cartProducts: state.productsInCart
    }
}
const dispatch = (dispatch) =>{
    return{
        buyProducts : (products)=> dispatch(buyProduct(products)),
        removeFromCart:(id)=>dispatch(removeFromCart(id))
    }
}
export default connect(props,dispatch)(Cart)

