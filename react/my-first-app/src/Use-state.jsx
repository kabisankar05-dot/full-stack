import { useState } from "react";

function UseState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);

  // validation conditions
  const isNameValid = name.length >= 3;
  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length >= 6;
  const isPhoneValid = phone.length === 10;

  const submitForm = () => {
    setChecked(true);

    if (
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPhoneValid
    ) {
      alert("All details are valid");
    }
  };

  const inputStyle = (isValid) => ({
    padding: "8px",
    width: "90%",
    border: "2px solid",
    borderColor: !checked
      ? "#ccc"
      : isValid
      ? "green"
      : "red",
    borderRadius: "5px",
  });

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    textAlign: "left",
    width: "90%",
    margin: "5px auto",
  };

  return (
    <div
      style={{
        padding: "20px",
        width: "340px",
        margin: "50px auto",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Form Validation</h2>

      {/* Name */}
      <h2>Name:</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle(isNameValid)}
      />
      {checked && !isNameValid && (
        <div style={errorStyle}>
          Name must be at least 3 characters
        </div>
      )}

      <br />
        
      {/* Email */}
      <h2>Email:</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle(isEmailValid)}
      />
      {checked && !isEmailValid && (
        <div style={errorStyle}>
          Invalid email address
        </div>
      )}

      <br />

      {/* Password */}
      <h2>Password:</h2>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle(isPasswordValid)}
      />
      {checked && !isPasswordValid && (
        <div style={errorStyle}>
          Password must be at least 6 characters
        </div>
      )}

      <br />

      {/* Phone */}
      <h2>Phone:</h2>
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={inputStyle(isPhoneValid)}
      />
      {checked && !isPhoneValid && (
        <div style={errorStyle}>
          Phone number must be 10 digits
        </div>
      )}

      <br />  
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default UseState;