import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container login-box">
        
        <h1>Trust Seal</h1>   {/* 👈 Added this */}

        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/dashboard")}>
          Login
        </button>

        <p onClick={() => navigate("/register")} className="link">
          New user? Register
        </p>

      </div>
    </div>
  );
}

export default Login;