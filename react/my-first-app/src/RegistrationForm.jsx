import React from 'react'
import { useForm } from "react-hook-form" ;
import "./RegistrationForm.css" ;

function RegistrationForm() {
  const { register,
     handleSubmit,
    formState:{ errors } 
} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully");
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Responsive<br /> Registration<br />Form</h1>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit(onSubmit)}>

          <h2>Registration Form</h2>

          {/* Full Name */}
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && <p className="error">{errors.fullName.message}</p>}
        
          {/* Email */}
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email "
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm;
