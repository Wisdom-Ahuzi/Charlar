import React, { useRef } from "react";
import { v4 as uuidV4 } from "uuid";
import "../Styles/Login.scss";
export const Login = ({ setUserId }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(inputRef.current.value);
  };
  const handleNewId = () => {
    setUserId(uuidV4());
  };
  return (
    <main className="login-Container">
      <section className="left-Side-Container">
        <div className="inner-Left-Side-Container">
          <span className="span-One-Container">
            <span>
              <img
                src={require("../Assets/charlarLogo.jpg")}
                alt="Logo"
                title="Logo"
              />
              <small>Charlar</small>
            </span>
          </span>
          <div className="middle-Container">
            <h1>
              We've been using Charlar to kick start every new project and can't
              imagine working without it.
            </h1>
            <span className="developer-Container">
              <img
                src={require("../Assets/developer.JPG")}
                alt="Developer"
                title="Developer"
              />
              <p>Wisdom Ahuzi</p>
              <small>Project Head</small>
            </span>
          </div>
          <div className="copyright-Container">
            <span className="copyrights">
              <span>&#169;</span>
              <small>Charlar Ch 2025</small>
            </span>
          </div>
        </div>
      </section>
      <section className="right-Side-Container">
        <div className="inner-Right-Side-Container">
          <img
            src={require("../Assets/charlarLogo.jpg")}
            alt="Logo"
            title="Logo"
          />
          <div className="sign-Container">
            <h3>Sign in</h3>
            <p>Welcome back! Please enter your Id.</p>
          </div>
          <form className="id-Container" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Id"
              required={true}
              ref={inputRef}
            />
            <button type="submit" onClick={handleSubmit}>
              Sign In
            </button>
          </form>
          <div className="create-Id">
            <p>
              Don't have an Id? <span onClick={handleNewId}>Create Id.</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
