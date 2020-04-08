import * as types from './types';
import axios from 'axios';

export const login = (username, password, checked, history) => {
    return async function (dispatch) {
        try {
            // sending a request to backend to receive a token
            const res = await axios.post(`http://playground.tesonet.lt/v1/tokens`, null, {
                params: {
                    username,
                    password
                }
            })
            // if the user has selected "keep me logged in", token is stored to local storage for later authentification
            const token = 'Bearer ' + res.data.token;
            if (checked) { await localStorage.setItem('token', token) }

            //check server response, set redux state and navigate to servers list after successfull login
            if (res.status === 200) {
                dispatch({
                    type: types.LOG_IN,
                    payload: token
                })

                history.push('/servers')
            }
        } catch (err) {
            console.log(err);
            // send errors to state
            dispatch({
                type: types.GET_ERRORS,
                payload: err.response.data
            })
        }
    }
}

export const logout = () => {
    // remove the token and log out the user
    localStorage.removeItem('token');
    return {
        type: types.LOG_OUT,
    }
}