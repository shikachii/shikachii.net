import React from 'react';
import ReactLogo from './logo.svg';
import './styles.scss';

export const App = () => {
  console.log("Hello from App.jsx")

  return (
    <div className="container">
      {/* <img src={ReactLogo} alt="React Logo" /> */}
      <ReactLogo />
      <h1>Hello.</h1>
    </div>
  )
}