import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {allProductsReducer} from './allProductsReducer'
import { productReducer } from './oneProductReducer'


const rootReducer = combineReducers({
    
    products: allProductsReducer,
    oneProduct: productReducer
})




export const store = createStore(rootReducer,applyMiddleware(thunk))
