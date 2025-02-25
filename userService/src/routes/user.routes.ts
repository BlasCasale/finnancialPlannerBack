import { Router } from 'express'
import { getUserByUsernameHandler } from '../handler/getUserByUsernameHandler'
import { validateIdBody, validateMailBody, validatePasswordBody, validateUserNameBody, verifyToken, verifyTokenQuery } from '../middleware/middlewareUser'
import { createUserHandler } from '../handler/createUserHandler'
import { validateUserHandler } from '../handler/validateUserHandler'
import { updatePasswordHandler } from '../handler/updatePasswordHandler'
import { getUserByMailHandler } from '../handler/getUserByMailHandler'
import { deleteUserHandler } from '../handler/deleteUserHandler'

export const userRouter = Router()

userRouter.post('/getByUsername', [verifyToken, validatePasswordBody, validateUserNameBody], getUserByUsernameHandler)
userRouter.post('/getByMail', [verifyToken, validatePasswordBody, validateMailBody], getUserByMailHandler)
userRouter.post('/createUser', [validatePasswordBody, validateMailBody, validateUserNameBody], createUserHandler)
userRouter.get('/validateUser', verifyTokenQuery, validateUserHandler)
userRouter.put('/updatePasswordUser', [verifyToken, validatePasswordBody, validateIdBody], updatePasswordHandler)
userRouter.delete('/deleteUser', [verifyToken, validateIdBody, validatePasswordBody], deleteUserHandler)

export default userRouter
