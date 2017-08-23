import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ContactForm from './container/form'
import reducers from './reducer/index'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
));

ReactDOM.render(
    <Provider store={store}>
        <ContactForm />
    </Provider>,
    document.getElementById('root')
);