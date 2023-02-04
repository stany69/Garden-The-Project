
import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { store } from './Store/indexStore';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { AllProductsAction } from './Store/allProductsReducer';
import Categories from './components/Categories/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store= {store} >
    <Router>
       <App />
       
    </Router>
 </Provider>
);
