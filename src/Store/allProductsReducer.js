
const defaultState = {
    products: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'
const REM_PRODUCTS = 'REM_PRODUCTS'
const ADD_COUNT    =   'ADD_COUNT'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FILTER_PRODUCTS ='FILTER_PRODUCTS'
const FILTER_PRODUCTS_PRICE = 'FILTER_PRODUCTS_PRICE'


export const allProductsReducer = (state = defaultState,action) =>{
    switch(action.type){

        case ALL_PRODUCTS :
            return {...state , products: action.payload.map(elem =>({...elem, show: true}))}


            case ADD_COUNT:
                return {...state , products:state.products.map( elem =>{
                    if (elem.id == action.payload ){
                       elem.count = elem.count + 1
                    }
                    return elem
                }),count:1}



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

           case SORT_PRODUCTS:
            if(action.payload == 1){
               return{...state , products: state.products.slice().sort((crElem,nxElem) => crElem.price-nxElem.price)}
            } else if(action.payload == 2){
                return{...state , products: state.products.slice().sort((crElem,nxElem) => nxElem.price-crElem.price)}
            } else if(action.payload == 3){
                return{...state , products: state.products.slice().sort((crElem,nxElem) => {
                    if(crElem.title > nxElem.title) return 1
                    if(crElem.title < nxElem.title) return -1
                    if(crElem.title == nxElem.title) return 0

                })}
            
            }else{
                return state
            }

            case FILTER_PRODUCTS:
             if(action.payload){
                return{...state, products: state.products.map(elem =>{
                    if(elem.price - elem.discont_price === 0){
                        
                        elem.show = !elem.show
                    }
                    return elem
                })}
             } else {
                return {...state, products: state.products.map(elem =>({...elem, show: true}))}
             }

             case FILTER_PRODUCTS_PRICE:
             state.products = state.products.map(elem =>({...elem , show:true}))
            return {...state, products: state.products.map(elem => {
                if (!(elem.discont_price >= action.payload.min_price&& elem.discont_price <= action.payload.max_price)){
                    elem.show = false
                }
                return elem
            })}
       


        default:
            return state
    } 
    
}


export const AllProductsAction = (payload) => ({ type: ALL_PRODUCTS , payload})
export const AddProductsAction = (payload) => ({ type: ADD_PRODUCTS,payload})
export const RemProductsAction = (payload) => ({ type: REM_PRODUCTS,payload})
export const AddCountAction = (payload)  => ({ type: ADD_COUNT,payload})
export const SortProductsAction = (payload)  => ({ type: SORT_PRODUCTS,payload})
export const FilterProductsAction = (payload) => ({ type:FILTER_PRODUCTS , payload})
export const filterProductsPriceAction = (payload) => ({type: FILTER_PRODUCTS_PRICE, payload})