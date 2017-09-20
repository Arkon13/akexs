import {combineReducers} from 'redux';
import AllAlbums from './album';


const allReducers = combineReducers ({
    album: AllAlbums
});

export default allReducers