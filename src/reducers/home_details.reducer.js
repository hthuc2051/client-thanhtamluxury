import * as Types from '../constants/ActionTypes';

var initialState = {};

export default function  (state = initialState, action) {
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return null;
        default:
            return state;
    }
}