import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import './sidebarMenu.css';

class SidebarMenu extends Component {

  state = {}

  render() {

    return (
      <Grid>
        <Grid.Column className="col-menu">
          <a href={window.location.origin + "/Home"} className="button">Home</a>
          <a href={window.location.origin + "/Albums"} className="button">Albums</a>
          <a href={window.location.origin + "/Reproductor"} className="button">Reproductor</a>
          <a href={window.location.origin + "/Login"} className="button">Login</a>
          <a href={window.location.origin + "/Perfil"} className="button">Perfil</a>
        </Grid.Column>
      </Grid>
    )
  }
}


export default SidebarMenu