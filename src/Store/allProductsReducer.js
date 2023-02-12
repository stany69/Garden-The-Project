
const defaultState = {
    products: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'
const REM_PRODUCTS = 'REM_PRODUCTS'
const ADD_COUNT = 'ADD_COUNT'



export const allProductsReducer = (state = defaultState,action) =>{
    switch(action.type){

        case ALL_PRODUCTS :
            return {...state , products: [ ...action.payload]}


            case ADD_COUNT:
                return {...state , products:state.products.map( elem =>{
                    if (elem.id == action.payload ){
                       elem.count = elem.count + 1
                    }
                    return elem
                })}



            case ADD_PRODUCTS:
                let newGood = state.products.find(elem => elem.name == action.payload)
    
                  if(newGood){
                    return{...state,products: state.products.map(elem=>{
                        if(elem.id == newGood.id){
                            elem.count = elem.count+1
                        }
                        return elem
                    })}


              } else {
                return {...state , products : [...state.products,{
                    id:Math.max(...state.products.map(elem => elem.id))+1,
                    name:action.payload,
                    count:1
                }]}
              }
              

              case REM_PRODUCTS:     

              let good = state.products.find(elem =>elem.id == action.payload)
              if(good.count == 1){
               return {...state,products:state.products.filter(elem => elem.id != action.payload)}
              } else{
                   return{...state , products: state.products.map (elem => {
                   if( elem.id == action.payload ){               
                       elem.count = elem.count -1
                   } 
                   return elem
               }) }
           }


        default:
            return state
    } 
    
}


export const AllProductsAction = (payload) => ({ type: ALL_PRODUCTS , payload})
export const AddProductsAction = (payload) => ({ type: ADD_PRODUCTS,payload})
export const RemProductsAction = (payload) => ({ type: REM_PRODUCTS,payload})
export const AddCountAction = (payload)  => ({ type: ADD_COUNT,payload})