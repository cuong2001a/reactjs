import express, { Router } from 'express'
const router = express.Router();

import { signin, signout, signup,list, findOneUser, edit, requireSignin, isAuth, isAdmin } from '../controller/auth';
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout)
router.get('/user',list)
router.get('/user/:userId',findOneUser);
router.put('user/:userId',requireSignin,isAuth,isAdmin,edit)
module.exports = router;