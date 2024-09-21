import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div class="login-container">
        <h2>Login</h2>
        <form action="www.google.com">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required autoComplete="off"/>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required autoComplete="off"/>
            </div>
            <button onClick={()=>{
              alert("Login Successfully")
            }} type="submit">Login</button>
        </form>
    </div>
    </>
  )
}

export default App;
