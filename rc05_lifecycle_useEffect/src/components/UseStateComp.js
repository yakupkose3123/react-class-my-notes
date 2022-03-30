import React from 'react'
import { useState } from "react";

//! Don’t call Hooks inside loops, conditions, or nested functions.
//! Don’t call Hooks from regular JavaScript functions.
//* Only call Hooks at the top level
//* Call Hooks from React function components.
//* Call Hooks from custom Hooks.
const UseStateComp = () => {
  const [count, setcount] = useState(0)
  const [age, setage] = useState(31)
  const [user, setuser] = useState({name:"Felix", age:"25", email:"ykose@gmail.com"})

  
  const increase = () => setcount(count + 1) //Alttakiyle aynı işlemi yapar buda diğer gösterim.
  const increaseAge = () => setage((age)=> age+1)
  const updateUser = () => setuser({...user,name:"yakup"})

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <h3>count:{count}</h3>
      <button onClick={increase}>INCREACE COUNT</button>
      <h3>count:{age}</h3>
      <button onClick={increaseAge}>INCREACE AGE</button>
      <h3>Name:{user.name}</h3>
      <h3>Age:{user.age}</h3>
      <h3>Email:{user.email}</h3>
      <button onClick={updateUser}>UPDATE USER</button>

      
    </div>
  )
}

export default UseStateComp
