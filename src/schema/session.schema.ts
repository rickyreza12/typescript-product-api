import { FilterQuery, UpdateQuery } from 'mongoose'
import {object, string} from 'zod'
import SessionModel, { SessionDocument } from '../models/session.model'

export const createSesionSchema = object({
    body: object({
        email: string({
            required_error: 'Email is required'
        }),
        password: string({
            required_error: 'Password is Require'
        })
    })
})

