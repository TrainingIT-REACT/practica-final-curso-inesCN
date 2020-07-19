import { createContext } from 'react';

const UserContext = createContext({
    signedIn: false,
    updatedUser: () => {}
});

export default UserContext;