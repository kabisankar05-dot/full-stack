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
            placeholder='Enter Your Name'
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && <p className="error">{errors.fullName.message}</p>}
        
          {/* Email */}

          <label>Email Address</label>
          <input
            type="email"
              placeholder='Enter Your Email'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email "
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}


              {/* Password */}

              <label>Password</label>
              <input type ="password" placeholder='Enter your password'
              {
                ...register("password",{required:"Password is required",
                minLength:{
                  value:6,
                  message:"Password must be at least 6 characters"}
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}

            {/* Confirm Password */}

            <label>Confirm Password</label>
            <input type ="password" placeholder='Confirm your password'
              {...register("confirmPassword",{required:"Confirm Password is required",
                minLength:{
                  value:6,
                  message:"Confirm Password must be at least 6 characters"}
              })}
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

            <div className="row">

              {/* mobile number */}

              <div className="col">
                <label>Mobile Number</label>
                <input type="number" 
                  placeholder='Enter Your Mobile Number'
                {...register("mobileNumber", { required: "Mobile Number is required" })} />
                {errors.mobileNumber && <p className="error">{errors.mobileNumber.message}</p>}
              </div>

              <div className="col">

                {/* Birth Date */}

                <label>Birth Date</label>
                <input type="date" 
                {...register("birthDate", { required: "Birth Date is required" })} />
                {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
              </div>
            </div>


            {/* Gender */}
          <label>Gender</label>
          <div className="gender">

            <label>
              <input
                type="radio"
                value="Male"
                {...register("gender",{required:"Select gender"})}
              /> Male
            </label>

            <label>
              <input
                type="radio"
                value="Female"
                {...register("gender")}
              /> Female
            </label>

            <label>
              <input
                type="radio"
                value="Other"
                {...register("gender")}
              /> Other
            </label>

          </div>
          <p className="error">{errors.gender?.message}</p>


              {/*country */}

              <div className="row">
                <div className="col">                
                <select {...register("country", { required: "Select Country" })}>
                  <option value="">Select Country</option>
                  <option value="usa">USA</option>
                  <option value="india">India</option>
                  <option value="uk">UK</option>
                </select>
                {errors.country && <p className="error">{errors.country.message}</p>}
              </div>
              
              <div className="col">

                {/* postal code */}

                <input type="text" placeholder='Enter Your Postal Code'
                {...register("postalCode", { required: "Postal Code is required" })} />
                {errors.postalCode && <p className="error">{errors.postalCode.message}</p>}
                </div>
              </div>
              { /* file upload */}
              <div className="row">
                <div className="col">
                  <label>Upload File</label>
                  <input type="file" {...register("file",{required:"File is required"})} 
                  />
                </div>
                {errors.file && <p className="error">{errors.file.message}</p>}
              </div>
              <button type="submit">Submit</button>
          </form>
        </div>
      </div>
  )
}

export default RegistrationForm;
