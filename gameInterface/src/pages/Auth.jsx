import { useState, useContext } from 'react';
import "./auth.css";
import axios from "axios";
import { AuthContext } from '../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom';
import "./auth.css"

const Auth = () => {



  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [register, setRegister] = useState(false);
  const [nom , setNom] = useState('');

  const { login } = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext)
  const navigate= useNavigate() ;

  const registerUser = async () => {
    await axios.post("http://localhost:3000/players" , {
      username: username,
      email : email,
      passwordHash : password
      
    })
  }

  const registerMod = () => {
    setRegister(!register);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    await login(username, password);
    if(currentUser.decodedToken.isAdmin)
    navigate("/");
    else 
      navigate("/client")
    
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="glassmorphism-form">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password" />

        <button onClick={handleLogin}>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i> Google</div>
          <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
        </div>
      </form>
    </>
  );
};

export default Auth;