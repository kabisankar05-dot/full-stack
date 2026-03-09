import React, { useState } from "react";
import { UserContext } from "./UserContext";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";
import Myreducer from "./Myreducer";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [theme, setTheme] = useState("light");

  const themes = {
    light: { color: "black", bgColor: "white" },
    dark: { color: "white", bgColor: "black" },
  };

  const handleSubmit = (from) => {
    alert(`Submit clicked from ${from}`);
    console.log("User Data:", user);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        styles: themes[theme],
        handleSubmit,
      }}
    >
      <Myreducer />
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <CompA />
        <CompB />
        <CompC />
      </div>
    </UserContext.Provider>
  );
}

export default App;