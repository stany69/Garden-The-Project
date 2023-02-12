

const defaultState = {
    category:[]
}




const GET_CATEGORY = 'GET_CATEGORY'

export const OneCategoryReducer = (state = defaultState , action) =>{

    switch(action.type){
        case GET_CATEGORY:
            return {...state , category: [...action.payload]}
        default: 
        return state 
    }

}


export const getOneCategoryAction = (payload) => ({ type:GET_CATEGORY,payload})