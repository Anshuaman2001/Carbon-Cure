import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { emissionReducer } from './reducers/emissionReducer';

const rootReducer = combineReducers({
    emissionData: emissionReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
