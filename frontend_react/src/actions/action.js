import axios from 'axios'
import {
    ADD_TO_CART, BUY_PRODUCT,
    BUY_PRODUCTS_URL,
    GET_PRODUCT,
    GET_PRODUCT_URL,
    GET_PRODUCTS,
    GET_PRODUCTS_URL, REMOVE_FROM_CART,
    REMOVE_PRODUCT,
} from "../const";
var _ = require('lodash')

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

export function addToCart(product){
    return{
        type:ADD_TO_CART,
        product
    }
}
function getProductSuccess(product){
    return{
        type:GET_PRODUCT,
        product
    }
}

export function buyProduct(products){
    // console.log("In Action",products)
    var sortedProducts =  _.sortBy(products,['_id'])
    sortedProducts = JSON.stringify(sortedProducts)
    return (dispatch)=>{
        axios.get(BUY_PRODUCTS_URL+sortedProducts).then(response=>{
            console.log(response.data)
            if(response.data[0]==='sufficientInventory'){
                axios.put(BUY_PRODUCTS_URL+sortedProducts)
                    .then(response=>{
                        console.log(response)
                        alert('Bought')
                        dispatch(buyProductSuccess())
                    })
                    .catch(function(error){
                        console.log(error)
                    })

            }
            if(response.data[0]=='insufficientInventory'){
                alert(response.data)
            }
        })
    }
}

export function removeFromCart(id){
    return{
        type:REMOVE_FROM_CART,
        id
    }
}

function buyProductSuccess(){
    return{
        type:BUY_PRODUCT
    }
}
