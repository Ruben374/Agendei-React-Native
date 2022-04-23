export const initialState = {
  id: '',
  name: '',
  avatar: ''
}

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setId':
      return { ...state, id: action.payload.id }
    case 'setname':
      return { ...state, name: action.payload.name }
    case 'setavatar':
      return { ...state, avatar: action.payload.avatar }

    default:
      return state
  }
}
