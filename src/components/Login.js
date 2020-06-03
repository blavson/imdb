import React from 'react'

export default function Login() {
  return (
    <div className="container">
      <input type="email" name="email" required/>
      <input type="password" name="password" required />
      <button className="waves-effect waves-light btn-large">Log In</button>
    </div>
  )
}
