import React, { PropTypes } from 'react'
import {VideoBackground} from './VideoBackground';

export const IntroScreen = (props) => {
  return <div className={`intro-screen ${ props.classes }`}>
            <VideoBackground videos={props.videos}></VideoBackground>
          <button onClick={ props.onButtonClick }>Explore interactive map</button>
         </div>
}
