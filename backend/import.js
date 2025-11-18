export { detailsValidators, friendValidator, signUpValidators, validators } from './validation/validator.js';
export { Signup } from './controller/signup.js';
export { loginTheUser } from './controller/login.js';
export { personalDetails } from './controller/PersonalDetails.js';
export { jwtMiddleware } from './auth/jwtMiddleWare.js';
export {default as addNewFriend} from './controller/addFriend.js';
export { getFriends } from './controller/getFriends.js';