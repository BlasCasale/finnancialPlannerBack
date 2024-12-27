import { Router } from 'express'
import { getUserByUsernameHandler } from '../handler/getUserByUsernameHandler'
import { validatePasswordQuery, validateUserNameQuery } from '../middleware/middlewareUser'

export const userRouter = Router()

userRouter.get('/', [validatePasswordQuery, validateUserNameQuery], getUserByUsernameHandler)
