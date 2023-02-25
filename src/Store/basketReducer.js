

const defaultState = {
    basket:JSON.parse(localStorage.getItem('basket')) ?? []
}


const ADD_ITEM ='ADD_ITEM'
const ADD_COUNTBASKET = 'ADD_COUNTBASKET'
const REM_BASKETPRODUCTS = 'REM_BASKETPRODUCTS'
const ADD_PRODUCTSBASKET = 'ADD_PRODUCTSBASKET'

export const basketReducer = (state = defaultState, action) =>{

    switch(action.type){
        case ADD_ITEM:
          return {...state, basket: [...state.basket, {...action.payload, count: 1}]}

          case ADD_COUNTBASKET:
            return {...state , basket:state.basket.map( elem =>{
                if (elem.id == action.payload ){
                   elem.count = elem.count + 1
                }
                return elem
            }),count:1}

            case REM_BASKETPRODUCTS:     

              let good = state.basket.find(elem =>elem.id == action.payload)
              if(good.count == 1){
               return {...state,basket:state.basket.filter(elem => elem.id != action.payload)}
              } else{
                   return{...state , basket: state.basket.map (elem => {
                   if( elem.id == action.payload ){               
                       elem.count = elem.count -1
                   } 
                   return elem
               }) }
           }

           case ADD_PRODUCTSBASKET:

            let new_entries = state.basket.find(elem => elem.id == action.payload.id)
            if (new_entries) {             
                return {...state, basket: state.basket.map(elem => {
                    if (elem.id == new_entries.id){
                        elem.count = elem.count + 1
                    }
                    return elem
                })}
            } else {
                return {...state, basket: [...state.basket, {...action.payload, count: 1}]}}


        default:
            return state
    }
} 



export const addItemAction = (payload) => ({type: ADD_ITEM, payload})
export const AddCountBasketAction = (payload) => ({type: ADD_COUNTBASKET, payload})
export const RemBasketProductsAction = (payload) => ({type: REM_BASKETPRODUCTS, payload})
export const AddProductsBasketAction = (payload) => ({type: ADD_PRODUCTSBASKET,payload})