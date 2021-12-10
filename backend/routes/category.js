import express from 'express'
import { requireSignin, isAuth, isAdmin } from '../controller/auth';

import { create, edit, findOneCategory, list, remove } from '../controller/category'
import { findUserByID } from "../controller/user";
const router = express.Router();

router.post('/category/create', create)
router.get('/category', list)
router.get('/category/:categoryId', findOneCategory);
router.delete('/category/:categoryId', remove)
router.put('/category/:categoryId', edit);
router.param("userId", findUserByID)
module.exports = router;