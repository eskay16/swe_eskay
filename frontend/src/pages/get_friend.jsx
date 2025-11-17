import { useEffect, useState } from "react";

export function DisplayFriends() {
  const [friends, setFriends] = useState([]);
  async function getFriends() {
    const res = await fetch('http://localhost:4000/user/get-friend', {
      method: "GET",
      credentials: "include"
    });

    const data = await res.json();
    setFriends(data);

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

