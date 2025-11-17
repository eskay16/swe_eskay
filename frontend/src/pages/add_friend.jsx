import { useState } from "react";

export function AddFriend (){
    const [friendName, setFriendName] = useState('');
    const [friendTag, setFriendTag] = useState('');
    const [response, setResponse] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        addNewFriend(friendName, friendTag);
    }

    async function addNewFriend(friendName, friendTag) {
        const res = await fetch('http://localhost:4000/user/add-friend', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({friendName, friendTag}),
            credentials: "include"

        });

        setResponse(await res.json());

        
    }  

    return(
        <>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", rowGap: "10px"}}>
                <input type="text" placeholder="friend Name" value={friendName} onChange={(e)=> setFriendName(e.target.value)}/>
                <input type="text" placeholder="friend Tag" value={friendTag} onChange={(e) => setFriendTag(e.target.value)}/>
                <button type="submit"> Add Friend</button>
            </form>

            <p>{response?.success}</p>
            <a href="/get_friend">Get all friends</a>
        </>
    );  
}