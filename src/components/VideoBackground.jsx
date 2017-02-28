import React, { PropTypes } from 'react'

export const VideoBackground = (props) => {

  const videoStyles = {
    position: 'fixed',
    top: 50 + '%',
    left: 50 + '%',
    minWidth: 100 + '%',
    minHeight: 100 + '%',
    width: 'auto',
    height: 'auto',
    zIndex: -100,
    transform: 'translateX(-50%) translateY(-50%)',
    opacity: 0.5
  }

  const { videos } = props;

  const sources = videos.map((video, index) => {
    return <source key={index} src={video.source} type={`video/${video.type}`}/>
  });

  return <div className="video-background">
          <video autoPlay loop style={videoStyles}>
            {sources}
          </video>
        </div>
}
