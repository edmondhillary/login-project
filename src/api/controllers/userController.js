import * as usersRepo from '../repositories/userRepo.js';

async function getAllUsers (req, res){
    try{
        const users = await usersRepo.getAllUsers()
        res.json(users);

    }
    catch(error){
        return res.status(error.status || 500).json(err.message)
    }
}

async function updateUser(req,res){
    const {id} = req.params;
    const fieldsToUpdate = req.body;
    try{

        const userUpdated = await usersRepo.updateUser({id, fieldsToUpdate})
        return res.json(userUpdated)
    }
    catch(error){   
        return res.status(error.status || 500).json(error.message)
    }

}

async function deleteUser(req,res){
    const {id} = req.params;
    try{
        const deletedUser = await usersRepo.deleteUserById({id})
        res.write(`User: ${deletedUser.firstName + ' '+ deletedUser.lastName}  has been deleted`);
        res.end();
    }
    catch(error){
        return res.status(error.status || 500).json(error.message)
    }
}

export {getAllUsers, updateUser, deleteUser}