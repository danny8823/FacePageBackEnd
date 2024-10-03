const asyncHandler = require('express-async-handler')
const Post = require('../model/PostModel')
const CommentModel = require('../model/CommentModel')

const postController = {
    post: asyncHandler(async(req,res) => {

        const {title,author,dateTime, content,image} = req.body
        
        if(!title || !author || !dateTime || !content)  {
            throw new Error ("All fields are required to post")
        }

        const newPost = await Post.create({
            title,
            author,
            dateTime,
            content,
            image
        })

        res.json({
            message: 'Post created',
            newPost
        })
    }),
    listAllPost: asyncHandler(async(req,res) => {

        const allPosts = await Post.find().populate('author')
        
        res.json(allPosts)
    }),
    listByAuthor: asyncHandler(async(req,res) => {
        const {_id} = req.params
        if(!_id) {
            throw new Error('Need author id')
        }
        const allPostsByAuthor = await Post.find({
            author: _id
        })

        res.send(allPostsByAuthor)
    }),
    listOne: asyncHandler(async(req,res) => {
        const {_id} = req.params
        const post = await Post.findById(_id).populate('author')
        
        res.json({
            post
        })
    }),
    deletePost: asyncHandler(async(req,res) => {
        const postToDelete = await Post.findByIdAndDelete(_id)
        res.json({
            postToDelete,
            message: "Post deleted"
        })
    }),
    editPost: asyncHandler(async(req,res) => {
        const {id,newContent} = req.body
        try {
            const postToUpdate = await Post.findOneAndUpdate(
                {_id: id},
                {content: newContent},
                {new: true}
            )
            res.json({
                message: 'Update success',
                postToUpdate
            })
        } catch(err) {
            throw new Error(err.message)
        }
    })
}

module.exports = postController