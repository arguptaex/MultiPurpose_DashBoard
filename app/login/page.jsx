// import React from "react";
import "@/components/login/login.css";

const LoginPage = () => {
  return (
    <section className="login-section">
      <div className="container">
        <form action="" className="login-form">
          <h1>Login</h1>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
