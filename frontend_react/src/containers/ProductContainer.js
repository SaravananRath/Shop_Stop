import Product from '../components/Product'
import { connect } from 'react-redux'
import { getProducts } from "../actions/action";

const products = (prod_arr)=>{
    // let new_prod_arr = Object.assign(prod_arr)
    // console.log(new_prod_arr)
    return prod_arr
}

const props = (state)=>{
    return {
        products: (state.productsById===undefined)?state.productsById:products(Object.values(state.productsById))
    }
}
const dispatch = (dispatch)=>{
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(props,dispatch)(Product)


