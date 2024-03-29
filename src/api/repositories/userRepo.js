import userModel from "../models/userSchema.js";
import { Types } from "mongoose";
const { ObjectId } = Types;

async function insert({ email, password, firstName, lastName, role }) {
  const user = await userModel.create({ email, password, firstName, lastName, role });
  return user;
}

async function getByEmail({ email }) {
  const user = await userModel.findOne({ email });
  return user;
}

async function getAllUsers() {
  const users = await userModel.find({});
  return users;
}

async function updateUser({ id, fieldsToUpdate }) {
  const query = { _id: new ObjectId(id) };
  const updateBody = { $set: fieldsToUpdate };

  const userToUpdate = await userModel.findOneAndUpdate(query, updateBody, {
    new: true,
  });
  return userToUpdate;
}

async function deleteUserById({ id }) {
  const query = { _id: new ObjectId(id) };
  const deletedUser = await userModel.findOneAndDelete(query);
  return deletedUser;
}

export { insert, getAllUsers, getByEmail, updateUser, deleteUserById };
