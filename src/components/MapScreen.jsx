import React, { PropTypes } from 'react'
import { MapGoogle } from './MapGoogle';
import { markerResources } from '../resources';

export class MapScreen extends React.Component {
  state = {
    showFlyout: true,
    markers: markerResources
  }
  render () {
      return <div className={`map-screen ${this.props.classes}`}>
                <div className="map-container">
                  <MapGoogle markers={this.state.markers}></MapGoogle>
                </div>
                <div className="flyout-container">

                </div>
             </div>
  }
}
