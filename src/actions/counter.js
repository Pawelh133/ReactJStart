import * as types from 'constants/counter'

export const increment = (value = 1) => {
    return {
        type: types.COUNTER_INCREMENT,
        payload: value
    }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: types.COUNTER_DOUBLE_ASYNC,
                    payload: getState().counter
                })
                resolve()
            }, 200)
        })
    }
}
