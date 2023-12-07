const express = require('express')
const {
    createGroup,
    getGroups,
    getGroup,
    deleteGroup,
    updateGroup,
    addToGroup
} = require('../controllers/groupController')
const router = express.Router()

//get all groups
router.get('/', getGroups)
//get single group
router.get('/:id', getGroup)
//post a new group
router.post('/', createGroup)
//delete a group
router.delete('/:id', deleteGroup)
//update a group
router.patch('/:id', updateGroup)
//add user to group
router.patch('/:groupId/:userId',addToGroup)

module.exports = router