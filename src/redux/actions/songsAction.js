import { createAsyncAction } from 'redux-promise-middleware-actions';



export const getSongs = createAsyncAction('GET_SONGS', async () => {
    const res = await fetch('http://localhost:3001/songs')
    return res.json();
  });
