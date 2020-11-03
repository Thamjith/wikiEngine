import express from 'express'
const router = express.Router()

import {
    getArticles,
    getArticleById,
} from '../controller/articleController.js'

router.route('/').get(getArticles)

router.route('/:id').get(getArticleById)

export default router