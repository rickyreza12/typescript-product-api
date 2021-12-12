import {object, string, TypeOf} from 'zod'
import { createUser } from '../services/user.service'

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is required"
        }),
        password: string({
            required_error: "Password is required"
        }).min(6, "Password too short - should be 6 chars minimum"),
        passwordConfirmation: string({
            required_error: "passwordConfirmation is required"
        }),
        email: string({
            required_error: "Email is required",
        }).email('Not a valid Email'),
    }).refine((data)=> data.password === data.passwordConfirmation, {
        message: "Password does not match",
        path: ["passwordConfirmation"]
    })
})

export type CreateUserInput = Omit<
TypeOf<typeof createUserSchema>, 
"body.passwordConfirmation"
>;