import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import { getApiUrl } from "../utils/utils";

function Login() {
  const navigate = useNavigate();
  function OnLogin() {
    if (!data.email || !data.password) {
      seterr("No field can be empty");
      return;
    }

    axios
      .post(getApiUrl() + "/login", data)
      .then((response) => {
        navigate("/connect");
      })
      .catch((err) => {
        seterr(err.response.data);
      });
  }

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    if (err) seterr("");

    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const [err, seterr] = useState("");
  return (
    <div className="container">
      <h1>Login to your account</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={data["email"]}
        onChange={onChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={onChange}
        value={data["password"]}
      />
      <label htmlFor="remember_me">
        <input type="checkbox" id="remember_me" name="remember_me" /> Remember
        Me
      </label>
      <button onClick={OnLogin}>Login</button>
      <p>
        New to MyApp? <a href="/">Sign Up</a>
      </p>
      <label style={{ color: "red", textAlign: "center" }}>{err}</label>
    </div>
  );
}

export default Login;
