
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';

export class MapGoogle extends React.Component {

  componentDidUpdate = (prevProps, prevState) => {
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
