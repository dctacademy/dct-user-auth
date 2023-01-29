const Note = require('../models/Note')

module.exports.list = (req, res) => {
    Note.find({ user: req.user._id })
        .then(notes => res.json(notes))
}

module.exports.create = (req, res) => {
    const body = req.body
    const note = new Note(body)
    note.user = req.user._id
    note.save()
        .then(note => res.json(note))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Note.findOne({
        user: req.user._id,
        _id: id
    }).then(note => {
        if (!note) {
            res.json({})
        }
        res.json(note)
    })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Note.findOneAndUpdate({ user: req.user._id, _id: id }, { $set: body }, { new: true, runValidators: true })
        .then(note => {
            if (!note) {
                res.json({})
            }
            res.json(note)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Note.findOneAndDelete({ user: req.user._id, _id: id })
        .then(note => {
            if (!note) {
                res.json({})
            }
            res.json(note)
        })
}