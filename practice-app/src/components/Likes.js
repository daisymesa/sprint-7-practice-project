import React from 'react';

import LeftSideContent from './LeftSideContent';

//THIS FILE WILL MAP THROUGH THE DATA ARRAY

const Likes = props => {
  return (
    <div className="content-container">

      {props.lambdaFriends.likes.map(item => {
        return <LeftSideContent likeData={item} key={item.id} />;
      })}

    </div>
    
  );
};

export default Likes;