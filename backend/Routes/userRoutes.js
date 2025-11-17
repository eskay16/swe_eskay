import express from 'express';
import { detailsValidators, friendValidator, signUpValidators, validators } from '../validation/validator.js';
import { Signup } from '../controller/signup.js';
import { loginTheUser } from '../controller/login.js';
import { personalDetails } from '../controller/PersonalDetails.js';
import { jwtMiddleware } from '../auth/jwtMiddleWare.js';
import addNewFriend from '../controller/addFriend.js';
import { getFriends } from '../controller/getFriends.js';

const userRoutes = express.Router();
userRoutes.post('/signup', validators(signUpValidators), Signup);
userRoutes.post('/login', validators(signUpValidators), loginTheUser);

//-------------------------
//    Protected routes
//-------------------------

userRoutes.post('/add-details', jwtMiddleware, validators(detailsValidators), personalDetails);

userRoutes.post('/add-friend', jwtMiddleware, validators(friendValidator), addNewFriend);

userRoutes.get('/get-friend', jwtMiddleware, getFriends);
export default userRoutes;
