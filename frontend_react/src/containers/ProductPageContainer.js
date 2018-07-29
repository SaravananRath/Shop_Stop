import ProductPage from '../components/ProductPage'
import { connect } from 'react-redux'
import { getProduct,removeProduct } from "../actions/action";

const props =(state)=> {
        return {
        product:state.productIdSearch
        }}


const dispatch = (dispatch,props)=>{
    return{
        getProduct:()=>dispatch(getProduct(props.params.id)),
        removeProduct:()=>dispatch(removeProduct())
        }
}

export default connect(props,dispatch)(ProductPage)