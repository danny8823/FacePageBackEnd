const express = require('express')
const commentControl = require('../controllers/commentCtrl')
const commentRouter = express.Router()

commentRouter.post('/api/v1/comment/post-comment', commentControl.postComment)

commentRouter.delete('/api/v1/comment/del-comment', commentControl.deleteComment)

commentRouter.get('/api/v1/comment/list-comments-by-post', commentControl.listCommentsByPost)
module.exports = commentRouter