import React from "react";
import Recipe from "./Recipe";
import Tempbootstrapcomponent from "./tempbootstrapcomponent";
import ExampleAlert from "./ExampleAlert";
import { Alert } from 'reactstrap';

//menu recieves the recipe data
function Menu({ recipes }) {
  return (
    <article>
      <header>
        {/* <h1 className="alert">Delicious Recipes because I am Batman</h1> */}
        <h1>
          <Alert color="primary">
          Delicious Recipes. Because. I am Batman
          </Alert>        
        </h1>

      </header>
      <div className="recipes">
        {/* the main recipes itself is a collection item.
        we send it to the recipe component, one item at a time, through the map feature */}

        {/* a note about the three dot operator
        When three dots (…) is at the end of function parameters, it’s “rest parameters”        
        When three dots (…) occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list. */}
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>   
      {/* some components that I added when experimenting with bootstrap */}
      {/* <Tempbootstrapcomponent />
      <ExampleAlert /> */}

    </article>
  );
}

export default Menu;