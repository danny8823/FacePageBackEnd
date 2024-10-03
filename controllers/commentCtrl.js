const asyncHandler = require('express-async-handler')
const Comment = require('../model/CommentModel')
const Post = require('../model/PostModel')
const User = require('../model/UserModel')

const commentControl = {
    postComment : asyncHandler(async(req,res) => {
        const {comment,postId,authorId} = req.body
        if(!comment || !postId || !authorId) {
            res.json({
                error: 'Please fill out all fields'
            })
        }

        const commentAuthor = await User.findById(authorId)
        const thePost = await Post.findById(postId)

        const newComment = await Comment.create({
            comment,
            post: postId,
            author: authorId
        })

        
        res.json({
            message: 'Comment posted',
            newComment,
            author: commentAuthor,
            post: thePost
        })
    }),
    deleteComment: asyncHandler(async(req,res) => {
        const {id} = req.body

        if(!id) {
            res.json({
                error: 'Please fill out all fields'            
            })
        }

        const commentToBeDel = await Comment.findByIdAndDelete(id)

        res.json({
            message: 'This has been deleted',
            commentToBeDel
        })
    }),
    listCommentsByPost: asyncHandler(async(req,res) => {
        const {_id} = req.query
        
        if(!_id) {
            res.json({
                error: 'Please fill out all fields'
            })
        }

        const commentsByPost = await Comment.find({ 
            post: _id
        }).populate('author')

        res.send(commentsByPost)

    })
}

module.exports = commentControl