import React, { Component } from 'react';
import { IntroScreen } from './components/IntroScreen';
import  { MapScreen }  from './components/MapScreen';
import { videoResources } from './resources';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    introShowing: true,
    mapShowing: false,
    videos: videoResources
  }

  handleButtonClick = () => {
    const tempIntroShow = this.state.introShowing;
    const tempMapShowing = this.state.mapShowing;
    this.setState({ introShowing: !tempIntroShow, mapShowing: !tempMapShowing });
  }

  render = () => {
    return (
      <div className="App">
        <IntroScreen
          onButtonClick={ this.handleButtonClick }
          classes={ !this.state.introShowing ? 'animate-out' : 'animate-in' }
          videos={this.state.videos}>
        </IntroScreen>
        <MapScreen
          classes={ this.state.mapShowing ? 'animate-in' : 'animate-out' }>
        </MapScreen>
      </div>
    );
  }
}

export default App;
