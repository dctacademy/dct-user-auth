const express = require('express')
const router = express.Router() 
const postsController = require('../app/controllers/PostsController')
const notesController = require('../app/controllers/NotesController')
const { authenticateUser } = require('../app/middlewares/authentication')

// router.get('/posts', authenticateUser, postsController.list)
// router.post('/posts', authenticateUser, postsController.create)
// router.get('/posts/:id', authenticateUser, postsController.show)
// router.put('/posts/:id', authenticateUser, postsController.update)
// router.delete('/posts/:id', authenticateUser, postsController.destroy)


router.get('/api/notes', authenticateUser, notesController.list)
router.post('/api/notes', authenticateUser, notesController.create)
router.get('/api/notes/:id', authenticateUser, notesController.show)
router.put('/api/notes/:id', authenticateUser, notesController.update)
router.delete('/api/notes/:id', authenticateUser, notesController.destroy)


module.exports = router 