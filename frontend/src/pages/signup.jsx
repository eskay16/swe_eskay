import { useState } from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);
  const handleUserName = (e) => {
    setUserName(e.target.value);
  }
  const handlePassword = (e) => {
    //password length
    //presence of special chars
    //presence capital letters
    setPassword(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/user/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, password })
      })

      const data = await res.json()
      if (data.ok)
        setResponse(data);

    } catch (err) {
      //show warning
      //redirect somewhere else 
      //inform that somethign went wrong try again later
      console.log("Failed to signup: ", err.message);
    }
  }


  return (
    <div>
      <h1>Sign up </h1>
      <form style={{ display: "flex", flexDirection: "column", rowGap: "7px" }} onSubmit={handleSubmit}>
        <input placeholder="username" type="text" onChange={handleUserName} value={userName}></input>
        <input type="password" placeholder="password" onChange={handlePassword} value={password} ></input>
        <button type="submit">Submit</button>
      </form>

      <p>{response ? response.message : ''}</p>
      <NavLink to="/login" state={{ message: "Hello fucking world" }}> Login</NavLink>

    </div>
  );
}

export default Signup;
