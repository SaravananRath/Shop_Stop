import Home from '../_3_pages/Home'
import { connect } from 'react-redux'
import { getProducts } from "../_0_actions";

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

export default connect(props,dispatch)(Home)


