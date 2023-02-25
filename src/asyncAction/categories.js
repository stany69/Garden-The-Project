import { baseUrl } from ".."
import { AllProductsAction, FilterProductsAction } from "../Store/allProductsReducer"
import { getCategoriesAction } from "../Store/categoriesReducer"
import { FilterCategoryAction, filterCategoryPriceAction, getOneCategoryAction } from "../Store/OneCategoryReducer"


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

export const fetchAllSalesCategoryList = (id) =>{
    return function(dispatch){
        let url = (baseUrl + `/categories/${id}`)

          fetch (url) 
           .then(res => res.json())
           .then(data =>{
             dispatch(getOneCategoryAction(data))
             dispatch(FilterCategoryAction(true))
             dispatch(filterCategoryPriceAction(data))
           })

    }
}