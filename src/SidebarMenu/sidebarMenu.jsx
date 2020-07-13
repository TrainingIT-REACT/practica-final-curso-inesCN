import React, {Component} from 'react'
import { Menu, Sidebar, Button } from 'semantic-ui-react'
// import {browserHistory} from "react-router";


// import Albums from './Albums';


class SidebarMenu extends Component {
  
state = {}





handleItemClick = (event) => {
  console.log("SidebarMenu -> handleItemClick -> event", )
  event.preventDefault();
  let path = window.location.origin + "/" +event.target.value;
  window.location.assign(path);
}


  render() {

    return (
  <Sidebar
    as={Menu}
    icon='labeled'
    inverted
    visible
    width='thin'
  >

    <Button onClick={this.handleItemClick} value="Inicio">Inicio</Button >
    <Button onClick={this.handleItemClick} value="Albums">Albums</Button > 
    <Button onClick={this.handleItemClick} value="Reproductor">Reproductor</Button>
    <Button onClick={this.handleItemClick} value="Login">Login</Button>
    <Button onClick={this.handleItemClick} value= "Perfil">Perfil</Button>
    
  </Sidebar>

)
}
}


export default SidebarMenu