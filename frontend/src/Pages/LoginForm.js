import React, { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'

export default function LoginForm({login, error, history}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    localStorage.removeItem('token')
  }, [])
  
  const handleUsernameChange = event => setUsername(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    login(username, password, history)
  }

  return (
      <div className="login-background">
        <div className="login-form">
            <form onSubmit={handleSubmit}>
            <p className="login-form-header">Welcome To Fresh Cuts!</p>
            <h2>Sign In Here</h2>
            <label>Username: </label>
            <input name="username" value={username} onChange={handleUsernameChange} />
            <label>Password: </label>
            <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
            {error ? <p style={{color: 'red'}}>{error}</p> : null}
            <p>
                Don't Have A Login?
                <Link to='/signup'>Sign up!</Link>
            </p>
            <input type="submit" value="Login"/>
            </form>
        </div>
      </div>
  )
}
