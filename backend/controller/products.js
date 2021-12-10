import Product from '../models/product'
import _ from 'lodash';
export const create = (req, res) => {
    // console.log(req.body)
    let product = new Product(req.body);
    console.log(product);
    product.save((err, data) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                errors: "Khong them duoc san pham"
            })
        }
        const { name, price, description } = product;
        if (!name || !price || !description) {
            return res.status(400).json({
                error: "Ban can nhap du thong tin"
            })
        }
        res.json(data);

    })

}
export const findOneProduct = async (req, res) => {
    const { productId } = req.params
    console.log("ID: ", req.params.productId)

    try {
        const result = await Product.findById({ _id: productId })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong co san pham"
        })
    }

}

// export const productById = (req, res, next, id) => {
//     Product.findById(id).exec((err, product) => {
//         if (err || !product) {
//             res.status(400).json({
//                 error: 'Khong tim thay san pham'
//             })
//         }
//         req.product = product;
//         next();
//     })
// }
// export const read = (req, res) => {
//     console.log(product);
//     return res.json(req.product)
// }

export const remove = async (req, res) => {
    const { productId } = req.params;
    console.log(productId);
    try {
        const remove = await Product.findByIdAndRemove({ _id: productId })

        res.json({
            remove,
            message: "San pham duoc xoa thanh cong"
        });

    } catch (error) {
        res.status(400).json({
            errors: "Khong xoa duoc san pham"
        })
    }

}
export const edit = async (req, res) => {
    const { productId } = req.params
    const updates = req.body;
    console.log(req.body);
    const options = { new: true }
    console.log(productId);
    try {
        const edit = await Product.findByIdAndUpdate({ _id: productId }, updates, options)
        res.send(edit);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            errors: "Khong sua duoc san pham"
        })
    }

}
export const list = (req, res) => {
    const price = parseInt(req.query.price);
    const a = price ? 0 : -1
    Product.find({})
        .sort({
            price: a
        })
        .populate("category") .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Khong tim thay san pham"
                })

            }
            res.json(data)
        })

}

export const listRelated = (req, res) => {
    Product.find({
        _id: { $ne: req.product },
        category: req.product.category
    })
        .populate("category", "_id name",)
        .exec((err, products) => {
            if (err) {
                res.status(400).json({
                    error: "Products not found"
                })
            }
            res.json(products)
        })
}

    export const search = (req, res) => {
        let name_like = req.query.name_like ? req.query.name_like : "";
        // console.log(name_like);
        Product.find({
            "name": { $regex: `${name_like}`, $options: '$i' }
        }).exec((err, products) => {
            if (err) {
                res.status(400).json({
                    error: "Product not found"
                })
            }
            res.json(products)
        })

    // const getPeerSuggestions = async (req, res, next) => {

    //     const { search } = req.query;
    //     const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
    //     const searchRgx = rgx(search);
      
    //     const peers = await User.find({
    //       $or: [
    //         { name: { $regex: searchRgx, $options: "i" } },
    //         { email: { $regex: searchRgx, $options: "i" } },
    //       ],
    //     })
    //       .limit(5)
    //       .catch(next);
      
    //     res.json(peers);
    //   };
}
export const findByCategoryId = (req,res)=>{
    const {categoryId}= req.params
    Product.find({
        "category": categoryId
    })
    .populate("category")
    .exec((err,data)=>{
        if(err){
            console.log(err)
        }
        res.json(data)
    })
}