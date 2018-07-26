import {GET_PRODUCTS} from "../const";

var _ = require('lodash')

export const productsById = (state={},action)=>{
    switch(action.type){
        case GET_PRODUCTS:{
            // console.log(action.products)
            // console.log(_.mapKeys(action.products,'_id'))
            return (_.mapKeys(action.products,'_id'))
            // return(_.mapKeys(action.data,'_id'))
        }
        default:
            return state

    }
}