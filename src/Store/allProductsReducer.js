
const defaultState = {
    products: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'

export const allProductsReducer = (state = defaultState,action) =>{
    switch(action.type){

        case ALL_PRODUCTS :
            return {...state , products: [ ...action.payload]}


        default:
            return state
    } 
    
}


export const AllProductsAction = (payload) => ({ type: ALL_PRODUCTS , payload})