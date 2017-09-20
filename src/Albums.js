import React, { Component } from 'react';
import Songlist from './Songlist';
import {connect} from 'react-redux';



class Albums extends Component {
 
  
        
      
  

  showAlbums () {
    return this.props.album.map((album) => {
      return (
        <div>
        <img src={album.img} alt={album.title} />
        <h2>{album.title}</h2>
        <p>{album.year}</p>
        <Songlist albums = {this.props.album}/>
      </div>   
      ) 
    });  
  }

  

    render() {
      return (
        <div className="albums">
          {this.showAlbums ()}    
        </div>
      );
    }
  }
  
function mapStateToProps (state) {
  return {
    album: state.album
  };
}

  export default connect(mapStateToProps) (Albums);