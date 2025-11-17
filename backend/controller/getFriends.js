import { getUserFriends } from "../db.js";


export function getFriends(req, res){

    getUserFriends(req, (err, response)=>{
        if(err){
            return res.status(400).json(err);
        }

        return res.status(200).json(response);
    });
}