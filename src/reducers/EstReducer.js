export const initialState = {
  est: [],
  topRate: [],

};

export const EstReducer = (state, action) => {
  switch (action.type) {
    case "setEst":
      return { ...state, est: action.payload.est };
    case "setRate":
      return { ...state, topRate: action.payload.topRate };
    default:
      return state;
  }
};
