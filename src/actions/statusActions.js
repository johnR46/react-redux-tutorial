export const FETCH_START = 'FETCH START'
export const FETCH_END = 'FETCH END'
export const FETCH_ERROR = 'FETCH ERROR'


export const startFetch = () => {
    return {
        type: FETCH_START
    }
}
export const endFetch = () => {
    return {
        type: FETCH_END,

    }
}

export const errorFetch = (errMsg) => {
    return {
        type: FETCH_ERROR,
        payload: errMsg
    }
}


