import React, { Component } from 'react';
import { Grid, List, Image } from 'semantic-ui-react'

// Css
import './Inicio.css';

class Inicio extends Component {
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
      <div className="Inicio">
        
        <List>
          {
            this.state.loading ?
              <p>Cargando...</p>
              : this.state.albums.map(album =>

                <List.Item className="listado">
                  <Image avatar src={album.cover} alt={album.name} />
                  <List.Content className="card">
                    <List.Header key={album.id}><b>Album:</b> {album.name}</List.Header>
                    <List.Description><b>Artista:</b> {album.artist}</List.Description>
                  </List.Content>
                </List.Item>

              )
          }
        </List>

        {/* {
          this.state.loading ?
            <p>Cargando...</p>
            : this.state.albums.map(album =>
              <Grid.Row className="listado">
                <img src={album.cover} alt={album.name} />
                <ul className="card">
                  <li key={album.id}><b>Album:</b> {album.name}</li>
                  <ul>
                    <li><b>Artista:</b> {album.artist}</li>
                  </ul>
                </ul>
              </Grid.Row>
            )
        } */}
      </div>
    );

  }

}

export default Inicio;
