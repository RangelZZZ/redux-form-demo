import {reducer as formReducer} from 'redux-form'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    form: formReducer
});

module.exports = reducers;