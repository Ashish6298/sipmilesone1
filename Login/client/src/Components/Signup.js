import React from 'react'
import "./login.css"

const Login = () => {

    const loginwithgoogle = ()=>{
        window.open("http://localhost:6005/auth/google/callback","_self")
    }
  return (
    <>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Signup</h1>
            <div className="form">
                <form className='login-form'>
                    <input type="text" name="" id="" placeholder='email' />
                    <input type="password" name="" id="" placeholder='password'  />
                    <button>Login</button>
                    <p className='message'>Not Registerd? <a href="/Signup">Create an account</a></p>
                </form>
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    SignUp In With Google
                </button>
            </div>
        </div>
    </>
  )
}

export default Login