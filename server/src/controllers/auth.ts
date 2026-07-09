import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import User from '../models/User'
import { generateToken, generateVerificationToken } from '../utils/generateToken'
import { AppError } from '../middleware/errorHandler'
import crypto from 'crypto'

function handleValidation(req: Request): void {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const messages = errors.array().map((e) => e.msg)
    throw new AppError(messages.join('; '), 400)
  }
}

export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    handleValidation(req)

    const { name, username, email, password } = req.body

    const existingEmail = await User.findOne({ email })
    if (existingEmail) {
      throw new AppError('Email already registered', 409)
    }

    const existingUsername = await User.findOne({ username })
    if (existingUsername) {
      throw new AppError('Username already taken', 409)
    }

    const verificationToken = generateVerificationToken()

    const user = await User.create({
      name,
      username,
      email,
      password,
      verificationToken,
      verificationTokenExpires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    })

    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    })

    res.status(201).json({
      status: 'success',
      message: 'Account created. Please verify your email.',
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture,
        bio: user.bio,
        emailVerified: user.emailVerified,
        role: user.role,
      },
    })
  } catch (error) {
    next(error)
  }
}

export async function login(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    handleValidation(req)

    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      throw new AppError('Invalid email or password', 401)
    }

    if (user.accountStatus === 'suspended') {
      throw new AppError('Account has been suspended', 403)
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      throw new AppError('Invalid email or password', 401)
    }

    user.lastLogin = new Date()
    await user.save()

    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    })

    res.json({
      status: 'success',
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture,
        bio: user.bio,
        emailVerified: user.emailVerified,
        role: user.role,
        readingGoal: user.readingGoal,
        favoriteGenres: user.favoriteGenres,
        favoriteAuthors: user.favoriteAuthors,
      },
    })
  } catch (error) {
    next(error)
  }
}

export async function verifyEmail(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { token } = req.params

    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpires: { $gt: new Date() },
    })

    if (!user) {
      throw new AppError('Invalid or expired verification token', 400)
    }

    user.emailVerified = true
    user.verificationToken = undefined
    user.verificationTokenExpires = undefined
    await user.save()

    res.json({ status: 'success', message: 'Email verified successfully' })
  } catch (error) {
    next(error)
  }
}

export async function resendVerification(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      throw new AppError('No account found with this email', 404)
    }

    if (user.emailVerified) {
      throw new AppError('Email already verified', 400)
    }

    const verificationToken = generateVerificationToken()
    user.verificationToken = verificationToken
    user.verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    await user.save()

    res.json({ status: 'success', message: 'Verification email sent' })
  } catch (error) {
    next(error)
  }
}

export async function forgotPassword(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    handleValidation(req)

    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      res.json({
        status: 'success',
        message: 'If an account exists with this email, a reset link has been sent',
      })
      return
    }

    const resetToken = crypto.randomBytes(32).toString('hex')
    user.resetPasswordToken = resetToken
    user.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000)
    await user.save()

    res.json({
      status: 'success',
      message: 'If an account exists with this email, a reset link has been sent',
    })
  } catch (error) {
    next(error)
  }
}

export async function resetPassword(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    handleValidation(req)

    const { token } = req.params
    const { password } = req.body

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() },
    })

    if (!user) {
      throw new AppError('Invalid or expired reset token', 400)
    }

    user.password = password
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()

    res.json({ status: 'success', message: 'Password reset successfully' })
  } catch (error) {
    next(error)
  }
}

export async function getMe(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await User.findById(req.user!.userId)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    res.json({
      status: 'success',
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture,
        bio: user.bio,
        favoriteGenres: user.favoriteGenres,
        favoriteAuthors: user.favoriteAuthors,
        readingGoal: user.readingGoal,
        readingPreferences: user.readingPreferences,
        followers: user.followers.length,
        following: user.following.length,
        reviewsCount: user.reviewsCount,
        booksRead: user.booksRead,
        emailVerified: user.emailVerified,
        role: user.role,
        createdAt: (user as any).createdAt,
      },
    })
  } catch (error) {
    next(error)
  }
}

export async function updateProfile(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    handleValidation(req)

    const allowedFields = [
      'name', 'bio', 'favoriteGenres', 'favoriteAuthors',
      'readingGoal', 'readingPreferences',
    ]

    const updates: Record<string, unknown> = {}
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field]
      }
    }

    const user = await User.findByIdAndUpdate(
      req.user!.userId,
      { $set: updates },
      { new: true, runValidators: true },
    )

    if (!user) {
      throw new AppError('User not found', 404)
    }

    res.json({ status: 'success', user })
  } catch (error) {
    next(error)
  }
}

export async function changePassword(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    handleValidation(req)

    const { currentPassword, newPassword } = req.body

    const user = await User.findById(req.user!.userId).select('+password')
    if (!user) {
      throw new AppError('User not found', 404)
    }

    const isMatch = await user.comparePassword(currentPassword)
    if (!isMatch) {
      throw new AppError('Current password is incorrect', 401)
    }

    user.password = newPassword
    await user.save()

    res.json({ status: 'success', message: 'Password changed successfully' })
  } catch (error) {
    next(error)
  }
}

export async function uploadAvatar(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    if (!req.file) {
      throw new AppError('No image file provided', 400)
    }

    const imageUrl = `/uploads/${req.file.filename}`

    const user = await User.findByIdAndUpdate(
      req.user!.userId,
      { profilePicture: imageUrl },
      { new: true },
    )

    res.json({ status: 'success', profilePicture: imageUrl })
  } catch (error) {
    next(error)
  }
}

export async function deleteAccount(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await User.findByIdAndUpdate(req.user!.userId, {
      accountStatus: 'deleted',
    })

    res.json({ status: 'success', message: 'Account deleted' })
  } catch (error) {
    next(error)
  }
}

export async function getPublicProfile(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await User.findOne({
      username: req.params.username,
      accountStatus: 'active',
    })

    if (!user) {
      throw new AppError('User not found', 404)
    }

    res.json({
      status: 'success',
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        profilePicture: user.profilePicture,
        bio: user.bio,
        favoriteGenres: user.favoriteGenres,
        favoriteAuthors: user.favoriteAuthors,
        followers: user.followers.length,
        following: user.following.length,
        reviewsCount: user.reviewsCount,
        booksRead: user.booksRead,
      },
    })
  } catch (error) {
    next(error)
  }
}
