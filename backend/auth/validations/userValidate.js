import z from "zod"

const usernameSchema = z.string().min(3).max(20)
const passwordSchema = z.string().min(6)

const formSchema = z.object({
    username: usernameSchema,
    password: passwordSchema
})

export default {
    formSchema
}