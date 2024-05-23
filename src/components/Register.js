import '../App.css';
import pogo from '../image/admin-img.png';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/otp');  
  };
  return (
    <div className="register-container">
    <div className="card">

   
      <div className="left-panel">
        <img src={pogo} alt="Background" className="background-image" />
      </div>
      <div className="right-panel">
        <h2>Register to Admin Panel</h2>
        <p>Enter your phone number and password below</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" placeholder="Enter your email id" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter your confirm password" />
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="already">Already have an account? <a href="/login">Login</a></p>
      </div>
      </div>
    </div>
  );
}

export default Register;


