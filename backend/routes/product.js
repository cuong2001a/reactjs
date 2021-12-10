import express from "express"
import { requireSignin, isAuth, isAdmin } from "../controller/auth";
import { edit, list, create, remove, findOneProduct, sortPriceAscending, sortPriceDecrease, search, findByCategoryId } from "../controller/products";
import { findUserByID } from "../controller/user";

const router = express.Router();
router.get('/productDetail/:productId',findOneProduct)
router.get('/products', list)
router.post('/products/create', create)
router.get('/products/:categoryId', findByCategoryId)
router.delete('/products/:productId', remove)
router.put("/products/:productId", edit)
router.get("/products/search", requireSignin, isAuth, isAdmin, search);
router.param("userId", findUserByID);

module.exports = router;