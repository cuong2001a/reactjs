import Cart from '../models/cart';

export const addToCart = (req,res) =>{
    let cart = new Cart(req.body);
    cart.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors:"Khong them duoc vào gio hang"
            })
        }
        res.json(data)
    })

}
export const listToCart = (req,res) =>{
    Cart.find((err,data)=>{
        if(err){
            return res.status(400).json({
                error: "Khong tim thay gio hang"
            })
        }else{
            res.json(data)
        }
    })
}
export const read = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Cart.findById({ _id: id })
        res.json(result)
    } catch (err) {
        console.log(err);
        res.status(400).json({
            errors: "Khong tim thay đơn hàng"
        })
    }
}
export const edit = async (req, res) => {
    const { id } = req.params
    const updates = req.body;
    const options = { new: true }
    try {
        const edit = await Cart.findByIdAndUpdate({ _id: id }, updates, options)
        res.send(edit);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong sua duoc đơn hàng"
        })
    }

}
export const remove = async (req, res) => {
    const { id } = req.params;
    try {
        let remove = await Cart.findByIdAndRemove({ _id: id })
        res.json({
            remove,
            message: "Đơn hàng duoc xoa thanh cong"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            errors: "Khong xoa duoc đơn hàng"
        })
    }
}