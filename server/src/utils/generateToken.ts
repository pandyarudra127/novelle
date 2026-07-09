import jwt from 'jsonwebtoken'
import { env } from '../config/env'

interface TokenPayload {
  userId: string
  email: string
  role: string
}

export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, env.jwtSecret, {
    expiresIn: env.jwtExpires,
  } as jwt.SignOptions)
}

export function generateVerificationToken(): string {
  const crypto = require('crypto')
  return crypto.randomBytes(32).toString('hex')
}
