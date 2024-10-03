const express = require('express')
const postController = require('../controllers/postCtrl')
const postRouter = express.Router()

postRouter.post('/api/v1/post/create-post', postController.post)
postRouter.get('/api/v1/post/list-all', postController.listAllPost)
postRouter.get('/api/v1/post/list-one/:_id', postController.listOne)
postRouter.get('/api/v1/post/list-by-author/:_id', postController.listByAuthor)
postRouter.put('/api/v1/post/edit-post', postController.editPost)
postRouter.delete('/api/v1/post/delete-post/:_id',postController.deletePost)
module.exports = postRouter