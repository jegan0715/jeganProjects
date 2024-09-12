// import { useState } from "react";

// function C1() {
//   const [use, setUser] = useState("Jegan");

//   return (
//     <>
//       <h1>Hello {use}</h1>

//     </>
//   );
// }

import { useState } from "react";

function Component1() {
  const [user, setUser] = useState("Jegan");
  



  return (
    <>
    <div>
      <h1>{user}</h1>
      <h3>{user}</h3>
      <p>{user}</p>
      <h5>{user}</h5>
      <h5>{setUser}</h5>
      </div>
    </>

  );
}

export default Component1;
