

const defaultState = {
    category:[]
}




const GET_CATEGORY = 'GET_CATEGORY'

const SORT_CATEGORY = 'SORT_PRODUCTS'
const FILTER_CATEGORY ='FILTER_CATEGORY'
const FILTER_CATEGORY_PRICE = 'FILTER_CATEGORY_PRICE'

export const OneCategoryReducer = (state = defaultState , action) =>{

    switch(action.type){

        case GET_CATEGORY:
            return {...state , category: [...action.payload]}



            case SORT_CATEGORY:
                if(action.payload == 1){
                   return{...state , category: state.category.slice().sort((crElem,nxElem) => crElem.price-nxElem.price)}
                } else if(action.payload == 2){
                    return{...state , category: state.category.slice().sort((crElem,nxElem) => nxElem.price-crElem.price)}
                } else if(action.payload == 3){
                    return{...state , category: state.category.slice().sort((crElem,nxElem) => {
                        if(crElem.title > nxElem.title) return 1
                        if(crElem.title < nxElem.title) return -1
                        if(crElem.title == nxElem.title) return 0
    
                    })}
                
                }else{
                    return state
                }
    
                case FILTER_CATEGORY:
                 if(action.payload){
                    return{...state, category: state.category.map(elem =>{
                        if(elem.price - elem.discont_price === 0){
                            
                            elem.show = !elem.show
                        }
                        return elem
                    })}
                 } else {
                    return {...state, category: state.category.map(elem =>({...elem, show: true}))}
             }
    
                 case FILTER_CATEGORY_PRICE:
                 state.category = state.category.map(elem =>({...elem , show:true}))
                return {...state, category: state.category.map(elem => {
                    if (!(elem.discont_price >= action.payload.min_price&& elem.discont_price <= action.payload.max_price)){
                        elem.show = false
                    }
                    return elem
                })}





        default: 
        return state 


    }

}


export const getOneCategoryAction = (payload) => ({ type:GET_CATEGORY,payload})

export const SortCategoryAction = (payload)  => ({ type: SORT_CATEGORY,payload})
export const FilterCategoryAction = (payload) => ({ type:FILTER_CATEGORY , payload})
export const filterCategoryPriceAction = (payload) => ({type: FILTER_CATEGORY_PRICE, payload})