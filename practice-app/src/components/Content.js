import React from 'react';

import Likes from './Likes';
import RightSideConent from './RightSideContent';

//THIS FILE WILL BE THE MAIN CONTENT CONTAINER, AND IMPORT THE LEFT AND RIGHT SIDE CONTENT COMPONENTS

const Content = props => {
  return (
    <div className="content-container">

      <div className="header">
        <h1>Lambda Friends</h1>
      </div>

      <div className="left-page-content">
        <Likes />
      </div>

      <div className="right-page-content">
        <RightSideConent />
      </div>

    </div>
  )
}

export default Content;
