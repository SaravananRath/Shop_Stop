import axios from 'axios'
import {GET_PRODUCT, GET_PRODUCT_URL, GET_PRODUCTS, GET_PRODUCTS_URL, REMOVE_PRODUCT,} from "../const";


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

export function getProduct(id){
    return(dispatch)=>{
        axios.get(GET_PRODUCT_URL+id)
            .then(response=>{
                return(dispatch(getProductSuccess(response.data)))
            })
            .catch(function(error){
                console.log(error)
            })
    }
}

export function removeProduct(){
    return {
        type: REMOVE_PRODUCT
    }
}

function getProductSuccess(product){
    return{
        type:GET_PRODUCT,
        product
    }
}
