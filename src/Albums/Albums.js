import React, { Component } from 'react';
import {  List, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

// Action creators
import { getAlbums } from './../redux/actions/albumsAction';

// Css
import './Albums.css';

class Albums extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   albums: [],
    //   albumState: []
    // }
  }
  

  async componentDidMount() {
    this.props.getAlbums();
  }
  handleClick(e) {
    e.stopPropagation();
  }



  render() {
    const { isLoading, albums } = this.props;

    return (
      <div className="Albums">
        <h1>Albums</h1>
        <List>
          {
            isLoading ?
              <p>Cargando...</p>
              : albums.map(album =>

                <List.Item key={album.id} className="listado" onClick={this.handleClick} >

                  <Link to={`/album/${album.id}`} target="_parent">

                    <Image avatar src={album.cover} alt={album.name} />
                    <List.Content className="card"  >
                      <List.Header key={album.id}><b>Album:</b> {album.name}</List.Header>
                      <List.Description><b>Artista:</b> {album.artist}</List.Description>
                    </List.Content>

                  </Link>

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
    isLoading: state.albums.isLoading,
    albums: state.albums.albums
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);