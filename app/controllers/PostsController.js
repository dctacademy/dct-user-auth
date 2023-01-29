const Post = require('../models/Post')

module.exports.list = (req, res) => {
    Post.find({ user: req.user._id })
        .then(posts => res.json(posts))
}

module.exports.create = (req, res) => {
    const body = req.body
    const post = new Post(body)
    post.user = req.user._id
    post.save()
        .then(post => res.json(post))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Post.findOne({
        user: req.user._id,
        _id: id
    }).then(post => {
        if (!post) {
            res.json({})
        }
        res.json(post)
    })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Post.findOneAndUpdate({ user: req.user._id, _id: id }, { $set: body }, { new: true, runValidators: true })
        .then(post => {
            if (!post) {
                res.json({})
            }
            res.json(post)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Post.findOneAndDelete({ user: req.user._id, _id: id })
        .then(post => {
            if (!post) {
                res.json({})
            }
            res.json(post)
        })
}