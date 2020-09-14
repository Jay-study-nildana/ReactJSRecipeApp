import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import { Alert } from 'reactstrap';

//each recipe item that comes in, maps into three data spots
//which are in the json
function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>
        <Alert color="success">
          {name}
        </Alert>        
      </h1>
      {/* inside each recipe item, we have additional collections
      just like items were sent to recipe component
      we send these collections to the components to display as they choose */}
      <IngredientsList list={ingredients} />
      {/* same thing here. send the collection for further processing */}
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}

export default Recipe;