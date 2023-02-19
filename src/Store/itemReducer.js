

const defaultState = {
    item: {}
}

const TAKE_PRODUCT = 'TAKE_PRODUCT'

export const itemReducer = (state = defaultState,action) =>{
    switch(action.type){

        case TAKE_PRODUCT :
            return {...state , item: action.payload}


        default:
            return state
    } 
    
}


export const takeItemAction = (payload) => ({ type: TAKE_PRODUCT , payload})