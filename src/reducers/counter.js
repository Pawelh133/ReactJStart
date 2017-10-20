import * as types from 'constants/counter'

const ACTION_HANDLERS = {
    [types.COUNTER_INCREMENT]    : (state, action) => state + action.payload,
    
    [types.COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
}

const initialState = 0

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}