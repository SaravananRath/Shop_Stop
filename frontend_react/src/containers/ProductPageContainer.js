import ProductPage from '../components/ProductPage'
import { connect } from 'react-redux'
import { getProduct } from "../actions/action";

const props =(state)=> {
        return {
        product:state.productIdSearch
        }}


const dispatch = (dispatch,props)=>{
    return{
        getProduct:()=>dispatch(getProduct(props.params.id))
        }
}

export default connect(props,dispatch)(ProductPage)