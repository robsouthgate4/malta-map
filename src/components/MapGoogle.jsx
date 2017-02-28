
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { CustomMarker } from '../resources';

export class MapGoogle extends React.Component {

  componentDidMount = () => {
      this.loadMap();
      window.addEventListener("resize", this.recenterMap);
  }

  loadMap = () => {
      this.center = {
        lat: 48.858608,
        lng: 2.294471
      }
      this.map = new window.google.maps.Map(this.refs.map, {
        center: this.center,
        zoom: 16
      });
      this.createMarkers();
  }

  createMarkers = () => {
    this.props.places.forEach((place, index) => {
      const overlay = new CustomMarker(
      	new window.google.maps.LatLng(place.lat, place.lng),
      	this.map,
      	{
      		marker_id: index
      	}
      );
    })
  }

  recenterMap = () => {
    this.map.panTo(this.center);
  }

  render = () => {

    return <div id="mapGoogle" ref='map'>
              Loading map...
          </div>
  }
}
