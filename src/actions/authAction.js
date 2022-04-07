import {endFetch, errorFetch, startFetch} from "./statusActions";
import {signin} from "../data/users";

export const SET_AUTH = 'SET AUTH'

export const setAuth = (user) => {
    return {
        type: SET_AUTH,
        payload: user
    }
}


export const setAuthAsync = (email, password) => async (dispatch) => {
    try {
        dispatch(startFetch())
        const user = await signin(email, password)
        if (user) {
            dispatch(setAuth(email, password))
            dispatch(errorFetch(''))
            dispatch(endFetch())
        }
    } catch (error) {
        console.log(`error ${error}`)
        dispatch(setAuth(null))
        dispatch(errorFetch(error))
        dispatch(endFetch())
    }
}