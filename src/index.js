import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FetchData from './comps/fetchdata';
import Styling from './comps/styling';
import Conditional from './comps/conditionalrender';
import ColorPicker from './comps/colorPicker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorPicker />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ASSIGNMENT 1
// Fetch users data from API, save the data in state variable
// and then map the data on the screen. 
// No data will be hardcoded. 

//ASSIGNMENT 2
//create 2 inputs for email and password and a submit button.
//send the data to login api on button click 
//if token is received then show login success or show login failed. 

//ASSIGNMENT 3
//Create one input and one div.
//when a hexcode is entered into the input the background color 
//of the div should change to the color that is entered in the div