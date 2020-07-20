import React, { Component } from 'react';
import { Grid, List, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

// Action creators
// import { completeTodo } from './../redux/actions/todosAction';
import { getPosts } from './../redux/actions/albumsAction';

// Css
import './Albums.css';

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
    this.props.getPosts();
  }
  handleClick(e) {
    e.stopPropagation();
  }



  render() {
    const { isLoading, error, posts } = this.props;
    console.log("Albums -> render -> posts", posts)
    console.log("Albums -> render -> error", error)
    console.log("Albums -> render -> isLoading", isLoading)

    return (
      <div className="Albums">
        <h1>Albums</h1>
        <List>
          {
            isLoading ?
              <p>Cargando...</p>
              : this.state.albums.map(album =>

                <List.Item className="listado" onClick={this.handleClick} >

                  <Link to='/album' params={album} target="_parent">

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
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);