import User from '../models/User'

export const getAllUsers = () => User.find()

export const getUserById = id => User.findById(id)

export const createUser = data => (new User(data)).save()

export const updateUser = (id, data) => User.findByIdAndUpdate(id, data)

export const removeUser = id => User.deleteOne(id)
