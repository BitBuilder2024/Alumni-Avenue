const Group = require('../models/groupModel')
const mongoose = require('mongoose')
// get all groups
const getGroups = async(req, res) =>{
    const groups = await Group.find({}).sort({createdAt: -1})

    res.status(200).json(groups)
}
// get a single groups
const getGroup = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such group"})
    }

    const group = await Group.findById(id)
    if(!group){
        return res.status(404).json({error: "No such group"})
    }

    res.status(200).json(group)
}
// create a new groups
const createGroup = async (req,res)=>{
    const {groupName, groupDetails, password, peopleCount, peopleInGroup,profilePicture} = req.body

    //add doc to db
    try {
        const group = await Group.create({groupName, groupDetails, password, peopleCount, peopleInGroup,profilePicture})
        res.status(200).json(group)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//delete a group
const deleteGroup = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such group"})
    }

    const group = await Group.findOneAndDelete({_id: id})

    if(!group){
        return res.status(404).json({error: "No such group"})
    }

    res.status(200).json(group)
}
//update a group
const updateGroup = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such group"})
    }

    const group = await Group.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!group) {
        return res.status(400).json({error: 'No such group'})
    }

    res.status(200).json(group)

}
// Remove someone from a group
const removeFromGroup = async (req, res) => {
    const { groupId, userId } = req.params;

    try {
        // Validate group and user IDs
        if (!mongoose.Types.ObjectId.isValid(groupId) || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid group or user ID' });
        }

        // Find the group by ID
        const group = await Group.findById(groupId);

        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }

        // Check if the user is in the group
        if (!group.peopleInGroup.includes(userId)) {
            return res.status(400).json({ error: 'User is not in the group' });
        }

        // Remove user from the group
        group.peopleInGroup = group.peopleInGroup.filter(memberId => memberId !== userId);
        group.peopleCount = group.peopleCount -1;

        // Save the updated group
        const updatedGroup = await group.save();

        res.status(200).json(updatedGroup);
    } catch (error) {
        console.error('Error removing user from group:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
//add someone to a group
const addToGroup = async (req, res) => {
    const { groupId, userId } = req.params;
  
    try {
      // Validate group and user IDs
      if (!mongoose.Types.ObjectId.isValid(groupId) || !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid group or user ID' });
      }
  
      // Find the group by ID
      const group = await Group.findById(groupId);
  
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
  
      // Check if the user is already in the group
      if (group.peopleInGroup.includes(userId)) {
        return res.status(400).json({ error: 'User is already in the group' });
      }
  
      // Add user to the group
      group.peopleInGroup.push(userId);
  
      // Save the updated group
      const updatedGroup = await group.save();
  
      res.status(200).json(updatedGroup);
    } catch (error) {
      console.error('Error adding user to group:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


module.exports = {
    createGroup,
    getGroup,
    getGroups,
    deleteGroup,
    updateGroup,
    addToGroup,
    removeFromGroup
}