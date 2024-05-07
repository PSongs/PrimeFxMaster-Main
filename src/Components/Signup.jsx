import React, { useEffect } from 'react';
import "../Components/signup.css";
import { useMyContext } from './Mycontext';
import LOGO from "../assets/NAV.png"
import { Link } from 'react-router-dom';
import { Home } from './Home';

const Signup = () => {
  const { toggleNavbarVisibility } = useMyContext(); // Destructure toggleNavbarVisibility from context

  useEffect(() => {
    // Call toggleNavbarVisibility to set the navbar state to false when the component mounts
    toggleNavbarVisibility(false);
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <div>
      <div className='Signup-Hero'>
        <div className='Singup-Container'>
          <div className="Form-Container">
            <div className='Logo-BackHome'>
              <img className='Logo' src={LOGO}></img>
              <div className='Back'>
                <Link to="/">Back Home</Link>
              </div>
            </div>

            <div className='Login-to'>
              <h3>Sign Up to PrimeFxmargins</h3>
            </div>

            <form className='Contact-Form'>
              <div className='form-group'>
                <p className='P'>Full Name</p>
                <input type='text'name='name' placeholder='Enter Name' required></input>

                <p className='P2'>Email</p>
                <input type='email'name='email' placeholder='Enter Email' required></input>

                <p className='P2'>Password</p>
                <input type='password'name='password' placeholder='Password' required></input>

                <button className='Btn' type='submit'>Create an Account</button>
              </div>
            </form>

            <div className='OR'>
              <div className='Dash'></div>
              <p>OR</p>
              <div className='Dash'></div>
            </div>

            <button className='Btn2' type='submit'>Sign up with Google</button>

            <div className='Policy'>
              <h5>By proceeding, you agree to our <Link>Terms and Privacy Policy</Link></h5>
              <h5>Already have an Account? <Link to="/login">Login</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
