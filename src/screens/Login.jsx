import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: credentials.password,
        email: credentials.email,
      }),
    });
    setcredentials({
      email: "",
      password: "",
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      navigate("/");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group m-3">
            <label className="mb-1 " htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={onChange}
              name="email"
              value={credentials.email}
            />
          </div>
          <div className="form-group m-3">
            <label className="mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={onChange}
              name="password"
              value={credentials.password}
            />
          </div>

          <button type="submit" className=" m-3 btn btn-primary m-3">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn  btn-danger">
            Create New Account
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
