import React from 'react';

// Css
import './Login.css';
import UserContext from '../contexts/user';


const Login = ({ location }) => {
  return <UserContext.Consumer>
    {({ signedIn, updateUser }) => {
      return <div className="Login">
        { signedIn ? (
          <p>Ya puedes ver tu perfil</p>
        ) : (
          <span>
            
            <button onClick={() => updateUser(true)}>Login</button>
            {/* <LoginForm/> */}
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
