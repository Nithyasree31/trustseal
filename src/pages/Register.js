export default function Register() {
  return (
    <div className="page">
      <div className="container register-box">
        <h2>Register</h2>

        <input type="text" placeholder="Name" />

        <br/>
        <input type="email" placeholder="Email" /><br/>
        <input type="password" placeholder="Password" />

        <button>Create Account</button>

        <p>
          <a href="/">Already have an account? Login</a>
        </p>
      </div>
    </div>
  );
}