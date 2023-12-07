const express = require('express')
const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    loginUser,
    joinGroupUser,
    getGroupsJoined
} = require('../controllers/userController')
const router = express.Router()

//GET all users
router.get('/', getUsers)
//GET a single user
router.get('/:id', getUser)
//POST a new user
router.post('/', createUser)
//DELETE a user
router.delete('/:id', deleteUser)
//UPDATE a user
router.patch('/:id', updateUser)
//LOGIN a user
router.post('/login',loginUser)
//JOIN GROUP for a user
router.post('/joinGroup/:userId/:groupId',joinGroupUser)
//GET groups of a user
router.get('/getGroups/:userId', getGroupsJoined)


module.exports = router