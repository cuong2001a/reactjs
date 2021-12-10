import express from 'express'
import { addToCart, edit, listToCart,read, remove} from '../controller/cart'
const router = express.Router();
router.get('/cart',listToCart);
router.get('/cart/:id',read);
router.put('/cart/edit/:id',edit);
router.post('/cart',addToCart);
router.delete('/cart/delete/:id',remove)
module.exports = router;