export const initialState = {
  est: [],
  topRate: [],
  search: {},
};

export const EstReducer = (state, action) => {
  switch (action.type) {
    case "setEst":
      return { ...state, est: action.payload.est };
    case "setRate":
      return { ...state, topRate: action.payload.topRate };
    case "setSearch":
      return { ...state, search: action.payload.search };

    default:
      return state;
  }
};
