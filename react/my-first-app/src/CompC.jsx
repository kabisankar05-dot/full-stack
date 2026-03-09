import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function CompC() {
  const { user, styles, handleSubmit } = useContext(UserContext);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: 20,
        width: 260,
        backgroundColor: styles.bgColor,
        color: styles.color,
      }}
    >
      <h3>CompC (Display)</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <button onClick={() => handleSubmit("CompC")}>Submit</button>
    </div>
  );
}

export default CompC;