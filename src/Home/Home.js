import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'

// Css
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      songs: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/songs');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        songs: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="Home">
        <h1>Música recomendada</h1>
        <List>
          {
            this.state.loading ?
              <p>Cargando...</p>
              : this.state.songs.slice(0, 5).map(song =>
                <List.Item className="listado" id={song.id}>
                  <List.Content className="card">
                    <List.Header key={song.id}><b>Nombre:</b> {song.name}</List.Header>
                    <List.Description><b>Duración:</b> {song.seconds}</List.Description>
                  <audio id="myAudio" controls>
                    <source src={song.audio} type="audio/mp3"></source>
                    Your browser does not support the audio element.
                  </audio>
                  </List.Content>
                </List.Item>
              )
          }
        </List>
      </div>
    );
  }
}

export default Home;
