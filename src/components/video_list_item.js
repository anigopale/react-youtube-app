import React from 'react';

// const VideoListItem = (props) => {
//   const video = props.video;
//
//   return <li>Video</li>;
// };

//es6 alternative
const VideoListItem = ({video}) => {
  console.log(video);
  return (
    <li className="list-group-item ">
    Video</li>
  );
};


export default VideoListItem;
