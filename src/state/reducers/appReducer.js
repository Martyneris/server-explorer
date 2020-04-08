import { SET_LOADING_FLAG } from '../actions/types'

export default (state = { isLoading: false }, action) => {
    switch (action.type) {
        case SET_LOADING_FLAG: return { ...state, isLoading: action.payload };
        default: return state
    }
}