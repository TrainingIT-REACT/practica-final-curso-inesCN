import { createAsyncAction } from 'redux-promise-middleware-actions';

const actions = [
  // Usuarios
  "UPDATE_NAME",
  "UPDATE_LAST_NAME",
  "UPDATE_EMAIL"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

// export const addUser = createAsyncAction('ADD_USER', async () => {
//     const res = await fetch('http://localhost:3001/albums')
//     return res.json();
//   });

export const updateName = (name) => ({
  type: actionTypes.UPDATE_NAME,
  name
});

export const updateApellidos = (apellidos) => ({
  type: actionTypes.UPDATE_LAST_NAME,
  apellidos
});

export const updateEmail = (email) => ({
  type: actionTypes.UPDATE_EMAIL,
  email
});

export default actionTypes;