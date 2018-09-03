import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import reducer from './Reducers/login';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root')
);
