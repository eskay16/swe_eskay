import { useEffect, useState } from "react";

export function DisplayFriends() {
  const [friends, setFriends] = useState([]);
  async function getFriends() {
    try {
      const res = await fetch('http://localhost:4000/user/get-friend', {
      method: "GET",
      credentials: "include"
    });

    const data = await res.json();
    setFriends(data);

    } catch (err) {
      console.log("Failed to get friends: ", err.message);
    }
    
  }
  useEffect(() => {
    getFriends();
  }, []);
  return (
    <>
      <h1>Your friends</h1>
      {friends.map((people, index) => {
        return (
          <div key={index}>
            <p>Name: {people.friendName} |    Tag: {people.friendTag}</p>
          </div>
        );
      })}
    </>
  );
}

