import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

//Contexto
import UserContext from "./contexts/user"

//Componentes
import Home from "./Home/Home"
import Albums from "./Albums/Albums"
import Album from "./Album/Album"
import Reproductor from "./Reproductor/Reproductor"
import Login from "./Login/Login"
import Perfil from "./Perfil/Perfil"

// Componente para definir rutas privadas
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signIn: false,
      updateUser: this.updateUser
    };
  }

  updateUser(signedIn) {
    this.setState({ signedIn });
  }

  render() {
    return (

      <main> 
        <Router>
          <Grid>
            <UserContext.Provider value={this.state}>
              <Grid.Row>
                <Grid.Column width={6} className="floatleft">
                  {/* <SidebarMenu /> */}
                  <Grid.Column className="col-menu">
                    <nav>
                      <NavLink activeClassName="active" className="button" exact to="/">Home</NavLink>
                      <NavLink activeClassName="active" className="button" exact to="/albums">Albums</NavLink>
                      <NavLink activeClassName="active" className="button" exact to="/reproductor">Reproductor</NavLink>
                      <NavLink activeClassName="active" className="button" exact to="/Login">Login</NavLink>
                      <NavLink activeClassName="active" className="button" exact to="/perfil">Perfil</NavLink>
                    </nav>
                  </Grid.Column>
                </Grid.Column>
                <Grid.Column width={11} className="floatrigth">
                  <nav>
                  <Route path="/" exact component={Home}/>
                    <Route path="/albums" exact component={Albums}/>
                    <Route path="/album" exact component={Album}/>
                    <Route path="/reproductor" exact component={Reproductor}/>
                    <Route path="/Login" exact component={Login}/>
                    <PrivateRoute path="/perfil" exact component={Perfil}/>
                  </nav>
                  {/* <Home /> */}
                  {/* <Albums/> */}
                </Grid.Column>
              </Grid.Row>
            </UserContext.Provider>
          </Grid>
        </Router>

      </main>
    )
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);