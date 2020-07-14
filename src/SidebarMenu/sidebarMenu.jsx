import React, { Component } from 'react'
import { Menu, Sidebar, Button, Grid } from 'semantic-ui-react'
import './sidebarMenu.css';


// import Albums from './Albums';


class SidebarMenu extends Component {

  state = {}





  // handleItemClick = (event) => {
  //   console.log("SidebarMenu -> handleItemClick -> event", )
  //   event.preventDefault();
  //   let path = window.location.origin + "/" +event.target.value;
  //   window.location.assign(path);
  // }


  render() {

    return (
      // <Sidebar
      //   as={Menu}
      //   inverted
      //   visible
      //   width='thin'
      // >
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