import User from '../models/auth';

export const findUserByID = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err | !user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user
        next();
    })
}
export const list = (req, res) => {
    User.find({})
        .populate("cartId").exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Khong tim thay user"
                })
            }
            res.json(data);
        })
}
export const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
}
export const update = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.profile.id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not author to perform in action"
                })
            }
            user.hashed_password = undefined;
            user.salt = undefined;
            res.json(user);
        }
    )
}