import React, { Component } from 'react';
// import { Grid, List, Image } from 'semantic-ui-react'

// Css
import './Perfil.css';

class Perfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="Perfil">
        <h1>Perfil</h1>
      </div>
    );

  }

}

export default Perfil;
