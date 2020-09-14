import React from "react";
import { Alert } from 'reactstrap';

// export default function Instructions({ title, steps }) {
//   return (
//     <section className="instructions">
//       <h2>{title}</h2>
//       {steps.map((s, i) => (
//         <p key={i}>{s}</p>
//       ))}
//     </section>
//   );
// }

//I like the export statement at the end.

function Instructions({ title, steps }) {
  return (
    <section className="instructions">
      <h2>
        <Alert color="info">
        {title}
        </Alert>        
      </h2>
      <Alert color="light">
        {steps.map((s, i) => (
        <p key={i}>{s}</p>
        
      ))}        
      </Alert>      

    </section>
  );
}

export default Instructions;