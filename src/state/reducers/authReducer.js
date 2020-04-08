import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:  return { isLoggedIn: true, token: action.payload };
        case types.LOG_OUT: return initialState;
        default: return state
    }
}