import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {allProductsReducer} from './allProductsReducer'


const rootReducer = combineReducers({
    
    products: allProductsReducer
})




export const store = createStore(rootReducer,applyMiddleware(thunk))
