import React from 'react';
import Tag from './tag';

function UserTags(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <ul>
        <li><Tag /></li>
      </ul>
    </div>
  );
}

export default UserTags;