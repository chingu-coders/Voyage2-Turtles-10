import React from 'react';
import UserTags from '../containers/user_tags';
import { Image } from 'react-bootstrap';
import profilepic from '../assets/meportfolio2xs.png';

const imgWidth = {
  // width: 150,
  height: 150,
  background: "black" 
}

const SingleProfile = function() {
  return (
    <div className="single-profile">
      <Image style={imgWidth} src={profilepic} responsive />
      <UserTags heading="interests" />
      <UserTags heading="skills" />
    </div>
  )
}

export default SingleProfile;