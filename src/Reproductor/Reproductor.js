import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action creators
import { getSongs } from './../redux/actions/songsAction';

// Css
import './Reproductor.css';

class Reproductor extends Component {
  
  async componentDidMount() {
    this.props.getSongs();
  }

  render() {
    const { isLoading, error, songs } = this.props;
    return (
      songs.slice(0, 1).map(song => {

            return <div className="reproductor" key={song.id}>
              <audio controls>
                <source src={song.audio} type="audio/mp3" />
              </audio>
            </div>


          })
    )
  }
};


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
)(Reproductor);
