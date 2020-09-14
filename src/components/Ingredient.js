import React from "react";
import { Alert } from 'reactstrap';

// export default function Ingredient({ amount, measurement, name }) {
//   return (
//     <li>
//       {amount} {measurement} {name}
//     </li>
//   );
// }

//I like the export statement at the end.

function Ingredient({ amount, measurement, name }) {
  return (
    <li>
      <Alert color="danger">
      {amount} {measurement} {name}
      </Alert>      
    </li>
  );
}

export default Ingredient