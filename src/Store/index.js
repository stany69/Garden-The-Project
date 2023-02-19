import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {allProductsReducer} from './allProductsReducer'
import { categoriesReducer } from './categoriesReducer'
import { OneCategoryReducer } from './OneCategoryReducer'
import { itemReducer } from './itemReducer'
import { basketReducer } from './basketReducer'


const rootReducer = combineReducers({
    
    products: allProductsReducer,
    item: itemReducer,
    categories: categoriesReducer,
    category: OneCategoryReducer,
    basket:basketReducer
})




export const store = createStore(rootReducer,applyMiddleware(thunk))
