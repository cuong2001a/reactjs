import Category from '../models/category'
export const create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Khong them duoc danh muc"
            })
        }
        res.json({ data })
    })
}
export const list = (req, res) => {
    Category.find((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Khong tim thay san pham"
            })
        } else {
            res.json(data)
        }
    })
}
export const findOneCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const result = await Category.findById({ _id: categoryId })
        res.json(result)
    } catch (err) {
        console.log(err);
        res.status(400).json({
            errors: "Khong tim thay danh muc"
        })
    }
}
export const remove = async (req, res) => {
    const { categoryId } = req.params;
    console.log(categoryId);
    try {
        let remove = await Category.findByIdAndRemove({ _id: categoryId })
        res.json({
            remove,
            message: "Danh muc duoc xoa thanh cong"
        })
    } catch (error) {
        res.status(400).json({
            errors: "Khong xoa duoc danh muc"
        })
    }
}
export const edit = async (req, res) => {
    const { categoryId } = req.params
    console.log(categoryId)
    const updates = req.body;
    const options = { new: true }
    try {
        const edit = await Category.findByIdAndUpdate({ _id: categoryId }, updates, options)
        res.send(edit);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong sua duoc danh muc"
        })
    }

}