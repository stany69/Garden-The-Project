


const ALL_PRODUCTS = 'ALL_PRODUCTS'

export const allProductsReducer = (state,action) =>{
    switch(action.type){

        case ALL_PRODUCTS :
            return {...state , empl: [...state.empl , ...action.payload]}


        default:
            return state
    } 
    
}


export const AllProductsAction = (payload) => ({ type: ALL_PRODUCTS , payload})