const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.DB_URL)


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'todo'
    }]
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    tag: String,
    completed: {
        type: Boolean,
        default: false
    }
})


const User = mongoose.model('user', userSchema)
const Todo = mongoose.model('todo', todoSchema)




module.exports = {
    User,
    Todo
}