import { Response, Request, NextFunction } from 'express'
import { mailRegex, nameRegex, passRegex, uuidRegex } from '../utils/regExp'

export const validateIdBody = (req: Request, _res: Response, next: NextFunction): void => {
  const { id } = req.body

  if (!id) throw new Error('Se debe enviar un ID para continuar.')

  if (typeof id !== 'string') throw new Error('Se debe enviar un dato de tipo string en el ID para poder continuar.')

  if (!uuidRegex.test(id)) throw new Error('El ID enviado no cumple con el formato UUID.')

  next()
}

export const validateIdQuery = (req: Request, _res: Response, next: NextFunction): void => {
  const id = req.query.id as string

  if (!id) throw new Error('Se debe enviar un ID para continuar.')

  if (typeof id !== 'string') throw new Error('Se debe enviar un dato de tipo string en ID para poder continuar.')

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

export const validatePasswordQuery = (req: Request, _res: Response, next: NextFunction): void => {
  const { password } = req.query

  if (!password) throw new Error('Por favor envie la contraseña para continuar.')

  if (typeof password !== 'string') throw new Error('Se debe enviar un tipo string en la contraseña para poder continuar.')

  if (!passRegex.test(password)) throw new Error('Se debe enviar una contraseña que comience con una letra, contenga al menos un número y un caracter especial.')

  next()
}

export const validatePasswordBody = (req: Request, _res: Response, next: NextFunction): void => {
  const { password } = req.body

  if (!password) throw new Error('Por favor envie la contraseña para continuar.')

  if (typeof password !== 'string') throw new Error('Se debe enviar un tipo string en la contraseña para poder continuar.')

  if (!passRegex.test(password)) throw new Error('Se debe enviar una contraseña que comience con una letra, contenga al menos un número y un caracter especial.')

  next()
}

export const validateMailQuery = (req: Request, _res: Response, next: NextFunction): void => {
  const { mail } = req.query

  if (!mail) throw new Error('Por favor envie el mail para continuar.')

  if (typeof mail !== 'string') throw new Error('Se debe enviar un tipo string en el mail para poder continuar.')

  if (!mailRegex.test(mail)) throw new Error('Se debe enviar un mail en el formato estipulado para los mismos.')

  next()
}

export const validateMailBody = (req: Request, _res: Response, next: NextFunction): void => {
  const { mail } = req.body

  if (!mail) throw new Error('Por favor envie el mail para continuar.')

  if (typeof mail !== 'string') throw new Error('Se debe enviar un tipo string en el mail para poder continuar.')

  if (!mailRegex.test(mail)) throw new Error('Se debe enviar un mail en el formato estipulado para los mismos.')

  next()
}
