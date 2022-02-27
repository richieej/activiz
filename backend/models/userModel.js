import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userId: String,
    username: String,
    admin: Boolean
})

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel