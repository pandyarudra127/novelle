import { Router } from 'express'
import { getHealth } from '../controllers/health'
import authRoutes from './auth'
import bookRoutes from './books'

const router = Router()

router.get('/health', getHealth)
router.use('/auth', authRoutes)
router.use('/books', bookRoutes)

export default router
