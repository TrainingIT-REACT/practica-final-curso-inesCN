import actionTypes from './../actions/userAction';

// Estado inicial
const initialState = {
  name: "",
  apellidos: "",
  email: ""
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_NAME:
      return {
        name: action.name
      };
      case actionTypes.UPDATE_LAST_NAME:
      return {
        apellidos: action.apellidos
      };
      case actionTypes.UPDATE_EMAIL:
      return {
        email: action.email
      };
    default:
      return state;
  }
}

export default reducer;