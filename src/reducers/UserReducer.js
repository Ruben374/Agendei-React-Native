export const initialState = {
  email: "",
  name: "",
  avatar: "",
  favorites: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload.email };
    case "setname":
      return { ...state, name: action.payload.name };
    case "setavatar":
      return { ...state, avatar: action.payload.avatar };
    case "setFavorites":
      return { ...state, favorites: action.payload.favorites };
    default:
      return state;
  }
};
