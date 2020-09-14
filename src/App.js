import React from 'react';
// import logo from './logo.svg';

//get the styling for the App
import './App.css';
//get the menu component 
import Menu from "./components/Menu";
//get the data which is in json format.
import data from "./data/recipes.json";


function App() 
{
  return (
      //pass the data about recipes to the Menu component
      //which will then take care of further processing.

      //this is React code mixed with JSX
      //that is where you see all the HTML like syntax.       
      <Menu recipes={data} />
    );
}

//exporting to index.js I assume as per React JS specs
export default App;
