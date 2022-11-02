import React from 'react';


export const ComponentsWithProps = (props) => {
  return <h1>{props.title}</h1>
}

export const Pre = (props) => {
  // return <h1>{props.title}</h1>
  return <pre>{JSON.stringify(props, null, ' ')}</pre>
}

export const Sidebar = ({title}) => {
  return <h1>{title}</h1>
}

export const UserProfile = () => {
  let isLoading = false;
  let border =  {border: '1px solid #000'}
  return (
    <>
      {isLoading && <progress/>}
      {!isLoading && <h1  style={{fontSize: '10px'}}  className='user__name'>User profile ...</h1>}
    </>
  )
}
