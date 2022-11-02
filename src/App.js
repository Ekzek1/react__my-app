import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyComponentClassBased from './components/MyComponentClassBased';
import {ComponentsWithProps, Pre, Sidebar, UserProfile} from './components/ComponentsWithProps';

const  App = () => {
  let id = 0;
  return (
    <>
      <UserProfile/>
      <MyComponent/>
      <MyComponentClassBased/>
      <ComponentsWithProps title="New title"/>
      <Pre title="123" id={id} prop1={1} prop2="3" />
      <Sidebar title="Text" />
    </>
  )
}
export default App