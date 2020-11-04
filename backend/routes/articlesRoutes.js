import express from 'express'
const router = express.Router()

import {
    getArticles,
    getArticleCount,
    getArticleById,
} from '../controller/articleController.js'

router.route('/').get(getArticles)

router.route('/count').get(getArticleCount)

router.route('/:id').get(getArticleById)

export default router