import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Article from '../models/articlesModel.js'

router.get('/', asyncHandler(async (req, res) => {
    const articles = await Article.find({})
    res.json(articles)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)

    if(article){
        res.json(article)
    }else{
        res.status(404).json({message:"Article not found"})
    }
}))

export default router