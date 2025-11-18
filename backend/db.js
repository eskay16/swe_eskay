import sqlite3 from "sqlite3";
import dotenv from "dotenv";

dotenv.config();
const dbName = process.env.DATABASE_NAME;
sqlite3.verbose();

const db = new sqlite3.Database(dbName);

const createTable = `
    CREATE TABLE IF NOT EXISTS user(
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    firstName TEXT,
    lastName TEXT,
    age INTEGER,
    email TEXT,
    gender CHAR
    );

    CREATE TABLE IF NOT EXISTS friends(
    friend_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    friendName TEXT NOT NULL,
    friendTag TEXT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES user(user_id)
    );
`;

db.exec(createTable, (err) => {
  if (err) {
    console.log("err: ", err.message);
  } else {
    console.log("created sucessfully");
  }
});

const addNewUser = `
    INSERT INTO user (userName, password)
    VALUES(?, ?);
`;

export function CreateNewUser(userName, password, callback) {
  db.run(addNewUser, [userName, password], (err) => {
    if (err) {
      console.log("Unable to add to database", err.message);
      return callback({ message: err.message, status: false });
    }
    return callback({
      userName: userName,
      status: true,
    });
  });
}

export function loginUser(userName, callback) {
  const getUser = `
    SELECT * FROM user WHERE userName = ?
`;
  db.get(getUser, [userName], (err, row) => {
    if (err) {
      return callback("Login was unsuccessfull " + err.message);
    }
    return callback(null, row);
  });
}
function getUser(userName, callback) {
  const getUser = `
    SELECT * FROM user WHERE userName = ?
`;
  db.get(getUser, [userName], (err, row) => {
    if (err) {
      return callback("Login was unsuccessfull " + err.message);
    }
    return callback(null, row);
  });
}


export function insertDetails(req, callback) {
  const user_id = req.user.user_id;
  const { firstName, lastName, age, email, gender } = req.body;
  const personalDetails = `
    UPDATE user
    SET firstName = ?,
        lastName =  ?,
        age = ?,
        email = ?,
        gender = ?
    WHERE 
        user_id = ?;
    `;

  db.run(
    personalDetails,
    [firstName, lastName, age, email, gender, user_id],
    (err) => {
      if (err) {
        return callback({
          message: "Details did not add successfully " + err.message,
          status: false,
        });
      }
      return callback({
        message: "successful insertion",
        status: true,
      });
    }
  );
}

export function addFriend(req, callback) {
  const { user_id } = req.user;
  const { friendName, friendTag } = req.body;

  const addNewFriend = `
    INSERT INTO friends (user_id, friendName, friendTag)
    VALUES(?, ?, ?);
`;

  db.run(addNewFriend, [user_id, friendName, friendTag], (err) => {
    if (err) {
      return callback({ message: `Login was unsuccessfull  + ${err.message}` }, null);
    }
    return callback(null, { success: "friends added sucessfully" });
  });
}

export function getUserFriends(req, callback) {
  const { user_id } = req.user;
  const retrieveFriends = `
    SELECT 
      friendName,
      friendTag
    FROM
      friends
    JOIN user ON user.user_id = friends.user_id
    WHERE user.user_id =?;  
    `;

  db.all(retrieveFriends, [user_id], (err, row) => {

    if (err) {
      return callback(err, null);
    }

    return callback(null, row);
  });


}
