import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation()
  console.log(location.state.message)

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:4000/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, password }),
        credentials: "include"

      })

      const data = await res.json()
      // setResponse(data);

      if (data.success) {
        navigate('/add_details');
      }

    } catch (err) {
      console.log("Failed to login: ", err.message);
    }


  }

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", rowGap: "7px" }}>
        <input type="text" placeholder="username" value={userName} onChange={handleUserName} />

        <input type="password" placeholder="password" value={password} onChange={handlePassword} />
        <button href="/add_details" type="submit">Submit</button>
      </form>

      {/* <p>{response?.message}</p> */}
      <a href="/">Sign up here</a>
    </>
  );
}
