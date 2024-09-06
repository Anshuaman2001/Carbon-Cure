import { combineReducers } from 'redux';
import { emissionReducer } from './emissionReducer';

export default combineReducers({
    emission: emissionReducer,
});
