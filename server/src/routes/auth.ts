import { Router } from 'express'
import {
  register,
  login,
  verifyEmail,
  resendVerification,
  forgotPassword,
  resetPassword,
  getMe,
  updateProfile,
  changePassword,
  uploadAvatar,
  deleteAccount,
  getPublicProfile,
} from '../controllers/auth'
import { authenticate } from '../middleware/auth'
import {
  registerValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  updateProfileValidation,
  changePasswordValidation,
} from '../validators/auth'
import multer from 'multer'
import path from 'path'

const router = Router()

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'))
  },
  filename: (_req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, unique + '-' + file.originalname)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true)
    } else {
      cb(new Error('Only image files are allowed'))
    }
  },
})

router.post('/register', registerValidation, register)
router.post('/login', loginValidation, login)
router.get('/verify-email/:token', verifyEmail)
router.post('/resend-verification', resendVerification)
router.post('/forgot-password', forgotPasswordValidation, forgotPassword)
router.post('/reset-password/:token', resetPasswordValidation, resetPassword)

router.get('/me', authenticate, getMe)
router.patch('/profile', authenticate, updateProfileValidation, updateProfile)
router.post('/change-password', authenticate, changePasswordValidation, changePassword)
router.post('/avatar', authenticate, upload.single('avatar'), uploadAvatar)
router.delete('/account', authenticate, deleteAccount)

router.get('/profile/:username', getPublicProfile)

export default router
