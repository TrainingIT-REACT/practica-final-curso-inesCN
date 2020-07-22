import { createAsyncAction } from 'redux-promise-middleware-actions';



export const getAlbums = createAsyncAction('GET_ALBUMS', async () => {
    const res = await fetch('http://localhost:3001/albums')
    return res.json();
  });
