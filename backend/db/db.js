const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ansh:hLHXHqzXDbs07a5c@cluster0.33yhny1.mongodb.net/todo")


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