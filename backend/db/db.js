const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ansharora3839:g68W8vbEth9POW2M@cluster0.qrpua6t.mongodb.net/todo")


const userSchema = mongoose.Schema({
    username: String,
    password: String
})


const User = mongoose.model('user', userSchema)



module.exports = {
    User
}