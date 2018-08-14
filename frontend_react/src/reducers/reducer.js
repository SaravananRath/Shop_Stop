import {ADD_TO_CART, BUY_PRODUCT, GET_PRODUCT, GET_PRODUCTS, REMOVE_FROM_CART, REMOVE_PRODUCT} from "../const";
import { combineReducers } from 'redux';
var _ = require('lodash')

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
        case ADD_TO_CART:{
            return{
                ...state,
                productCount:state.productCount-1
            }
        }
        default:
            return state
         }

}

const productsInCart=(state={},action)=>{
    switch(action.type){
        case ADD_TO_CART:{
            let bool = false
            let keyArr = Object.keys(state)
            for(let x = 0 ; x<keyArr.length;x++){
                if(keyArr[x]===action.product.product._id){
                    bool=true
                    break
                }
            }

            if(bool){
                let id = action.product.product._id
                return{...state,[id]:{
                        ...state[id],
                        quantity:state[id].quantity+1
                    }
                }

            }

                let cartArr = [{
                    _id: action.product.product._id,
                    name: action.product.product.productName,
                    quantity: 1,
                    imageUrls:action.product.product.imageUrls,
                    price:action.product.product.productPrice,
                    discountedPrice:action.product.product.discountedPrice,
                    discount:action.product.product.productDiscount
                }
                ]
                return {...state, ..._.mapKeys(cartArr, '_id')}

        }
        case REMOVE_FROM_CART:{
            return(_.omit(state,action.id))
        }
        case BUY_PRODUCT:{
            console.log('Bought')
            return([])
        }

        default:
            return state
    }

}


const rootReducer= combineReducers({
    productsById:productsById,
    productIdSearch:productIdSearch,
    productsInCart:productsInCart
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