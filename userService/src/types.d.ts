import { Request } from 'express'

export interface UserType {
  id: string
  username: string
  mail: string
  password: string
  isVerified: boolean
  destroy: () => Promise<void>
  update: (data: Partial<Omit<'id' | 'destroy' | 'update'>>) => Promise<void>
}

export type ReponseUser = Pick<UserType, 'id' | 'username' | 'mail'>

export interface AuthResponse {
  user: ResponseUser
  token: string
}

export type UserPasswordType = Omit<UserType, 'username' | 'mail' | 'isVerified' | 'destroy'>

export interface AuthRequest extends Request {
  user?: UserType
}
