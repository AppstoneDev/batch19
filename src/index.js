import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Conditional from './newcomps/conditionalRendering';
import Mapper from './newcomps/mapper';
import Styling from './newcomps/styling';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mapper />
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

//ASSIGNMENT 4
//TO DO LIST