import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

import {
    getArticles,
    getArticleCount,
    getArticleById,
    articleCreate,
    getArticleByUserId,
    updateArticleById
} from '../controller/articleController.js'

router.route('/').get(getArticles)

router.route('/create').post(articleCreate)

router.route('/count').get(getArticleCount)

router.route('/update/:id').put(protect, updateArticleById)

router.route('/:id/articles').get(getArticleByUserId)

router.route('/:id').get(getArticleById)

export default router