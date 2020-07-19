import React, { Component } from 'react';
import { Grid, List, Image } from 'semantic-ui-react'

// Css
import './Albums.css';

//Componentes
import Album from "./../Album/Album"

class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: [],
      albumState: []
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
  handleClick (album) {
  console.log(album)

   return <Album album={album}/>
  }

  

  render() {
    return (
      <div className="Albums">
        <h1>Albums</h1>
        <List>
          {
            this.state.loading ?
              <p>Cargando...</p>
              : this.state.albums.map(album =>
               
                <List.Item className="listado"  onClick={(e) => this.handleClick(album)} >
                  <Image avatar src={album.cover} alt={album.name} />
                  <List.Content className="card"  >
                    <List.Header key={album.id}><b>Album:</b> {album.name}</List.Header>
                    <List.Description><b>Artista:</b> {album.artist}</List.Description>
                  </List.Content>
                </List.Item>

              )
          }
        </List>
      </div>
    );

  }

}

export default Albums;
