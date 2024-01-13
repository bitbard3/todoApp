const { z } = require("zod")

const usernameSchema = z.string().required().min(3).max(20)
const passwordSchema = z.string().required().min(6)

const formSchema = z.object({
    username: usernameSchema,
    password: passwordSchema
})

module.exports = {
    formSchema
}