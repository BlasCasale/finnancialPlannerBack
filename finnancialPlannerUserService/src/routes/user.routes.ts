import { Router } from 'express'
import { getUserByUsernameHandler } from '../handler/getUserByUsernameHandler'
import { validateMailBody, validatePasswordBody, validatePasswordQuery, validateUserNameBody, validateUserNameQuery } from '../middleware/middlewareUser'
import { createUserHandler } from '../handler/createUserHandler'

export const userRouter = Router()

userRouter.get('/getByUsername', [validatePasswordQuery, validateUserNameQuery], getUserByUsernameHandler)
userRouter.post('/createUser', [validatePasswordBody, validateMailBody, validateUserNameBody], createUserHandler)

export default userRouter
