import React, { PropTypes } from 'react'
import { FlyoutImage } from './FlyoutImage';

const Flyout = (props) => {
  return <div className="fly-out">
            <FlyoutImage
              text={props.text}
              image={props.image}>
            </FlyoutImage>
          </div>
}
