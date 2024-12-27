import { UserFunc } from '../Model/User'
import { db } from './db'

export const User = UserFunc(db)
