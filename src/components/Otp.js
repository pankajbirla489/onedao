import './Otp.css';
import pogo from '../image/admin-img.png';
import { useNavigate } from 'react-router-dom';


function Otp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/login');  
  };
  return (
    <div className="register-container">
    <div className="card">

   
      <div className="left-panel">
        <img src={pogo} alt="Background" className="background-image" />
      </div>
      <div className="right-panel">
        <h2>Verify your email</h2>
        <p>Enter the OTP from your register email id</p>
        <form onSubmit={handleSubmit}> 
          <div class="otp-field">
            <input type="text" maxlength="1"/>
            <input type="text" maxlength="1"/>
            <input type="text" maxlength="1"/>
            <input type="text" maxlength="1"/>
            <input type="text" maxlength="1"/>
            <input type="text" maxlength="1"/>
          </div>
          <button type="submit">Proceed</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Otp;


