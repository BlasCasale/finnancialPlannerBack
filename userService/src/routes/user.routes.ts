import { Router } from 'express'
import { getUserByUsernameHandler } from '../handler/getUserByUsernameHandler'
import { validateIdQuery, validateMailBody, validatePasswordBody, validatePasswordQuery, validateUserNameBody, validateUserNameQuery } from '../middleware/middlewareUser'
import { createUserHandler } from '../handler/createUserHandler'
import { validateUserHandler } from '../handler/validateUserHandler'

export const userRouter = Router()

userRouter.get('/getByUsername', [validatePasswordQuery, validateUserNameQuery], getUserByUsernameHandler)
userRouter.post('/createUser', [validatePasswordBody, validateMailBody, validateUserNameBody], createUserHandler)
userRouter.get('/validateUser', validateIdQuery, validateUserHandler)

export default userRouter
