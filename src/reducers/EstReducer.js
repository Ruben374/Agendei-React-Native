export const initialState = {
  est: {}
}

export const EstReducer = (state, action) => {
  switch (action.type) {
    case 'setEst':
      return { ...state, est: action.payload.est }
    default:
      return state
  }
}
