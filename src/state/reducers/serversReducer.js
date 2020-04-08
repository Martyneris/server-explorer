import * as types from '../actions/types';

const initialState = {
    
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case types.GET_SERVERS: return action.payload;
        default: return state
    }
}