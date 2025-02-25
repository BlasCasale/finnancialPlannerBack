import { Response, Request, NextFunction } from 'express'
import { mailRegex, nameRegex, passRegex, uuidRegex } from '../utils/regExp'
import { AuthRequest } from '../types'
import jwt from 'jsonwebtoken'

export const validateIdBody = (req: Request, _res: Response, next: NextFunction): void => {
  const { id } = req.body

  if (!id) throw new Error('Se debe enviar un ID para continuar.')

  if (typeof id !== 'string') throw new Error('Se debe enviar un dato de tipo string en el ID para poder continuar.')

  if (!uuidRegex.test(id)) throw new Error('El ID enviado no cumple con el formato UUID.')

  next()
}

export const validateUserNameQuery = (req: Request, _res: Response, next: NextFunction): void => {
  const { username } = req.query

  if (!username) throw new Error('Por favor envie el nombre de usuario para continuar.')

  if (typeof username !== 'string') throw new Error('Se debe enviar un tipo string en el nombre de usuario para paoder continuar.')

  if (!nameRegex.test(username)) throw new Error('El formato del nombre de usuario es una letra al comienzo y luego solo letras y/o números')

  next()
}

export const validateUserNameBody = (req: Request, _res: Response, next: NextFunction): void => {
  const { username } = req.body

  if (!username) throw new Error('Por favor envie el nombre de usuario para continuar.')

  if (typeof username !== 'string') throw new Error('Se debe enviar un tipo string en el nombre de usuario para poder continuar.')

  if (!nameRegex.test(username)) throw new Error('El formato del nombre de usuario es una letra al comienzo y luego solo letras y/o números')

  next()
}

export const validatePasswordBody = (req: Request, _res: Response, next: NextFunction): void => {
  const { password } = req.body

  if (!password) throw new Error('Por favor envie la contraseña para continuar.')

  if (typeof password !== 'string') throw new Error('Se debe enviar un tipo string en la contraseña para poder continuar.')

  if (!passRegex.test(password)) throw new Error('Se debe enviar una contraseña que comience con una letra, contenga al menos un número y un caracter especial.')

  next()
}

export const validateMailBody = (req: Request, _res: Response, next: NextFunction): void => {
  const { mail } = req.body

  if (!mail) throw new Error('Por favor envie el mail para continuar.')

  if (typeof mail !== 'string') throw new Error('Se debe enviar un tipo string en el mail para poder continuar.')

  if (!mailRegex.test(mail)) throw new Error('Se debe enviar un mail en el formato estipulado para los mismos.')

  next()
}

export const verifyToken = (req: AuthRequest, _res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.split(' ')[1]

  if (!token) throw new Error('Se debe enviar un token para continuar.')

  try {
    const SECRET_TOKEN = process.env.SECRET_TOKEN || 'defaultExpression'

    jwt.verify(token, SECRET_TOKEN)

    next()
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}

export const verifyTokenQuery = (req: Request, _res: Response, next: NextFunction): void => {
  const token = req.query.token as string

  if (!token) throw new Error('Se debe enviar un token para continuar.')

  try {
    const SECRET_TOKEN = process.env.SECRET_TOKEN || 'defaultExpression'

    jwt.verify(token, SECRET_TOKEN)

    next()
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
