import React, { useState } from "react";
import Porps from "./Props";

function App() {
  const [name, setName] = useState("Kabi");

  // Parent function
  function changeName() {
    setName("Arun");
  }

  return (
    <div>
      <h2>Parent Component</h2>

      {/* props pass pannrom */}
      <Porps name={name} changeName={changeName} />
    </div>
  );
}

export default App;
