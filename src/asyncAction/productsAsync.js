
import { AllProductsAction } from "../Store/allProductsReducer"
import { takeItemAction } from "../Store/itemReducer"
import { AddProductsAction } from "../Store/allProductsReducer"
import { RemProductsAction } from "../Store/allProductsReducer"
import { baseUrl } from ".."


export const productsInStock = () =>{
    return function(dispatch){
        let url = (baseUrl + '/products/all')

          fetch (url) 
           .then(res => res.json())
           .then(data => dispatch(AllProductsAction(data)))

    }
}

export const fetchOneProduct = (id) =>{
    return function(dispatch){
        

          fetch (baseUrl + `/products/${id}`) 
           .then(res => res.json())
           .then(data => dispatch(takeItemAction(data[0])))

    }
}

