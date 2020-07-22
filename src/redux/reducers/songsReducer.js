import { getSongs } from '../actions/songsAction';


// Estado inicial
const initialState = {
  isLoading: false,
  songs: [],
  error: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case String(getSongs.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getSongs.fulfilled):
      return {
        ...state,
        isLoading: false,
        songs: action.payload,
        error: false
      }
    case String(getSongs.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;