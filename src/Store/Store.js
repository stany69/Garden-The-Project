import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    
    count: countReducer,
    empl: emplReducer,
    goods:goodsReducer
})




export const store = createStore(rootReducer,applyMiddleware(thunk))
