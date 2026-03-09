import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function CompB() {
  const { theme, setTheme, styles, handleSubmit } =
    useContext(UserContext);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: 20,
        width: 220,
        backgroundColor: styles.bgColor,
        color: styles.color,
      }}
    >
      <h3>CompB (Theme)</h3>
      <p>Theme: {theme}</p>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
      <br /><br />

      <button onClick={() => handleSubmit("CompB")}>Submit</button>
    </div>
  );
}

export default CompB;