import express from 'express';
import { addUser, detailsValidators, friendValidator, signUpValidators, validators, Signup, loginTheUser, personalDetails, jwtMiddleware, addNewFriend, getFriends, getUser, deleteUser } from '../import.js'

const userRoutes = express.Router();
userRoutes.post('/signup', validators(signUpValidators), Signup);
userRoutes.post('/login', validators(signUpValidators), loginTheUser);

//-------------------------
//    Protected routes
//-------------------------

userRoutes.post('/add-details', jwtMiddleware, validators(detailsValidators), personalDetails);

userRoutes.post('/add-friend', jwtMiddleware, validators(friendValidator), addNewFriend);

userRoutes.get('/get-friend', jwtMiddleware, getFriends);


userRoutes.post('/mongodb-add-friend', addUser)
userRoutes.get('/mongodb-get-friend', getUser)
userRoutes.post('/mongodb-delete-friend', deleteUser)
export default userRoutes;
