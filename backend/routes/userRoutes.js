import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

import {
    authUser,
    registerUser,
    updateUserProfile
} from '../controller/userController.js'

router.post('/login', authUser)

router.route('/').post(registerUser)

router
  .route('/profile')
  .put(protect, updateUserProfile)

export default router