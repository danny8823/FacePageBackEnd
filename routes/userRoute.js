const express = require('express')
const usersController = require('../controllers/usersCtrl')
const isAuth = require('../middlewares/authMiddleware')
const userRouter = express.Router()

userRouter.post('/api/v1/users/register', usersController.register)
userRouter.post('/api/v1/users/login', usersController.login)
userRouter.get('/api/v1/users/profile',usersController.profile)
userRouter.get('/api/v1/users/list-all',usersController.listAll)
userRouter.put('/api/v1/users/change-password',isAuth, usersController.changePassword)
userRouter.put('/api/v1/users/update-profile',isAuth, usersController.updateProfile)
userRouter.delete('/api/v1/users/delete-profile',isAuth, usersController.deleteAccount)

module.exports = userRouter