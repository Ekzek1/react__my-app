import React from 'react';

const  MyComponent = (props) => {
  let myTitle = 'Title';
  // let myTitle

  return <h1>{myTitle === 'Title' ? 'default Title' : 'err title'}</h1>
}

export default MyComponent; 