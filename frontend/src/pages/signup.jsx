import React, { useState } from "react";

function Signup(){
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const [response, setResponse] = useState(null);
const handleSubmit = (e)=>{
    e.preventDefault();
    signUpToDb(userName, password);
}

async function signUpToDb(userName, password){
    const res = await fetch('http://localhost:4000/user/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userName, password})
    })

    setResponse(await res.json());

}
    return(
    <div>
        <h1>Sign up </h1>
        <form style={{display: "flex", flexDirection: "column", rowGap: "7px"}} onSubmit={handleSubmit}> 
            <input placeholder="username" type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}></input>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} ></input>
            <button type="submit">Submit</button> 

        </form>

        <p>{ response? response.message : ''}</p>
        <a href="/login">Login here</a>

        
    </div>
    );
}

export default Signup;