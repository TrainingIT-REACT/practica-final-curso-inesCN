import React from 'react';

// Css
import './Login.css';
import UserContext from '../contexts/user';

const Login = ({ location }) => {
  return <UserContext.Consumer>
    {({ signedIn, updateUser }) => {
      return <div>
        { signedIn ? (
          <p>Ya puedes tu perfil</p>
        ) : (
          <span>
            <button onClick={() => updateUser(true)}>Login</button>
            { (location.state && location.state.message) &&
              <p>
                { location.state.message }
              </p>
            }
          </span>
        )}
      </div>
    }}
  </UserContext.Consumer>;
}

export default Login;
