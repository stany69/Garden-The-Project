
import { AllProductsAction } from "../Store/allProductsReducer"
import { takeProductsAction } from "../Store/oneProductReducer"
import { AddProductsAction } from "../Store/allProductsReducer"
import { RemProductsAction } from "../Store/allProductsReducer"


export const productsInStock = () =>{
    return function(dispatch){
        let url = 'http://localhost:3333/products/all'

          fetch (url) 
           .then(res => res.json())
           .then(data => dispatch(AllProductsAction(data)))

    }
}

export const fetchOneProduct = (id) =>{
    return function(dispatch){
        let url = `http://localhost:3333/products/${id}`

          fetch (url) 
           .then(res => res.json())
           .then(data => dispatch(takeProductsAction(data)))

    }
}

