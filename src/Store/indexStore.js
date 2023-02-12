import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {allProductsReducer} from './allProductsReducer'
import { categoriesReducer } from './categoriesReducer'
import { OneCategoryReducer } from './OneCategoryReducer'
import { productReducer } from './oneProductReducer'


const rootReducer = combineReducers({
    
    products: allProductsReducer,
    oneProduct: productReducer,
    categories: categoriesReducer,
    category: OneCategoryReducer
})




export const store = createStore(rootReducer,applyMiddleware(thunk))
