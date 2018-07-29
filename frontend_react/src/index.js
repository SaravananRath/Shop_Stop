import React from 'react';
import './index.css';

import RouterComp from './routes';
import thunk from 'redux-thunk'
import {render} from 'react-dom'
import{Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
// import productsById from './reducers/reducer'
import rootReducer from './reducers/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
const ReduxApp = () =>(
    <Provider store={store}>
        <RouterComp/>
    </Provider>
)
render(<ReduxApp/>,document.getElementById('root'))
