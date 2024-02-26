import { useState } from "react";
import "../styles/Create_Account.css";
import { useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import { getApiUrl } from "../utils/utils";

function CreateAccount() {
  const navigate = useNavigate();

  function Signup() {
    if (!data.email || !data.name || !data.password) {
      seterr("No field can be empty");
      return;
    }

    axios
      .post(getApiUrl() + "/register_user", data)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        seterr(err.response.data);
      });
  }

  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const [err, seterr] = useState("");

  return (
    <div className="container_c">
      <h1>Create Account</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={onChange}
        value={data["name"]}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={onChange}
        value={data["email"]}
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
        {/* </input> */}
      </label>
      <button onClick={Signup}>Sign Up</button>

      <p>
        Already have an account? <a href="/Login">Login</a>
      </p>
      <label style={{ color: "red", textAlign: "center" }}>{err}</label>
    </div>
  );
}

export default CreateAccount;
