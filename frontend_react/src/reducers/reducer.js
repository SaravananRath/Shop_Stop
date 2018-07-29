import {GET_PRODUCT, GET_PRODUCTS, REMOVE_PRODUCT} from "../const";
import { combineReducers } from 'redux';
var _ = require('lodash')
// const initialState = {
//     productsById:[],
//     productById:[]
// }
 const productsById = (state={},action)=>{
    switch(action.type){
        case GET_PRODUCTS:{
            return {..._.mapKeys(action.products,'_id')}
        }

        default:
            return state

    }
}

const productIdSearch= (state={},action)=>{
    switch(action.type){
        case GET_PRODUCT:{
            return{...state,...action.product}
        }
        case REMOVE_PRODUCT:{
            return ([])
        }
        default:
            return state
         }

}

const rootReducer= combineReducers({
    productsById:productsById,
    productIdSearch:productIdSearch
})

export default rootReducer
// const productsById = (state=initialState,action)=>{
//     switch(action.type){
//         case GET_PRODUCTS:{
//             return {...state,productsById:_.mapKeys(action.products,'_id')}
//         }
//         case GET_PRODUCT:{
//             return {...state,productById:action.product}
//         }
//
//         default:
//             return state
//
//     }
// }
// export default productsById