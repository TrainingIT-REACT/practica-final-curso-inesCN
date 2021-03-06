import React, { Component } from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react'

// Css
import './Perfil.css';
import { List, Card } from 'semantic-ui-react';

class Perfil extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      // localStorage.getItem('nombre'), localStorage.getItem('apellidos'), localStorage.getItem('email')
      <div className="Perfil">
        <h1>Perfil</h1>
        <Card>
        <Icon name='user' size='large' />
        <Card.Content>
          <Card.Header>Nombre: {localStorage.getItem('nombre')}</Card.Header>
          <Card.Description>
            <p>Apellidos: {localStorage.getItem('apellidos')}</p>
            <p>Email: {localStorage.getItem('email')}</p>
          </Card.Description>
        </Card.Content>
        
        </Card>
      </div >
    );

  }

}

export default Perfil;
