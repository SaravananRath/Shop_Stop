import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { buyProduct,removeFromCart} from "../actions/action";

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

