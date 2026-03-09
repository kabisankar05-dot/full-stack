import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function CompA() {
  const { user, setUser, handleSubmit } = useContext(UserContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!user.name) err.name = "Name required";
    if (!/^\S+@\S+\.\S+$/.test(user.email)) err.email = "Invalid email";
    if (!/^\d{10}$/.test(user.phone)) err.phone = "Phone must be 10 digits";
    if (user.password.length < 6) err.password = "Min 6 chars password";
    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      handleSubmit("CompA");
    }
  };

  return (
    <div style={{ border: "2px solid black", padding: 20, width: 280 }}>
      <h3>CompA (Form)</h3>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br />{errors.name}<br /><br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br />{errors.email}<br /><br />

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <br />{errors.phone}<br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <br />{errors.password}<br /><br />

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default CompA;