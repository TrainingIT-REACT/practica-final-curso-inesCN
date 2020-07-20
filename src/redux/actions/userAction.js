import types from './typesAction';

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});