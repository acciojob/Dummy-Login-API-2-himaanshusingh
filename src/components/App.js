import React, { useState } from "react";
import "../styles/App.css";

const userData = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "12",
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "1234",
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456",
  },
];

const App = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ emailErr: "", passwordErr: "" });
  const { email, password } = user;
  const { emailErr, passwordErr } = error;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password)
      return setError({ ...error, emailErr: "All fields are mandatory *" });
    const existedUser = userData.find((user) => user.email === email);
    setTimeout(function () {
      if (existedUser) {
        if (existedUser.password === password) console.log(userData);
        else setError({ ...error, passwordErr: "Password Incorrect" });
      } else setError({ ...error, emailErr: "User not found" });
    }, 3000);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError({ emailErr: "", passwordErr: "" });
  }

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} value={email} id="input-email" />
        <p className="error" id="user-error">{emailErr}</p>
        <input name="password" onChange={handleChange} value={password} id="input-password" />
        <p className="error" id="password-error">{passwordErr}</p>
        <button id="submit-form-btn">Submit</button>
      </form>
    </div>
  ); // prettier-ignore
};

export default App;
