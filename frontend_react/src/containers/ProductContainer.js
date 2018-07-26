import Product from '../components/Product'
import { connect } from 'react-redux'
import { getProducts } from "../actions/action";

const props = (state)=>{
    return {
        products: (state===undefined)?state:Object.values(state)
    }
}
const dispatch = (dispatch)=>{
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(props,dispatch)(Product)


