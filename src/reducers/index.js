import {combineReducers} from 'redux';
import home_details from './home_details.reducer';
export const rootReducer = combineReducers(
    {
        home_details
    }
)