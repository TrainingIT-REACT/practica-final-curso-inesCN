import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux';

// Action creators
import { getSongs } from './../redux/actions/songsAction';

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
    this.props.getSongs();
  }

  render() {
    const { isLoading, error, songs } = this.props;
    return (
      <div className="Home">
        <h1>Música recomendada</h1>
        <List>
          {
            isLoading ?
              <p>Cargando...</p>
              : songs.slice(0, 5).map(song =>
                <List.Item className="listado" key={song.id}>
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


const mapStateToProps = (state) => {
  return {
    isLoading: state.songs.isLoading,
    songs: state.songs.songs
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSongs: () => dispatch(getSongs())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
