import types from './typesAction';

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  complete: false,
  todo
});

export const completeTodo = (index) => ({
  type: types.COMPLETE_TODO,
  index
});

export const clearTodos = () => ({
  type: types.CLEAR_TODOS
});