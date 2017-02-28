import React, { PropTypes } from 'react'
import { MapGoogle } from './MapGoogle';
import { places } from '../resources';

export class MapScreen extends React.Component {
  state = {
    showFlyout: true,
    places: places,
    currentMarker: 1
  }
  render () {
      return <div className={`map-screen ${this.props.classes}`}>
                <div className="map-container">
                  <MapGoogle places={this.state.places}></MapGoogle>
                </div>
                <div className="flyout-container">

                </div>
             </div>
  }
}
