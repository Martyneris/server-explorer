import * as types from './types';
import axios from 'axios';
import { store } from '../../index'

export const getServers = () => {
    return async function (dispatch) {
        try {
            dispatch({
                type: types.SET_LOADING_FLAG,
                payload: true
            })
            // declare both possible tokens for later use
            const token = localStorage.getItem('token')
            const state = store.getState()

            const res = await axios.get('http://playground.tesonet.lt/v1/servers',
                {
                    // check if local storage token exists, if not - use the one from redux state
                    headers: { "Authorization": token ? token : state.auth.token }
                })
            // check the server response status and set servers to redux state
            if (res.status === 200) {
                dispatch({
                    type: types.GET_SERVERS,
                    payload: res.data
                })
            }
        } catch (err) {
            // send errors to state
            dispatch({
                type: types.GET_ERRORS,
                payload: err.response.data
            })
        } finally {
            dispatch({
                type: types.SET_LOADING_FLAG,
                payload: false
            })
        }
    }
}