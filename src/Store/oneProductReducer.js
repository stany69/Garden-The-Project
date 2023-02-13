

const defaultState = {
    oneProduct: []
}

const TAKE_PRODUCT = 'TAKE_PRODUCT'

export const oneProductReducer = (state = defaultState,action) =>{
    switch(action.type){

        case TAKE_PRODUCT :
            return {...state , oneProduct:[... action.payload]}


        default:
            return state
    } 
    
}


export const takeProductsAction = (payload) => ({ type: TAKE_PRODUCT , payload})