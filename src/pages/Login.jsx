import React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './login.css';

const Login = () => {
  return (
    <div className='wrapper'>
        <div className="form-box login">
            <form action=''>
                <h1>Login</h1>
                <div className="input-box">
                    <input type='email' 
                    placeholder='Email' required />
                </div>
                <div className="input-box">
                    <input type='password' 
                    placeholder='Password' required />
                </div>

                <div className="button-div">
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
               
                <div className="links">
                    <div className="prem-services-link">
                        <h7>Don't have an account yet?</h7>
                        <ArrowCircleRightIcon className='right-arrow' />
                        <a href='#'>Learn more about our premium services.</a>
                    </div>
                    <div className="forgot-password-link">
                        <h7>Forgot your password?</h7>
                        <ArrowCircleRightIcon className='right-arrow' />
                        <a href='#'>Click here.</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Login