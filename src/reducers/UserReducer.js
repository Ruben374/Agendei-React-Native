export const initialState = {
  email: "",
  name: "",
  avatar: "",
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload.email };
    case "setname":
      return { ...state, name: action.payload.name };
    case "setavatar":
      return { ...state, avatar: action.payload.avatar };
    case "setAppointments":
      return { ...state, appointments: action.payload.appointments };
    default:
      return state;
  }
};
