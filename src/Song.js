import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'


class Song extends Component {
   

  render() {
  
    return (
      <div className="App">
          {this.props.params.name}
      </div>
    );
  }
}

function mapStateToProps (state) {
    return {
      albums: state.album
    };
  }

export default connect(mapStateToProps) (Song);