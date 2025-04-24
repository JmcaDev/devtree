import mongoose, { Schema } from "mongoose";

interface IUser {
    handle: string
    name: string,
    email: string,
    password: string
}

//Schemas
const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        unique:true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
})

//Models
const User = mongoose.model<IUser>("User", userSchema)
export default User