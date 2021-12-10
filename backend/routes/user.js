import express from 'express'
import { isAdmin, isAuth, requireSignin } from '../controller/auth';
import { findUserByID, list, read, update } from '../controller/user';
const router = express.Router();
router.get('/user',list);
router.get('/user/:userId',read);
router.put('/user/:userId',requireSignin,isAuth,isAdmin,update);
router.param('userId',findUserByID);
module.exports = router;