import { useState } from "react";

export function AddDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('m');
  const [response, setResponse] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    personalDetails(firstName, lastName, age, email, gender);
  }

  async function personalDetails(firstName, lastName, age, email, gender) {
    const res = await fetch('http://localhost:4000/user/add-details',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstName, lastName, age, email, gender }),
        credentials: "include"
      }

    );
    setResponse(await res.json());

  }
  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", rowGap: "10px" }} onSubmit={handleSubmit}>
        <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <input type="number" placeholder="age" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
        <button type="submit">Add Details</button>
      </form>

      <p>{response?.message} <a href="/add_friend">Add friends</a></p>
    </>
  );
}
