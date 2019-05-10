import React from 'react';

const Content = props => {
  return (
    <div className="left-page-container">

      <div className="lambda-friends-card">

        <div className="friend-name">
          {props.lambdaFriends.firstName}
          {process.lambdaFriends.lastName}
        </div>

        <div className="friend-likes">
          {props.lambdaFriends.likes}
        </div>

        <div className="friend-button">
          <p>Show {props.lambdaFriends.firstName} Favorite Color!</p>
        </div>

      </div>

    </div>

  )
}

export default LeftSideContent;
