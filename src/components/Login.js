import '../App.css';
import pogo from '../image/admin-img.png';

function Login() {
  return (
    <div className="register-container">
    <div className="card">
      <div className="left-panel">
        <img src={pogo} alt="Background" className="background-image" />
      </div>
      <div className="right-panel">
        <h2>Log In to Admin Panel</h2>
        <p>Enter your email id and password below</p>
        <form>
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" placeholder="Enter your email id" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Log In</button>
        </form>
        <p className="already">Don’t have an account? <a href="/">Register</a></p>
      </div>
      </div>
    </div>
  );
}

export default Login;


