import axios from 'axios'
import {GET_PRODUCTS, GET_PRODUCTS_URL} from "../const";


export function getProducts(){
    return(dispatch)=>{
        axios.get(GET_PRODUCTS_URL)
            .then(response=>{
                // console.log(response.data)
                return(dispatch(getProductsSuccess(response.data)))
            })
            .catch(function(error){
                console.log(error)
            })
    }
}
function getProductsSuccess(products){
    return{
        type:GET_PRODUCTS,
        products
    }
}