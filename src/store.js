import { createStore, combineReducers } from "redux";

// Reducers
import todos from './redux/reducers/todosReducer';
import user from './redux/reducers/userReducer';
import albums from './redux/reducers/albumsReducer'

export default createStore(combineReducers({ todos, user, albums }));