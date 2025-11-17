import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation()
  console.log(location.state.message)

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpToDb(userName, password);

  }

  async function signUpToDb(userName, password) {
    const res = await fetch('http://localhost:4000/user/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userName, password }),
      credentials: "include"

    })

    const data = await res.json()
    setResponse(data);

    if (data.success) {
      navigate('/add_details');
    }

  } return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", rowGap: "7px" }}>
        <input type="text" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} />

        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button href="/add_details" type="submit">Submit</button>
      </form>

      {/* <p>{response?.message}</p> */}
      <a href="/">Sign up here</a>
    </>
  );
}
