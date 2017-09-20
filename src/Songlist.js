import React, { Component } from 'react';
import {connect} from 'react-redux';



class Songlist extends Component {

  render() {
    return (
      <div className="App">
        {this.props.albums.map((album) => {
          return (
            <div>
              {album.songs.map((song) => <p>{song.name}</p>)}
            </div>   
      ) 
    })};  
      </div>
    );
  }
}

function mapStateToProps (state) {
    return {
      albums: state.album
    };
  }

export default connect(mapStateToProps) (Songlist);