import React from 'react';

import Content from './Content';

//THIS FILE WILL MAP THROUGH THE DATA ARRAY

const DataList = props => {
  return (
    <div className="content-container">

      {props.lambdaFriends.map(item => {
        return <Content friendData={item} key={item.id} />;
      })}

    </div>
  );
};

export default DataList;
