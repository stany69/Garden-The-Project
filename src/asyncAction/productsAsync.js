
import { AllProductsAction } from "../Store/allProductsReducer"


export const productsInStock = () =>{
    return function(dispatch){
        let url = 'http://localhost:3333/products/all'

          fetch (url) 
           .then(res => res.json())
           .then(data => dispatch(AllProductsAction(data)))

    }
}
