const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            default: 'Description goes here....'
        },
        image: {
            type: String,
            default: 'https://via.placeholder.com/250'
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)