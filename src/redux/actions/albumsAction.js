import { createAsyncAction } from 'redux-promise-middleware-actions';



export const getPosts = createAsyncAction('POSTS', async () => {
    const res = await fetch('http://localhost:3001/albums')
    console.log("getPosts -> res", res)
    return await res.json();
  });
