function Login() {
  return (
    <div className="warpper">
      <form action="">
        <h2>Login</h2>
        <div className="input-box">
          <input type="text" placeholder="Email-ID" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" />
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remember-me
          </label>
          <a href="#">Forget poassword?</a>
        </div>
        <div className="submit-btn">
          <button type="submit">Login</button>
        </div>
        <div className="register">
          <p>
            Don't have an account <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
