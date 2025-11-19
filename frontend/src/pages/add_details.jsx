import { useState } from "react";

export function AddDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("m");
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/user/add-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, age, email, gender }),
      credentials: "include",
    });

    const data = await res.json();
    setResponse(data);
      
    } catch (err) {
      console.log("Submission failed: ",err.message);
    }
    
  };

  const handleFirstName = (e)=>{
    setFirstName(e.target.value);
  }
  const handleLastName = (e)=>{
    setLastName(e.target.value);
  }
  const handleAge = (e)=>{
    setAge(e.target.value);
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handleGender = (e)=>{
    setGender(e.target.value);
  }
  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="First name"
          onChange={handleFirstName}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={handleLastName}
          value={lastName}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={handleAge}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />
        <select value={gender} onChange={handleGender}>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
        <button type="submit">Add Details</button>
      </form>

      <p>
        {response?.message} <a href="/add_friend">Add friends</a>
      </p>
    </>
  );
}
