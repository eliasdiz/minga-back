import mongoose from "mongoose"

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, requered: true }
},{
    timestamps: true
})

let User = mongoose.model('users', schema)


export default User