    import React from 'react'
    
    function Usereducer() {
       const userdata ={
        name:"kabi",
        age: 22,
        phone: 1234567890,
        city: "gobi"
       }

       let {name, age, phone, city} = userdata;
     
     
        return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <p>Phone: {phone}</p>
            <p>City: {city}</p> 
        </div>
      )
    }
    
    export default Usereducer
    