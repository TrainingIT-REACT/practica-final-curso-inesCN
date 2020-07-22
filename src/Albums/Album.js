import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';

// Action creators
import { getSongs } from './../redux/actions/songsAction';
import { getAlbums } from './../redux/actions/albumsAction';

// Css
import './Albums.css';

class Album extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   loading: true,
    //   album: 
    // }
  }
  async componentWillMount() {
    const { idAlbum } = this.props.match.params;
    this.setState({ idAlbum: idAlbum });
  }

  async componentDidMount() {
    this.props.getSongs();
    this.props.getAlbums();
    const { idAlbum } = this.props.match.params;
    this.setState({ idAlbum: idAlbum });
  }

  render() {
    const { isLoadingSongs, albums, songs, isLoadingAlbums } = this.props;
    return (
      <div className="Albums">
        <List>
          <List.Header>
            {
              albums.map(album =>
                (album.id == this.state.idAlbum ? (
                  <div className="listadoAlbum">
                    <Image src={album.cover} alt={album.name} />
                    <div className="card nopadding">
                      <h2><b>Album:</b> {album.name}</h2>
                      <h2><b>Artista:</b> {album.artist}</h2>
                    </div>
                  </div>)

                  : false)


              )
            }
          </List.Header>
          <List.Item className="card">
            <h1>Canciones</h1>
          {
            isLoadingSongs && isLoadingAlbums ?
              <p>Cargando...</p>
              : songs.map(song =>
                (song.album_id == this.state.idAlbum ? (
                  <List.Content className="card-songs">
                    <List.Header key={song.id}><b>Nombre:</b> {song.name}</List.Header>
                    <List.Description><b>Duración:</b> {song.seconds}</List.Description>
                    <audio id="myAudio" controls>
                      <source src={song.audio} type="audio/mp3"></source>
                    Your browser does not support the audio element.
                  </audio>
                  </List.Content>
                )
                  : false)
              )
          }
          </List.Item>
        </List>
      </div>
    );

  }

}
const mapStateToProps = (state) => {
  return {
    isLoadingSongs: state.songs.isLoading,
    songs: state.songs.songs,
    isLoadingAlbums: state.albums.isLoading,
    albums: state.albums.albums
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSongs: () => dispatch(getSongs()),
  getAlbums: () => dispatch(getAlbums())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
