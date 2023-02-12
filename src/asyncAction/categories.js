import { baseUrl } from ".."
import { getCategoriesAction } from "../Store/categoriesReducer"
import { getOneCategoryAction } from "../Store/OneCategoryReducer"


export const fetchCategoriesList = () =>{
    return function(dispatch){
        fetch(baseUrl + '/categories/all')
           .then(res => res.json())
           .then(data => dispatch(getCategoriesAction(data)))
    }
}


export const fetchOneCategory = (id) =>{
    return function(dispatch){
        fetch(baseUrl + `/categories/${id}`)
           .then(res => res.json())
           .then(data => dispatch(getOneCategoryAction(data)))
    }
}