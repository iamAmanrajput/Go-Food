import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        password: credentials.password,
        email: credentials.email,
        location: credentials.geolocation,
      }),
    });
    setcredentials({
      name: "",
      email: "",
      password: "",
      geolocation: "",
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
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
            <label className="mb-1 " htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={onChange}
              name="name"
              value={credentials.name}
            />
          </div>
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
          <div className="form-group m-3">
            <label className="mb-1 " htmlFor="geolocation">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="geolocation"
              onChange={onChange}
              placeholder="Use current Address"
              name="geolocation"
              value={credentials.geolocation}
            />
          </div>

          <button type="submit" className=" m-3 btn btn-primary m-3">
            Submit
          </button>
          <Link to="/login" className="m-3 btn  btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
