

const defaultState = {
    basket:[]
}


const ADD_ITEM ='ADD_ITEM'

export const basketReducer = (state = defaultState, action) =>{

    switch(action.type){
        case ADD_ITEM:
          return {...state, basket: [...state.basket, {...action.payload, count: 1}]}
        default:
            return state
    }
} 



export const addItemAction = (payload) => ({type: ADD_ITEM, payload})